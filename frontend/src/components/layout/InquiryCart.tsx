"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Trash2, ArrowRight } from "lucide-react";
import { useInquiryStore } from "@/stores/useInquiryStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import Link from "next/link";

export function InquiryCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const { items, removeItem, updateQuantity, clearCart, getTotalItems } = useInquiryStore();
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      setIsOpen(false);
      router.push("/login?redirect=cart");
      return;
    }

    setIsSubmitting(true);
    try {
      await api.submitInquiry({
        items: items.map(item => ({
          productId: item.productId,
          productName: item.product.name,
          quantity: item.quantity,
          unit: item.unit,
          notes: item.notes || ""
        }))
      });
      setSuccess(true);
      setTimeout(() => {
        clearCart();
        setSuccess(false);
        setIsOpen(false);
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      alert("Failed to submit quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-[#1a1a1a] hover:text-brand transition-colors"
        aria-label="Open Quote Cart"
      >
        <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
        {getTotalItems() > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 md:w-5 md:h-5 bg-brand text-white rounded-full text-[10px] md:text-xs flex items-center justify-center font-bold border-2 border-white">
            {getTotalItems()}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 bg-white border-b border-border">
                <h2 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-brand" />
                  Your Quote Request
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-surface rounded-full transition-colors text-info"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {success ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Quote Submitted!</h3>
                  <p className="text-info">We will review your requirements and get back to you shortly.</p>
                </div>
              ) : items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Your cart is empty</h3>
                  <p className="text-sm text-info mb-6">Browse our catalog to request wholesale quotes.</p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      router.push("/products");
                    }}
                    className="btn-primary py-2.5 px-6"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items.map((item) => (
                      <div key={item.productId} className="bg-white p-4 rounded-2xl border border-border flex gap-4">
                        <img 
                          src={item.product.images[0] || "https://img.clevup.in/378284/LOGOUT2AUG25-1754702859985.jpeg"} 
                          alt={item.product.name} 
                          className="w-20 h-20 object-cover rounded-xl bg-surface"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-[#1a1a1a] text-sm truncate">{item.product.name}</h4>
                          <p className="text-xs text-brand font-medium mt-1">₹{item.product.basePrice}/{item.product.unit}</p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-border rounded-lg bg-surface">
                              <button 
                                onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                                className="px-2 py-1 text-info hover:text-brand"
                              >
                                -
                              </button>
                              <span className="px-2 py-1 text-xs font-medium w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="px-2 py-1 text-info hover:text-brand"
                              >
                                +
                              </button>
                            </div>
                            <button 
                              onClick={() => removeItem(item.productId)}
                              className="p-1.5 text-error hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white border-t border-border p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3 text-base flex justify-center items-center disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : (
                        <>
                          {isAuthenticated ? "Submit Quote Request" : "Login to Submit Quote"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                    {!isAuthenticated && (
                      <p className="text-xs text-center text-info mt-3">
                        You need a partner account to submit wholesale quotes.
                      </p>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
