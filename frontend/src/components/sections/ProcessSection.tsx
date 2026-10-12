"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Understand & Calibrate",
    tagline: "Strategic Context Alignment",
    description: "We embed with boards, CEOs, and hiring executives to define not just the job description, but the asymmetric outcomes and leadership DNA required for success.",
  },
  {
    number: "02",
    title: "Exhaustive Market Mapping",
    tagline: "Unbiased Talent Discovery",
    description: "We map 100% of the addressable talent landscape—including passive executives not on job boards—surfacing proven operators through direct practitioner networks.",
  },
  {
    number: "03",
    title: "Rigorous Qualification",
    tagline: "Evidence-Based Scorecards",
    description: "Every candidate undergoes multi-dimensional assessment: verified past deliverables, technical peer review, psychometric calibration, and deep back-channel referencing.",
  },
  {
    number: "04",
    title: "Deliberate Shortlisting",
    tagline: "Precision Introductions",
    description: "Within 18 business days on average, we deliver a calibrated shortlist of 3 to 5 finalists with dossier briefings, compensation expectations, and motivation analysis.",
  },
  {
    number: "05",
    title: "Integration & Long-Term Fit",
    tagline: "Onboarding Guarantee",
    description: "Our engagement continues through offer negotiation, resignation navigation, and 360-degree integration check-ins backed by our 12-month placement replacement guarantee.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow block mb-3">04 / Search Methodology</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight mb-6">
            A 5-stage qualification protocol designed for zero false positives.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Executive hiring mistakes cost enterprises up to 15x base salary in missed execution. We engineer certainty into executive talent acquisition through systematic rigor.
          </p>
        </div>

        {/* 5-Stage Process Grid / Timeline */}
        <div className="grid md:grid-cols-5 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-xl bg-surface border border-border flex flex-col justify-between hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold font-serif text-accent/30 group-hover:text-accent transition-colors">
                    {step.number}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2 block">
                  {step.tagline}
                </span>
                
                <h3 className="text-lg font-bold font-serif mb-3 leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50 text-[11px] text-muted-foreground font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Stage Gate {idx + 1} Cleared</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-secondary border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-serif mb-1">Require a bespoke executive search timeline?</h4>
            <p className="text-sm text-muted-foreground">Our principal directors provide confidential consultation within 24 hours.</p>
          </div>
          <Link href="/contact?type=employer">
            <Button className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shrink-0">
              <span>Initiate a Search</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
