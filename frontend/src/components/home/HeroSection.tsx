"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[600px] md:min-h-[680px] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating leaves */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] opacity-10"
        >
          <Leaf className="w-24 h-24 text-brand" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -15, 10], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-[15%] opacity-10"
        >
          <Leaf className="w-16 h-16 text-brand" />
        </motion.div>
        <motion.div
          animate={{ y: [-10, 20, -10], rotate: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-[20%] opacity-10"
        >
          <Leaf className="w-20 h-20 text-brand" />
        </motion.div>
        <motion.div
          animate={{ y: [15, -10, 15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-20 right-[25%] opacity-10"
        >
          <Leaf className="w-12 h-12 text-brand" />
        </motion.div>

        {/* Subtle gradient circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-brand relative z-10 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-green text-sm mb-6 inline-flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5" />
              B2B Wholesale Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1a1a1a] leading-tight mt-4 mb-6"
          >
            Partner with India&apos;s{" "}
            <span className="text-brand">Village Women</span>
            <br className="hidden sm:block" />
            <span className="block mt-2">
              Bulk Natural Products,{" "}
              <span className="text-brand">Direct from SHGs</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-info max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            100% chemical-free, preservative-free homemade food products — 
            cold-pressed oils, spices, atta, dal, ghee & more at wholesale
            prices. Every order empowers a village woman&apos;s livelihood.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/register"
              className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-brand/25"
            >
              Become a B2B Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="btn-secondary text-base px-8 py-3.5"
            >
              Browse Products
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-8 md:gap-12 text-sm text-info"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-brand">500+</p>
              <p className="text-xs mt-0.5">Women Artisans</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-brand">100+</p>
              <p className="text-xs mt-0.5">Products</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-brand">50+</p>
              <p className="text-xs mt-0.5">SHGs Partnered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
