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
    <main className="min-h-screen bg-background">
      {/* Editorial Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[130px] pointer-events-none" />

        <div className="container-enterprise relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-accent border border-white/15">
              <Briefcase className="h-3 w-3" />
              <span>Active Search Mandates</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-white">
              Verified leadership &amp; specialist opportunities.
            </h1>

            <p className="text-lg text-primary-foreground/80 font-light leading-relaxed">
              Explore active retained searches across technology, quantitative finance, healthcare, and engineering. Every listed opportunity features verified compensation transparency and direct hiring team access.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-enterprise">
          <JobsDirectory initialJobs={jobs} />

          {/* Confidential Search Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-secondary/50 border border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Lock className="h-3.5 w-3.5" />
                <span>Stealth &amp; Unadvertised Mandates</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-foreground">
                Don&apos;t see the exact role you are targeting?
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Over 60% of our executive mandates are conducted under strict non-disclosure and are never publicly indexed. Register your profile to be considered privately when a confidential mandate matches your leadership trajectory.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Zero unsolicited distribution guarantee. Strictly confidential.</span>
              </div>
            </div>

            <Link href="/candidates#candidate-intake" className="shrink-0">
              <Button size="lg" className="h-12 px-7 rounded-sm bg-accent text-white hover:bg-accent/90 gap-2 font-semibold">
                <span>Submit Confidential Profile</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
