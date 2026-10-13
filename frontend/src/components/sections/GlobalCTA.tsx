"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, UserCheck, ShieldCheck, Sparkles } from "lucide-react";

export function GlobalCTA() {
  return (
    <section className="bg-transparent py-24 md:py-32 border-t border-[#E1E8E3] relative overflow-hidden">
      {/* Decorative Closing Loop SVG with Animated Draw */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none select-none opacity-30" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 700 500" fill="none">
          <motion.path
            d="M50 250 C 50 100, 250 40, 450 60 C 650 80, 680 280, 520 420 C 380 520, 180 440, 150 320 C 130 220, 220 180, 350 200 C 480 220, 500 320, 420 380"
            stroke="url(#cta-lime-loop-grad)"
            strokeWidth="1.75"
            strokeDasharray="6 6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="420" 
            cy="380" 
            r="4.5" 
            fill="#FF7036" 
            animate={{ scale: [1, 1.6, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="cta-lime-loop-grad" x1="50" y1="50" x2="650" y2="450" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7036" stopOpacity="0.9" />
              <stop offset="0.5" stopColor="#92FF5F" stopOpacity="0.8" />
              <stop offset="1" stopColor="#BFF2F0" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-enterprise relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8 p-10 md:p-16 rounded-3xl bg-[#0F3B27] text-[#F7F9F7] border border-white/10 shadow-elevated bracket-corners-orange relative overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {/* Subtle Ambient Radial Glow (Multi-color) */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7036]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#BFF2F0]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#144931] text-xs font-mono font-bold uppercase tracking-wider text-[#FF7036] border border-[#FF7036]/30 shadow-sm relative z-10">
            <Sparkles className="h-3.5 w-3.5 text-[#FF7036]" />
            <span>CONFIDENTIAL SEARCH CONSULTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F7F9F7] leading-[1.12] relative z-10">
            Build the leadership tier that defines your decade.
          </h2>

          <p className="text-base sm:text-lg text-[#CFF1D2]/85 font-light max-w-2xl mx-auto leading-relaxed relative z-10">
            Whether scoping a confidential board succession or seeking discreet executive representation, initiate a dialogue directly with our practice partners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 relative z-10">
            <Link href="/employers" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#FF7036] text-white hover:bg-[#E85D26] text-xs font-mono font-bold tracking-wider uppercase shadow-md shadow-[#FF7036]/30 transition-all gap-2"
              >
                <Building2 className="h-4 w-4" />
                <span>Calibrate Employer Mandate</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/candidates" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#BFF2F0] text-[#0F3B27] hover:bg-white text-xs font-mono font-bold tracking-wider uppercase shadow-sm transition-all gap-2"
              >
                <UserCheck className="h-4 w-4" />
                <span>Confidential Candidate Registration</span>
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t border-[#92FF5F]/20 flex flex-wrap items-center justify-center gap-6 text-xs text-[#CFF1D2]/80 font-mono relative z-10">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#92FF5F]" />
              Strict Discretion Guaranteed
            </span>
            <span>&bull;</span>
            <span>18-Day Mean Shortlist SLA</span>
            <span>&bull;</span>
            <span>12-Month Replacement Warranty</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
