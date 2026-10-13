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
    <main className="min-h-screen bg-transparent text-[#202022]">
      {/* Editorial Header on Pure White Canvas */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-18 bg-transparent border-b border-[#EAE8E5] relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          <motion.div 
            className="max-w-3xl space-y-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3EF] text-xs font-bold uppercase tracking-wider text-[#FF5B3D] border border-[#FF5B3D]/25 shadow-sm">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Active Search Mandates</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-[#202022]">
              Verified leadership &amp; specialist opportunities.
            </h1>

            <p className="text-base sm:text-lg text-[#606064] font-light leading-relaxed">
              Explore active retained searches across technology, quantitative finance, healthcare, and engineering. Every listed opportunity features verified compensation transparency and direct hiring team access.
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
            className="mt-16 p-8 sm:p-10 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EAE8E5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#FF5B3D]/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B3D]">
                <Lock className="h-3.5 w-3.5" />
                <span>Stealth &amp; Unadvertised Mandates</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#202022]">
                Don&apos;t see the exact role you are targeting?
              </h3>
              <p className="text-xs sm:text-sm text-[#606064] font-light leading-relaxed">
                Over 60% of our executive mandates are conducted under strict non-disclosure and are never publicly indexed. Register your profile to be considered privately when a confidential mandate matches your leadership trajectory.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#606064] pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Zero unsolicited distribution guarantee. Strictly confidential.</span>
              </div>
            </div>

            <Link href="/candidates#candidate-intake" className="shrink-0">
              <Button size="lg" className="h-11 px-6 rounded-sm bg-[#202022] text-white hover:bg-[#FF5B3D] gap-2 font-semibold text-xs shadow-md transition-all">
                <span>Submit Confidential Profile</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
