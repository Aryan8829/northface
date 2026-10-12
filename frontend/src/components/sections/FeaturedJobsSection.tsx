"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, DollarSign, Briefcase } from "lucide-react";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";

export function FeaturedJobsSection() {
  const featuredList = jobs.filter((j) => j.featured).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#EAE8E5]">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3 text-[#FF5B3D]">06 / Verified Mandates</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              Featured leadership &amp; specialist opportunities.
            </h2>
            <p className="text-[#606064] mt-3 text-sm sm:text-base font-light leading-relaxed">
              Explore active retained search mandates and high-impact appointments currently open across our key practices.
            </p>
          </div>

          <Link href="/jobs">
            <Button variant="outline" className="h-11 px-5 rounded-sm border-[#EAE8E5] text-xs font-semibold text-[#202022] hover:bg-[#FAF9F7] gap-2 shrink-0">
              <span>View All Active Roles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Editorial Job Ticket Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredList.map((job) => (
            <div
              key={job.slug}
              className="p-8 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] hover:border-[#FF5B3D]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white text-[#202022] border border-[#EAE8E5] font-sans">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active Search
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif leading-snug group-hover:text-[#FF5B3D] transition-colors pt-1 text-[#202022]">
                  <Link href={`/jobs/${job.slug}`}>
                    {job.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#606064] line-clamp-3 leading-relaxed font-light">
                  {job.excerpt}
                </p>

                <div className="pt-3 border-t border-[#EAE8E5] flex flex-col gap-2 text-xs text-[#606064] font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#FF5B3D]" />
                    <span>{job.location} ({job.workplaceType})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-[#FF5B3D]" />
                    <span>{job.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-[#202022]">
                    <DollarSign className="h-3.5 w-3.5 text-[#FF5B3D]" />
                    <span>{job.salaryRange}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAE8E5]">
                <Link
                  href={`/jobs/${job.slug}`}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#202022] group-hover:text-[#FF5B3D] transition-colors"
                >
                  <span>Review Detailed Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
