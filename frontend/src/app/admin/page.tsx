"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { api } from "@/lib/api";
import {
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  ArrowRight,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, checkAuth, logout } = useAuthStore();
  
  const [activeTab, setActiveTab] = useState<"users" | "inquiries">("inquiries");
  const [users, setUsers] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login");
      } else if (user?.role !== "admin") {
        router.push("/dashboard");
      }
    }
  }, [isLoading, isAuthenticated, user, router]);

  useEffect(() => {
    if (isAuthenticated && user?.role === "admin") {
      fetchData();
    }
  }, [isAuthenticated, user]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [usersData, inquiriesData] = await Promise.all([
        api.getAdminUsers(),
        api.getAdminInquiries(),
      ]);
      setUsers(usersData);
      setInquiries(inquiriesData);
    } catch (error) {
      console.error("Failed to fetch admin data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserStatus = async (id: string, status: "pending" | "approved" | "rejected") => {
    try {
      await api.updateUserStatus(id, status);
      // Optimistic update
      setUsers(users.map((u) => (u.id === id ? { ...u, status } : u)));
    } catch (error) {
      alert("Failed to update user status");
    }
  };

  if (isLoading || !isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white pt-24 pb-12">
        <div className="container-brand">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-brand" />
                <span className="text-brand font-bold uppercase tracking-wider text-sm">
                  Admin Portal
                </span>
              </div>
              <h1 className="text-3xl font-bold">System Management</h1>
            </div>
            <button
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container-brand py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
              activeTab === "inquiries"
                ? "bg-brand text-white shadow-md"
                : "bg-white text-info border border-border hover:border-brand/30"
            }`}
          >
            <FileText className="w-5 h-5" />
            Quotes & Inquiries
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
              activeTab === "users"
                ? "bg-brand text-white shadow-md"
                : "bg-white text-info border border-border hover:border-brand/30"
            }`}
          >
            <Users className="w-5 h-5" />
            Partners
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm">
            {activeTab === "inquiries" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#1a1a1a]">Recent Inquiries</h2>
                {inquiries.length === 0 ? (
                  <p className="text-info text-center py-10">No inquiries found.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">ID</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Partner</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Items</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Date</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inquiries.map((inq) => (
                          <tr key={inq.id} className="border-b border-border hover:bg-surface/50 transition-colors">
                            <td className="py-4 px-4 text-sm font-medium text-info">
                              #{inq.id.slice(0, 8).toUpperCase()}
                            </td>
                            <td className="py-4 px-4">
                              <p className="text-sm font-semibold text-[#1a1a1a]">{inq.user.companyName}</p>
                              <p className="text-xs text-info">{inq.user.email}</p>
                            </td>
                            <td className="py-4 px-4 text-sm text-[#1a1a1a]">
                              {inq.items.length} items
                            </td>
                            <td className="py-4 px-4 text-sm text-info">
                              {new Date(inq.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-4">
                              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                inq.status === "pending" ? "bg-amber-50 text-amber-600 border border-amber-200" :
                                inq.status === "quoted" ? "bg-blue-50 text-blue-600 border border-blue-200" :
                                "bg-green-50 text-green-600 border border-green-200"
                              }`}>
                                {inq.status.toUpperCase()}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === "users" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#1a1a1a]">B2B Partners</h2>
                {users.length === 0 ? (
                  <p className="text-info text-center py-10">No users found.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Company</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Contact</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Type</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a]">Status</th>
                          <th className="py-3 px-4 font-semibold text-sm text-[#1a1a1a] text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((u) => (
                          <tr key={u.id} className="border-b border-border hover:bg-surface/50 transition-colors">
                            <td className="py-4 px-4">
                              <p className="text-sm font-semibold text-[#1a1a1a]">{u.companyName}</p>
                              <p className="text-xs text-info">{u.gstin || "No GSTIN"}</p>
                            </td>
                            <td className="py-4 px-4">
                              <p className="text-sm text-[#1a1a1a]">{u.contactPerson}</p>
                              <p className="text-xs text-info">{u.email}</p>
                              <p className="text-xs text-info">{u.phone}</p>
                            </td>
                            <td className="py-4 px-4 text-sm text-[#1a1a1a] capitalize">
                              {u.businessType.replace('_', ' ')}
                            </td>
                            <td className="py-4 px-4">
                              <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center w-fit gap-1 ${
                                u.status === "approved" ? "bg-green-50 text-green-600 border border-green-200" :
                                u.status === "rejected" ? "bg-red-50 text-red-600 border border-red-200" :
                                "bg-amber-50 text-amber-600 border border-amber-200"
                              }`}>
                                {u.status === "approved" && <CheckCircle className="w-3 h-3" />}
                                {u.status === "rejected" && <XCircle className="w-3 h-3" />}
                                {u.status === "pending" && <Clock className="w-3 h-3" />}
                                {u.status.toUpperCase()}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right">
                              {u.role !== "admin" && (
                                <div className="flex items-center justify-end gap-2">
                                  {u.status !== "approved" && (
                                    <button
                                      onClick={() => handleUpdateUserStatus(u.id, "approved")}
                                      className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-lg hover:bg-green-600 transition-colors"
                                    >
                                      Approve
                                    </button>
                                  )}
                                  {u.status !== "rejected" && (
                                    <button
                                      onClick={() => handleUpdateUserStatus(u.id, "rejected")}
                                      className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors"
                                    >
                                      Reject
                                    </button>
                                  )}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
