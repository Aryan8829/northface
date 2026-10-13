"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, DollarSign, Briefcase, ShieldCheck } from "lucide-react";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";

export function FeaturedJobsSection() {
  const featuredList = jobs.filter((j) => j.featured).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#E1E8E3]">
      <div className="container-enterprise">
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3">06 // CALIBRATED OPPORTUNITIES</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
              Featured leadership &amp; principal specialist mandates.
            </h2>
            <p className="text-[#3D614E] mt-3 text-sm sm:text-base font-light leading-relaxed">
              Explore active retained search mandates and confidential executive briefs currently open across our key practice areas.
            </p>
          </div>

          <Link href="/jobs">
            <Button 
              className="h-12 px-6 rounded-full border border-[#0F3B27]/20 bg-white/90 text-xs font-mono font-bold uppercase tracking-wider text-[#0F3B27] hover:bg-[#0F3B27] hover:text-[#92FF5F] gap-2 shrink-0 shadow-sm transition-all"
            >
              <span>View All 48 Active Roles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </motion.div>

        {/* Executive Mandate Dossier Cards with Staggered Entrance & Spring Hover */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredList.map((job, idx) => (
            <motion.div
              key={job.slug}
              className="p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E1E8E3] shadow-card flex flex-col justify-between group relative overflow-hidden transition-all duration-300 bracket-corners"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ 
                y: -8, 
                borderColor: "#92FF5F",
                boxShadow: "0 24px 45px -12px rgba(15, 59, 39, 0.12)",
                transition: { type: "spring", stiffness: 350, damping: 20 }
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F7F9F7] text-[#0F3B27] border border-[#E1E8E3]">
                    {job.department}
                  </span>
                  
                  {/* Active Radar Beacon in Signal Lime */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#0F3B27] font-semibold bg-[#CFF1D2]/50 px-2 py-0.5 rounded-full border border-[#0F3B27]/10">
                    <span className="h-2 w-2 rounded-full bg-[#92FF5F] shadow-[0_0_8px_#92FF5F]" />
                    Retained Mandate
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-serif text-[#0F3B27] group-hover:text-[#164E34] transition-colors leading-snug">
                    <Link href={`/jobs/${job.slug}`}>
                      {job.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#3D614E] mt-2 line-clamp-2 leading-relaxed font-light">
                    {job.description}
                  </p>
                </div>

                <div className="pt-2 space-y-2 border-t border-[#E1E8E3] text-xs text-[#3D614E]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#0F3B27] shrink-0" />
                    <span>{job.location} ({job.workplaceType})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-3.5 w-3.5 text-[#0F3B27] shrink-0" />
                    <span className="font-semibold text-[#0F3B27] font-mono">{job.salaryRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-[#0F3B27] shrink-0" />
                    <span>{job.experienceLevel} Tier &bull; {job.employmentType}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E1E8E3] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#3D614E]">Direct Board SLA</span>
                <Link 
                  href={`/jobs/${job.slug}`}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F3B27] group-hover:text-[#164E34] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Review Spec</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
