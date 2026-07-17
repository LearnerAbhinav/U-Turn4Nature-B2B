"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Package,
  Truck,
  FileText,
} from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  leaf: Leaf,
  "heart-handshake": HeartHandshake,
  "shield-check": ShieldCheck,
  package: Package,
  truck: Truck,
  "file-text": FileText,
};

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-brand py-4 md:py-5">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10 lg:gap-14">
          {TRUST_BADGES.map((badge, index) => {
            const Icon = iconMap[badge.icon] || Leaf;
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-center gap-2 text-info"
              >
                <Icon className="w-4.5 h-4.5 text-brand flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
