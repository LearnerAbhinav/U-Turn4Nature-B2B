"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
  IndianRupee,
  Link as LinkIcon,
  FileText,
  Package,
  Headphones,
} from "lucide-react";
import { WHY_US_FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  leaf: Leaf,
  heart: Heart,
  "indian-rupee": IndianRupee,
  link: LinkIcon,
  "file-text": FileText,
  package: Package,
  headphones: Headphones,
};

export function WhyUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-green text-xs mb-3 inline-block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Why U-Turn4Nature for Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-info max-w-xl mx-auto"
          >
            Partner with a brand that delivers quality, impact, and value —
            products your customers will love and trust
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_US_FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Leaf;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-surface hover:bg-white border border-transparent hover:border-brand/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-sm text-info leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
