// ============================================================
// U-Turn4Nature B2B — Core TypeScript Types
// ============================================================

// ── Product Types ──────────────────────────────────────────

export interface PricingTier {
  minQty: number;
  maxQty: number | null; // null = custom quote (500+)
  pricePerUnit: number | null; // null = "Custom Quote"
  unit: string; // "kg", "litre", "piece", "pack"
}

export interface PackagingOption {
  size: string; // "1kg", "5kg", "15kg", "25kg", "Bulk"
  label: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameHindi?: string;
  categoryId: string;
  description: string;
  shortDescription: string;
  processingMethod: string;
  images: string[];
  basePrice: number;
  unit: string;
  moq: number;
  moqUnit: string;
  pricingTiers: PricingTier[];
  packagingOptions: PackagingOption[];
  shelfLife: string;
  storageInstructions: string;
  certifications: string[];
  tags: string[];
  isFeatured: boolean;
  isAvailable: boolean;
  createdAt?: string;
}

// ── Category Types ─────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  description: string;
  image: string;
  productCount: number;
}

// ── Testimonial Types ──────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  businessType: string;
  quote: string;
  avatar?: string;
  rating: number;
}

// ── Impact Number Types ────────────────────────────────────

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// ── Customer Type Types ────────────────────────────────────

export interface CustomerType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ── Trust Badge Types ──────────────────────────────────────

export interface TrustBadge {
  id: string;
  icon: string;
  label: string;
}

// ── Why Us Feature Types ───────────────────────────────────

export interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ── How It Works Step Types ────────────────────────────────

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

// ── Contact Form Types ─────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
  message: string;
}

// ── Team Member Types ──────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

// ── Quote / Inquiry Cart Types ─────────────────────────────

export interface InquiryItem {
  productId: string;
  product: Product;
  quantity: number;
  unit: string;
  notes?: string;
}

// ── B2B Registration Types ─────────────────────────────────

export type BusinessType =
  | "retailer"
  | "distributor"
  | "horeca"
  | "corporate"
  | "reseller"
  | "institutional"
  | "export"
  | "organic_store"
  | "other";

export interface RegistrationFormData {
  // Step 1 - Business Info
  companyName: string;
  gstin?: string;
  businessType: BusinessType;
  yearsInBusiness: number;

  // Step 2 - Contact Info
  contactPerson: string;
  email: string;
  phone: string;
  whatsapp?: string;

  // Step 3 - Address
  billingAddress: Address;
  shippingAddress: Address;
  sameAsShipping: boolean;

  // Step 4 - Requirements
  interestedCategories: string[];
  estimatedMonthlyVolume: string;
  preferredPaymentTerms: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

// ── Filter & Sort Types ────────────────────────────────────

export type SortOption =
  | "popularity"
  | "price-low-high"
  | "price-high-low"
  | "newest";

export type ViewMode = "grid" | "list";

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  processingType?: string;
  searchQuery?: string;
  sortBy?: SortOption;
}

// ── Navigation Types ───────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
