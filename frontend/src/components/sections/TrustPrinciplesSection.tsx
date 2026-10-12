"use client";

import React from "react";
import { ShieldCheck, Scale, EyeOff, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: ShieldCheck,
    title: "Zero False-Positive Rigor",
    description: "We do not flood hiring executives with unsolicited resumes. Every candidate profile submitted has passed deep technical and back-channel referencing.",
  },
  {
    icon: EyeOff,
    title: "Radical Discretion & Privacy",
    description: "Confidentiality is sacrosanct. Executive search mandates and candidate records are handled with end-to-end operational privacy and strict NDA protocols.",
  },
  {
    icon: Scale,
    title: "Truthful Compensation Benchmarking",
    description: "We eliminate opaque salary negotiations by publishing clear salary ranges, equity liquidity analysis, and verified total compensation frameworks.",
  },
  {
    icon: Award,
    title: "12-Month Placement Guarantee",
    description: "We stand behind our placements with full financial accountability. If an executive leaves within 12 months, we execute an immediate priority replacement at zero search fee.",
  },
];

export function TrustPrinciplesSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary border-b border-border">
      <div className="container-enterprise">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow block mb-3">06 / The Nexus Standard</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
            How we protect organizational value and career integrity.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-xl bg-surface border border-border flex flex-col justify-between hover:border-accent/40 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="h-12 w-12 rounded-lg bg-accent-soft text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/about" className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1.5">
            <span>Read our complete firm operating principles and ethics charter</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
