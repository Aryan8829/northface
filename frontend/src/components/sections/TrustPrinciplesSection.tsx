"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, EyeOff, Award } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Zero False-Positive Rigor",
    description: "We never pad a shortlist to demonstrate artificial activity. Every profile presented has undergone extensive technical and back-channel referencing.",
    badge: "Rigorous Calibration",
  },
  {
    icon: EyeOff,
    title: "Radical Discretion & Privacy",
    description: "Confidentiality is our primary currency. Searches and candidate dossiers are protected by strict Chinese walls and mutual NDA protocols.",
    badge: "Strict Non-Disclosure",
  },
  {
    icon: Scale,
    title: "Total Compensation Transparency",
    description: "We eliminate offer-stage surprises by publishing truthful salary bands, equity cap-table expectations, and bonus mechanics upfront.",
    badge: "Unvarnished Data",
  },
  {
    icon: Award,
    title: "12-Month Placement Guarantee",
    description: "We hold ourselves contractually accountable. If a placed executive departs within 12 months, we execute an immediate replacement search at zero fee.",
    badge: "Contractual Warranty",
  },
];

export function TrustPrinciplesSection() {
  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#E1E8E3]">
      <div className="container-enterprise">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="eyebrow block mb-3">07 // SEARCH ETHICS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
            Search ethics built on long-term accountability.
          </h2>
          <p className="text-sm sm:text-base text-[#3D614E] font-light mt-3 leading-relaxed">
            We reject the high-volume keyword matching that has commoditized talent acquisition. These four governance commitments anchor every mandate we accept.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E1E8E3] flex flex-col justify-between shadow-card hover:border-[#92FF5F] transition-all duration-300 group bracket-corners"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ 
                  y: -6, 
                  boxShadow: "0 20px 40px -10px rgba(15, 59, 39, 0.1)",
                  transition: { type: "spring", stiffness: 350, damping: 20 }
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <motion.div 
                      className="h-12 w-12 rounded-xl bg-[#0F3B27] flex items-center justify-center text-[#92FF5F] shadow-sm"
                      whileHover={{ rotate: 10, scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <span className="text-[10px] font-mono text-[#3D614E] uppercase tracking-wider">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-[#0F3B27] group-hover:text-[#164E34] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  
                  <p className="text-xs text-[#3D614E] leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E1E8E3] flex items-center justify-between text-[11px] font-mono text-[#0F3B27] font-semibold">
                  <span>Guaranteed SLA</span>
                  <span className="text-[#0F3B27]">&bull;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
