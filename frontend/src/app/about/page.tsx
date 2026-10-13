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
    <main className="min-h-screen bg-transparent text-[#202022]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="relative min-h-[50vh] flex items-center bg-transparent text-[#202022] overflow-hidden pt-32 pb-20 border-b border-[#EAE8E5]">
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Firm Overview" }]}
            className="mb-8 text-[#606064]"
          />
          <motion.div 
            className="max-w-4xl space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/25 shadow-sm">
              Our Ethos &amp; Philosophy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#202022] font-serif text-balance">
              The human element of transformational leadership.
            </h1>
            <p className="text-xl md:text-2xl text-[#606064] max-w-2xl leading-relaxed font-light text-balance">
              Nexus Talent Partners was founded on a simple premise: executive search should be defined by deep domain mastery, unyielding discretion, and human empathy—not high-volume resume scraping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Strip with Animated Counters */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-y border-[#EAE8E5] overflow-hidden">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#EAE8E5]">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#202022] mb-2">
                <AnimatedCounter value={2012} duration={1.2} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#606064]">Firm Established</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#FF5B3D] mb-2">
                <AnimatedCounter value={18} suffix=" Days" duration={1.5} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#606064]">Average Shortlist SLA</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#202022] mb-2">
                <AnimatedCounter value={850} suffix="+" duration={1.6} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#606064]">Placed Leaders</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#FF9A39] mb-2">
                <AnimatedCounter value={94} suffix="%" duration={1.7} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#606064]">3-Year Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow mb-3 block">Operating Principles</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              A standard of search that rejects shortcuts.
            </h2>
            <p className="text-[#606064] mt-4 text-base font-light">
              We operate as long-term advisors rather than transaction-driven recruiters. These commitments govern every mandate we accept.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EAE8E5] shadow-sm space-y-4 hover:border-[#FF5B3D]/40 transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-[#FFF3EF] flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#FF5B3D]" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#202022]">{item.title}</h3>
                  <p className="text-xs text-[#606064] leading-relaxed font-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Practice Desks */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-3 block">Global Footprint</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              Specialized desks in key capital centers.
            </h2>
            <p className="text-[#606064] mt-4 text-base font-light">
              Our partners are embedded in the world&apos;s leading venture, financial, and industrial hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {globalDesks.map((desk) => (
              <div key={desk.city} className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EAE8E5] shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B3D]">{desk.city}</span>
                  <h3 className="text-xl font-bold font-serif text-[#202022]">{desk.focus}</h3>
                  <p className="text-xs text-[#606064] leading-relaxed font-light">{desk.description}</p>
                </div>
                <div className="pt-4 border-t border-[#EAE8E5] text-[11px] text-[#606064] flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{desk.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container-enterprise">
          <div className="p-8 sm:p-14 rounded-2xl bg-white/90 backdrop-blur-md border border-[#EAE8E5] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow block">Connect With Our Directors</span>
              <h3 className="text-3xl font-bold font-serif text-[#202022]">
                Partner with Nexus Talent Partners today.
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Whether you are scoping a high-stakes executive replacement or seeking confidential representation for your own career trajectory, we are ready to assist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact?type=employer">
                <Button size="lg" className="h-12 px-7 rounded-sm bg-accent text-white hover:bg-accent/90 gap-2 font-semibold">
                  <span>Hire Talent</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-sm gap-2 font-semibold">
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
