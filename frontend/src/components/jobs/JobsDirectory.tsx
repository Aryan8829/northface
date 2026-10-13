"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, DollarSign, ArrowRight, X, Sparkles, Filter } from "lucide-react";
import { Job } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface JobsDirectoryProps {
  initialJobs: Job[];
}

export function JobsDirectory({ initialJobs }: JobsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedWorkplace, setSelectedWorkplace] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      // Search term matching
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesExcerpt = job.excerpt.toLowerCase().includes(query);
        const matchesDesc = job.description.toLowerCase().includes(query);
        const matchesLoc = job.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesExcerpt && !matchesDesc && !matchesLoc) {
          return false;
        }
      }

      // Department filter
      if (selectedDepartment !== "All" && job.department !== selectedDepartment) {
        return false;
      }

      // Workplace filter
      if (selectedWorkplace !== "All" && job.workplaceType !== selectedWorkplace) {
        return false;
      }

      // Employment type filter
      if (selectedType !== "All" && job.employmentType !== selectedType) {
        return false;
      }

      return true;
    });
  }, [initialJobs, searchQuery, selectedDepartment, selectedWorkplace, selectedType]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedDepartment !== "All" ||
    selectedWorkplace !== "All" ||
    selectedType !== "All";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDepartment("All");
    setSelectedWorkplace("All");
    setSelectedType("All");
  };

  return (
    <div className="space-y-10">
      {/* Search & Filter Toolbar */}
      <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Keyword Search */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by role title, domain, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Department Filter */}
          <div className="w-full md:w-48">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="All">All Disciplines</option>
              <option value="Technology">Technology &amp; AI</option>
              <option value="Finance">Quantitative Finance</option>
              <option value="Healthcare">Healthcare &amp; Bio</option>
              <option value="Executive">Executive Leadership</option>
              <option value="Engineering">Cloud &amp; Platform</option>
            </select>
          </div>

          {/* Workplace Filter */}
          <div className="w-full md:w-40">
            <select
              value={selectedWorkplace}
              onChange={(e) => setSelectedWorkplace(e.target.value)}
              className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="All">All Workplace</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="w-full md:w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="All">All Search Types</option>
              <option value="Executive Search">Retained Executive</option>
              <option value="Full-time">Permanent / Direct</option>
              <option value="Interim / Contract">Interim Leadership</option>
            </select>
          </div>
        </div>

        {/* Counter & Clear Button Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Filter className="h-3.5 w-3.5 text-accent" />
            <span>
              Showing <strong className="text-foreground">{filteredJobs.length}</strong> of {initialJobs.length} active mandates
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-accent hover:underline font-semibold flex items-center gap-1"
            >
              <span>Reset all filters</span>
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Mandates List */}
      {filteredJobs.length === 0 ? (
        <div className="p-16 rounded-2xl bg-surface border border-border text-center space-y-4">
          <Sparkles className="h-10 w-10 text-muted-foreground mx-auto" />
          <h3 className="text-xl font-bold font-serif text-foreground">No matching mandates found</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto font-light">
            We regularly manage confidential searches not published publicly. Try adjusting your filter criteria or submit a confidential profile.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Button variant="outline" onClick={resetFilters} className="text-xs rounded-sm">
              Clear All Filters
            </Button>
            <Link href="/candidates#candidate-intake">
              <Button className="text-xs rounded-sm bg-accent text-white hover:bg-accent/90">
                Register Confidentially
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.01,
                  boxShadow: "0 18px 30px -10px rgba(255, 91, 61, 0.15)",
                  transition: { type: "spring", stiffness: 350, damping: 20 }
                }}
                className="p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] hover:border-[#92FF5F] shadow-card transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group bracket-corners"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F7F9F7] text-[#0F3B27] border border-[#E1E8E3]">
                      {job.department}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-[#CFF1D2]/50 text-[#0F3B27] border border-[#0F3B27]/15">
                      {job.experienceLevel}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#0F3B27] flex items-center gap-1.5 ml-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#92FF5F] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#92FF5F]" />
                      </span>
                      Active Mandate
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug text-[#0F3B27] group-hover:text-[#164E34] transition-colors">
                    <Link href={`/jobs/${job.slug}`}>
                      {job.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#3D614E] line-clamp-2 leading-relaxed font-light">
                    {job.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#3D614E] pt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#0F3B27]" />
                      <span>{job.location} ({job.workplaceType})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-[#0F3B27]" />
                      <span>{job.employmentType}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-[#0F3B27] font-mono">
                      <DollarSign className="h-3.5 w-3.5 text-[#0F3B27]" />
                      <span>{job.salaryRange}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center pt-2 md:pt-0">
                  <Link href={`/jobs/${job.slug}`} className="w-full md:w-auto">
                    <Button className="w-full md:w-auto rounded-full text-xs font-mono font-bold uppercase tracking-wider gap-2 bg-[#0F3B27] text-[#92FF5F] hover:bg-[#082115] shadow-lime-glow transition-all">
                      <span>View Mandate</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-[#92FF5F]" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
