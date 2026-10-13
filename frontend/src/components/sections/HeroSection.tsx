"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Radar,
  Sliders,
  Award,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

interface MandateProfile {
  id: string;
  category: string;
  role: string;
  level: string;
  location: string;
  compensation: string;
  marketScarcity: string;
  matchScore: number;
  timelineDays: number;
  tags: string[];
  governance: string;
}

const SECTOR_MANDATES: Record<string, MandateProfile> = {
  ai: {
    id: "MDT-AI-902",
    category: "Autonomous AI & ML",
    role: "VP, Machine Learning Infrastructure",
    level: "Executive VP / Partner",
    location: "San Francisco / London (Hybrid)",
    compensation: "$620k – $880k + Carry",
    marketScarcity: "Top 0.05% Global",
    matchScore: 96.4,
    timelineDays: 16,
    tags: ["LLM Inference", "Distributed Systems", "CUDA C++", "Sovereign AI"],
    governance: "Discreet Board-Direct Mandate",
  },
  quant: {
    id: "MDT-QF-814",
    category: "Quantitative Strategies",
    role: "Principal Quantitative Alpha Lead",
    level: "Managing Director / Partner",
    location: "New York / Zurich",
    compensation: "$950k – $1.4M Base + PnL",
    marketScarcity: "Top 0.02% Scarcity",
    matchScore: 98.2,
    timelineDays: 14,
    tags: ["Statistical Arbitrage", "Low-Latency HFT", "Market Microstructure"],
    governance: "Ultra-High Discretion SLA",
  },
  biotech: {
    id: "MDT-BIO-741",
    category: "BioTech & Therapeutics",
    role: "Chief Scientific Officer (CSO)",
    level: "C-Suite / Executive Board",
    location: "Boston / Basel",
    compensation: "$540k – $780k + Equity",
    marketScarcity: "Top 0.08% Scarcity",
    matchScore: 94.8,
    timelineDays: 19,
    tags: ["CRISPR Therapeutics", "Translational Oncology", "FDA Track Record"],
    governance: "Venture Syndicate Mandate",
  },
  infra: {
    id: "MDT-INF-620",
    category: "Sovereign Cloud & Infra",
    role: "SVP, Global Hyperscale Operations",
    level: "Senior VP / Officer",
    location: "Singapore / Frankfurt",
    compensation: "$480k – $720k + Equity",
    marketScarcity: "Top 0.12% Scarcity",
    matchScore: 95.1,
    timelineDays: 18,
    tags: ["Hyperscale Datacenters", "Zero-Trust Architecture", "Grid Energy"],
    governance: "Institutional Advisory Mandate",
  },
};

