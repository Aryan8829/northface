"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmployerCTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden border-b border-border">
      {/* Decorative Accent Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[130px] pointer-events-none" />

      <div className="container-enterprise relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-accent border border-white/15">
            <Sparkles className="h-3 w-3" />
            <span>Executive Search &amp; Leadership Mandates</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-white text-balance">
            Build the team that moves you forward.
          </h2>

          <p className="text-xl text-primary-foreground/75 max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Whether securing a foundational CTO, spinning out a new business unit, or scaling an elite technical department, our search directors deliver certainty.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=employer">
              <Button size="lg" className="h-14 px-8 rounded-sm text-base font-semibold bg-white text-primary hover:bg-white/90 gap-2 shadow-lg">
                <Building2 className="h-4 w-4 text-accent" />
                <span>Submit a Hiring Brief</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/employers">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-sm text-base font-semibold border-white/20 text-white hover:bg-white/10 gap-2">
                <span>View Search Retainers &amp; SLAs</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
