"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <section className="py-24 md:py-32 bg-white border-t border-[#EAE8E5]">
      <div className="container-enterprise">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow block mb-3 text-[#FF9A39]">04 / Practice Desks</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
            Domain expertise led by former industry practitioners.
          </h2>
          <p className="text-sm sm:text-base text-[#606064] font-light mt-3 leading-relaxed">
            Our search directors have built systems, traded markets, and managed clinical trials. We understand the unwritten technical nuances that separate average talent from industry outliers.
          </p>
        </div>

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
                  className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#FAF9F7] border-[#EAE8E5] shadow-sm"
                      : "bg-white border-transparent hover:bg-[#FAF9F7]/60"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-4">
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

                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-transform ${
                      isActive ? "scale-100" : "scale-0 opacity-0"
                    }`}
                    style={{ backgroundColor: practice.accent }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Card (col-span-6) */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E5]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white border border-[#EAE8E5] flex items-center justify-center text-[#202022]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#202022] font-serif">{current.name}</h4>
                    <span className="text-[11px] text-[#606064]">{current.mandates}</span>
                  </div>
                </div>

                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#EAE8E5]"
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
                  {current.roles.map((role) => (
                    <div
                      key={role}
                      className="p-3 rounded-lg bg-white border border-[#EAE8E5] text-xs font-medium text-[#202022] flex items-start gap-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5B3D] shrink-0 mt-0.5" />
                      <span className="leading-snug">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAE8E5] flex items-center justify-between">
                <Link
                  href={`/industries/${current.slug}`}
                  className="text-xs font-bold text-[#202022] hover:text-[#FF5B3D] transition-colors flex items-center gap-1.5"
                >
                  <span>View Practice Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href="/contact?type=employer"
                  className="text-xs font-semibold text-[#FF5B3D] hover:underline"
                >
                  Inquire With Sector Lead &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
