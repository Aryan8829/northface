"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Crown, Users2, Clock4, Layers, Cpu, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    num: "01",
    icon: Crown,
    badge: "Flagship SLA",
    title: "Retained Executive Search",
    description: "Confidential, exhaustive search engagements for Board Directors, C-Suite, and VP-level mandates. Delivered with an 18-day average shortlist SLA and 12-month placement warranty.",
    href: "/services/executive-search",
    featured: true,
  },
  {
    num: "02",
    icon: Layers,
    badge: "Sprint Scaling",
    title: "Embedded Talent Partner (RPO)",
    description: "Senior search directors embed directly into your Slack, Notion, and ATS to rapidly build out whole engineering squads (10–50 hires) under a predictable monthly model.",
    href: "/services/rpo",
    featured: true,
  },
  {
    num: "03",
    icon: Users2,
    badge: "Milestone / Contingent",
    title: "Permanent Specialist Placement",
    description: "Direct-hire recruitment for rare, high-impact individual contributors: Staff & Principal Systems Engineers, Quant Researchers, and Technical Leads.",
    href: "/services/permanent-placement",
    featured: false,
  },
  {
    num: "04",
    icon: Clock4,
    badge: "Rapid Deployment",
    title: "Interim Leadership & Turnarounds",
    description: "Battle-tested former C-Suite operators deployed within 72 hours to guide post-merger integrations, carve-outs, or executive transitions.",
    href: "/services/interim-contract",
    featured: false,
  },
  {
    num: "05",
    icon: Cpu,
    badge: "Technical Depth",
    title: "Specialized Technology & AI Practice",
    description: "Architectural qualification led by former software leads. We evaluate distributed systems, kernel optimization, and foundation AI infrastructure.",
    href: "/services/technology",
    featured: false,
  },
  {
    num: "06",
    icon: Compass,
    badge: "Market Intelligence",
    title: "Compensation & Org Advisory",
    description: "Unvarnished market compensation studies, organizational design, and candidate retention blueprints for board committees.",
    href: "/services/innovation",
    featured: false,
  },
];

export function RecruitmentSolutionsSection() {
  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#EAE8E5]">
      <div className="container-enterprise">
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3 text-[#FF9A39]">03 / Talent Solutions</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              Recruitment models engineered for organizational impact.
            </h2>
            <p className="text-[#606064] mt-4 text-sm sm:text-base font-light leading-relaxed">
              From mission-critical executive succession to rapid engineering expansions, choose the search model calibrated to your timeline and organizational stakes.
            </p>
          </div>

          <Link href="/services">
            <Button variant="outline" className="h-11 px-5 rounded-sm border-[#EAE8E5] bg-white text-xs font-semibold text-[#202022] hover:bg-[#FAF9F7] hover:border-[#FF9A39]/40 gap-2 shrink-0 shadow-sm transition-all">
              <span>View All Frameworks</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </motion.div>

        {/* Magazine-style Mosaic Grid with Staggered Entrance & Spring Hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                className={`p-8 rounded-2xl border border-[#EAE8E5] flex flex-col justify-between hover:border-[#FF9A39]/60 shadow-sm transition-colors duration-300 group relative overflow-hidden ${
                  sol.featured ? "bg-white/95 backdrop-blur-sm" : "bg-white/85 backdrop-blur-sm"
                }`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.018,
                  boxShadow: "0 22px 35px -12px rgba(255, 154, 57, 0.16)",
                  transition: { type: "spring", stiffness: 350, damping: 22 }
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-serif text-[#FF9A39]">
                      {sol.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF9F7] border border-[#EAE8E5] text-[#606064]">
                      {sol.badge}
                    </span>
                  </div>

                  <motion.div 
                    className="h-11 w-11 rounded-xl bg-[#FAF9F7] border border-[#EAE8E5] flex items-center justify-center text-[#202022] group-hover:text-[#FF5B3D] group-hover:bg-[#FFF3EF] group-hover:border-[#FF5B3D]/30 transition-all duration-300 shadow-sm"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold font-serif text-[#202022] group-hover:text-[#FF5B3D] transition-colors leading-snug">
                      <Link href={sol.href}>
                        {sol.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#606064] leading-relaxed mt-2.5 font-light">
                      {sol.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE8E5]">
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#202022] group-hover:text-[#FF5B3D] transition-colors"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
