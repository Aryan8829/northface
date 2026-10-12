import React, { Suspense } from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ReportListingClient } from "@/components/reports/ReportListingClient";
import { reports } from "@/data/reports";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Research Reports | Nexus Consulting",
  description: "Browse our comprehensive library of market research reports spanning 24+ industries, with detailed market sizing, competitive analysis, and strategic forecasts.",
};

export default function ReportsPage() {
  const publishedCount = reports.filter((r) => r.status === "published").length;
  const upcomingCount = reports.filter((r) => r.status === "upcoming").length;

  return (
    <>
      {/* Editorial Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-primary text-primary-foreground overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary z-10" />
          <div className="absolute left-0 top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        </div>
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Reports" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Market Intelligence Library
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed font-light">
                Unbiased, data-driven intelligence across 24 industry verticals. 
                Access the ground-truth reality your organization needs to make definitive strategic moves.
              </p>
            </div>
            <div className="flex gap-8 lg:justify-end border-l lg:border-l-0 lg:border-r-0 border-white/10 pl-6 lg:pl-0">
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-white mb-2">{reports.length}</span>
                <span className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-widest">Total Reports</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-white mb-2">{publishedCount}</span>
                <span className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-widest">Published</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-accent mb-2">{upcomingCount}</span>
                <span className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-widest">Upcoming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <section className="py-12 md:py-20 bg-background border-b border-border">
        <div className="container-enterprise">
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-muted-foreground font-semibold">Initializing data sets...</div>}>
            <ReportListingClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}
