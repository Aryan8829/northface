"use client";

import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Organizational Calibration",
    tagline: "Culture & Mandate Blueprint",
    description: "We meet with the board and engineering architects to analyze implicit organizational dynamics, technical debt, and 24-month roadmap milestones.",
  },
  {
    number: "02",
    title: "Confidential Market Mapping",
    tagline: "Passive Headhunting",
    description: "We do not wait for inbound job applications. We conduct systematic outbound mapping of non-active leaders delivering results at peer institutions.",
  },
  {
    number: "03",
    title: "Multi-Panel Defense",
    tagline: "Technical & Leadership Vetting",
    description: "Every candidate undergoes a 90-minute structured evaluation examining real architectural trade-offs, crisis management, and scaling philosophies.",
  },
  {
    number: "04",
    title: "Calibrated Shortlist",
    tagline: "18-Day Delivery SLA",
    description: "We deliver a tight dossier of 3 to 5 finalists with compensation expectations and motivational calibration already resolved.",
  },
  {
    number: "05",
    title: "Onboarding Stewardship",
    tagline: "12-Month Guarantee",
    description: "Bi-weekly integration check-ins through Day 90. Backed by our signature 12-month free placement replacement warranty.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#EAE8E5] relative overflow-hidden">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow block mb-3 text-[#E83379]">05 / Qualification Architecture</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
            A 5-stage qualification protocol engineered for zero false positives.
          </h2>
          <p className="text-sm sm:text-base text-[#606064] font-light mt-3 leading-relaxed">
            Executive hiring mistakes cost companies up to 15x base salary in missed execution and team attrition. We replace intuition with structured search rigor.
          </p>
        </div>

        {/* Connected Process Trace Line (Desktop) */}
        <div className="relative mb-12">
          {/* SVG Connector Stroke */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 pointer-events-none select-none z-0" aria-hidden="true">
            <svg className="w-full h-4" viewBox="0 0 1000 10" fill="none" preserveAspectRatio="none">
              <line x1="0" y1="5" x2="1000" y2="5" stroke="#EAE8E5" strokeWidth="2" strokeDasharray="4 6" />
              <line x1="0" y1="5" x2="1000" y2="5" stroke="#E83379" strokeWidth="1.5" strokeOpacity="0.4" />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] hover:border-[#E83379]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-serif text-[#E83379] group-hover:scale-105 transition-transform">
                      {step.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#E83379]/40 group-hover:bg-[#E83379] transition-colors" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#606064] block mb-1">
                      {step.tagline}
                    </span>
                    <h3 className="text-base font-bold font-serif text-[#202022] leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#606064] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accountability Banner */}
        <div className="p-7 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-white border border-[#EAE8E5] flex items-center justify-center text-[#E83379] shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#202022]">The 12-Month Placement Warranty</h4>
              <p className="text-xs text-[#606064] font-light">
                If an executive leaves within 12 months, we initiate a replacement search immediately at zero additional professional fee.
              </p>
            </div>
          </div>

          <Link href="/employers">
            <Button variant="outline" className="h-10 px-5 rounded-sm border-[#EAE8E5] text-xs font-semibold text-[#202022] hover:bg-white gap-2 shrink-0">
              <span>View Search SLAs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
