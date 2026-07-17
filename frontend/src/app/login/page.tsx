"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Lock, Mail, ArrowRight, Leaf } from "lucide-react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/useAuthStore";

const loginSchema = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");
    try {
      const response = await api.login(data);
      if (response.token) {
        setAuth(response.token, response.user);
        
        if (response.user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
            U
          </div>
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Partner Login</h1>
          <p className="text-sm text-info mt-1">
            Access your B2B wholesale dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-info/40" />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your@business.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-error mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-info/40" />
                <input
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-error mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {error && (
              <div className="bg-brand-light border border-brand/20 rounded-xl px-4 py-3 text-sm text-brand">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3 text-base disabled:opacity-50"
            >
              {isSubmitting ? (
                "Logging in..."
              ) : (
                <>
                  Login <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-info">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-brand font-medium hover:underline"
              >
                Register as Partner
              </Link>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-info/50 mt-6 flex items-center justify-center gap-1.5">
          <Leaf className="w-3 h-3" />
          U-Turn4Nature — Simply Homemade
        </p>
      </motion.div>
    </div>
  );
}
