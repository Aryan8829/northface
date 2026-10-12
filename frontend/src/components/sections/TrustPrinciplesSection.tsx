"use client";

import React from "react";
import { ShieldCheck, Scale, EyeOff, Award } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Zero False-Positive Rigor",
    description: "We will never pad a shortlist to demonstrate activity. Every profile presented has undergone extensive technical and back-channel referencing.",
    accent: "#FF5B3D",
  },
  {
    icon: EyeOff,
    title: "Radical Discretion & Privacy",
    description: "Confidentiality is our primary currency. Searches and candidate dossiers are protected by strict Chinese walls and mutual NDA protocols.",
    accent: "#FF9A39",
  },
  {
    icon: Scale,
    title: "Total Compensation Transparency",
    description: "We eliminate offer-stage surprises by publishing truthful salary bands, equity cap-table expectations, and bonus mechanics upfront.",
    accent: "#E83379",
  },
  {
    icon: Award,
    title: "12-Month Placement Guarantee",
    description: "We hold ourselves accountable. If a placed leader departs within 12 months, we execute an immediate replacement search at zero fee.",
    accent: "#FFC84B",
  },
];

export function TrustPrinciplesSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#EAE8E5]">
      <div className="container-enterprise">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow block mb-3 text-[#FF5B3D]">07 / The Nexus Standard</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
            Search ethics built on long-term accountability.
          </h2>
          <p className="text-sm sm:text-base text-[#606064] font-light mt-3 leading-relaxed">
            We reject the high-volume keyword matching that has commoditized talent acquisition. These four commitments govern every search we accept.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] flex flex-col justify-between hover:border-[#FF5B3D]/50 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div
                    className="h-12 w-12 rounded-xl bg-white border border-[#EAE8E5] flex items-center justify-center mb-6 transition-colors"
                    style={{ color: p.accent }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-2.5 leading-snug text-[#202022]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#606064] leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
