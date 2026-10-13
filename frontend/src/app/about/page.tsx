"use client";

import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ShieldCheck, Users, Target, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

const corePrinciples = [
  {
    icon: Target,
    title: "Zero False-Positive Rigor",
    description: "We will never pad a shortlist to demonstrate activity. Every candidate presented has undergone an exhaustive multi-hour qualification against architecture, culture, and track record.",
  },
  {
    icon: ShieldCheck,
    title: "Absolute Discretion & Trust",
    description: "We operate under strict Chinese walls. Candidates are never shopped around; employer strategic initiatives and confidential departures are defended with military-grade NDAs.",
  },
  {
    icon: Award,
    title: "Full Compensation Transparency",
    description: "We eliminate offer-stage friction by calibrating base salaries, performance bonuses, and cap-table equity terms upfront—resulting in our 98% offer acceptance rate.",
  },
  {
    icon: Users,
    title: "12-Month Accountability Guarantee",
    description: "Our engagement doesn't end when an agreement is signed. We stay actively involved through the executive's first 90 days and back every retained search with a 12-month warranty.",
  },
];

const globalDesks = [
  {
    city: "San Francisco",
    focus: "Technology, Distributed Systems & Foundation AI",
    location: "555 California Street, Suite 4200",
    description: "Anchoring our West Coast practice for high-performance computing, kernel optimization, and frontier AI research leadership.",
  },
  {
    city: "New York",
    focus: "Quantitative Finance, FinTech & BioPharma",
    location: "One Vanderbilt Avenue, 38th Floor",
    description: "Specialized executive search for proprietary trading desks, algorithmic hedge funds, and clinical-stage biotechnology leaders.",
  },
  {
    city: "London",
    focus: "Interim Leadership & Pan-European Restructuring",
    location: "100 Bishopsgate, Level 22",
    description: "Deploying battle-tested interim operators and cross-border leadership suites across the UK, Germany, and Switzerland.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#0F3B27]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="relative min-h-[50vh] flex items-center bg-transparent text-[#0F3B27] overflow-hidden pt-32 pb-20 border-b border-[#E1E8E3]">
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Firm Overview" }]}
            className="mb-8 text-[#3D614E]"
          />
          <motion.div 
            className="max-w-4xl space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm">
              Our Ethos &amp; Philosophy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F3B27] font-serif text-balance">
              The human element of transformational leadership.
            </h1>
            <p className="text-xl md:text-2xl text-[#3D614E] max-w-2xl leading-relaxed font-light text-balance">
              Nexus Talent Partners was founded on a simple premise: executive search should be defined by deep domain mastery, unyielding discretion, and human empathy—not high-volume resume scraping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Strip with Animated Counters */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-y border-[#E1E8E3] overflow-hidden">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#E1E8E3]">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#0F3B27] mb-2">
                <AnimatedCounter value={2012} duration={1.2} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#3D614E]">Firm Established</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#0F3B27] mb-2 flex items-baseline justify-center gap-1">
                <AnimatedCounter value={18} suffix=" Days" duration={1.5} />
                <span className="w-2 h-2 rounded-full bg-[#92FF5F]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#3D614E]">Average Shortlist SLA</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#0F3B27] mb-2">
                <AnimatedCounter value={850} suffix="+" duration={1.6} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#3D614E]">Placed Leaders</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#0F3B27] mb-2">
                <AnimatedCounter value={94} suffix="%" duration={1.7} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#3D614E]">3-Year Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow mb-3 block">Operating Principles</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
              A standard of search that rejects shortcuts.
            </h2>
            <p className="text-[#3D614E] mt-4 text-base font-light">
              We operate as long-term advisors rather than transaction-driven recruiters. These commitments govern every mandate we accept.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] shadow-sm space-y-4 hover:border-[#0F3B27]/40 hover:shadow-xl transition-all bracket-corners">
                  <div className="h-12 w-12 rounded-xl bg-[#CFF1D2]/40 border border-[#0F3B27]/10 flex items-center justify-center text-[#0F3B27]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0F3B27]">{item.title}</h3>
                  <p className="text-xs text-[#3D614E] leading-relaxed font-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Practice Desks */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-3 block">Global Footprint</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
              Specialized desks in key capital centers.
            </h2>
            <p className="text-[#3D614E] mt-4 text-base font-light">
              Our partners are embedded in the world&apos;s leading venture, financial, and industrial hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {globalDesks.map((desk) => (
              <div key={desk.city} className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] shadow-sm space-y-4 flex flex-col justify-between bracket-corners hover:border-[#0F3B27]/40 hover:shadow-xl transition-all">
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F]">{desk.city}</span>
                  <h3 className="text-xl font-bold font-serif text-[#0F3B27]">{desk.focus}</h3>
                  <p className="text-xs text-[#3D614E] leading-relaxed font-light">{desk.description}</p>
                </div>
                <div className="pt-4 border-t border-[#E1E8E3] text-[11px] text-[#3D614E] flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0F3B27] shrink-0" />
                  <span>{desk.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestige CTA Section */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container-enterprise">
          <div className="p-8 sm:p-14 rounded-2xl bg-[#0F3B27] text-white border border-[#92FF5F]/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 bracket-corners">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow block text-[#92FF5F]">Connect With Our Directors</span>
              <h3 className="text-3xl font-bold font-serif text-white">
                Partner with Nexus Talent Partners today.
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed">
                Whether you are scoping a high-stakes executive replacement or seeking confidential representation for your own career trajectory, we are ready to assist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact?type=employer">
                <Button size="lg" className="h-12 px-7 rounded-sm bg-[#92FF5F] text-[#0F3B27] hover:bg-white transition-colors gap-2 font-semibold">
                  <span>Hire Talent</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-sm gap-2 font-semibold border-white/25 text-white hover:bg-white/10 transition-colors">
                  <span>Explore Jobs</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
