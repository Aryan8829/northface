"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getUniqueRegions, getUniqueYears } from "@/data/reports";
import { industries } from "@/data/industries";
import { Search, X, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReportFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentIndustry = searchParams.get("industry") || "";
  const currentRegion = searchParams.get("region") || "";
  const currentYear = searchParams.get("year") || "";
  const currentStatus = searchParams.get("status") || "";
  const currentSearch = searchParams.get("q") || "";

  const industryOptions = industries.map((i) => ({ value: i.slug, label: i.name }));
  const regionOptions = getUniqueRegions().map((r) => ({ value: r, label: r }));
  const yearOptions = getUniqueYears().map((y) => ({ value: y, label: y }));

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/reports?${params.toString()}`, { scroll: false });
  };

  const clearAll = () => {
    router.push("/reports", { scroll: false });
  };

  const hasActiveFilters = currentIndustry || currentRegion || currentYear || currentStatus || currentSearch;

  return (
    <div className="space-y-8 bg-surface p-6 rounded-xl border border-border">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-foreground font-bold">
          <Filter className="h-5 w-5" />
          <span>Filter Reports</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="text-xs font-semibold text-accent hover:text-primary transition-colors flex items-center uppercase tracking-widest"
          >
            Clear <X className="h-3 w-3 ml-1" />
          </button>
        )}
      </div>

      {/* Search */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Search</label>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Keywords..."
            defaultValue={currentSearch}
            onChange={(e) => {
              const timeout = setTimeout(() => updateFilter("q", e.target.value), 400);
              return () => clearTimeout(timeout);
            }}
            className="w-full h-11 pl-11 pr-4 text-sm font-medium border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
          />
        </div>
      </div>

      {/* Status Tabs */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status</label>
        <div className="flex flex-col border border-border rounded-lg overflow-hidden divide-y divide-border bg-background">
          {[
            { value: "", label: "All Reports" },
            { value: "published", label: "Published Now" },
            { value: "upcoming", label: "Upcoming Pre-orders" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => updateFilter("status", tab.value)}
              className={cn(
                "px-4 py-3 text-sm font-semibold text-left transition-colors",
                currentStatus === tab.value
                  ? "bg-accent/10 text-accent border-l-2 border-l-accent"
                  : "text-muted-foreground hover:bg-secondary border-l-2 border-l-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Industry */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Industry</label>
        <select
          value={currentIndustry}
          onChange={(e) => updateFilter("industry", e.target.value)}
          className="w-full h-11 px-3 text-sm font-medium border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="">All Industries</option>
          {industryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Region */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Region</label>
        <select
          value={currentRegion}
          onChange={(e) => updateFilter("region", e.target.value)}
          className="w-full h-11 px-3 text-sm font-medium border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="">Global (All)</option>
          {regionOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Year */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Publication Year</label>
        <select
          value={currentYear}
          onChange={(e) => updateFilter("year", e.target.value)}
          className="w-full h-11 px-3 text-sm font-medium border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="">All Years</option>
          {yearOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

    </div>
  );
}
