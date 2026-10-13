"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, TrendingUp, HeartPulse, Zap, CheckCircle2, DollarSign, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const practices = [
  {
    id: "tech",
    name: "Artificial Intelligence & Distributed Systems",
    shortName: "AI & Systems",
    slug: "technology",
    icon: Cpu,
    headline: "Architects of foundation models, high-performance distributed platforms, and sovereign infrastructure.",
    leadPartner: "Dr. Elena Rostova",
    partnerTitle: "Managing Partner, Technology & AI",
    slaDays: 16,
    avgComp: "$580,000",
    hubs: "San Francisco, London, Seattle",
    roles: [
      {
        title: "VP of Machine Learning Infrastructure",
        pedigree: "Ex-Google DeepMind / Anthropic / Meta FAIR",
        comp: "$650k – $950k + Equity",
      },
      {
        title: "Principal Distributed Systems Architect",
        pedigree: "Kernel/Rust/C++ HPC Background",
        comp: "$450k – $650k + Carry",
      },
      {
        title: "Chief Information Security Officer (CISO)",
        pedigree: "Enterprise Zero-Trust / Hyperscale",
        comp: "$500k – $750k + Stock",
      },
      {
        title: "Head of Foundation Model Research",
        pedigree: "Top NeurIPS / ICML Publications",
        comp: "$800k – $1.2M Total",
      },
    ],
  },
  {
    id: "finance",
    name: "Quantitative Finance & Algorithmic Trading",
    shortName: "Quantitative Finance",
    slug: "financial-services",
    icon: TrendingUp,
    headline: "Alpha researchers, ultra-low latency execution leads, and systematic portfolio directors.",
    leadPartner: "Marcus Vance",
    partnerTitle: "Managing Partner, Quantitative Capital",
    slaDays: 14,
    avgComp: "$850,000",
    hubs: "New York, Zurich, Chicago",
    roles: [
      {
        title: "Head of Quantitative Alpha Research",
        pedigree: "Ex-Citadel / Millennium / Point72",
        comp: "$1.0M – $2.5M Base + PnL",
      },
      {
        title: "Ultra-Low Latency C++ Trading Lead",
        pedigree: "Sub-microsecond FPGA / Kernel bypass",
        comp: "$550k – $900k + Bonus",
      },
      {
        title: "Chief Risk Officer (CRO) — Multi-Strategy",
        pedigree: "Ex-Tier 1 Investment Bank / Prop Fund",
        comp: "$700k – $1.1M Total",
      },
      {
        title: "Systematic Futures & FX Portfolio Manager",
        pedigree: "Verifiable 5-year Sharpe > 2.5 Track Record",
        comp: "Direct PnL Formulaic Split",
      },
    ],
  },
  {
    id: "health",
    name: "Life Sciences, BioTech & Therapeutics",
    shortName: "Life Sciences & BioTech",
    slug: "healthcare",
    icon: HeartPulse,
    headline: "Translational medicine pioneers, computational biology directors, and clinical development leaders.",
    leadPartner: "Dr. Sarah Chen, MD",
    partnerTitle: "Managing Partner, Therapeutics Practice",
    slaDays: 19,
    avgComp: "$520,000",
    hubs: "Boston, Basel, San Francisco",
    roles: [
      {
        title: "Chief Scientific Officer (CSO)",
        pedigree: "Phase II/III Clinical Stage Track Record",
        comp: "$550k – $800k + Equity",
      },
      {
        title: "VP of Computational Biology & Genomics",
        pedigree: "Ex-Broad Institute / Genentech",
        comp: "$420k – $600k + Options",
      },
      {
        title: "Chief Medical Officer (CMO)",
        pedigree: "Oncology / Immunology Specialist MD",
        comp: "$600k – $850k + Equity",
      },
      {
        title: "Head of Global Regulatory Affairs",
        pedigree: "Direct FDA / EMA Drug Approval History",
        comp: "$400k – $550k + Equity",
      },
    ],
  },
  {
    id: "cleantech",
    name: "Industrial Systems & Sovereign Infrastructure",
    shortName: "Industrial & Energy",
    slug: "energy",
    icon: Zap,
    headline: "Executive leaders scaling grid storage, automated robotics, and sovereign manufacturing hubs.",
    leadPartner: "Julian Thorne",
    partnerTitle: "Managing Partner, Industrial Transition",
    slaDays: 18,
    avgComp: "$490,000",
    hubs: "Frankfurt, Austin, Singapore",
    roles: [
      {
        title: "Chief Operating Officer — Hyperscale Fab",
        pedigree: "Semiconductor / Gigafactory Leadership",
        comp: "$500k – $750k + Carry",
      },
      {
        title: "VP of Robotics & Autonomous Hardware",
        pedigree: "Ex-Tesla / Boston Dynamics / Kuka",
        comp: "$450k – $650k + Equity",
      },
      {
        title: "Head of Energy Storage & Grid Systems",
        pedigree: "Utility Scale Battery Storage Specialist",
        comp: "$380k – $520k + Equity",
      },
      {
        title: "Chief Supply Chain & Sovereign Sourcing Officer",
        pedigree: "Tier-1 Global Dual-Source Resilience",
        comp: "$420k – $600k + Equity",
      },
    ],
  },
];

