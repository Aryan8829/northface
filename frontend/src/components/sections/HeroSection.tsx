"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientTalentBackground } from "@/components/motion/AmbientTalentBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-primary text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Signature Atmospheric Background */}
      <AmbientTalentBackground intensity="medium" />

      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Message & Dual Action */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider uppercase text-accent-soft backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Specialist Search &amp; Executive Placement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-white text-balance leading-[1.08]">
              The right people.<br />
              <span className="italic font-normal text-white/90">The next big move.</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/75 font-light leading-relaxed max-w-2xl text-balance">
              Specialist recruitment built around people, potential, and long-term organizational fit. 
              We partner with forward-thinking boards and hiring teams to place transformative leaders and critical technical specialists.
            </p>

            {/* Two Action Pathways */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/employers">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90 rounded-sm gap-2 group shadow-lg"
                >
                  <span>Find Talent</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/jobs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10 rounded-sm gap-2"
                >
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span>Explore Opportunities</span>
                </Button>
              </Link>
            </div>

            {/* Credibility Signals */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">94%</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 font-medium mt-1">3-Year Retention</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-accent tracking-tight">18 Days</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 font-medium mt-1">Avg Shortlist SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">850+</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 font-medium mt-1">Placed Leaders</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Abstract Talent-Network Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Visual Card: Active Executive Mandate */}
              <div className="bg-surface text-foreground p-6 sm:p-7 rounded-2xl border border-border shadow-2xl relative z-20 backdrop-blur-sm">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Active Search Mandate</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                    Executive
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-widest text-accent">Technology &amp; Foundation AI</div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug">
                    Vice President, Machine Learning Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1 text-xs text-muted-foreground font-medium">
                    <span className="px-2.5 py-1 rounded-sm bg-secondary">San Francisco, CA</span>
                    <span className="px-2.5 py-1 rounded-sm bg-secondary">Hybrid US</span>
                    <span className="px-2.5 py-1 rounded-sm bg-secondary font-semibold text-foreground">$380k – $460k</span>
                  </div>
                </div>

                {/* Candidate Matching Criteria Indicator */}
                <div className="mt-6 pt-5 border-t border-border space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-muted-foreground">Evaluation Rigor</span>
                    <span className="font-bold text-emerald-600">Strict Fit Protocol</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full w-[88%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Deep HPC Leadership</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Cultural Alignment</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <span>Confidential Retained Search</span>
                  </div>
                  <Link href="/jobs/vp-machine-learning-infrastructure" className="text-xs font-bold text-accent hover:underline flex items-center gap-1">
                    View Role <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Secondary Floating Floating Card: Talent Match Notification */}
              <div className="hidden sm:flex absolute -bottom-8 -left-6 z-30 bg-surface text-foreground p-4 rounded-xl border border-border shadow-xl items-center gap-3.5 max-w-[280px]">
                <div className="h-10 w-10 rounded-full bg-accent-soft flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Principal Quant Architect</div>
                  <div className="text-[11px] text-muted-foreground">Placed with Tier 1 Trading Desk</div>
                </div>
              </div>

              {/* Decorative Accent Ring */}
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full border border-white/10 z-0 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
