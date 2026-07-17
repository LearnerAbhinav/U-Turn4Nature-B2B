"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag, User } from "lucide-react";

const samplePosts = [
  {
    slug: "why-cold-pressed-oils-better",
    title: "Why Cold-Pressed Oils Are Better Than Refined Oils for Your Business",
    excerpt:
      "Discover why restaurants, hotels, and health-conscious retailers are switching to wood cold-pressed oils. Learn about the traditional Ghani method and its benefits.",
    category: "Product Knowledge",
    readTime: "5 min read",
    date: "July 15, 2026",
    author: "U-Turn4Nature Team",
  },
  {
    slug: "empowering-rural-women-shg-story",
    title: "Empowering Rural Women: The SHG Story Behind Every U-Turn4Nature Product",
    excerpt:
      "Meet the incredible women from Self-Help Groups in Uttarakhand who hand-craft every product in our catalog. Their stories of empowerment will inspire you.",
    category: "Impact Stories",
    readTime: "7 min read",
    date: "July 10, 2026",
    author: "U-Turn4Nature Team",
  },
  {
    slug: "wholesale-natural-food-business-guide",
    title: "Starting a Natural Food Business: A Complete Guide for Retailers",
    excerpt:
      "Everything you need to know about stocking and selling natural, chemical-free food products. Market trends, consumer preferences, and margin strategies.",
    category: "Business Insights",
    readTime: "8 min read",
    date: "July 5, 2026",
    author: "U-Turn4Nature Team",
  },
  {
    slug: "jaggery-vs-sugar-health-benefits",
    title: "Jaggery vs Sugar: The Health Benefits That Make Jaggery a Bestseller",
    excerpt:
      "Natural jaggery is one of the fastest-growing product categories in health food retail. Here's why your customers prefer it and how to stock the right varieties.",
    category: "Product Knowledge",
    readTime: "4 min read",
    date: "June 28, 2026",
    author: "U-Turn4Nature Team",
  },
  {
    slug: "corporate-gifting-natural-products",
    title: "Corporate Gifting with Natural Products: A Growing Trend in 2026",
    excerpt:
      "Companies are moving away from generic gifts. Discover how natural, SHG-made food hampers are becoming the preferred corporate gifting choice.",
    category: "Business Insights",
    readTime: "6 min read",
    date: "June 20, 2026",
    author: "U-Turn4Nature Team",
  },
  {
    slug: "traditional-spice-processing-methods",
    title: "Traditional vs Industrial: Why Stone-Ground Spices Are Worth the Premium",
    excerpt:
      "The science behind why traditionally processed spices retain more flavor, aroma, and nutritional value than industrially processed alternatives.",
    category: "Product Knowledge",
    readTime: "5 min read",
    date: "June 15, 2026",
    author: "U-Turn4Nature Team",
  },
];

const categoryColors: Record<string, string> = {
  "Product Knowledge": "badge-green",
  "Impact Stories": "badge-gold",
  "Business Insights": "badge-green",
};

export default function BlogPage() {
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
            Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Blog &amp; Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-info max-w-lg mx-auto"
          >
            Insights on natural foods, SHG stories, industry trends, and tips
            for growing your business with authentic products
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-surface">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover group"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-brand-light to-surface flex items-center justify-center">
                  <span className="text-4xl opacity-40">📝</span>
                </div>

                <div className="p-5">
                  {/* Category & Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={categoryColors[post.category] || "badge-green"}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-info/50">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-semibold text-[#1a1a1a] group-hover:text-brand transition-colors mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-info line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-info/50">
                      <User className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span className="text-brand text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
