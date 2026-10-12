"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, TrendingUp, HeartPulse, Zap, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

const practices = [
  {
    id: "tech",
    name: "Technology, AI & Cloud",
    slug: "technology",
    icon: Cpu,
    headline: "Architects of foundation models, distributed platforms, and hyper-scale infrastructure.",
    roles: ["VP / Head of Machine Learning", "Principal Distributed Systems Architect", "Chief Information Security Officer (CISO)", "Head of Developer Platform"],
    mandates: "320+ Executive & Staff Placements",
  },
  {
    id: "finance",
    name: "Quantitative Finance & FinTech",
    slug: "financial-services",
    icon: TrendingUp,
    headline: "Alpha researchers, low-latency execution developers, and algorithmic risk leadership.",
    roles: ["Head of Quantitative Research", "Senior Low-Latency C++ Engineer", "Chief Risk Officer (CRO)", "Head of Institutional Compliance"],
    mandates: "210+ Quant & Trading Placements",
  },
  {
    id: "health",
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    icon: HeartPulse,
    headline: "Physician executives, clinical development directors, and regulatory affairs pioneers.",
    roles: ["Chief Medical Officer (CMO)", "VP Clinical Development & Oncology", "Head of Computational Biology", "Director of Regulatory Strategy"],
    mandates: "140+ BioPharma Placements",
  },
  {
    id: "cleantech",
    name: "Industrial & CleanTech",
    slug: "energy",
    icon: Zap,
    headline: "Engineers and operational executives scaling battery storage, smart grids, and robotics.",
    roles: ["VP Grid Operations", "Principal Battery Chemistry Scientist", "Head of Autonomous Systems", "Director of Sustainable Supply Chains"],
    mandates: "95+ Energy Infrastructure Placements",
  },
  {
    id: "operations",
    name: "Enterprise Operations",
    slug: "manufacturing",
    icon: Factory,
    headline: "Operational architects transforming procurement, lean manufacturing, and global logistics.",
    roles: ["Chief Operating Officer (COO)", "VP Global Logistics", "Director of Continuous Improvement", "Head of Sourcing & Procurement"],
    mandates: "115+ Enterprise Operations Placements",
  },
];

export function PracticeAreasSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = practices[activeTab];
  const Icon = current.icon;

  return (
    <section className="py-24 md:py-32 bg-secondary border-b border-border">
      <div className="container-enterprise">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow block mb-3">03 / Practice Areas</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
            Specialized search directors embedded in your domain.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Practice List */}
          <div className="lg:col-span-5 space-y-2">
            {practices.map((practice, index) => {
              const PIcon = practice.icon;
              const isActive = index === activeTab;
              return (
                <button
                  key={practice.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-full p-5 rounded-xl text-left transition-all duration-200 flex items-center justify-between group border",
                    isActive
                      ? "bg-surface text-foreground border-accent/40 shadow-sm"
                      : "bg-transparent text-muted-foreground border-transparent hover:bg-surface/50 hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "h-10 w-10 rounded-lg flex items-center justify-center transition-colors",
                      isActive ? "bg-accent text-white" : "bg-secondary text-muted-foreground group-hover:text-foreground"
                    )}>
                      <PIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-base block">{practice.name}</span>
                      <span className="text-xs text-muted-foreground">{practice.mandates}</span>
                    </div>
                  </div>
                  <ArrowRight className={cn(
                    "h-4 w-4 transition-transform",
                    isActive ? "text-accent translate-x-1" : "opacity-0 group-hover:opacity-100"
                  )} />
                </button>
              );
            })}
          </div>

          {/* Right: Rich Domain Detail Preview Panel */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-10 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <div className="h-12 w-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Active Practice Desk</span>
                <h3 className="text-2xl font-bold font-serif">{current.name}</h3>
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
              {current.headline}
            </p>

            <div className="space-y-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                Representative Placed Mandates:
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {current.roles.map((role) => (
                  <div key={role} className="p-3.5 rounded-lg bg-background border border-border text-xs font-semibold text-foreground flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">{current.mandates} across North America &amp; Europe</span>
              <Link href={`/industries/${current.slug}`} className="text-xs font-bold text-accent hover:underline flex items-center gap-1.5">
                <span>View Practice Capabilities</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
