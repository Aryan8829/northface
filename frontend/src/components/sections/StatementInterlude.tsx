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
      
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#92FF5F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#BFF2F0]/10 rounded-full blur-3xl pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#144931] border border-[#92FF5F]/30 text-xs font-mono font-bold tracking-widest text-[#92FF5F]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Compass className="h-3.5 w-3.5 text-[#92FF5F]" />
            <span>02 // THE CONVICTION</span>
          </motion.div>

          {/* Statement Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#F7F9F7] leading-[1.08] tracking-tight text-balance">
            Great enterprises aren&apos;t built on algorithms.<br />
            <motion.span 
              className="text-[#92FF5F] italic font-normal inline-block underline decoration-[#92FF5F]/40 decoration-2 underline-offset-8"
              animate={{ opacity: [0.9, 1, 0.9] }}
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

      {/* Infinite Horizontal Precision Ticker */}
      <div className="mt-16 pt-8 border-t border-[#92FF5F]/15 overflow-hidden flex whitespace-nowrap select-none">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#CFF1D2]/60">
              <span className="text-[#92FF5F] font-bold">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
