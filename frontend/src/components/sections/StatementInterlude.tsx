"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Compass } from "lucide-react";

export function StatementInterlude() {
  const tickerItems = [
    "EXECUTIVE SEARCH CERTAINTY",
    "18-DAY MEAN SHORTLIST SLA",
    "94.8% 3-YEAR RETENTION",
    "RADICAL CANDIDATE DISCRETION",
    "ZERO UNVETTED RESUMES",
    "BOARD-DIRECT SEARCH DIRECTORS",
  ];

  return (
    <section className="py-24 md:py-36 bg-[#0F3B27] text-[#F7F9F7] overflow-hidden relative border-y border-[#92FF5F]/20" aria-label="Brand Philosophy">
      
      {/* Background Architectural Mesh & Subtle Compass Coordinate */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[radial-gradient(#92FF5F_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient Glow Orbs (Multi-color Palette: Orange + Lime + Ice) */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#FF7036]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#92FF5F]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#BFF2F0]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-enterprise relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {/* Eyebrow Pill */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#144931] border border-[#FF7036]/30 text-xs font-mono font-bold tracking-widest text-[#F7F9F7]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Compass className="h-3.5 w-3.5 text-[#FF7036]" />
            <span>02 // THE CONVICTION</span>
          </motion.div>

          {/* Statement Headline with Multi-Color Accent Gradient */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#F7F9F7] leading-[1.08] tracking-tight text-balance">
            Great enterprises aren&apos;t built on algorithms.<br />
            <motion.span 
              className="bg-gradient-to-r from-[#92FF5F] via-[#BFF2F0] to-[#FF7036] bg-clip-text text-transparent italic font-normal inline-block underline decoration-[#FF7036]/50 decoration-2 underline-offset-8"
              animate={{ opacity: [0.92, 1, 0.92] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Rare leadership moves everything.
            </motion.span>
          </h2>

          <p className="text-base sm:text-lg text-[#CFF1D2]/80 font-light max-w-2xl mx-auto leading-relaxed pt-2">
            In an era overwhelmed by commoditized resume scrapers, we operate as discreet talent architects—delivering human discernment, domain depth, and unwavering search integrity.
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Precision Ticker with Alternating Multi-Color Diamonds */}
      <div className="mt-16 pt-8 border-t border-white/10 overflow-hidden flex whitespace-nowrap select-none">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
            const sparkColors = ["text-[#92FF5F]", "text-[#FF7036]", "text-[#BFF2F0]", "text-[#CFF1D2]"];
            const currentColor = sparkColors[idx % sparkColors.length];
            return (
              <div key={idx} className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#F7F9F7]/70">
                <span className={`${currentColor} font-bold text-sm`}>✦</span>
                <span>{item}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
