"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, CheckCircle2, FileText, Target, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Mandate Calibration & Architecture",
    tagline: "Culture & Governance Blueprint",
    deliverable: "Calibrated Mandate Prospectus & Role Scorecard",
    timeline: "Days 1 – 3",
    icon: Target,
    description: "We meet with the Board, CEO, and lead investors to analyze unstated organizational dynamics, technical debt, and 24-month roadmap milestones before writing a single word of the role specification.",
    safeguard: "Ensures complete alignment on compensation bands and non-negotiable competencies.",
  },
  {
    number: "02",
    title: "Confidential Passive Mapping",
    tagline: "Exhaustive Market Intelligence",
    deliverable: "Comprehensive Passive Talent Landscape (150+ Candidates)",
    timeline: "Days 4 – 9",
    icon: Users,
    description: "We do not wait for inbound applications. We systematically map passive leaders delivering verified outcomes at peer institutions, checking strict off-limits conflicts.",
    safeguard: "Total discretion. Confidential outreach conducted directly by Managing Partners.",
  },
  {
    number: "03",
    title: "Multi-Panel Competency Defense",
    tagline: "Deep Technical & Leadership Vetting",
    deliverable: "Standardized Competency & Culture Fit Scorecards",
    timeline: "Days 10 – 15",
    icon: Shield,
    description: "Every candidate undergoes a 90-minute structured evaluation examining crisis leadership, architectural trade-offs, and board governance. We verify claims through backdoor reference cross-checks.",
    safeguard: "Zero unvetted resumes. Only verified top-quartile leaders advance.",
  },
  {
    number: "04",
    title: "Calibrated Finalist Slate Presentation",
    tagline: "18-Day Shortlist SLA",
    deliverable: "Dossier of 3–5 Calibrated Finalists with Compensation Specs",
    timeline: "Day 18",
    icon: FileText,
    description: "We present a tight dossier of 3 to 5 finalists with compensation expectations, notice periods, and motivational alignment fully pre-calibrated.",
    safeguard: "Guaranteed 18-day presentation SLA backed by contractual retainer credit.",
  },
  {
    number: "05",
    title: "Executive Onboarding & 12-Mo Warranty",
    tagline: "Retention & Succession Stewardship",
    deliverable: "90-Day Integration Check-Ins & 12-Month Warranty",
    timeline: "Months 1 – 12",
    icon: Award,
    description: "We maintain bi-weekly integration check-ins through Day 90 to ensure cultural assimilation and strategic execution. Backed by our signature 12-month free placement replacement guarantee.",
    safeguard: "94.8% 3-year retention rate across all placed leadership mandates.",
  },
];

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];
  const StepIcon = activeStep.icon;

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#E1E8E3] relative overflow-hidden" aria-labelledby="process-heading">
      <div className="container-enterprise">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="eyebrow block mb-3">05 // SEARCH PROTOCOLS</span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
            A 5-stage qualification architecture engineered for zero false positives.
          </h2>
          <p className="text-base text-[#3D614E] font-light mt-3 leading-relaxed max-w-2xl">
            Executive mis-hires cost companies up to 15x base compensation in disrupted roadmaps and attrition. We replace intuition with structured search rigor.
          </p>
        </motion.div>

        {/* =========================================================================
            CHRONOLOGICAL INTERACTIVE STORYTELLING TRACK
            ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* STEP SELECTOR LIST (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#3D614E] mb-2">
              Select Phase to Inspect Deliverables:
            </div>

            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#0F3B27] text-[#F7F9F7] border-[#92FF5F]/40 shadow-card"
                      : "bg-white/80 backdrop-blur-sm border-[#E1E8E3] text-[#0F3B27] hover:border-[#92FF5F]/60"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                        isActive
                          ? "bg-[#144931] text-[#92FF5F]"
                          : "bg-[#F7F9F7] text-[#0F3B27] border border-[#E1E8E3]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <div className="text-sm font-bold font-serif leading-snug">{step.title}</div>
                      <div className={`text-[11px] font-mono mt-0.5 ${isActive ? "text-[#CFF1D2]/80" : "text-[#3D614E]"}`}>
                        {step.timeline} &bull; {step.tagline}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      isActive
                        ? "text-[#92FF5F] translate-x-1"
                        : "text-[#3D614E] group-hover:translate-x-1 group-hover:text-[#0F3B27]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ACTIVE STAGE DEEP-DIVE DOSSIER (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="p-8 sm:p-12 rounded-2xl bg-[#0F3B27] text-[#F7F9F7] border border-[#92FF5F]/25 shadow-elevated bracket-corners space-y-7 relative overflow-hidden"
              >
                {/* Background Ambient Aura */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#92FF5F]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#92FF5F]/20 pb-5 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-[#144931] text-[#92FF5F] border border-[#92FF5F]/30">
                      <StepIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#92FF5F] uppercase block">
                        STAGE {activeStep.number} // PROTOCOL SPEC
                      </span>
                      <span className="text-xs font-mono text-[#CFF1D2]/80">
                        TIMELINE: {activeStep.timeline}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#92FF5F] bg-[#082115] px-3 py-1 rounded-full border border-[#92FF5F]/20">
                    SLA VERIFIED
                  </span>
                </div>

                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F7F9F7] leading-snug">
                    {activeStep.title}
                  </h3>
                  <p className="text-base text-[#CFF1D2]/90 leading-relaxed font-light">
                    {activeStep.description}
                  </p>
                </div>

                {/* Primary Deliverable Box */}
                <div className="p-4 rounded-xl bg-[#082115] border border-[#92FF5F]/20 space-y-1.5 relative z-10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#92FF5F] font-bold">
                    Primary Formal Mandate Deliverable:
                  </div>
                  <div className="text-sm font-semibold text-[#F7F9F7]">
                    {activeStep.deliverable}
                  </div>
                </div>

                {/* Search Safeguard */}
                <div className="pt-2 flex items-start gap-2.5 text-xs text-[#CFF1D2] relative z-10">
                  <ShieldCheck className="h-4 w-4 text-[#92FF5F] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#F7F9F7]">Governance Safeguard:</strong> {activeStep.safeguard}
                  </span>
                </div>

                <div className="pt-6 border-t border-[#92FF5F]/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
                  <div className="text-xs font-mono text-[#CFF1D2]/80">
                    Average Mandate Completion: <span className="text-[#92FF5F] font-bold">18 Days</span>
                  </div>

                  <Link href="/services/executive-search">
                    <Button 
                      className="bg-[#92FF5F] text-[#0F3B27] hover:bg-[#F7F9F7] rounded-full h-11 px-6 text-xs font-bold font-mono uppercase tracking-wider shadow-lime-glow gap-1.5"
                    >
                      <span>Search Methodology Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
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
