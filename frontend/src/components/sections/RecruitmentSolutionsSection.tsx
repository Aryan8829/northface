"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Layers,
  Users2,
  Clock4,
  Compass,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecruitmentSolutionsSection() {
  const [activePipelineStep, setActivePipelineStep] = useState(1);

  const pipelineSteps = [
    { num: "01", name: "Market Topology", detail: "Exhaustive competitor & passive talent universe mapping" },
    { num: "02", name: "Discreet Approach", detail: "Confidential outreach led directly by Managing Partners" },
    { num: "03", name: "Calibration Slate", detail: "Unvarnished shortlist presentation delivered within 18 days" },
    { num: "04", name: "Succession Care", detail: "12-month post-placement integration & retention audit" },
  ];

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#E1E8E3] relative overflow-hidden" aria-labelledby="solutions-heading">
      <div className="container-enterprise">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="eyebrow block mb-3">03 // SEARCH FRAMEWORKS</span>
          <h2 id="solutions-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
            Architectural talent solutions built for high-consequence mandates.
          </h2>
          <p className="text-base text-[#3D614E] font-light mt-3 leading-relaxed max-w-2xl">
            We reject the transactional agency model. Every search engagement is engineered with precision SLAs, proprietary market intelligence, and executive discretion.
          </p>
        </motion.div>

        {/* =========================================================================
            ASYMMETRIC ARCHITECTURAL SOLUTIONS MATRIX
            ========================================================================= */}
        <div className="grid grid-cols-12 gap-8 items-stretch">

          {/* FLAGSHIP HERO POD: RETAINED EXECUTIVE SEARCH (Col-span-12 lg:col-span-7) */}
          <motion.div
            className="col-span-12 lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#0F3B27] text-[#F7F9F7] border border-[#92FF5F]/25 shadow-elevated flex flex-col justify-between bracket-corners relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6, boxShadow: "0 24px 50px -10px rgba(15, 59, 39, 0.35)" }}
          >
            {/* Subtle Ethereal Signal Lime Wave inside Card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#92FF5F]/15 via-[#BFF2F0]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#92FF5F]/20 pb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#144931] text-[#92FF5F] border border-[#92FF5F]/30">
                  <Crown className="h-3.5 w-3.5 text-[#92FF5F]" />
                  FLAGSHIP PRACTICE
                </span>
                <span className="text-xs font-mono text-[#92FF5F]">
                  18-DAY MEAN SHORTLIST SLA
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F7F9F7] leading-tight">
                  Retained Executive Search &amp; Board Appointments
                </h3>
                <p className="text-sm sm:text-base text-[#CFF1D2]/90 leading-relaxed font-light mt-3">
                  Exhaustive, board-governed search for Chief Executive, Technology, Engineering, and Scientific officers. We map the entire passive talent landscape to appoint leaders who alter your enterprise trajectory.
                </p>
              </div>

              {/* Interactive Search Pipeline Stepper */}
              <div className="p-4 rounded-xl bg-[#082115] border border-[#92FF5F]/20 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#CFF1D2] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#92FF5F] animate-pulse" />
                    Interactive Search Methodology:
                  </span>
                  <span className="text-[#92FF5F] font-bold">Phase {pipelineSteps[activePipelineStep].num} / 04</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {pipelineSteps.map((step, idx) => {
                    const isActive = idx === activePipelineStep;
                    return (
                      <button
                        key={step.num}
                        onClick={() => setActivePipelineStep(idx)}
                        className={`text-left p-2.5 rounded-lg border transition-all ${
                          isActive
                            ? "bg-[#144931] border-[#92FF5F] text-[#F7F9F7]"
                            : "bg-[#0F3B27]/60 border-[#92FF5F]/15 text-[#CFF1D2]/60 hover:border-[#92FF5F]/30"
                        }`}
                      >
                        <div className={`text-[10px] font-mono font-bold ${isActive ? "text-[#92FF5F]" : ""}`}>
                          {step.num}
                        </div>
                        <div className="text-[11px] font-semibold truncate mt-0.5">
                          {step.name}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="text-xs text-[#CFF1D2]/90 pt-1 font-light italic">
                  &ldquo;{pipelineSteps[activePipelineStep].detail}&rdquo;
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-[#92FF5F]/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#92FF5F]">
                <ShieldCheck className="h-4 w-4" />
                <span>12-Month Unconditional Replacement Guarantee</span>
              </div>

              <Link href="/services/executive-search">
                <Button 
                  size="sm" 
                  className="bg-[#92FF5F] text-[#0F3B27] hover:bg-[#F7F9F7] rounded-full px-5 text-xs font-bold uppercase tracking-wider font-mono shadow-lime-glow gap-1.5"
                >
                  <span>Explore Practice</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* SECONDARY POD: EMBEDDED TALENT PARTNER / RPO (Col-span-12 lg:col-span-5) */}
          <motion.div
            className="col-span-12 lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white via-[#BFF2F0]/25 to-white backdrop-blur-md border border-[#BFF2F0] shadow-card flex flex-col justify-between relative overflow-hidden group bracket-corners-ice"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6, borderColor: "#0F3B27" }}
          >
            {/* Soft Ice wash */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#BFF2F0]/40 to-transparent rounded-full blur-xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#BFF2F0] pb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#BFF2F0] text-[#0F3B27] border border-[#0F3B27]/15">
                  <Layers className="h-3.5 w-3.5 text-[#0F3B27]" />
                  SPRINT SCALING
                </span>
                <span className="text-xs font-mono text-[#3D614E]">
                  PREDICTABLE MONTHLY
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-[#0F3B27] leading-tight">
                  Embedded Talent Partner (RPO)
                </h3>
                <p className="text-sm text-[#3D614E] leading-relaxed font-light mt-2.5">
                  Senior recruitment partners embed directly into your Slack, Greenhouse, and engineering rituals. Ideal for venture-backed hypergrowth needing 10–50 elite technical hires.
                </p>
              </div>

              {/* Telemetry Metric Pod */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/90 border border-[#BFF2F0] shadow-sm">
                <div>
                  <div className="text-xl font-bold font-serif text-[#0F3B27]">38% Lower</div>
                  <div className="text-[11px] font-mono text-[#3D614E]">Cost-per-hire vs agency</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-[#0F3B27]">48 Hours</div>
                  <div className="text-[11px] font-mono text-[#3D614E]">Team onboarding SLA</div>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-[#0F3B27]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0F3B27]" />
                  <span>Full ownership of all candidate IP and applicant pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0F3B27]" />
                  <span>Custom interview rubrics &amp; technical assessment calibration</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#BFF2F0] flex items-center justify-between relative z-10">
              <span className="text-xs font-mono text-[#3D614E]">Full Squad Deployment</span>
              <Link href="/services/rpo" className="text-xs font-bold text-[#0F3B27] hover:text-[#3D614E] inline-flex items-center gap-1 font-mono uppercase tracking-wider">
                View RPO Model &rarr;
              </Link>
            </div>
          </motion.div>

          {/* POD 3: PERMANENT SPECIALIST PLACEMENT (Vibrant Warm Orange Identity) */}
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-7 rounded-2xl bg-gradient-to-br from-white via-[#FF7036]/10 to-white backdrop-blur-md border border-[#FF7036]/30 shadow-card flex flex-col justify-between group bracket-corners-orange"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6, borderColor: "#FF7036", boxShadow: "0 20px 40px -10px rgba(255, 112, 54, 0.2)" }}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-lg bg-[#FF7036] text-white inline-block shadow-sm">
                  <Users2 className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-mono font-bold text-[#FF7036] uppercase">Direct Placement</span>
              </div>
              <h4 className="text-xl font-bold font-serif text-[#0F3B27]">Permanent Technical Placement</h4>
              <p className="text-xs text-[#3D614E] leading-relaxed font-light">
                Direct-hire search for rare technical individual contributors: Staff &amp; Principal Distributed Systems Engineers, Quantitative Researchers, and Security Architects.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#FF7036]/20">
              <Link href="/services/permanent-placement" className="text-xs font-bold text-[#FF7036] hover:text-[#E85D26] inline-flex items-center gap-1 font-mono hover:underline">
                Explore Specialists &rarr;
              </Link>
            </div>
          </motion.div>

          {/* POD 4: INTERIM LEADERSHIP & TURNAROUNDS (Mint Celadon Identity) */}
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-7 rounded-2xl bg-gradient-to-br from-white via-[#CFF1D2]/25 to-white backdrop-blur-md border border-[#CFF1D2] shadow-card flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6, borderColor: "#0F3B27" }}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-lg bg-[#CFF1D2] text-[#0F3B27] inline-block font-bold">
                  <Clock4 className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-mono font-bold text-[#0F3B27] uppercase">72-Hour Mobilization</span>
              </div>
              <h4 className="text-xl font-bold font-serif text-[#0F3B27]">Interim Executive Deployment</h4>
              <p className="text-xs text-[#3D614E] leading-relaxed font-light">
                Vetted former CTOs, CISOs, and COOs mobilized within 72 hours to steer critical transitions, post-acquisition carve-outs, or turnaround initiatives.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#CFF1D2]">
              <Link href="/services/interim-contract" className="text-xs font-bold text-[#0F3B27] inline-flex items-center gap-1 font-mono hover:underline">
                Interim Solutions &rarr;
              </Link>
            </div>
          </motion.div>

          {/* POD 5: MARKET INTELLIGENCE & ORG ADVISORY (Ice & Forest Identity) */}
          <motion.div
            className="col-span-12 lg:col-span-4 p-7 rounded-2xl bg-gradient-to-br from-white via-[#BFF2F0]/20 to-white backdrop-blur-md border border-[#E1E8E3] shadow-card flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6, borderColor: "#0F3B27" }}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-lg bg-[#0F3B27] text-[#92FF5F] inline-block">
                  <Compass className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-mono text-[#3D614E] uppercase">Board Intelligence</span>
              </div>
              <h4 className="text-xl font-bold font-serif text-[#0F3B27]">Compensation &amp; Org Advisory</h4>
              <p className="text-xs text-[#3D614E] leading-relaxed font-light">
                Unvarnished compensation benchmarking, equity grant modeling, and organizational design blueprints for board compensation committees.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E1E8E3]">
              <Link href="/reports" className="text-xs font-bold text-[#0F3B27] inline-flex items-center gap-1 font-mono hover:underline">
                Market Reports &rarr;
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
