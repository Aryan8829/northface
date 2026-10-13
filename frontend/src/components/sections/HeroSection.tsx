"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Briefcase, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-transparent text-[#202022] pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      
      {/* Bespoke Kinetic Orbit / Ribbon Artwork (Background right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[780px] h-[680px] pointer-events-none select-none z-0 opacity-85" aria-hidden="true">
        <motion.svg 
          className="w-full h-full" 
          viewBox="0 0 780 680" 
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "480px 340px" }}
        >
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
          <motion.path
            d="M 220 340 C 220 200, 340 100, 480 100 C 620 100, 720 180, 750 300"
            stroke="url(#hero-coral-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          {/* Meeting Point / Signal Waypoints with Animated Pulse Rings */}
          <circle cx="480" cy="100" r="5" fill="#FF5B3D" />
          <motion.circle 
            cx="480" 
            cy="100" 
            r="12" 
            stroke="#FF5B3D" 
            strokeWidth="1" 
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <circle cx="750" cy="300" r="4" fill="#FF9A39" />
          <motion.circle 
            cx="750" 
            cy="300" 
            r="9" 
            stroke="#FF9A39" 
            strokeWidth="1" 
            animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Cross Connector Line */}
          <line x1="280" y1="440" x2="480" y2="100" stroke="#FF5B3D" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.4" />

          <defs>
            <linearGradient id="hero-coral-grad" x1="220" y1="100" x2="750" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF5B3D" />
              <stop offset="0.6" stopColor="#FF9A39" />
              <stop offset="1" stopColor="#E83379" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Headline & Actions */}
          <motion.div 
            className="lg:col-span-7 space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF3EF] border border-[#FF5B3D]/30 text-xs font-bold tracking-wider uppercase text-[#FF5B3D] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "8s" }} />
                <span>Executive Search &amp; Specialist Recruitment</span>
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-[#202022] leading-[1.08] text-balance"
              variants={itemVariants}
            >
              The right people.<br />
              <motion.span 
                className="italic font-normal text-[#FF5B3D] inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                The next big move.
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-[#606064] font-light leading-relaxed max-w-2xl text-balance"
              variants={itemVariants}
            >
              Specialist recruitment built around people, potential, and long-term organizational fit. We partner with forward-thinking boards and founders to place transformative leaders and critical technical specialists.
            </motion.p>

            {/* Dual Action Pathways */}
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
              variants={itemVariants}
            >
              <Link href="/employers">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto h-13 px-8 text-sm font-semibold bg-[#202022] text-white hover:bg-[#FF5B3D] rounded-sm gap-2 group transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#FF5B3D]/25"
                  >
                    <span>Hire Talent</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              
              <Link href="/jobs">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto h-13 px-7 text-sm font-semibold border-[#EAE8E5] bg-white/80 backdrop-blur-sm text-[#202022] hover:bg-white hover:border-[#FF5B3D]/40 rounded-sm gap-2 transition-all shadow-sm"
                  >
                    <Briefcase className="h-4 w-4 text-[#FF5B3D]" />
                    <span>Explore Verified Mandates</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Authentic Credibility Signals with Animated Counters */}
            <motion.div 
              className="pt-8 border-t border-[#EAE8E5] grid grid-cols-3 gap-6 max-w-lg"
              variants={itemVariants}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#202022] tracking-tight">
                  <AnimatedCounter value={18} suffix=" Days" duration={1.5} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-0.5">Avg Shortlist SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#FF5B3D] tracking-tight">
                  <AnimatedCounter value={94} suffix="%" duration={1.8} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-0.5">3-Year Retention</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#202022] tracking-tight">
                  <AnimatedCounter value={12} suffix=" Mos" duration={1.4} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-0.5">Placement Guarantee</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Mandate Preview Ticket with Smooth Floating & Tilt */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Visual Ticket */}
              <motion.div 
                className="bg-white/95 backdrop-blur-md text-[#202022] p-7 rounded-2xl border border-[#EAE8E5] shadow-xl relative z-20"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.3 },
                  scale: { duration: 0.8, delay: 0.3 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                whileHover={{ 
                  scale: 1.025, 
                  y: -14,
                  boxShadow: "0 25px 40px -12px rgba(255, 91, 61, 0.2)",
                  transition: { type: "spring", stiffness: 350, damping: 20 }
                }}
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E5]">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#606064]">Active Search Mandate</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/25">
                    Retained Executive
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF5B3D]">Technology &amp; Foundation AI</div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug text-[#202022]">
                    Vice President, Machine Learning Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#606064] font-medium">
                    <span className="px-2.5 py-1 rounded-sm bg-[#FAF9F7] border border-[#EAE8E5]">San Francisco, CA</span>
                    <span className="px-2.5 py-1 rounded-sm bg-[#FAF9F7] border border-[#EAE8E5]">Hybrid US</span>
                    <span className="px-2.5 py-1 rounded-sm bg-[#FFF3EF] border border-[#FF5B3D]/20 font-semibold text-[#FF5B3D]">$380k – $460k</span>
                  </div>
                </div>

                {/* Candidate Qualification Bar */}
                <div className="mt-6 pt-5 border-t border-[#EAE8E5] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#606064]">Qualification Protocol</span>
                    <span className="font-bold text-emerald-600">Zero False-Positive Bar</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#EAE8E5] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#FF5B3D] to-[#FF9A39] rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
                    />
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
                  <Link href="/jobs/vp-machine-learning-infrastructure" className="text-xs font-bold text-[#FF5B3D] hover:underline flex items-center gap-1 group">
                    <span>View Mandate</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Secondary Floating Signal Note */}
              <motion.div 
                className="hidden sm:flex absolute -bottom-5 -left-5 z-30 bg-white/95 backdrop-blur-md text-[#202022] p-3.5 rounded-xl border border-[#EAE8E5] shadow-lg items-center gap-3 max-w-[260px]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="h-8 w-8 rounded-full bg-[#FFF3EF] flex items-center justify-center shrink-0 text-[#FF5B3D] font-bold text-xs shadow-inner">
                  NT
                </div>
                <div>
                  <div className="text-xs font-bold text-[#202022]">Principal Quant Architect</div>
                  <div className="text-[10px] text-[#606064]">Placed &bull; Tier 1 Trading Desk</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
