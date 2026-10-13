"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmployerCTASection() {
  return (
    <section className="py-24 md:py-32 bg-transparent text-[#0F3B27] relative overflow-hidden border-b border-[#E1E8E3]">
      <div className="container-enterprise relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-10 md:p-16 rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/25 shadow-2xl bracket-corners">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#92FF5F] border border-[#92FF5F]/30">
            <Sparkles className="h-3 w-3" />
            <span>Executive Search &amp; Leadership Mandates</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-white text-balance">
            Build the team that moves you forward.
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Whether securing a foundational CTO, spinning out a new business unit, or scaling an elite technical department, our search directors deliver certainty.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=employer">
              <Button size="lg" className="h-14 px-8 rounded-sm text-base font-semibold bg-[#92FF5F] text-[#0F3B27] hover:bg-white transition-colors gap-2 shadow-lg">
                <Building2 className="h-4 w-4" />
                <span>Submit a Hiring Brief</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/employers">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-sm text-base font-semibold border-white/25 text-white hover:bg-white/10 transition-colors gap-2">
                <span>View Search Retainers &amp; SLAs</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
