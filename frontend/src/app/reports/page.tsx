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
      <section className="relative min-h-[45vh] flex items-center bg-transparent text-[#202022] overflow-hidden pt-32 pb-20 border-b border-[#EAE8E5]">
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Reports" }]}
            className="mb-8 text-[#606064]"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
                Strategic Intelligence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#202022] font-serif">
                Market Intelligence Library
              </h1>
              <p className="text-xl text-[#606064] leading-relaxed font-light">
                Unbiased, data-driven intelligence across major industry verticals. 
                Access the ground-truth reality your organization needs to make decisive talent and leadership moves.
              </p>
            </div>
            <div className="flex gap-8 lg:justify-end border-l-2 border-[#EAE8E5] pl-6 lg:pl-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-[#202022] mb-2">{reports.length}</span>
                <span className="text-xs font-semibold text-[#606064] uppercase tracking-widest">Total Reports</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-[#202022] mb-2">{publishedCount}</span>
                <span className="text-xs font-semibold text-[#606064] uppercase tracking-widest">Published</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-[#FF5B3D] mb-2">{upcomingCount}</span>
                <span className="text-xs font-semibold text-[#606064] uppercase tracking-widest">Upcoming</span>
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
