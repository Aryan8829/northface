import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden pt-20">
      {/* Editorial Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40 z-10" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
        <div 
          className="absolute right-0 top-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"
          aria-hidden="true"
        />
      </div>

      <div className="container-enterprise relative z-20">
        <div className="max-w-4xl">
          <span className="eyebrow block mb-6 text-white/80 border-l-2 border-accent pl-4">
            Global Enterprise Strategy & Technology
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white text-balance">
            Navigate complexity.<br />
            Accelerate <span className="text-accent italic font-serif">transformation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/70 mb-12 max-w-2xl leading-relaxed font-light">
            We equip leaders with the market intelligence, strategic clarity, and technological capabilities required to win in an era of unprecedented disruption.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/services">
              <Button size="lg" className="h-14 px-8 rounded-sm text-base font-semibold bg-white text-primary hover:bg-white/90 gap-2 group">
                Explore Capabilities
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/reports">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-sm text-base font-semibold border-white/20 text-white hover:bg-white/10">
                Access Market Intelligence
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 z-20 flex items-center gap-4 text-sm font-semibold tracking-widest uppercase text-white/50">
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
