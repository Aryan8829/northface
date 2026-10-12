"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Crown, Users2, Clock4, Compass, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Crown,
    badge: "Retained Search",
    title: "Executive Search & Board Advisory",
    description: "Confidential, rigorous search engagements for Chief Executive, VP-level, and independent Board Director mandates. Supported by exhaustive market talent mapping.",
    href: "/services/executive-search",
  },
  {
    icon: Users2,
    badge: "Direct Hire",
    title: "Permanent Placement & Team Scaling",
    description: "Accelerate mission-critical team build-outs with vetted principal individual contributors, engineering leads, and quantitative specialists.",
    href: "/services/permanent-placement",
  },
  {
    icon: Clock4,
    badge: "Rapid Deployment",
    title: "Interim Leadership & Strategic Advisory",
    description: "High-caliber executive operators deployed on 3 to 12-month engagements to guide post-merger integrations, crisis turnarounds, or rapid scale phases.",
    href: "/services/interim-contract",
  },
  {
    icon: Layers,
    badge: "Embedded Talent",
    title: "Recruitment Process Outsourcing (RPO)",
    description: "An integrated talent acquisition team embedded directly into your hiring workflows, scaling talent pipelines with proprietary assessment toolkits.",
    href: "/services/rpo",
  },
  {
    icon: Cpu,
    badge: "Technical Depth",
    title: "Specialized Technology & AI Hiring",
    description: "Deep-domain technical qualification led by former software architects. Evaluating distributed systems, LLM infrastructure, and cryptography leaders.",
    href: "/services/technology",
  },
  {
    icon: Compass,
    badge: "Strategic Diligence",
    title: "Talent Mapping & Compensation Intelligence",
    description: "Bespoke competitive intelligence identifying competitor talent clusters, equity benchmark distributions, and geographic compensation arbitrage.",
    href: "/services/data-analytics",
  },
];

export function RecruitmentSolutionsSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3">02 / Talent Solutions</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
              Flexible engagement models for every hiring inflection point.
            </h2>
          </div>
          <Link href="/employers">
            <Button variant="outline" className="rounded-sm border-border gap-2">
              <span>Compare Hiring Models</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className="p-8 rounded-xl bg-surface border border-border hover:border-accent/40 hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-secondary text-muted-foreground">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-accent transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60">
                  <Link
                    href={sol.href}
                    className="text-xs font-bold text-accent flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
