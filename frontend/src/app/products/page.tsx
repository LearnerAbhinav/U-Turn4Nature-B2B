"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  X,
  Package,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { SortOption, ViewMode } from "@/types";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popularity", label: "Popularity" },
  { value: "price-low-high", label: "Price: Low → High" },
  { value: "price-high-low", label: "Price: High → Low" },
  { value: "newest", label: "Newest First" },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("popularity");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.tags.some((t) => t.includes(query))
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.categoryId === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-low-high":
        filtered.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "newest":
        filtered.reverse();
        break;
      case "popularity":
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortBy("popularity");
  };

  const hasFilters = searchQuery || selectedCategory || sortBy !== "popularity";

  return (
    <div className="min-h-screen bg-surface">
      {/* Page Header */}
      <section className="bg-white border-b border-border">
        <div className="container-brand py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge-green text-xs mb-3 inline-block">
              Wholesale Catalog
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-2">
              Product Catalog
            </h1>
            <p className="text-info max-w-lg">
              Browse our complete range of 100% natural, chemical-free products
              available for wholesale orders
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-brand py-6 md:py-8">
        {/* Search & Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-info/50" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-info/50 hover:text-info"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-white text-sm font-medium hover:border-brand transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-border bg-white text-sm font-medium focus:outline-none focus:border-brand cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-info/50 pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="hidden sm:flex items-center border border-border rounded-xl bg-white overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-colors ${
                  viewMode === "grid"
                    ? "bg-brand text-white"
                    : "text-info hover:bg-surface"
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 transition-colors ${
                  viewMode === "list"
                    ? "bg-brand text-white"
                    : "text-info hover:bg-surface"
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } md:block w-full md:w-64 lg:w-72 flex-shrink-0`}
          >
            <div className="bg-white rounded-2xl border border-border p-5 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#1a1a1a]">Filters</h3>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-brand font-medium hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs font-semibold uppercase text-info/50 tracking-wider mb-3">
                  Category
                </h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedCategory
                        ? "bg-brand-light text-brand font-medium"
                        : "text-info hover:bg-surface"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? "bg-brand-light text-brand font-medium"
                          : "text-info hover:bg-surface"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.emoji}</span>
                        <span className="truncate">{cat.name}</span>
                      </span>
                      <span className="text-xs text-info/40">
                        {cat.productCount}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid / List */}
          <div className="flex-1 min-w-0">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-info">
                Showing{" "}
                <span className="font-semibold text-[#1a1a1a]">
                  {filteredProducts.length}
                </span>{" "}
                product{filteredProducts.length !== 1 ? "s" : ""}
                {selectedCategory &&
                  ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Package className="w-16 h-16 text-border mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  No products found
                </h3>
                <p className="text-info text-sm mb-4">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary text-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="group block bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-light to-surface overflow-hidden">
                        <img
                          src={product.images[0] || "https://img.clevup.in/378284/LOGOUT2AUG25-1754702859985.jpeg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          <span className="badge-green text-[10px]">
                            {categories.find((c) => c.id === product.categoryId)?.name}
                          </span>
                          {product.isFeatured && (
                            <span className="badge-gold text-[10px]">
                              ★ Featured
                            </span>
                          )}
                        </div>
                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] font-semibold text-brand">
                          Min. {product.moq} {product.moqUnit}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-[#1a1a1a] group-hover:text-brand transition-colors mb-1 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs text-info mb-3 line-clamp-2 leading-relaxed">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-info/50">Starting from</p>
                            <p className="text-lg font-bold text-brand">
                              ₹{product.basePrice}
                              <span className="text-xs font-normal text-info">
                                /{product.unit}
                              </span>
                            </p>
                          </div>
                          <span className="btn-primary text-xs px-3 py-1.5">
                            Get Quote
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="group flex items-center gap-5 bg-white rounded-2xl border border-border p-4 md:p-5 hover:shadow-lg transition-all duration-300 card-hover"
                    >
                      {/* Emoji */}
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl bg-gradient-to-br from-brand-light to-surface flex items-center justify-center overflow-hidden">
                        <img
                          src={product.images[0] || "https://img.clevup.in/378284/LOGOUT2AUG25-1754702859985.jpeg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="badge-green text-[10px]">
                            {categories.find((c) => c.id === product.categoryId)?.name}
                          </span>
                          {product.isFeatured && (
                            <span className="badge-gold text-[10px]">
                              ★ Featured
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-[#1a1a1a] group-hover:text-brand transition-colors mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-info line-clamp-1">
                          {product.shortDescription}
                        </p>
                      </div>

                      {/* Price & CTA */}
                      <div className="hidden sm:flex flex-col items-end gap-2 flex-shrink-0">
                        <div className="text-right">
                          <p className="text-xs text-info/50">From</p>
                          <p className="text-xl font-bold text-brand">
                            ₹{product.basePrice}
                            <span className="text-xs font-normal text-info">
                              /{product.unit}
                            </span>
                          </p>
                        </div>
                        <span className="text-xs text-info/50">
                          MOQ: {product.moq} {product.moqUnit}
                        </span>
                        <span className="btn-primary text-xs px-3 py-1.5">
                          Get Quote <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
