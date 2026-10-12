"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, UserCheck, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DualGatewaySection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#EAE8E5] relative overflow-hidden">
      <div className="container-enterprise">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow block mb-3 text-[#FF5B3D]">01 / Audience Gateway</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
            Tailored representation for hiring leaders and exceptional talent.
          </h2>
          <p className="text-sm sm:text-base text-[#606064] font-light mt-3 leading-relaxed">
            Whether you need a confidential executive search for your board or discreet stewardship for your next career move, we operate with zero false positives.
          </p>
        </div>

        {/* Asymmetrical Choice Panels */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Employer Panel: Slightly wider (col-span-7) */}
          <div className="md:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] hover:border-[#FF5B3D]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            {/* Linear Route SVG Artwork in Card */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity" aria-hidden="true">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <path d="M200 20 C 120 40, 80 100, 100 200" stroke="#FF5B3D" strokeWidth="1.25" strokeDasharray="4 4" />
                <circle cx="100" cy="200" r="3" fill="#FF5B3D" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-white border border-[#EAE8E5] flex items-center justify-center text-[#FF5B3D] group-hover:bg-[#FF5B3D] group-hover:text-white transition-colors">
                  <Building2 className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white border border-[#EAE8E5] text-[#202022]">
                  18-Day SLA
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B3D] mb-1.5 block">
                  For Boards, Founders &amp; Talent Executives
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-3 text-[#202022] leading-snug">
                  Appoint leaders who compound organizational value.
                </h3>
                <p className="text-[#606064] leading-relaxed text-sm font-light">
                  From foundational CTO appointments to scaling 50-person machine learning squads, we execute retained search and embedded talent sprints with zero resume padding.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#EAE8E5]">
                <div className="flex items-center gap-2 text-xs text-[#202022] font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5B3D]" />
                  <span>Retained Executive Search &amp; Embedded RPO Models</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#202022] font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5B3D]" />
                  <span>12-Month Free Replacement Placement Warranty</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#EAE8E5] relative z-10">
              <Link href="/employers">
                <Button className="h-11 px-6 rounded-sm bg-[#202022] text-white hover:bg-[#FF5B3D] gap-2 text-xs font-semibold group transition-colors">
                  <span>Explore Search Retainers</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Candidate Panel: (col-span-5) */}
          <div className="md:col-span-5 p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE8E5] hover:border-[#FF9A39]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            {/* Linear Orbit Vector */}
            <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity" aria-hidden="true">
              <svg className="w-full h-full" viewBox="0 0 180 180" fill="none">
                <circle cx="120" cy="60" r="50" stroke="#FF9A39" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="120" cy="60" r="3" fill="#FF9A39" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-[#FFF8EE] border border-[#FF9A39]/30 flex items-center justify-center text-[#FF9A39] group-hover:bg-[#FF9A39] group-hover:text-white transition-colors">
                  <UserCheck className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFF8EE] text-[#FF9A39] border border-[#FF9A39]/30">
                  100% Consent
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9A39] mb-1.5 block">
                  For Executives &amp; Specialists
                </span>
                <h3 className="text-2xl font-bold font-serif mb-3 text-[#202022] leading-snug">
                  Confidential career navigation and board access.
                </h3>
                <p className="text-[#606064] leading-relaxed text-sm font-light">
                  We advocate for your trajectory with complete salary transparency, zero unsolicited CV distribution, and direct access to founders.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#EAE8E5]">
                <div className="flex items-center gap-2 text-xs text-[#202022] font-medium">
                  <Shield className="h-3.5 w-3.5 text-[#FF9A39]" />
                  <span>The 100% Prior Written Consent Standard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#202022] font-medium">
                  <Sparkles className="h-3.5 w-3.5 text-[#FF9A39]" />
                  <span>Stealth &amp; Unadvertised Mandate Introductions</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#EAE8E5] relative z-10">
              <Link href="/candidates">
                <Button variant="outline" className="h-11 px-6 rounded-sm border-[#EAE8E5] text-[#202022] hover:bg-[#FFF8EE] hover:text-[#FF9A39] hover:border-[#FF9A39]/40 gap-2 text-xs font-semibold group transition-colors">
                  <span>Candidate Representation</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
