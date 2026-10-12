"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { filterReports } from "@/data/reports";
import { ReportCard } from "./ReportCard";
import { ReportFilters } from "./ReportFilters";
import { SearchX } from "lucide-react";

export function ReportListingClient() {
  const searchParams = useSearchParams();

  const filters = {
    status: searchParams.get("status") || undefined,
    industry: searchParams.get("industry") || undefined,
    region: searchParams.get("region") || undefined,
    year: searchParams.get("year") || undefined,
    search: searchParams.get("q") || undefined,
  };

  const filteredReports = filterReports(filters);

  return (
    <div className="grid lg:grid-cols-12 gap-12">
      {/* Sticky Left Sidebar for Filters */}
      <div className="lg:col-span-3">
        <div className="sticky top-24">
          <ReportFilters />
        </div>
      </div>

      {/* Right Content Area */}
      <div className="lg:col-span-9">
        <div className="mb-6 flex items-center justify-between pb-4 border-b border-border">
          <h2 className="text-xl font-bold">Search Results</h2>
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            {filteredReports.length} Reports
          </span>
        </div>

        {/* Results list */}
        {filteredReports.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredReports.map((report) => (
              <ReportCard key={report.slug} report={report} />
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center justify-center text-center bg-surface border border-border rounded-xl">
            <SearchX className="h-12 w-12 text-muted-foreground/30 mb-6" />
            <h3 className="text-2xl font-bold mb-2">No matching reports</h3>
            <p className="text-muted-foreground max-w-md">
              We couldn&apos;t find any reports matching your exact filters. Adjust your search criteria or contact our analysts for custom research.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
