import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { jobs } from "@/data/jobs";
import { JobsDirectory } from "@/components/jobs/JobsDirectory";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Verified Executive & Specialist Mandates | Nexus Talent Partners",
  description: "Browse verified retained executive search mandates, quantitative trading roles, and specialist engineering appointments. Total salary transparency and direct board access.",
};

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-white text-[#202022]">
      {/* Editorial Header on Pure White Canvas */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-18 bg-white border-b border-[#EAE8E5] relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3EF] text-xs font-bold uppercase tracking-wider text-[#FF5B3D] border border-[#FF5B3D]/20">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Active Search Mandates</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-[#202022]">
              Verified leadership &amp; specialist opportunities.
            </h1>

            <p className="text-base sm:text-lg text-[#606064] font-light leading-relaxed">
              Explore active retained searches across technology, quantitative finance, healthcare, and engineering. Every listed opportunity features verified compensation transparency and direct hiring team access.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-enterprise">
          <JobsDirectory initialJobs={jobs} />

          {/* Stealth & Unadvertised Mandates Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] flex flex-col md:flex-row items-center justify-between gap-8">
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
              <Button size="lg" className="h-11 px-6 rounded-sm bg-[#202022] text-white hover:bg-[#FF5B3D] gap-2 font-semibold text-xs shadow-sm transition-colors">
                <span>Submit Confidential Profile</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
