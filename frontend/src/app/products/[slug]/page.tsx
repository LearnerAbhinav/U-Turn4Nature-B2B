"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  Package,
  Clock,
  Shield,
  Truck,
  ChevronRight,
  Minus,
  Plus,
  Check,
  Info,
} from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { categories } from "@/data/categories";
import { useInquiryStore } from "@/stores/useInquiryStore";
import { notFound } from "next/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const addItem = useInquiryStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(0);
  const [selectedPackaging, setSelectedPackaging] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.categoryId);
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  // Initialize quantity to MOQ
  if (quantity === 0) {
    setQuantity(product.moq);
  }

  const handleAddToInquiry = () => {
    addItem(product, quantity, product.unit);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container-brand py-3">
          <nav className="flex items-center gap-2 text-sm text-info">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-brand transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            {category && (
              <>
                <Link
                  href={`/products?category=${category.slug}`}
                  className="hover:text-brand transition-colors"
                >
                  {category.name}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
              </>
            )}
            <span className="text-[#1a1a1a] font-medium truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container-brand py-8 md:py-12">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-info hover:text-brand transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-brand-light to-surface flex items-center justify-center relative">
                <span className="text-[120px] md:text-[160px]">
                  {category?.emoji || "📦"}
                </span>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isFeatured && (
                    <span className="badge-gold text-xs">★ Featured</span>
                  )}
                  <span className="badge-green text-xs">
                    {category?.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Processing Method */}
            <div className="mt-4 p-4 bg-white rounded-2xl border border-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1a1a1a] mb-1">
                    Processing Method
                  </h4>
                  <p className="text-sm text-info">{product.processingMethod}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-1">
                {product.name}
              </h1>
              {product.nameHindi && (
                <p className="text-lg text-info/60">{product.nameHindi}</p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-info">Starting from</span>
              <span className="text-3xl font-bold text-brand">
                ₹{product.basePrice}
              </span>
              <span className="text-info">/{product.unit}</span>
            </div>

            {/* MOQ */}
            <div className="flex items-center gap-2 bg-brand-light rounded-xl px-4 py-3">
              <Package className="w-4 h-4 text-brand" />
              <span className="text-sm font-medium text-brand">
                Minimum Order: {product.moq} {product.moqUnit}
              </span>
            </div>

            {/* Description */}
            <p className="text-info leading-relaxed">{product.description}</p>

            {/* Wholesale Pricing Table */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="px-5 py-3 bg-surface border-b border-border">
                <h3 className="font-semibold text-[#1a1a1a] text-sm">
                  📊 Wholesale Pricing Tiers
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface/50">
                      <th className="text-left px-5 py-3 font-medium text-info text-xs uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="text-right px-5 py-3 font-medium text-info text-xs uppercase tracking-wider">
                        Price / {product.unit}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.pricingTiers.map((tier, i) => (
                      <tr
                        key={i}
                        className="border-t border-border hover:bg-surface/30 transition-colors"
                      >
                        <td className="px-5 py-3 text-[#1a1a1a]">
                          {tier.maxQty
                            ? `${tier.minQty} – ${tier.maxQty} ${tier.unit}`
                            : `${tier.minQty}+ ${tier.unit}`}
                        </td>
                        <td className="px-5 py-3 text-right font-semibold">
                          {tier.pricePerUnit ? (
                            <span className="text-brand">
                              ₹{tier.pricePerUnit}/{tier.unit}
                            </span>
                          ) : (
                            <span className="badge-gold text-xs">
                              Custom Quote
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Packaging Options */}
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">
                Available Packaging
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.packagingOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPackaging(i)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                      selectedPackaging === i
                        ? "border-brand bg-brand-light text-brand"
                        : "border-border bg-white text-info hover:border-brand/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">
                Quantity ({product.moqUnit})
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setQuantity(Math.max(product.moq, quantity - product.moq))
                  }
                  className="w-10 h-10 rounded-xl border border-border bg-white flex items-center justify-center hover:border-brand transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(product.moq, parseInt(e.target.value) || product.moq))
                  }
                  min={product.moq}
                  className="w-24 text-center py-2 rounded-xl border border-border text-lg font-semibold focus:outline-none focus:border-brand"
                />
                <button
                  onClick={() => setQuantity(quantity + product.moq)}
                  className="w-10 h-10 rounded-xl border border-border bg-white flex items-center justify-center hover:border-brand transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Inquiry / Request Quote */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToInquiry}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                  addedToCart
                    ? "bg-green-600 text-white"
                    : "btn-primary"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Inquiry Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Inquiry Cart
                  </>
                )}
              </button>
              <Link
                href="/contact"
                className="btn-secondary flex-1 text-center py-3.5 text-base"
              >
                Request Custom Quote
              </Link>
            </div>

            {/* Product Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                <Clock className="w-5 h-5 text-brand flex-shrink-0" />
                <div>
                  <p className="text-xs text-info/50">Shelf Life</p>
                  <p className="text-sm font-medium text-[#1a1a1a]">
                    {product.shelfLife}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                <Shield className="w-5 h-5 text-brand flex-shrink-0" />
                <div>
                  <p className="text-xs text-info/50">Certifications</p>
                  <p className="text-sm font-medium text-[#1a1a1a]">
                    {product.certifications.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                <Truck className="w-5 h-5 text-brand flex-shrink-0" />
                <div>
                  <p className="text-xs text-info/50">Storage</p>
                  <p className="text-sm font-medium text-[#1a1a1a] line-clamp-2">
                    {product.storageInstructions}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.slug}`}
                  className="group block bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="aspect-square bg-gradient-to-br from-brand-light to-surface flex items-center justify-center">
                    <span className="text-5xl group-hover:scale-110 transition-transform">
                      {category?.emoji || "📦"}
                    </span>
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-sm text-[#1a1a1a] group-hover:text-brand transition-colors line-clamp-1">
                      {rp.name}
                    </h3>
                    <p className="text-sm font-bold text-brand mt-1">
                      ₹{rp.basePrice}
                      <span className="text-xs font-normal text-info">
                        /{rp.unit}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
