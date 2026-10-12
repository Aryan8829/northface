import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { reports } from "@/data/reports";
import { Button } from "@/components/ui/button";

export function FeaturedReportsSection() {
  const featured = reports.slice(0, 3);
  
  return (
    <section className="py-24 md:py-32 bg-surface border-b border-border">
      <div className="container-enterprise">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6 block">07 / Featured Reports</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Market intelligence that shifts markets.
            </h2>
          </div>
          <Link href="/reports">
            <Button variant="outline" className="shrink-0">Access Report Library</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((report) => (
            <Link 
              key={report.slug} 
              href={`/reports/${report.slug}`}
              className="group flex flex-col p-8 bg-background border border-border hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {report.industry}
                </span>
                <span className="text-sm font-semibold text-muted-foreground">{report.publishedDate}</span>
              </div>
              
              <h3 className="text-2xl font-bold leading-snug mb-4 group-hover:text-accent transition-colors line-clamp-3">
                {report.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed flex-1 mb-8 line-clamp-3">
                {report.excerpt}
              </p>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Synopsis
                </div>
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
