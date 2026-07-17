import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const router = express.Router();
const prisma = new PrismaClient();

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";

// Helper for generating token
const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
};

// Middleware to protect routes
export const protect = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });
      if (user) {
        (req as any).user = user;
        next();
      } else {
        res.status(401).json({ message: "Not authorized, user not found" });
      }
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// @route   POST /api/auth/register
// @desc    Register a new B2B Partner
router.post("/register", async (req, res) => {
  try {
    const {
      companyName,
      gstin,
      businessType,
      yearsInBusiness,
      contactPerson,
      email,
      phone,
      whatsapp,
      street,
      city,
      state,
      pincode,
      estimatedVolume,
      paymentTerms,
    } = req.body;

    // Check if user already exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Hash a generated password (since we didn't ask for one in the form, 
    // let's create a dummy one for now, or assume the frontend sends one. 
    // For now we'll set a default one and they can change it later)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password || "UTurn@2026", salt);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        companyName,
        contactPerson,
        phone,
        whatsapp,
        gstin,
        businessType,
        yearsInBusiness: yearsInBusiness.toString(),
        street,
        city,
        state,
        pincode,
        estimatedVolume,
        paymentTerms,
      },
    });

    // Attempt to send email with Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "U-Turn4Nature <onboarding@resend.dev>", // replace with verified domain later
          to: user.email,
          subject: "Welcome to U-Turn4Nature B2B Platform",
          html: `<p>Hi ${user.contactPerson},</p>
                 <p>Thank you for registering <strong>${user.companyName}</strong> on the U-Turn4Nature wholesale platform.</p>
                 <p>Your application is currently under review by our team. We will get back to you within 24-48 hours regarding your account approval.</p>
                 <p>Best regards,<br>The U-Turn4Nature Team</p>`,
        });
      } catch (err) {
        console.error("Resend error:", err);
      }
    }

    res.status(201).json({
      _id: user.id,
      companyName: user.companyName,
      email: user.email,
      token: generateToken(user.id),
      message: "Registration successful. Pending approval.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate partner & get token
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        companyName: user.companyName,
        email: user.email,
        status: user.status,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// @route   GET /api/auth/me
// @desc    Get current logged in user
router.get("/me", protect, async (req: any, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: {
      id: true,
      email: true,
      companyName: true,
      contactPerson: true,
      status: true,
      businessType: true,
    },
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;
