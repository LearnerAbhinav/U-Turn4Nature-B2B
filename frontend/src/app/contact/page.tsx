"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { COMPANY, WHATSAPP_URL, GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  company: z.string().min(2, "Company name is required"),
  businessType: z.string().min(1, "Select your business type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container-brand py-12 md:py-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-green text-xs mb-4 inline-block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-info max-w-lg mx-auto"
          >
            Have questions about wholesale pricing, partnerships, or products?
            We&apos;re here to help.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-brand mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-info">
                      Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all"
                        />
                        {errors.name && (
                          <p className="text-xs text-error mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all"
                        />
                        {errors.email && (
                          <p className="text-xs text-error mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all"
                        />
                        {errors.phone && (
                          <p className="text-xs text-error mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                          Company Name *
                        </label>
                        <input
                          {...register("company")}
                          type="text"
                          placeholder="Your Business Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all"
                        />
                        {errors.company && (
                          <p className="text-xs text-error mt-1">
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                        Business Type *
                      </label>
                      <select
                        {...register("businessType")}
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select business type</option>
                        <option value="retailer">Retailer / Kirana Store</option>
                        <option value="distributor">Distributor</option>
                        <option value="horeca">Hotel / Restaurant / Cafe</option>
                        <option value="corporate">Corporate Gifting</option>
                        <option value="reseller">Online Reseller / D2C</option>
                        <option value="institutional">Institutional Buyer</option>
                        <option value="export">Export House</option>
                        <option value="organic_store">Organic / Natural Store</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.businessType && (
                        <p className="text-xs text-error mt-1">
                          {errors.businessType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell us about your requirements — product interests, estimated volumes, any specific needs..."
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-error mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl border border-border p-6 shadow-sm"
              >
                <h3 className="font-semibold text-[#1a1a1a] mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                        <Phone className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-info/50">Phone</p>
                        <p className="text-sm font-medium text-[#1a1a1a]">
                          {COMPANY.phone}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                        <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-info/50">WhatsApp</p>
                        <p className="text-sm font-medium text-[#1a1a1a]">
                          {COMPANY.phone}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                        <Mail className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-info/50">Email</p>
                        <p className="text-sm font-medium text-[#1a1a1a]">
                          {COMPANY.email}
                        </p>
                        <p className="text-sm text-info">
                          {COMPANY.wholesaleEmail}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <p className="text-xs text-info/50">Address</p>
                        <p className="text-sm text-[#1a1a1a]">
                          {COMPANY.address.full}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <p className="text-xs text-info/50">Office Hours</p>
                        <p className="text-sm text-[#1a1a1a]">
                          Mon – Sat: 9:00 AM – 6:00 PM
                        </p>
                        <p className="text-sm text-info">
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm"
              >
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="U-Turn4Nature Office Location"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
