"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { InquiryCart } from "./InquiryCart";
import { useAuthStore } from "@/stores/useAuthStore";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-brand text-white text-sm py-2 text-center font-medium overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap inline-block">
          <span className="mx-8">
            🌿 100% Natural Homemade Products by Village SHG Women
          </span>
          <span className="mx-8">
            📦 Wholesale Bulk Orders with GST Invoicing
          </span>
          <span className="mx-8">
            🚚 PAN India Delivery for B2B Partners
          </span>
          <span className="mx-8">
            🌿 100% Natural Homemade Products by Village SHG Women
          </span>
          <span className="mx-8">
            📦 Wholesale Bulk Orders with GST Invoicing
          </span>
          <span className="mx-8">
            🚚 PAN India Delivery for B2B Partners
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container-brand">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md group-hover:shadow-lg transition-shadow">
                U
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-[#1a1a1a] leading-tight">
                  U-Turn4Nature
                </span>
                <span className="text-xs text-info leading-tight">
                  Simply Homemade
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#1a1a1a] hover:text-brand rounded-lg hover:bg-brand-light transition-all duration-200 animated-underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <InquiryCart />
              {isAuthenticated ? (
                <Link
                  href={user?.role === "admin" ? "/admin" : "/dashboard"}
                  className="px-4 py-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    Partner Login
                  </Link>
                  <Link href="/register" className="btn-primary text-sm">
                    Register Now
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="flex lg:hidden items-center gap-2">
              <InquiryCart />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <nav className="container-brand py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-[#1a1a1a] hover:text-brand hover:bg-brand-light rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-4 mt-4 space-y-3 px-4">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center btn-secondary"
                  >
                    Partner Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center btn-primary"
                  >
                    Register Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
