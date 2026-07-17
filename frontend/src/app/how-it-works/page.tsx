"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  UserPlus,
  Search,
  Truck,
  ArrowRight,
  CheckCircle,
  CreditCard,
  FileText,
  Clock,
  Shield,
  Package,
  RefreshCw,
  Headphones,
} from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Register as a B2B Partner",
    description:
      "Complete our registration form with your business details — company name, GSTIN, business type, contact info, and shipping address.",
    details: [
      "Takes under 5 minutes to complete",
      "GSTIN optional but recommended for tax benefits",
      "All business types welcome",
    ],
    color: "brand",
  },
  {
    step: 2,
    icon: Clock,
    title: "Application Review (24-48 hrs)",
    description:
      "Our B2B team reviews your application and verifies your business credentials. You'll receive a confirmation email once approved.",
    details: [
      "Typical approval within 24 hours",
      "Dedicated account manager assigned",
      "Credit limit assessment if applicable",
    ],
    color: "brand",
  },
  {
    step: 3,
    icon: Search,
    title: "Browse & Request Quotes",
    description:
      "Access our full wholesale catalog with tiered pricing. Add products to your inquiry cart and submit for a custom quote.",
    details: [
      "Transparent wholesale pricing tiers",
      "Custom quotes for large volumes",
      "Volume discount calculator available",
    ],
    color: "brand",
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Confirm Order & Pay",
    description:
      "Once you approve the quote, confirm your order and make payment via your preferred method — bank transfer, UPI, or credit terms.",
    details: [
      "Multiple payment options available",
      "Credit terms for established partners",
      "Advance, partial, or full payment",
    ],
    color: "brand",
  },
  {
    step: 5,
    icon: Truck,
    title: "Doorstep Delivery",
    description:
      "Your order is carefully packed by our SHG partners and dispatched to your doorstep with proper documentation and GST invoicing.",
    details: [
      "PAN India delivery",
      "Real-time order tracking",
      "GST invoice included",
    ],
    color: "brand",
  },
  {
    step: 6,
    icon: RefreshCw,
    title: "Reorder with Ease",
    description:
      "Enjoy seamless reordering from your partner dashboard. Quick reorder, order history, and dedicated support always available.",
    details: [
      "One-click reorder from past orders",
      "Volume-based loyalty benefits",
      "Priority support for partners",
    ],
    color: "brand",
  },
];

const paymentMethods = [
  { name: "Bank Transfer (NEFT/RTGS/IMPS)", desc: "Direct bank transfer to our business account" },
  { name: "UPI Payment", desc: "Quick payment via UPI for smaller orders" },
  { name: "Cheque / DD", desc: "For institutional and government buyers" },
  { name: "Credit Terms", desc: "Available for established partners (30/60/90 days)" },
];

const shippingInfo = [
  { icon: Truck, title: "PAN India Delivery", desc: "We deliver across all states and union territories" },
  { icon: Package, title: "Safe Packaging", desc: "Products are carefully packed to ensure quality during transit" },
  { icon: Clock, title: "Dispatch Time", desc: "Orders dispatched within 3-5 business days of confirmation" },
  { icon: FileText, title: "Documentation", desc: "GST invoice, delivery challan, and quality certificates included" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container-brand py-12 md:py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-green text-xs mb-4 inline-block"
          >
            Partnership Process
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4"
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-info max-w-2xl mx-auto"
          >
            From registration to repeat orders — your complete guide to
            partnering with U-Turn4Nature for wholesale natural products
          </motion.p>
        </div>
      </section>

      {/* Step by Step */}
      <section className="section-padding bg-surface">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-5">
                    {/* Step Number */}
                    <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-brand uppercase tracking-wider">
                          Step {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-info mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.details.map((detail, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-sm text-info"
                          >
                            <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="badge-green text-xs mb-3 inline-block">
              Payment Terms
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
              Payment Methods & Terms
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 bg-surface rounded-2xl border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-4 h-4 text-brand" />
                  <h3 className="font-semibold text-[#1a1a1a] text-sm">
                    {method.name}
                  </h3>
                </div>
                <p className="text-sm text-info">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section className="section-padding bg-surface">
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="badge-green text-xs mb-3 inline-block">
              Logistics
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
              Shipping & Delivery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {shippingInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 bg-white rounded-2xl border border-border text-center"
                >
                  <Icon className="w-8 h-8 text-brand mx-auto mb-3" />
                  <h3 className="font-semibold text-[#1a1a1a] text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-info leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-brand text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-8 h-8 text-brand" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-info mb-8">
              Join 1000+ businesses that trust U-Turn4Nature for their
              wholesale natural product needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="btn-primary text-base px-8 py-3.5">
                Register Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-3.5">
                Contact Sales Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
