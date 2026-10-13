"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, UserCheck, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DualGatewaySection() {
  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#E1E8E3] relative overflow-hidden">
      <div className="container-enterprise">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="eyebrow block mb-3">01 / AUDIENCE GATEWAY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
            Tailored representation for hiring leadership and tier-one talent.
          </h2>
          <p className="text-base text-[#3D614E] font-light mt-3 leading-relaxed max-w-2xl">
            Whether you require discreet executive search for an upcoming board mandate or confidential stewardship for your career horizon, we operate with rigorous data fidelity.
          </p>
        </motion.div>

        {/* Asymmetrical Architectural Portals */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Employer Portal: Flagship Deep Forest Architectural Pod (col-span-7) */}
          <motion.div 
            className="md:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#0F3B27] text-[#F7F9F7] border border-[#92FF5F]/25 shadow-elevated flex flex-col justify-between group relative overflow-hidden bracket-corners"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 24px 50px -10px rgba(15, 59, 39, 0.35)",
              transition: { type: "spring", stiffness: 350, damping: 22 }
            }}
          >
            {/* Ambient Kinetic Glow in Card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#92FF5F]/15 via-[#BFF2F0]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Top Tag & Header */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#92FF5F]/20 pb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#144931] text-[#92FF5F] border border-[#92FF5F]/30">
                  <Building2 className="h-3.5 w-3.5 text-[#92FF5F]" />
                  FOR ENTERPRISE BOARDS &amp; FOUNDERS
                </span>
                <span className="text-xs font-mono text-[#CFF1D2]/80">
                  RETAINED PARTNERSHIP
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight text-[#F7F9F7]">
                  Appoint transformational executive leadership.
                </h3>
                <p className="text-sm sm:text-base text-[#CFF1D2]/90 leading-relaxed font-light mt-3">
                  Direct partnership with our Managing Directors. We conduct exhaustive global market mapping, passive candidate calibration, and multi-stage competency profiling to resolve your most critical mandates.
                </p>
              </div>

              {/* Core Search SLA Deliverables */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-[#082115] border border-[#92FF5F]/15 text-xs text-[#F7F9F7]">
                  <div className="font-mono text-[#92FF5F] font-bold text-sm">18-Day Shortlist SLA</div>
                  <div className="text-[11px] text-[#CFF1D2]/70 mt-0.5">Average presentation of calibrated slate</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#082115] border border-[#92FF5F]/15 text-xs text-[#F7F9F7]">
                  <div className="font-mono text-[#92FF5F] font-bold text-sm">12-Month Warranty</div>
                  <div className="text-[11px] text-[#CFF1D2]/70 mt-0.5">Unconditional replacement guarantee</div>
                </div>
              </div>

              {/* Value Checklist */}
              <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#F7F9F7]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#92FF5F] shrink-0" />
                  <span>Dedicated Managing Director assigned to every search</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#92FF5F] shrink-0" />
                  <span>Zero off-limits conflicts in mid-market tech &amp; quantitative finance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#92FF5F] shrink-0" />
                  <span>Transparent weekly candidate calibration telemetry</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-[#92FF5F]/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <Link href="/employers">
                <Button 
                  size="lg" 
                  className="bg-[#92FF5F] text-[#0F3B27] hover:bg-[#F7F9F7] hover:text-[#0F3B27] rounded-full h-13 px-7 text-xs font-bold tracking-wider uppercase transition-all shadow-lime-glow group gap-2"
                >
                  <span>Submit Hiring Mandate</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link 
                href="/services/executive-search" 
                className="text-xs font-mono tracking-wider text-[#CFF1D2] hover:text-[#92FF5F] transition-colors"
              >
                Search Methodology &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Candidate Portal: Pure Soft White & Mint Frosted Pod (col-span-5) */}
          <motion.div 
            className="md:col-span-5 p-8 sm:p-12 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E1E8E3] shadow-card flex flex-col justify-between group relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ 
              y: -8, 
              borderColor: "rgba(15, 59, 39, 0.3)",
              boxShadow: "0 20px 40px -10px rgba(15, 59, 39, 0.08)",
              transition: { type: "spring", stiffness: 350, damping: 22 }
            }}
          >
            {/* Subtle Ice cyan wash at top */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#BFF2F0]/40 to-transparent rounded-full blur-xl pointer-events-none" />

            {/* Top Tag & Header */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#E1E8E3] pb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#CFF1D2]/50 text-[#0F3B27] border border-[#0F3B27]/10">
                  <UserCheck className="h-3.5 w-3.5 text-[#0F3B27]" />
                  FOR EXECUTIVE CANDIDATES
                </span>
                <span className="text-xs font-mono text-[#3D614E]">
                  CONFIDENTIAL VAULT
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight text-[#0F3B27]">
                  Discreet advisory for top-tier careers.
                </h3>
                <p className="text-sm sm:text-base text-[#3D614E] leading-relaxed font-light mt-3">
                  We maintain ongoing relationships with preeminent engineering directors, C-suite executives, and quantitative researchers. Your profile is handled with utmost discretion.
                </p>
              </div>

              {/* Zero-Spam Guarantee Box */}
              <div className="p-4 rounded-xl bg-[#F7F9F7] border border-[#E1E8E3] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F3B27] font-mono">
                  <Shield className="h-4 w-4 text-[#0F3B27]" />
                  <span>Candidate Privacy Oath:</span>
                </div>
                <p className="text-xs text-[#3D614E] leading-relaxed font-light">
                  We never submit candidate credentials to any enterprise client without prior, explicit written authorization for that specific mandate.
                </p>
              </div>

              {/* Value Checklist */}
              <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#0F3B27]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0F3B27] shrink-0" />
                  <span>Access to unadvertised, confidential mandates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0F3B27] shrink-0" />
                  <span>Objective compensation &amp; equity benchmarking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0F3B27] shrink-0" />
                  <span>Direct debriefs with hiring managing partners</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-[#E1E8E3] flex flex-wrap items-center justify-between gap-4 relative z-10">
              <Link href="/candidates">
                <Button 
                  size="lg" 
                  className="bg-[#0F3B27] text-[#92FF5F] hover:bg-[#082115] hover:text-[#92FF5F] rounded-full h-13 px-7 text-xs font-bold tracking-wider uppercase transition-colors shadow-sm group gap-2"
                >
                  <span>Submit Credentials</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link 
                href="/jobs" 
                className="text-xs font-mono tracking-wider text-[#3D614E] hover:text-[#0F3B27] transition-colors"
              >
                Browse Active Mandates &rarr;
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