export function PracticeAreasSection() {
  const [activeTab, setActiveTab] = useState(practices[0].id);
  const activePractice = practices.find((p) => p.id === activeTab) || practices[0];
  const Icon = activePractice.icon;

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#E1E8E3] relative overflow-hidden" aria-labelledby="practices-heading">
      <div className="container-enterprise">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="eyebrow block mb-3">04 // DOMAIN VERTICALS</span>
          <h2 id="practices-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
            Specialized practice desks led by former industry operators.
          </h2>
          <p className="text-base text-[#3D614E] font-light mt-3 leading-relaxed max-w-2xl">
            We do not employ generalist headhunters. Every search desk is anchored by partners who speak the domain language, evaluate technical depth, and command direct access to passive candidates.
          </p>
        </motion.div>

        {/* =========================================================================
            INTERACTIVE PRACTICE TAB NAVIGATOR
            ========================================================================= */}
        <div className="flex flex-wrap gap-2.5 p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E1E8E3] shadow-sm mb-12 max-w-fit">
          {practices.map((practice) => {
            const isActive = practice.id === activeTab;
            const TabIcon = practice.icon;

            return (
              <button
                key={practice.id}
                onClick={() => setActiveTab(practice.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "text-[#F7F9F7]"
                    : "text-[#3D614E] hover:text-[#0F3B27] hover:bg-[#F7F9F7]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePracticeMarker"
                    className="absolute inset-0 bg-[#0F3B27] rounded-xl shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <TabIcon className={`h-4 w-4 relative z-10 ${isActive ? "text-[#92FF5F]" : "text-[#0F3B27]"}`} />
                <span className="relative z-10">{practice.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            STORYTELLING PRACTICE DOSSIER DECK (ANIMATE PRESENCE)
            ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePractice.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            {/* LEFT COLUMN: PRACTICE BLUEPRINT & ADVISORY DESK (Spans 5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-[#0F3B27] text-[#F7F9F7] border border-[#92FF5F]/25 shadow-elevated bracket-corners space-y-7 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#92FF5F]/20 pb-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-[#92FF5F]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#92FF5F]">PRACTICE BENCHMARK</span>
                </div>
                <span className="text-[11px] font-mono text-[#CFF1D2]/80 uppercase">
                  ACTIVE DESK
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F7F9F7] leading-snug">
                  {activePractice.name}
                </h3>
                <p className="text-sm text-[#CFF1D2]/90 leading-relaxed font-light mt-3">
                  {activePractice.headline}
                </p>
              </div>

              {/* Practice Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-[#082115] border border-[#92FF5F]/15">
                  <div className="text-[11px] font-mono text-[#CFF1D2]/70 uppercase">Mean Placement SLA</div>
                  <div className="text-xl font-bold font-serif text-[#92FF5F] mt-0.5">{activePractice.slaDays} Days</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#082115] border border-[#92FF5F]/15">
                  <div className="text-[11px] font-mono text-[#CFF1D2]/70 uppercase">Avg Compensation</div>
                  <div className="text-xl font-bold font-serif text-[#92FF5F] mt-0.5">{activePractice.avgComp}</div>
                </div>
              </div>

              {/* Practice Lead Partner */}
              <div className="p-4 rounded-xl bg-[#144931]/80 border border-[#92FF5F]/20 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#CFF1D2]/70">Practice Managing Director:</div>
                <div className="text-sm font-bold text-[#F7F9F7]">{activePractice.leadPartner}</div>
                <div className="text-xs text-[#CFF1D2]/80 font-light">{activePractice.partnerTitle}</div>
                <div className="text-[11px] font-mono text-[#92FF5F] pt-1">Primary Hubs: {activePractice.hubs}</div>
              </div>

              <div className="pt-2">
                <Link href={`/industries/${activePractice.slug}`}>
                  <Button 
                    className="w-full bg-[#92FF5F] text-[#0F3B27] hover:bg-[#F7F9F7] rounded-full h-12 text-xs font-bold font-mono uppercase tracking-wider shadow-lime-glow gap-2"
                  >
                    <span>View Complete Practice Intelligence</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: ACTIVE TARGET ROLE PROFILES (Spans 7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#3D614E] pb-1 flex items-center justify-between">
                <span>Active Specializations Currently Calibrated:</span>
                <span className="text-[#0F3B27] font-bold">4 Verified Mandates</span>
              </div>

              <div className="grid gap-3.5">
                {activePractice.roles.map((role, idx) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E1E8E3] shadow-card hover:border-[#92FF5F] transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-lg">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F3B27]" />
                        <h4 className="text-base sm:text-lg font-bold font-serif text-[#0F3B27] group-hover:text-[#164E34] transition-colors">
                          {role.title}
                        </h4>
                      </div>
                      <div className="text-xs text-[#3D614E] font-light">
                        Pedigree: <span className="font-semibold text-[#0F3B27]">{role.pedigree}</span>
                      </div>
                      <div className="text-xs font-mono text-[#0F3B27] font-bold">
                        Benchmark: {role.comp}
                      </div>
                    </div>

                    <Link href={`/jobs`} className="shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-[#0F3B27]/20 text-[#0F3B27] hover:bg-[#0F3B27] hover:text-[#92FF5F] text-xs font-mono tracking-wider transition-colors"
                      >
                        Request Spec &rarr;
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
