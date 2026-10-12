"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmployerCTASection() {
  return (
    <section className="py-24 md:py-32 bg-white text-[#202022] relative overflow-hidden border-b border-[#EAE8E5]">
      {/* Decorative Accent Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFF3EF] blur-[140px] pointer-events-none" />

      <div className="container-enterprise relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-10 md:p-16 rounded-3xl bg-[#FAF9F7] border border-[#EAE8E5]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3EF] text-xs font-semibold uppercase tracking-wider text-[#FF5B3D] border border-[#FF5B3D]/20">
            <Sparkles className="h-3 w-3" />
            <span>Executive Search &amp; Leadership Mandates</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-[#202022] text-balance">
            Build the team that moves you forward.
          </h2>

          <p className="text-xl text-[#606064] max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Whether securing a foundational CTO, spinning out a new business unit, or scaling an elite technical department, our search directors deliver certainty.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=employer">
              <Button size="lg" className="h-14 px-8 rounded-sm text-base font-semibold bg-[#FF5B3D] text-white hover:bg-[#FF5B3D]/90 gap-2 shadow-sm">
                <Building2 className="h-4 w-4" />
                <span>Submit a Hiring Brief</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/employers">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-sm text-base font-semibold border-[#EAE8E5] text-[#202022] hover:bg-white gap-2">
                <span>View Search Retainers &amp; SLAs</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
