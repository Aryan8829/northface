"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { jobs } from "@/data/jobs";
import { JobsDirectory } from "@/components/jobs/JobsDirectory";
import { Button } from "@/components/ui/button";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#0F3B27]">
      {/* Editorial Header on Pure White Canvas */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-18 bg-transparent border-b border-[#E1E8E3] relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          <motion.div 
            className="max-w-3xl space-y-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3B27] text-xs font-mono font-bold uppercase tracking-wider text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm">
              <Briefcase className="h-3.5 w-3.5 text-[#92FF5F]" />
              <span>ACTIVE SEARCH HORIZON</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-[#0F3B27]">
              Verified leadership &amp; principal opportunities.
            </h1>

            <p className="text-base sm:text-lg text-[#3D614E] font-light leading-relaxed">
              Explore active retained searches across technology, quantitative finance, healthcare, and sovereign infrastructure. Every listed opportunity features verified compensation transparency and direct hiring partner access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-14 md:py-20 bg-transparent">
        <div className="container-enterprise">
          <JobsDirectory initialJobs={jobs} />

          {/* Stealth & Unadvertised Mandates Banner */}
          <motion.div 
            className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0F3B27] text-[#F7F9F7] border border-[#92FF5F]/25 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-8 bracket-corners relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#92FF5F]">
                <Lock className="h-3.5 w-3.5" />
                <span>Stealth &amp; Unadvertised Mandates</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F7F9F7]">
                Don&apos;t see the exact role you are targeting?
              </h3>
              <p className="text-xs sm:text-sm text-[#CFF1D2]/85 font-light leading-relaxed">
                Over 60% of our executive mandates are conducted under strict non-disclosure and are never publicly indexed. Register your profile to be considered privately when a confidential mandate matches your leadership trajectory.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#CFF1D2] pt-1">
                <ShieldCheck className="h-4 w-4 text-[#92FF5F]" />
                <span>Zero unsolicited distribution guarantee. Strictly confidential.</span>
              </div>
            </div>

            <Link href="/candidates#candidate-intake" className="shrink-0 relative z-10">
              <Button size="lg" className="h-12 px-7 rounded-full bg-[#92FF5F] text-[#0F3B27] hover:bg-[#F7F9F7] gap-2 font-mono font-bold text-xs uppercase tracking-wider shadow-lime-glow transition-all">
                <span>Submit Confidential Dossier</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
