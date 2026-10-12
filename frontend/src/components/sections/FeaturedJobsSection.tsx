"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, DollarSign, Briefcase } from "lucide-react";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";

export function FeaturedJobsSection() {
  const featuredList = jobs.filter((j) => j.featured).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-surface border-b border-border">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow mb-3 block">05 / Verified Mandates</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
              Featured leadership &amp; specialist opportunities.
            </h2>
            <p className="text-muted-foreground mt-4 text-base font-light">
              Explore active retained search mandates and high-impact appointments currently open across our key practices.
            </p>
          </div>
          <Link href="/jobs">
            <Button variant="outline" className="rounded-sm border-border gap-2 shrink-0">
              <span>View All Verified Roles</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Featured Job Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredList.map((job) => (
            <div
              key={job.slug}
              className="p-8 rounded-2xl bg-background border border-border hover:border-accent/50 hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-secondary text-primary font-sans">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active Search
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif leading-snug group-hover:text-accent transition-colors pt-2">
                  <Link href={`/jobs/${job.slug}`}>
                    {job.title}
                  </Link>
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {job.excerpt}
                </p>

                <div className="pt-2 flex flex-col gap-2 text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>{job.location} ({job.workplaceType})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-accent" />
                    <span>{job.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <DollarSign className="h-3.5 w-3.5 text-accent" />
                    <span>{job.salaryRange}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground uppercase font-mono">ID: {job.id.toUpperCase()}</span>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="text-xs font-bold text-accent group-hover:underline flex items-center gap-1"
                >
                  <span>Role Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
