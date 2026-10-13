"use client";

import React from "react";
import Link from "next/link";
import { Report } from "@/data/reports";
import { ArrowRight, FileText, Calendar, MapPin, TrendingUp, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReportCardProps {
  report: Report;
}

export function ReportCard({ report }: ReportCardProps) {
  const isUpcoming = report.status === "upcoming";

  return (
    <Link href={`/reports/${report.slug}`} className="group block h-full">
      <div className="h-full border border-border rounded-xl bg-surface/90 backdrop-blur-sm hover:shadow-xl hover:border-[#0F3B27]/40 transition-all duration-300 flex flex-col overflow-hidden bracket-corners">
        
        {/* Header / Industry Label */}
        <div className={cn(
          "px-6 py-4 flex items-center justify-between border-b border-border/50",
          isUpcoming ? "bg-[#FF7036]/10 text-[#FF7036]" : "bg-[#BFF2F0]/25 text-[#0F3B27]"
        )}>
          <span className={cn(
            "text-xs font-bold uppercase tracking-widest",
            isUpcoming ? "text-[#FF7036]" : "text-[#0F3B27]"
          )}>
            {report.industry} {isUpcoming && "- Pre-Order"}
          </span>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            {report.format}
          </span>
        </div>
        
        {/* Main Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-[#FF7036] transition-colors line-clamp-3">
            {report.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
            {report.excerpt}
          </p>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-background border border-border/50">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5" /> Date
              </span>
              <span className="text-sm font-bold text-foreground">
                {new Date(report.publishedDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
              </span>
            </div>
            
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-background border border-border/50">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <FileText className="h-3.5 w-3.5" /> Pages
              </span>
              <span className="text-sm font-bold text-foreground">
                {report.pages}
              </span>
            </div>

            <div className="flex flex-col gap-1 p-3 rounded-lg bg-background border border-border/50">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" /> Region
              </span>
              <span className="text-sm font-bold text-foreground line-clamp-1">
                {report.region}
              </span>
            </div>

            <div className="flex flex-col gap-1 p-3 rounded-lg bg-background border border-border/50">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#FF7036] uppercase tracking-wider">
                <TrendingUp className="h-3.5 w-3.5 text-[#FF7036]" /> CAGR
              </span>
              <span className="text-sm font-bold text-[#FF7036]">
                {report.cagr || "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="px-6 py-4 border-t border-border flex items-center justify-between bg-background mt-auto">
          <div className="flex items-center gap-1 text-sm font-bold text-foreground">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            4,950
          </div>
          <span className="flex items-center gap-2 text-sm font-bold text-[#0F3B27] group-hover:text-[#FF7036] transition-colors">
            {isUpcoming ? "Reserve Copy" : "View Intelligence"} 
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF7036]" />
          </span>
        </div>
        
      </div>
    </Link>
  );
}
