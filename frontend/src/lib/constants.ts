// ============================================================
// U-Turn4Nature B2B — Brand Constants
// ============================================================

// ── Company Info ─────────────────────────────────────────────

export const COMPANY = {
  name: "U-Turn4Nature",
  legalName: "U-TURN4NATURE LLP",
  tagline: "Simply Homemade",
  phone: "+91 7703944883",
  phoneClean: "917703944883",
  email: "support@u-turn.in",
  wholesaleEmail: "wholesale@u-turn.in",
  website: "https://u-turn.in",
  b2bWebsite: "https://b2b.u-turn.in",
  address: {
    line1: "Plot No. 4, Sector Kheda Chauganpur",
    line2: "Ecotech 3, Greater Noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201306",
    country: "India",
    full: "Plot No. 4, Sector Kheda Chauganpur, Ecotech 3, Greater Noida – 201306, Uttar Pradesh, India",
  },
  gstin: "To be added",
  copyright: `© U-TURN4NATURE LLP ${new Date().getFullYear()}. All rights reserved.`,
} as const;

// ── Social Links ─────────────────────────────────────────────

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@u-turn4nature",
  twitter: "https://mobile.x.com/UTurn4nature",
  facebook: "https://www.facebook.com/UTurn4Nature",
  telegram: "https://t.me/uturn4nature",
  instagram: "https://www.instagram.com/uturn4nature/",
  linkedin: "https://www.linkedin.com/company/u-turn4nature/",
} as const;

// ── App Store Links ──────────────────────────────────────────

export const APP_LINKS = {
  playStore:
    "https://play.google.com/store/apps/details?id=in_.uturn.shop",
  appStore:
    "https://apps.apple.com/app/uturn-nature/id6751807426",
} as const;

// ── WhatsApp ─────────────────────────────────────────────────

export const WHATSAPP_URL = `https://wa.me/${COMPANY.phoneClean}?text=${encodeURIComponent(
  "Hi! I'm interested in U-Turn4Nature wholesale products. Please share more details."
)}`;

// ── Navigation ───────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
] as const;

// ── Footer Links ─────────────────────────────────────────────

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Blog", href: "/blog" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Payment Policy", href: "/payment-policy" },
  ],
} as const;

// ── Impact Numbers ───────────────────────────────────────────

export const IMPACT_STATS = [
  { id: "women", value: 500, suffix: "+", label: "Women Artisans Empowered", icon: "users" },
  { id: "shgs", value: 50, suffix: "+", label: "SHGs & FPOs Partnered", icon: "handshake" },
  { id: "products", value: 100, suffix: "+", label: "Products Available", icon: "package" },
  { id: "partners", value: 1000, suffix: "+", label: "B2B Partners Served", icon: "building" },
] as const;

// ── Trust Badges ─────────────────────────────────────────────

export const TRUST_BADGES = [
  { id: "natural", icon: "leaf", label: "100% Natural" },
  { id: "shg", icon: "heart-handshake", label: "SHG Women Made" },
  { id: "chemical-free", icon: "shield-check", label: "No Chemicals" },
  { id: "bulk", icon: "package", label: "Bulk Orders" },
  { id: "delivery", icon: "truck", label: "PAN India Delivery" },
  { id: "gst", icon: "file-text", label: "GST Invoice Available" },
] as const;

// ── How It Works Steps ───────────────────────────────────────

export const HOW_IT_WORKS_STEPS = [
  {
    id: "register",
    step: 1,
    title: "Register as a B2B Partner",
    description:
      "Fill out our simple registration form with your business details. Our team reviews your application within 24–48 hours.",
    icon: "user-plus",
  },
  {
    id: "browse",
    step: 2,
    title: "Browse Products & Get Wholesale Pricing",
    description:
      "Access our complete catalog with transparent wholesale pricing tiers. Request custom quotes for large volumes.",
    icon: "search",
  },
  {
    id: "order",
    step: 3,
    title: "Place Bulk Orders & Get Doorstep Delivery",
    description:
      "Place orders, track shipments, and receive doorstep delivery across India with GST invoicing.",
    icon: "truck",
  },
] as const;

// ── Why Us Features ──────────────────────────────────────────

export const WHY_US_FEATURES = [
  {
    id: "natural",
    title: "100% Natural, Chemical-Free Products",
    description:
      "Every product is made without chemicals, preservatives, or artificial additives. Better than organic — Simply Homemade.",
    icon: "leaf",
  },
  {
    id: "social-impact",
    title: "Direct from Women SHGs — Social Impact Story",
    description:
      "Your purchase directly empowers rural women artisans. A story your customers will love and trust.",
    icon: "heart",
  },
  {
    id: "pricing",
    title: "Competitive Wholesale Pricing",
    description:
      "Volume-based tiered pricing that gets better as you order more. Transparent, fair, and competitive.",
    icon: "indian-rupee",
  },
  {
    id: "supply-chain",
    title: "Reliable Supply Chain",
    description:
      "Network of 50+ SHGs and FPOs ensuring consistent supply. Multiple production units for reliability.",
    icon: "link",
  },
  {
    id: "gst",
    title: "GST Invoicing & Documentation",
    description:
      "Proper GST invoices, delivery challans, and complete business documentation for every order.",
    icon: "file-text",
  },
  {
    id: "packaging",
    title: "Custom Packaging & White-Label",
    description:
      "Options for custom packaging, private labeling, and white-label solutions for your brand.",
    icon: "package",
  },
  {
    id: "account-manager",
    title: "Dedicated B2B Account Manager",
    description:
      "A dedicated account manager for personalized service, order assistance, and issue resolution.",
    icon: "headphones",
  },
] as const;

// ── B2B Customer Types ───────────────────────────────────────

export const CUSTOMER_TYPES = [
  {
    id: "retailers",
    title: "Retailers & Kirana Stores",
    description:
      "Stock authentic natural products that your customers trust and keep coming back for.",
    icon: "store",
  },
  {
    id: "horeca",
    title: "Hotels, Restaurants & Cafes",
    description:
      "Elevate your cuisine with pure, chemical-free ingredients that make every dish extraordinary.",
    icon: "utensils",
  },
  {
    id: "corporate",
    title: "Corporate Gifting Companies",
    description:
      "Create premium gift hampers with a social impact story that resonates with modern businesses.",
    icon: "gift",
  },
  {
    id: "resellers",
    title: "Online Resellers & D2C Brands",
    description:
      "Source premium natural products for your online store with competitive wholesale pricing.",
    icon: "globe",
  },
  {
    id: "institutional",
    title: "Institutional Buyers",
    description:
      "Schools, hospitals, and canteens — healthy, natural food products for your communities.",
    icon: "building-2",
  },
  {
    id: "export",
    title: "Export Houses",
    description:
      "Take the goodness of Indian traditional food products to international markets.",
    icon: "plane",
  },
  {
    id: "organic-stores",
    title: "Organic & Natural Store Chains",
    description:
      "Complement your organic range with our 'better than organic' homemade product line.",
    icon: "trees",
  },
] as const;

// ── Google Maps Embed ────────────────────────────────────────

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9!2d77.45!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEcotech+3+Greater+Noida!5e0!3m2!1sen!2sin!4v1";
