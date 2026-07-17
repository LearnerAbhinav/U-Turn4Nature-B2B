"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Truck, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "user-plus": UserPlus,
  search: Search,
  truck: Truck,
};

export function HowItWorks() {
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
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-info max-w-lg mx-auto"
          >
            Start your wholesale partnership in three simple steps
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 relative">
          {/* Connecting lines (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-brand/20 via-brand to-brand/20" />

          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || UserPlus;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-brand-light mb-6 group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-info max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (mobile) */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="flex justify-center mt-6 md:hidden">
                    <ArrowRight className="w-5 h-5 text-brand/30 rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
