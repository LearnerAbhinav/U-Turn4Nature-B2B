"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FOOTER_LINKS } from "@/lib/constants";

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-surface">
      <div className="container-brand py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-border p-5 sticky top-24">
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">
                Policy Pages
              </h3>
              <nav className="space-y-1">
                {FOOTER_LINKS.policies.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      pathname === link.href
                        ? "bg-brand-light text-brand font-medium"
                        : "text-info hover:bg-surface"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 bg-white rounded-2xl border border-border p-6 md:p-10"
          >
            <div className="prose prose-sm max-w-none prose-headings:text-[#1a1a1a] prose-p:text-info prose-li:text-info prose-strong:text-[#1a1a1a] prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