const SECTORS = [
  { key: "ai", label: "Autonomous AI" },
  { key: "quant", label: "Quantitative Alpha" },
  { key: "biotech", label: "BioTech & Science" },
  { key: "infra", label: "Sovereign Infra" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroSection() {
  const [activeSector, setActiveSector] = useState<string>("ai");
  const mandate = SECTOR_MANDATES[activeSector];

  return (
    <section className="relative min-h-[92vh] flex items-center bg-transparent text-[#0F3B27] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      
      {/* Precision Background Vector Flourish (Hairline Forest & Signal Lime Accent) */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[780px] h-[680px] pointer-events-none select-none z-0 opacity-40"
        aria-hidden="true"
      >
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 780 680"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "480px 340px" }}
        >
          <ellipse
            cx="480"
            cy="340"
            rx="330"
            ry="250"
            stroke="#E1E8E3"
            strokeWidth="1.25"
            strokeDasharray="4 6"
          />
          <path
            d="M 220 340 C 220 180, 340 90, 480 90 C 620 90, 720 170, 750 300"
            stroke="url(#hero-lime-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="hero-lime-grad" x1="220" y1="340" x2="750" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#92FF5F" />
              <stop offset="0.6" stopColor="#0F3B27" />
              <stop offset="1" stopColor="#BFF2F0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="container-enterprise relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center"
        >
          {/* =========================================================================
              LEFT COLUMN: EDITORIAL HEADLINE & STORYTELLING ACTION HUB
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Live Search Telemetry Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#0F3B27] text-[#92FF5F] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#92FF5F] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#92FF5F]" />
                </span>
                LIVE SEARCH TELEMETRY
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#BFF2F0]/40 text-[#0F3B27] border border-[#0F3B27]/10">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0F3B27]" />
                Strict Discretion Protocols
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F3B27] font-serif leading-[1.08]">
                Appointing the{" "}
                <span className="italic font-normal text-[#0F3B27] underline decoration-[#92FF5F] decoration-4 underline-offset-8">
                  rare leaders
                </span>{" "}
                who redefine industries.
              </h1>
              <p className="text-lg md:text-xl text-[#3D614E] max-w-2xl leading-relaxed font-light">
                A specialized executive search and leadership advisory consultancy. We partner with visionary boards, founders, and sovereign sponsors to appoint transformational, tier-one talent with quantifiable certainty.
              </p>
            </motion.div>

            {/* Interactive Sector Switcher (Storytelling Component) */}
            <motion.div variants={itemVariants} className="space-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D614E]">
                <Sliders className="h-3.5 w-3.5 text-[#0F3B27]" />
                <span>Calibrate Live Search Horizon:</span>
              </div>
              <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#E1E8E3] shadow-sm max-w-fit">
                {SECTORS.map((s) => {
                  const isActive = activeSector === s.key;
                  return (
                    <button
                      key={s.key}
                      onClick={() => setActiveSector(s.key)}
                      className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                        isActive
                          ? "text-[#F7F9F7]"
                          : "text-[#3D614E] hover:text-[#0F3B27] hover:bg-[#F7F9F7]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="heroSectorTab"
                          className="absolute inset-0 bg-[#0F3B27] rounded-lg shadow-sm"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#92FF5F]" />}
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/employers">
                <Button
                  size="lg"
                  className="bg-[#0F3B27] text-[#92FF5F] hover:bg-[#082115] hover:text-[#92FF5F] rounded-full h-14 px-8 text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-card hover:shadow-lime-glow group gap-2"
                >
                  <span>Initiate Confidential Search</span>
                  <ArrowRight className="h-4 w-4 text-[#92FF5F] group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/candidates">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#0F3B27]/25 text-[#0F3B27] hover:bg-[#BFF2F0]/25 rounded-full h-14 px-7 text-sm font-semibold tracking-wider transition-colors"
                >
                  <span>Candidate Representation</span>
                </Button>
              </Link>
            </motion.div>

            {/* Real-time Performance SLA Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#E1E8E3] grid grid-cols-3 gap-6 max-w-xl"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0F3B27]">
                  <AnimatedCounter value={18} suffix=" Days" duration={1.8} />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#3D614E] mt-0.5 font-medium">
                  Mean Shortlist SLA
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0F3B27]">
                  <AnimatedCounter value={94} suffix="%" duration={1.8} />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#3D614E] mt-0.5 font-medium">
                  3-Year Retention
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0F3B27]">
                  <AnimatedCounter value={12} suffix=" Mos" duration={1.8} />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#3D614E] mt-0.5 font-medium">
                  Placement Warranty
                </div>
              </div>
            </motion.div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: BESPOKE 3D EXECUTIVE TELEMETRY DOSSIER
              ========================================================================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Subtle Ethereal Mint Aura behind Dossier */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#92FF5F]/20 via-[#BFF2F0]/30 to-[#CFF1D2]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={mandate.id}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl bg-[#0F3B27] text-[#F7F9F7] p-7 md:p-8 border border-[#92FF5F]/25 shadow-elevated bracket-corners overflow-hidden"
              >
                {/* Background Radar Scanner Sweep Effect */}
                <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full border border-[#92FF5F]/15 pointer-events-none opacity-60">
                  <div className="absolute inset-4 rounded-full border border-[#92FF5F]/10 animate-ping" />
                  <div className="absolute inset-12 rounded-full border border-[#92FF5F]/20" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-[#92FF5F]/20" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#92FF5F]/20" />
                </div>

                {/* Dossier Top Bar */}
                <div className="flex items-center justify-between border-b border-[#92FF5F]/20 pb-4 mb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#92FF5F] shadow-[0_0_8px_#92FF5F]" />
                    <span className="text-xs font-mono font-bold tracking-widest text-[#92FF5F]">
                      {mandate.id}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#CFF1D2]/80 bg-[#144931] px-2.5 py-0.5 rounded border border-[#92FF5F]/20">
                    {mandate.governance}
                  </span>
                </div>

                {/* Role Profile Details */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#BFF2F0]/80">
                      Target Mandate
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-[#F7F9F7] leading-snug mt-0.5">
                      {mandate.role}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-[#082115]/80 border border-[#92FF5F]/15">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#CFF1D2]/70">
                        Seniority / Level
                      </div>
                      <div className="text-xs font-semibold text-[#F7F9F7] mt-0.5 truncate">
                        {mandate.level}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#082115]/80 border border-[#92FF5F]/15">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#CFF1D2]/70">
                        Jurisdiction
                      </div>
                      <div className="text-xs font-semibold text-[#F7F9F7] mt-0.5 truncate">
                        {mandate.location}
                      </div>
                    </div>
                  </div>

                  {/* Compensation & Scarcity Gauge */}
                  <div className="p-4 rounded-xl bg-[#144931]/60 border border-[#92FF5F]/20 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#CFF1D2] font-mono">Market Compensation:</span>
                      <span className="font-bold text-[#92FF5F] font-mono">
                        {mandate.compensation}
                      </span>
                    </div>

                    {/* Calibration Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#F7F9F7]/80">Calibration Index</span>
                        <span className="text-[#92FF5F] font-bold">{mandate.matchScore}% Match</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#082115] rounded-full overflow-hidden p-0.5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#92FF5F] via-[#BFF2F0] to-[#92FF5F] rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: `${mandate.matchScore}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mandate Competency Tags */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#CFF1D2]/70">
                      Core Specializations Evaluated:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {mandate.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#082115] text-[#BFF2F0] border border-[#92FF5F]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-4 border-t border-[#92FF5F]/20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#CFF1D2]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#92FF5F]" />
                      <span>{mandate.timelineDays} Days Avg Delivery</span>
                    </div>

                    <Link href={`/jobs`} className="group flex items-center gap-1 text-xs font-bold text-[#92FF5F] hover:underline uppercase tracking-wider font-mono">
                      <span>View Mandates</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
