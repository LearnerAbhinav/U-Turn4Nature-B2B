import express from "express";
import { PrismaClient } from "@prisma/client";
import { protect } from "./auth";

const router = express.Router();
const prisma = new PrismaClient();

// @route   POST /api/inquiries
// @desc    Submit a new quote request / inquiry
router.post("/", protect, async (req: any, res) => {
  try {
    const { items, notes } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in inquiry" });
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        userId: req.user.id,
        notes,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            unit: item.unit,
            notes: item.notes,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    const { Resend } = require("resend");
    const resend = new Resend(process.env.RESEND_API_KEY || "re_123");
    
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "U-Turn4Nature <quotes@resend.dev>",
          to: req.user.email,
          subject: `Quote Request Received - #${inquiry.id.slice(0,8).toUpperCase()}`,
          html: `<p>Hi ${req.user.contactPerson},</p>
                 <p>We have received your quote request for ${items.length} items.</p>
                 <p>Our sales team will review your requirements and provide pricing shortly.</p>
                 <p>Best regards,<br>The U-Turn4Nature Team</p>`,
        });
      } catch (err) {
        console.error("Resend error:", err);
      }
    }

    res.status(201).json(inquiry);
  } catch (error) {
    console.error("Create inquiry error:", error);
    res.status(500).json({ message: "Server error creating inquiry" });
  }
});

// @route   GET /api/inquiries
// @desc    Get all inquiries for logged in user
router.get("/", protect, async (req: any, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      where: { userId: req.user.id },
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(inquiries);
  } catch (error) {
    console.error("Fetch inquiries error:", error);
    res.status(500).json({ message: "Server error fetching inquiries" });
  }
});

export default router;
