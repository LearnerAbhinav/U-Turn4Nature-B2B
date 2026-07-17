"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
  Eye,
  Shield,
  Users,
  Award,
  Target,
  Sprout,
  HandHeart,
  Gem,
} from "lucide-react";

const timeline = [
  {
    year: "2020",
    title: "The Spark",
    description:
      "A group of passionate individuals set out with a vision to bridge the gap between India's rural food artisans and conscious consumers.",
  },
  {
    year: "2021",
    title: "First SHG Partnerships",
    description:
      "Partnered with our first Self-Help Groups in Uttarakhand, beginning with cold-pressed oils and natural spices made by village women.",
  },
  {
    year: "2022",
    title: "Growing the Network",
    description:
      "Expanded to 20+ SHGs and FPOs across multiple states. Launched our complete product range — atta, dal, jaggery, pickles, and ghee.",
  },
  {
    year: "2023",
    title: "Digital Leap",
    description:
      "Launched u-turn.in e-commerce platform and mobile apps, making authentic homemade products accessible to consumers across India.",
  },
  {
    year: "2024",
    title: "B2B Expansion",
    description:
      "Recognizing demand from businesses, we launched our wholesale B2B platform to serve retailers, restaurants, and corporate buyers.",
  },
  {
    year: "2025",
    title: "500+ Women Empowered",
    description:
      "Crossed the milestone of empowering 500+ rural women artisans with dignified livelihoods. Serving 1000+ B2B partners nationwide.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "No chemicals, no preservatives, no artificial additives. Every product is as pure as nature intended.",
  },
  {
    icon: HandHeart,
    title: "Women Empowerment",
    description:
      "Every product is handcrafted by rural SHG women, providing them dignified livelihoods and financial independence.",
  },
  {
    icon: Sprout,
    title: "Traditional Processing",
    description:
      "Stone-ground, wood cold-pressed, sun-dried, hand-pounded — methods passed down through generations.",
  },
  {
    icon: Shield,
    title: "Better Than Organic",
    description:
      "Our products go beyond organic certification in purity. Simply Homemade — the way food should be.",
  },
  {
    icon: Gem,
    title: "Fair Trade",
    description:
      "Fair prices and dignified work for every rural artisan. We believe in equitable partnerships, not exploitation.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description:
      "Eco-friendly practices, minimal processing, farm-to-table. Reducing our footprint while maximizing impact.",
  },
];

const teamMembers = [
  {
    initials: "AK",
    name: "Abhishek Kumar",
    role: "Founder & CEO",
    bio: "Passionate about creating sustainable rural livelihoods through traditional food commerce.",
  },
  {
    initials: "SK",
    name: "Sneha Kumari",
    role: "Head of Operations",
    bio: "Manages SHG partnerships and ensures quality across all production units.",
  },
  {
    initials: "RV",
    name: "Rahul Verma",
    role: "Supply Chain Lead",
    bio: "Builds resilient supply chains connecting rural producers to urban markets.",
  },
  {
    initials: "PM",
    name: "Priya Mishra",
    role: "B2B Partnerships",
    bio: "Dedicated to growing meaningful business partnerships across India.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container-brand py-16 md:py-24 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-green text-xs mb-4 inline-block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4"
          >
            About <span className="text-brand">U-Turn4Nature</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-info max-w-2xl mx-auto"
          >
            A social enterprise on a mission to empower rural women by bringing
            their authentic, chemical-free homemade food products to businesses
            across India.
          </motion.p>
        </div>
        {/* Decorative */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-brand-light border border-brand/10"
            >
              <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Our Vision
              </h2>
              <p className="text-info leading-relaxed">
                To create a sustainable ecosystem where rural women artisans earn
                dignified livelihoods by producing authentic, pure food products
                — delivering &ldquo;better than organic&rdquo; quality to
                conscious consumers and businesses across India and beyond.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-accent-gold-light border border-accent-gold/10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gold flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Our Mission
              </h2>
              <p className="text-info leading-relaxed">
                Empower rural women through fair-trade opportunities, bring
                chemical-free food to market, bridge traditional food-making with
                modern commerce, and promote sustainability in everyday
                consumption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-surface">
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="badge-green text-xs mb-3 inline-block">
              What We Stand For
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <v.icon className="w-8 h-8 text-brand mb-4" />
                <h3 className="font-semibold text-[#1a1a1a] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-info leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="badge-green text-xs mb-3 inline-block">
              Our Journey
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
              The U-Turn4Nature Story
            </h2>
          </div>
          <div className="max-w-2xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand/20 -translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <span className="text-sm font-bold text-brand">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-info mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Women Behind Our Products */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0 leaf-pattern opacity-20" />
        <div className="container-brand relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
              The Women Behind Our Products
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Empowering Rural Women Artisans
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Every product in our catalog is handcrafted by skilled women from
              Self-Help Groups across India. Their expertise, passed down through
              generations, ensures authenticity and quality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cold-Pressing Oils",
                desc: "Women operate traditional Wood Ghani presses to extract pure, nutrient-rich oils without heat or chemicals.",
                emoji: "🫒",
              },
              {
                title: "Stone-Grinding Spices",
                desc: "Each spice is carefully sun-dried and hand-ground using stone mills for maximum flavor retention.",
                emoji: "🌶️",
              },
              {
                title: "Making Pickles",
                desc: "Family recipes passed down for generations — hand-cut, spiced, and sun-ripened in traditional clay jars.",
                emoji: "🥒",
              },
              {
                title: "Churning Ghee",
                desc: "Pure A2 ghee made using the Bilona method — hand-churned curd into butter, slow-cooked over wood fire.",
                emoji: "🧈",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-surface">
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="badge-green text-xs mb-3 inline-block">
              Our Team
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
              The People Driving Change
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-brand-light mx-auto mb-4 flex items-center justify-center text-brand text-2xl font-bold border-4 border-white shadow-md">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-[#1a1a1a] text-sm md:text-base">
                  {member.name}
                </h3>
                <p className="text-xs text-brand font-medium mt-0.5">
                  {member.role}
                </p>
                <p className="text-xs text-info mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="badge-green text-xs mb-3 inline-block">
              Quality Assurance
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
              Certifications & Standards
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: "FSSAI Licensed" },
              { icon: Award, label: "Lab Tested" },
              { icon: Leaf, label: "Chemical-Free Certified" },
              { icon: Users, label: "SHG Produced" },
              { icon: Heart, label: "Fair Trade" },
            ].map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-surface rounded-xl px-5 py-3 border border-border"
              >
                <cert.icon className="w-5 h-5 text-brand" />
                <span className="text-sm font-medium text-[#1a1a1a]">
                  {cert.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
