import React, { Suspense } from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ReportListingClient } from "@/components/reports/ReportListingClient";
import { reports } from "@/data/reports";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent & Market Intelligence Reports | Nexus Talent Partners",
  description: "Browse our comprehensive library of market research reports spanning 24+ industries, with detailed market sizing, competitive analysis, and strategic forecasts.",
};

export default function ReportsPage() {
  const publishedCount = reports.filter((r) => r.status === "published").length;
  const upcomingCount = reports.filter((r) => r.status === "upcoming").length;

  return (
    <>
      {/* Editorial Hero on Pure White Canvas */}
      <section className="relative min-h-[45vh] flex items-center bg-transparent text-[#0F3B27] overflow-hidden pt-32 pb-20 border-b border-[#E1E8E3]">
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Reports" }]}
            className="mb-8 text-[#3D614E]"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF7036]/10 text-[#FF7036] border border-[#FF7036]/30 shadow-sm">
                Strategic Intelligence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0F3B27] font-serif">
                Market Intelligence Library
              </h1>
              <p className="text-xl text-[#3D614E] leading-relaxed font-light">
                Unbiased, data-driven intelligence across major industry verticals. 
                Access the ground-truth reality your organization needs to make decisive talent and leadership moves.
              </p>
            </div>
            <div className="flex gap-8 lg:justify-end border-l-2 border-[#E1E8E3] pl-6 lg:pl-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-[#0F3B27] mb-2">{reports.length}</span>
                <span className="text-xs font-semibold text-[#3D614E] uppercase tracking-widest">Total Reports</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-[#0F3B27] mb-2">{publishedCount}</span>
                <span className="text-xs font-semibold text-[#3D614E] uppercase tracking-widest">Published</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-[#0F3B27] mb-2 flex items-baseline gap-1">
                  {upcomingCount}
                  <span className="w-2 h-2 rounded-full bg-[#FF7036] animate-pulse" />
                </span>
                <span className="text-xs font-semibold text-[#3D614E] uppercase tracking-widest">Upcoming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <section className="py-12 md:py-20 bg-transparent border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-muted-foreground font-semibold">Initializing data sets...</div>}>
            <ReportListingClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}
