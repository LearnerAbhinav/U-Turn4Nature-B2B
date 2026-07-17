import express from "express";
import { PrismaClient } from "@prisma/client";
import { protect } from "./auth";

const router = express.Router();
const prisma = new PrismaClient();

// Middleware to check if user is admin
const adminOnly = async (req: any, res: express.Response, next: express.NextFunction) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};

// @route   GET /api/admin/users
// @desc    Get all users/partners
router.get("/users", protect, adminOnly, async (req: any, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        companyName: true,
        contactPerson: true,
        email: true,
        phone: true,
        businessType: true,
        status: true,
        createdAt: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching users" });
  }
});

// @route   PUT /api/admin/users/:id/status
// @desc    Update user status (approve/reject)
router.put("/users/:id/status", protect, adminOnly, async (req: any, res) => {
  try {
    const { status } = req.body;
    
    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: { status },
      select: { id: true, companyName: true, status: true, email: true },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error updating status" });
  }
});

// @route   GET /api/admin/inquiries
// @desc    Get all inquiries from all users
router.get("/inquiries", protect, adminOnly, async (req: any, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { companyName: true, contactPerson: true, email: true, phone: true },
        },
        items: true,
      },
    });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching inquiries" });
  }
});

export default router;
