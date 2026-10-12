"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, FileText, BookOpen, Cpu } from "lucide-react";
import { reports } from "@/data/reports";
import { services } from "@/data/services";
import { latestInsights } from "@/data/homepage";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setQuery("");
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase();

  // Basic mock search logic
  const filteredReports = query.length > 2 
    ? reports.filter(r => r.title.toLowerCase().includes(searchQuery) || r.industry.toLowerCase().includes(searchQuery)).slice(0, 3)
    : reports.slice(0, 3);
    
  const filteredServices = query.length > 2
    ? services.filter(s => s.title.toLowerCase().includes(searchQuery) || s.description.toLowerCase().includes(searchQuery)).slice(0, 2)
    : services.slice(0, 2);

  const filteredInsights = query.length > 2
    ? latestInsights.filter(i => i.title.toLowerCase().includes(searchQuery) || i.category.toLowerCase().includes(searchQuery)).slice(0, 2)
    : latestInsights.slice(0, 2);

  const hasResults = filteredReports.length > 0 || filteredServices.length > 0 || filteredInsights.length > 0;

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col transition-all duration-300">
      
      {/* Top Search Bar */}
      <div className="border-b border-border bg-surface">
        <div className="container-enterprise h-24 flex items-center gap-4">
          <Search className="h-6 w-6 text-muted-foreground shrink-0" />
          <input 
            ref={inputRef}
            type="text"
            placeholder="Search reports, insights, and services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 h-full bg-transparent text-2xl font-bold font-serif focus:outline-none placeholder:text-muted-foreground/50 text-foreground"
          />
          <button 
            onClick={onClose}
            className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/10 hover:text-accent transition-colors shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Results Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="container-enterprise py-12">
          
          {query.length > 0 && query.length < 3 && (
            <div className="text-center py-24 text-muted-foreground font-semibold">
              Keep typing to search...
            </div>
          )}

          {query.length >= 3 && !hasResults && (
            <div className="text-center py-24">
              <h3 className="text-2xl font-bold mb-2 font-serif">No results found for &ldquo;{query}&rdquo;</h3>
              <p className="text-muted-foreground">Try adjusting your keywords or browse our catalogs.</p>
            </div>
          )}

          {(query.length === 0 || (query.length >= 3 && hasResults)) && (
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Reports Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <h3 className="font-bold text-lg uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Reports
                  </h3>
                  <Link href={`/reports${query ? `?q=${query}` : ""}`} onClick={onClose} className="text-xs font-bold text-accent hover:text-primary transition-colors flex items-center gap-1">
                    View All <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                
                <div className="flex flex-col gap-4">
                  {filteredReports.map(report => (
                    <Link key={report.slug} href={`/reports/${report.slug}`} onClick={onClose} className="group p-4 bg-surface border border-border rounded-xl hover:border-accent/30 transition-colors">
                      <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{report.industry}</div>
                      <h4 className="font-bold group-hover:text-accent transition-colors line-clamp-2 leading-snug">{report.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Insights Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <h3 className="font-bold text-lg uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Insights
                  </h3>
                  <Link href="/insights" onClick={onClose} className="text-xs font-bold text-accent hover:text-primary transition-colors flex items-center gap-1">
                    View All <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                
                <div className="flex flex-col gap-4">
                  {filteredInsights.map(insight => (
                    <Link key={insight.slug} href={`/insights/${insight.slug}`} onClick={onClose} className="group p-4 bg-surface border border-border rounded-xl hover:border-accent/30 transition-colors">
                      <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{insight.category}</div>
                      <h4 className="font-bold font-serif group-hover:text-accent transition-colors line-clamp-2 leading-snug">{insight.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Column */}
              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <h3 className="font-bold text-lg uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Cpu className="h-4 w-4" /> Services
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  {filteredServices.map(service => (
                    <Link key={service.slug} href={`/services/${service.slug}`} onClick={onClose} className="group p-4 bg-surface border border-border rounded-xl hover:border-accent/30 transition-colors">
                      <h4 className="font-bold group-hover:text-accent transition-colors">{service.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
