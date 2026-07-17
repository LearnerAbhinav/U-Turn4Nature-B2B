"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Package, Clock, CheckCircle, XCircle, FileText, ChevronRight, Leaf } from "lucide-react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/useAuthStore";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, checkAuth, logout } = useAuthStore();
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loadingInquiries, setLoadingInquiries] = useState(true);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries();
    }
  }, [isAuthenticated]);

  const fetchInquiries = async () => {
    try {
      const data = await api.getInquiries();
      setInquiries(data);
    } catch (error) {
      console.error("Failed to fetch inquiries:", error);
    } finally {
      setLoadingInquiries(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-brand text-white pt-24 pb-12">
        <div className="container-brand">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome, {user.companyName}</h1>
              <p className="text-white/80">Manage your quotes and orders</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.status === "approved" ? "bg-green-500/20 text-green-100 border border-green-500/30" :
                user.status === "rejected" ? "bg-red-500/20 text-red-100 border border-red-500/30" :
                "bg-yellow-500/20 text-yellow-100 border border-yellow-500/30"
              }`}>
                {user.status === "approved" && "Verified Partner"}
                {user.status === "pending" && "Account Pending Review"}
                {user.status === "rejected" && "Application Rejected"}
              </span>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-brand py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content - Inquiries */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Your Quotes & Inquiries</h2>
              <Link href="/products" className="text-sm text-brand font-medium hover:underline">
                New Quote
              </Link>
            </div>

            {loadingInquiries ? (
              <div className="bg-white rounded-3xl border border-border p-12 text-center">
                <div className="w-6 h-6 border-2 border-brand border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            ) : inquiries.length === 0 ? (
              <div className="bg-white rounded-3xl border border-border p-12 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-brand" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">No inquiries yet</h3>
                <p className="text-info text-sm max-w-sm mx-auto mb-6">
                  Browse our catalog and request a quote for the natural products you need.
                </p>
                <Link href="/products" className="btn-primary py-2.5 px-6 inline-flex">
                  Browse Catalog
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq: any) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={inq.id} 
                    className="bg-white border border-border rounded-2xl p-5 hover:border-brand/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-medium text-info">#{inq.id.slice(0, 8).toUpperCase()}</span>
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            inq.status === "pending" ? "bg-amber-50 text-amber-600 border border-amber-200" :
                            inq.status === "quoted" ? "bg-blue-50 text-blue-600 border border-blue-200" :
                            "bg-green-50 text-green-600 border border-green-200"
                          }`}>
                            {inq.status.charAt(0).toUpperCase() + inq.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-[#1a1a1a]">
                          Submitted on {new Date(inq.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-xs text-info mb-1">Total Items</p>
                        <p className="font-bold text-[#1a1a1a]">{inq.items.length}</p>
                      </div>
                    </div>

                    <div className="bg-surface rounded-xl p-4">
                      <p className="text-xs font-semibold text-info uppercase tracking-wider mb-3">Items Requested</p>
                      <div className="space-y-2">
                        {inq.items.slice(0, 3).map((item: any) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-[#1a1a1a] truncate pr-4">{item.productName}</span>
                            <span className="font-medium whitespace-nowrap">{item.quantity} units</span>
                          </div>
                        ))}
                        {inq.items.length > 3 && (
                          <p className="text-xs text-info mt-2 pt-2 border-t border-border">
                            +{inq.items.length - 3} more items
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-border p-6">
              <h3 className="font-bold text-[#1a1a1a] mb-4">Account Details</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-info text-xs mb-1">Company</p>
                  <p className="font-medium text-[#1a1a1a]">{user.companyName}</p>
                </div>
                <div>
                  <p className="text-info text-xs mb-1">Email</p>
                  <p className="font-medium text-[#1a1a1a]">{user.email}</p>
                </div>
                <div>
                  <p className="text-info text-xs mb-1">Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    {user.status === "approved" ? (
                      <><CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-green-700 font-medium">Approved</span></>
                    ) : user.status === "rejected" ? (
                      <><XCircle className="w-4 h-4 text-red-500" /> <span className="text-red-700 font-medium">Rejected</span></>
                    ) : (
                      <><Clock className="w-4 h-4 text-amber-500" /> <span className="text-amber-700 font-medium">Under Review</span></>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-light rounded-3xl border border-brand/20 p-6">
              <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5 text-brand" />
              </div>
              <h3 className="font-bold text-brand mb-2">Need assistance?</h3>
              <p className="text-sm text-brand/80 mb-4">
                Our B2B support team is ready to help with your wholesale requirements.
              </p>
              <a href="mailto:support@u-turn.in" className="btn-primary w-full py-2.5 text-sm">
                Contact Support
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
