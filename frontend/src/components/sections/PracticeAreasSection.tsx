"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, TrendingUp, HeartPulse, Zap, Factory, CheckCircle2 } from "lucide-react";

const practices = [
  {
    id: "tech",
    name: "Technology, AI & Cloud",
    slug: "technology",
    icon: Cpu,
    headline: "Architects of foundation models, distributed platforms, and hyper-scale infrastructure.",
    roles: [
      "VP / Head of Machine Learning",
      "Principal Distributed Systems Architect",
      "Chief Information Security Officer (CISO)",
      "Head of Developer Platform",
    ],
    mandates: "320+ Executive & Staff Placements",
    accent: "#FF5B3D",
  },
  {
    id: "finance",
    name: "Quantitative Finance & FinTech",
    slug: "financial-services",
    icon: TrendingUp,
    headline: "Alpha researchers, low-latency execution developers, and algorithmic risk leadership.",
    roles: [
      "Head of Quantitative Research",
      "Senior Low-Latency C++ Engineer",
      "Chief Risk Officer (CRO)",
      "Head of Institutional Compliance",
    ],
    mandates: "210+ Quant & Trading Placements",
    accent: "#FF9A39",
  },
  {
    id: "health",
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    icon: HeartPulse,
    headline: "Physician executives, clinical development directors, and regulatory affairs pioneers.",
    roles: [
      "Chief Medical Officer (CMO)",
      "VP Clinical Development & Oncology",
      "Head of Computational Biology",
      "Director of Regulatory Strategy",
    ],
    mandates: "140+ BioPharma Placements",
    accent: "#E83379",
  },
  {
    id: "cleantech",
    name: "Industrial & CleanTech",
    slug: "energy",
    icon: Zap,
    headline: "Engineers and operational executives scaling battery storage, smart grids, and robotics.",
    roles: [
      "VP Grid Operations",
      "Principal Battery Chemistry Scientist",
      "Head of Autonomous Systems",
      "Director of Sustainable Supply Chains",
    ],
    mandates: "95+ Energy Infrastructure Placements",
    accent: "#FFC84B",
  },
  {
    id: "operations",
    name: "Enterprise Operations",
    slug: "manufacturing",
    icon: Factory,
    headline: "Operational architects transforming procurement, lean manufacturing, and global logistics.",
    roles: [
      "Chief Operating Officer (COO)",
      "VP Global Logistics",
      "Director of Continuous Improvement",
      "Head of Sourcing & Procurement",
    ],
    mandates: "115+ Enterprise Operations Placements",
    accent: "#C6E86B",
  },
];

export function PracticeAreasSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = practices[activeIdx];
  const Icon = current.icon;

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#EAE8E5]">
      <div className="container-enterprise">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow block mb-3 text-[#FF9A39]">04 / Practice Desks</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
            Domain expertise led by former industry practitioners.
          </h2>
          <p className="text-sm sm:text-base text-[#606064] font-light mt-3 leading-relaxed">
            Our search directors have built systems, traded markets, and managed clinical trials. We understand the unwritten technical nuances that separate average talent from industry outliers.
          </p>
        </motion.div>

        {/* Interactive Editorial Index Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Typographic Specialty List (col-span-6) */}
          <div className="lg:col-span-6 space-y-2">
            {practices.map((practice, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={practice.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    isActive
                      ? "bg-white border-[#EAE8E5] shadow-md"
                      : "bg-white/60 backdrop-blur-sm border-transparent hover:bg-white hover:border-[#EAE8E5]"
                  }`}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePracticeMarker"
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: practice.accent }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4 pl-1">
                    <span className="text-xs font-bold text-[#606064] font-mono">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-lg sm:text-xl font-bold font-serif transition-colors ${
                        isActive ? "text-[#202022]" : "text-[#606064] group-hover:text-[#202022]"
                      }`}
                    >
                      {practice.name}
                    </span>
                  </div>

                  <motion.span
                    className="h-3 w-3 rounded-full shrink-0"
                    style={{ backgroundColor: practice.accent }}
                    animate={{ scale: isActive ? 1.25 : 0.7, opacity: isActive ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Card with AnimatePresence */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={current.id}
                className="p-8 sm:p-10 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAE8E5] shadow-lg space-y-6"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E5]">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="h-10 w-10 rounded-xl bg-[#FAF9F7] border border-[#EAE8E5] flex items-center justify-center text-[#202022] shadow-sm"
                      whileHover={{ scale: 1.1, rotate: 6 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h4 className="text-base font-bold text-[#202022] font-serif">{current.name}</h4>
                      <span className="text-[11px] text-[#606064]">{current.mandates}</span>
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FAF9F7] border border-[#EAE8E5]"
                    style={{ color: current.accent }}
                  >
                    Specialized Desk
                  </span>
                </div>

                <p className="text-base text-[#202022] font-serif italic leading-relaxed">
                  &ldquo;{current.headline}&rdquo;
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#606064] block">
                    Typical Search Mandates
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {current.roles.map((role, i) => (
                      <motion.div
                        key={role}
                        className="p-3 rounded-lg bg-[#FAF9F7] border border-[#EAE8E5] text-xs font-medium text-[#202022] flex items-start gap-2 hover:bg-white hover:border-[#FF5B3D]/30 transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        whileHover={{ x: 3 }}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5B3D] shrink-0 mt-0.5" />
                        <span className="leading-snug">{role}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#EAE8E5] flex items-center justify-between">
                  <Link
                    href={`/industries/${current.slug}`}
                    className="text-xs font-bold text-[#202022] hover:text-[#FF5B3D] transition-colors flex items-center gap-1.5 group"
                  >
                    <span>View Practice Details</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact?type=employer"
                    className="text-xs font-semibold text-[#FF5B3D] hover:underline"
                  >
                    Inquire With Sector Lead &rarr;
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
