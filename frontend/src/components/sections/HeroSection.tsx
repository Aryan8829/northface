"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-white text-[#202022] pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      
      {/* Bespoke Kinetic Orbit / Ribbon Artwork (Background right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[780px] h-[680px] pointer-events-none select-none z-0 opacity-80" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 780 680" fill="none">
          {/* Main Orbit Ellipse */}
          <ellipse
            cx="480"
            cy="340"
            rx="320"
            ry="240"
            stroke="#EAE8E5"
            strokeWidth="1.25"
            strokeDasharray="4 6"
          />
          {/* Active Accent Momentum Arc */}
          <path
            d="M 220 340 C 220 200, 340 100, 480 100 C 620 100, 720 180, 750 300"
            stroke="url(#hero-coral-grad)"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          {/* Meeting Point / Signal Waypoints */}
          <circle cx="480" cy="100" r="4.5" fill="#FF5B3D" />
          <circle cx="480" cy="100" r="11" stroke="#FF5B3D" strokeWidth="0.75" strokeOpacity="0.4" />

          <circle cx="750" cy="300" r="3.5" fill="#FF9A39" />
          <circle cx="750" cy="300" r="8" stroke="#FF9A39" strokeWidth="0.75" strokeOpacity="0.4" />

          {/* Cross Connector Line */}
          <line x1="280" y1="440" x2="480" y2="100" stroke="#FF5B3D" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.35" />

          <defs>
            <linearGradient id="hero-coral-grad" x1="220" y1="100" x2="750" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF5B3D" />
              <stop offset="0.7" stopColor="#FF9A39" />
              <stop offset="1" stopColor="#E83379" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Headline & Actions */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF3EF] border border-[#FF5B3D]/25 text-xs font-bold tracking-wider uppercase text-[#FF5B3D]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Executive Search &amp; Specialist Recruitment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-[#202022] leading-[1.08] text-balance">
              The right people.<br />
              <span className="italic font-normal text-[#FF5B3D]">The next big move.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#606064] font-light leading-relaxed max-w-2xl text-balance">
              Specialist recruitment built around people, potential, and long-term organizational fit. We partner with forward-thinking boards and founders to place transformative leaders and critical technical specialists.
            </p>

            {/* Dual Action Pathways */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Link href="/employers">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-13 px-7 text-sm font-semibold bg-[#202022] text-white hover:bg-[#FF5B3D] rounded-sm gap-2 group transition-colors shadow-sm"
                >
                  <span>Hire Talent</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/jobs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-13 px-7 text-sm font-semibold border-[#EAE8E5] text-[#202022] hover:bg-[#FAF9F7] rounded-sm gap-2"
                >
                  <Briefcase className="h-4 w-4 text-[#FF5B3D]" />
                  <span>Explore Verified Mandates</span>
                </Button>
              </Link>
            </div>

            {/* Authentic Credibility Signals */}
            <div className="pt-8 border-t border-[#EAE8E5] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#202022] tracking-tight">18 Days</div>
                <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-0.5">Avg Shortlist SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#FF5B3D] tracking-tight">94%</div>
                <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-0.5">3-Year Retention</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#202022] tracking-tight">12 Mos</div>
                <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-0.5">Placement Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Mandate Preview Ticket */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Visual Ticket */}
              <div className="bg-[#FAF9F7] text-[#202022] p-7 rounded-2xl border border-[#EAE8E5] shadow-lg relative z-20">
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E5]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#606064]">Active Search Mandate</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
                    Retained Executive
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF5B3D]">Technology &amp; Foundation AI</div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug text-[#202022]">
                    Vice President, Machine Learning Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#606064] font-medium">
                    <span className="px-2.5 py-1 rounded-sm bg-white border border-[#EAE8E5]">San Francisco, CA</span>
                    <span className="px-2.5 py-1 rounded-sm bg-white border border-[#EAE8E5]">Hybrid US</span>
                    <span className="px-2.5 py-1 rounded-sm bg-white border border-[#EAE8E5] font-semibold text-[#202022]">$380k – $460k</span>
                  </div>
                </div>

                {/* Candidate Qualification Bar */}
                <div className="mt-6 pt-5 border-t border-[#EAE8E5] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#606064]">Qualification Protocol</span>
                    <span className="font-bold text-emerald-600">Zero False-Positive Bar</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#EAE8E5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF5B3D] rounded-full w-[90%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#606064] pt-1">
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Deep HPC Leadership</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> 24-Mo Retention Fit</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE8E5] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#606064]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#FF5B3D]" />
                    <span>Confidential Retained Search</span>
                  </div>
                  <Link href="/jobs/vp-machine-learning-infrastructure" className="text-xs font-bold text-[#FF5B3D] hover:underline flex items-center gap-1">
                    <span>View Mandate</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Secondary Floating Signal Note */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 z-30 bg-white text-[#202022] p-3.5 rounded-xl border border-[#EAE8E5] shadow-md items-center gap-3 max-w-[260px]">
                <div className="h-8 w-8 rounded-full bg-[#FFF3EF] flex items-center justify-center shrink-0 text-[#FF5B3D] font-bold text-xs">
                  NT
                </div>
                <div>
                  <div className="text-xs font-bold text-[#202022]">Principal Quant Architect</div>
                  <div className="text-[10px] text-[#606064]">Placed &bull; Tier 1 Trading Desk</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
