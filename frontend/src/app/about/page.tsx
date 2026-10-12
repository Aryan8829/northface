import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ShieldCheck, Users, Target, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Firm Overview & Ethos | Nexus Talent Partners",
  description: "Learn about Nexus Talent Partners: human-centered executive search and specialist recruitment founded on rigor, discretion, and long-term retention.",
};

const corePrinciples = [
  {
    icon: Target,
    title: "Zero False-Positive Rigor",
    description: "We will never pad a shortlist to demonstrate activity. Every candidate presented has undergone an exhaustive multi-hour qualification against architecture, culture, and track record.",
  },
  {
    icon: ShieldCheck,
    title: "Absolute Discretion & Trust",
    description: "We operate under strict Chinese walls. Candidates are never shopped around; employer strategic initiatives and confidential departures are defended with military-grade NDAs.",
  },
  {
    icon: Award,
    title: "Full Compensation Transparency",
    description: "We eliminate offer-stage friction by calibrating base salaries, performance bonuses, and cap-table equity terms upfront—resulting in our 98% offer acceptance rate.",
  },
  {
    icon: Users,
    title: "12-Month Accountability Guarantee",
    description: "Our engagement doesn't end when an agreement is signed. We stay actively involved through the executive's first 90 days and back every retained search with a 12-month warranty.",
  },
];

const globalDesks = [
  {
    city: "San Francisco",
    focus: "Technology, Distributed Systems & Foundation AI",
    location: "555 California Street, Suite 4200",
    description: "Anchoring our West Coast practice for high-performance computing, kernel optimization, and frontier AI research leadership.",
  },
  {
    city: "New York",
    focus: "Quantitative Finance, FinTech & BioPharma",
    location: "One Vanderbilt Avenue, 38th Floor",
    description: "Specialized executive search for proprietary trading desks, algorithmic hedge funds, and clinical-stage biotechnology leaders.",
  },
  {
    city: "London",
    focus: "Interim Leadership & Pan-European Restructuring",
    location: "100 Bishopsgate, Level 22",
    description: "Deploying battle-tested interim operators and cross-border leadership suites across the UK, Germany, and Switzerland.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Editorial Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-primary text-primary-foreground overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary opacity-90 z-10" />
        </div>
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Firm Overview" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-4xl space-y-6">
            <span className="eyebrow block text-accent border-l-2 border-accent pl-4">
              Our Ethos &amp; Philosophy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-serif text-balance">
              The human element of transformational leadership.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/75 max-w-2xl leading-relaxed font-light text-balance">
              Nexus Talent Partners was founded on a simple premise: executive search should be defined by deep domain mastery, unyielding discretion, and human empathy—not high-volume resume scraping.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-12 bg-surface border-y border-border overflow-hidden">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">2012</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Firm Established</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-accent mb-2">18 Days</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Average Shortlist SLA</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">850+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Placed Leaders</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-accent mb-2">94%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">3-Year Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow mb-3 block">Operating Principles</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
              A standard of search that rejects shortcuts.
            </h2>
            <p className="text-muted-foreground mt-4 text-base font-light">
              We operate as long-term advisors rather than transaction-driven recruiters. These commitments govern every mandate we accept.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 rounded-2xl bg-surface border border-border space-y-4 hover:border-accent/40 transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-accent-soft flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Practice Desks */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-3 block">Global Footprint</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
              Specialized desks in key capital centers.
            </h2>
            <p className="text-muted-foreground mt-4 text-base font-light">
              Our partners are embedded in the world&apos;s leading venture, financial, and industrial hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {globalDesks.map((desk) => (
              <div key={desk.city} className="p-8 rounded-2xl bg-background border border-border space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{desk.city}</span>
                  <h3 className="text-xl font-bold font-serif text-foreground">{desk.focus}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{desk.description}</p>
                </div>
                <div className="pt-4 border-t border-border text-[11px] text-muted-foreground flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{desk.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-enterprise">
          <div className="p-8 sm:p-14 rounded-2xl bg-secondary/50 border border-border flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow block">Connect With Our Directors</span>
              <h3 className="text-3xl font-bold font-serif text-foreground">
                Partner with Nexus Talent Partners today.
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Whether you are scoping a high-stakes executive replacement or seeking confidential representation for your own career trajectory, we are ready to assist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact?type=employer">
                <Button size="lg" className="h-12 px-7 rounded-sm bg-accent text-white hover:bg-accent/90 gap-2 font-semibold">
                  <span>Hire Talent</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-sm gap-2 font-semibold">
                  <span>Explore Jobs</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
