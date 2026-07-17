"use client";

import { motion } from "framer-motion";
import {
  Store,
  UtensilsCrossed,
  Gift,
  Globe,
  Building2,
  Plane,
  Trees,
} from "lucide-react";
import { CUSTOMER_TYPES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  store: Store,
  utensils: UtensilsCrossed,
  gift: Gift,
  globe: Globe,
  "building-2": Building2,
  plane: Plane,
  trees: Trees,
};

export function CustomerTypes() {
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
            Who Can Partner
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Built for Every Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-info max-w-lg mx-auto"
          >
            Whether you&apos;re a small kirana store or a large export house, we
            have the right partnership for you
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CUSTOMER_TYPES.map((type, index) => {
            const Icon = iconMap[type.icon] || Store;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-white border border-border hover:border-brand/30 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-light/0 to-brand-light/0 group-hover:from-brand-light/30 group-hover:to-brand-light/60 transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-info leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
