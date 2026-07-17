"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  User,
  MapPin,
  Package,
  CheckCircle,
  Leaf,
} from "lucide-react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/useAuthStore";

const step1Schema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  gstin: z.string().optional(),
  businessType: z.string().min(1, "Select your business type"),
  yearsInBusiness: z.string().min(1, "Required"),
});

const step2Schema = z.object({
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  whatsapp: z.string().optional(),
});

const step3Schema = z.object({
  street: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Valid pincode is required"),
});

const step4Schema = z.object({
  estimatedVolume: z.string().min(1, "Required"),
  paymentTerms: z.string().min(1, "Required"),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;

const stepIcons = [Building2, User, MapPin, Package];
const stepLabels = ["Business Info", "Contact Info", "Address", "Requirements"];

const categories = [
  "Cold-Pressed Oils",
  "Spices & Masala",
  "Stone-Ground Atta",
  "Dal & Pulses",
  "Jaggery & Sweeteners",
  "Pickles & Papad",
  "Healthy Snacks",
  "Ghee & Dairy",
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Step 1 form
  const form1 = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  // Step 2 form
  const form2 = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  });

  // Step 3 form
  const form3 = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
  });

  // Step 4 form
  const form4 = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleStep1 = form1.handleSubmit(() => setStep(2));
  const handleStep2 = form2.handleSubmit(() => setStep(3));
  const handleStep3 = form3.handleSubmit(() => setStep(4));
  const setAuth = useAuthStore((state) => state.setAuth);
  
  const handleStep4 = form4.handleSubmit(async () => {
    try {
      const data = {
        ...form1.getValues(),
        ...form2.getValues(),
        ...form3.getValues(),
        ...form4.getValues(),
        interestedCategories: selectedCategories,
      };
      
      const response = await api.register(data);
      if (response.token) {
        setAuth(response.token, response.user);
      }
      setIsSubmitted(true);
    } catch (error: any) {
      alert(error.message || "Registration failed");
    }
  });

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all bg-white";

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-border p-8 md:p-12 text-center max-w-md w-full shadow-lg"
        >
          <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-brand" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-3">
            Application Submitted!
          </h1>
          <p className="text-info mb-6 leading-relaxed">
            Thank you for registering as a B2B partner. Our team will review
            your application and get back to you within{" "}
            <strong>24-48 hours</strong>.
          </p>
          <p className="text-sm text-info/60 mb-8">
            You&apos;ll receive a confirmation email with next steps.
          </p>
          <Link href="/" className="btn-primary text-base px-8 py-3">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <section className="bg-white border-b border-border">
        <div className="container-brand py-8 md:py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Leaf className="w-4 h-4 text-brand" />
            <span className="badge-green text-xs">B2B Registration</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2"
          >
            Register as a B2B Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-info max-w-lg mx-auto text-sm"
          >
            Complete the form below to apply for a wholesale partnership.
            Approval typically takes 24-48 hours.
          </motion.p>
        </div>
      </section>

      <div className="container-brand py-8 md:py-12 max-w-2xl mx-auto">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8">
          {stepLabels.map((label, i) => {
            const Icon = stepIcons[i];
            const stepNum = i + 1;
            const isActive = step === stepNum;
            const isCompleted = step > stepNum;
            return (
              <div
                key={label}
                className="flex flex-col items-center flex-1 relative"
              >
                {i > 0 && (
                  <div
                    className={`absolute top-5 right-1/2 w-full h-0.5 -z-10 ${
                      isCompleted ? "bg-brand" : "bg-border"
                    }`}
                  />
                )}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-brand text-white shadow-md"
                      : isCompleted
                      ? "bg-brand text-white"
                      : "bg-white border border-border text-info"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <span
                  className={`text-[10px] mt-2 font-medium hidden sm:block ${
                    isActive ? "text-brand" : "text-info/50"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm"
        >
          {/* Step 1: Business Info */}
          {step === 1 && (
            <form onSubmit={handleStep1} className="space-y-5">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Business Information
              </h2>
              <p className="text-sm text-info mb-4">
                Tell us about your business
              </p>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Company / Business Name *
                </label>
                <input
                  {...form1.register("companyName")}
                  placeholder="Your Business Name"
                  className={inputClass}
                />
                {form1.formState.errors.companyName && (
                  <p className="text-xs text-error mt-1">
                    {form1.formState.errors.companyName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  GSTIN (Optional)
                </label>
                <input
                  {...form1.register("gstin")}
                  placeholder="22AAAAA0000A1Z5"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Business Type *
                </label>
                <select {...form1.register("businessType")} className={inputClass}>
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
                {form1.formState.errors.businessType && (
                  <p className="text-xs text-error mt-1">
                    {form1.formState.errors.businessType.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Years in Business *
                </label>
                <select {...form1.register("yearsInBusiness")} className={inputClass}>
                  <option value="">Select</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                {form1.formState.errors.yearsInBusiness && (
                  <p className="text-xs text-error mt-1">
                    {form1.formState.errors.yearsInBusiness.message}
                  </p>
                )}
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-base">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <form onSubmit={handleStep2} className="space-y-5">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Contact Information
              </h2>
              <p className="text-sm text-info mb-4">
                How can we reach you?
              </p>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Contact Person Name *
                </label>
                <input
                  {...form2.register("contactPerson")}
                  placeholder="Full Name"
                  className={inputClass}
                />
                {form2.formState.errors.contactPerson && (
                  <p className="text-xs text-error mt-1">
                    {form2.formState.errors.contactPerson.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Email Address *
                </label>
                <input
                  {...form2.register("email")}
                  type="email"
                  placeholder="business@company.com"
                  className={inputClass}
                />
                {form2.formState.errors.email && (
                  <p className="text-xs text-error mt-1">
                    {form2.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Phone Number *
                </label>
                <input
                  {...form2.register("phone")}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
                {form2.formState.errors.phone && (
                  <p className="text-xs text-error mt-1">
                    {form2.formState.errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  WhatsApp Number (Optional)
                </label>
                <input
                  {...form2.register("whatsapp")}
                  type="tel"
                  placeholder="Same as phone or different"
                  className={inputClass}
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary flex-1 py-3"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button type="submit" className="btn-primary flex-1 py-3">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Address */}
          {step === 3 && (
            <form onSubmit={handleStep3} className="space-y-5">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Business Address
              </h2>
              <p className="text-sm text-info mb-4">
                Where should we deliver your wholesale orders?
              </p>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Street Address *
                </label>
                <input
                  {...form3.register("street")}
                  placeholder="Building, Street, Area"
                  className={inputClass}
                />
                {form3.formState.errors.street && (
                  <p className="text-xs text-error mt-1">
                    {form3.formState.errors.street.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    City *
                  </label>
                  <input
                    {...form3.register("city")}
                    placeholder="City"
                    className={inputClass}
                  />
                  {form3.formState.errors.city && (
                    <p className="text-xs text-error mt-1">
                      {form3.formState.errors.city.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    State *
                  </label>
                  <input
                    {...form3.register("state")}
                    placeholder="State"
                    className={inputClass}
                  />
                  {form3.formState.errors.state && (
                    <p className="text-xs text-error mt-1">
                      {form3.formState.errors.state.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Pincode *
                </label>
                <input
                  {...form3.register("pincode")}
                  placeholder="6-digit pincode"
                  className={inputClass}
                />
                {form3.formState.errors.pincode && (
                  <p className="text-xs text-error mt-1">
                    {form3.formState.errors.pincode.message}
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary flex-1 py-3"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button type="submit" className="btn-primary flex-1 py-3">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Requirements */}
          {step === 4 && (
            <form onSubmit={handleStep4} className="space-y-5">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Your Requirements
              </h2>
              <p className="text-sm text-info mb-4">
                Help us understand what you need
              </p>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Interested Product Categories
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-3 py-2 rounded-xl text-sm text-left border transition-all ${
                        selectedCategories.includes(cat)
                          ? "border-brand bg-brand-light text-brand font-medium"
                          : "border-border bg-white text-info hover:border-brand/30"
                      }`}
                    >
                      {selectedCategories.includes(cat) && (
                        <CheckCircle className="w-3.5 h-3.5 inline mr-1.5" />
                      )}
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Estimated Monthly Volume *
                </label>
                <select {...form4.register("estimatedVolume")} className={inputClass}>
                  <option value="">Select</option>
                  <option value="small">₹10,000 – ₹50,000</option>
                  <option value="medium">₹50,000 – ₹2,00,000</option>
                  <option value="large">₹2,00,000 – ₹5,00,000</option>
                  <option value="enterprise">₹5,00,000+</option>
                </select>
                {form4.formState.errors.estimatedVolume && (
                  <p className="text-xs text-error mt-1">
                    {form4.formState.errors.estimatedVolume.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Preferred Payment Terms *
                </label>
                <select {...form4.register("paymentTerms")} className={inputClass}>
                  <option value="">Select</option>
                  <option value="advance">100% Advance</option>
                  <option value="partial">50% Advance + 50% on Delivery</option>
                  <option value="credit-30">Net 30 Credit</option>
                  <option value="credit-60">Net 60 Credit</option>
                </select>
                {form4.formState.errors.paymentTerms && (
                  <p className="text-xs text-error mt-1">
                    {form4.formState.errors.paymentTerms.message}
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-secondary flex-1 py-3"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  disabled={form4.formState.isSubmitting}
                  className="btn-primary flex-1 py-3 disabled:opacity-50"
                >
                  {form4.formState.isSubmitting
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Login link */}
        <p className="text-center text-sm text-info mt-6">
          Already a partner?{" "}
          <Link href="/login" className="text-brand font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
