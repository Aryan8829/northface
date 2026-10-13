"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is your typical executive search delivery timeline?",
    answer: "Our mean delivery timeline to a calibrated shortlist presentation is 18 business days. We initiate systematic passive mapping within 48 hours of mandate calibration, conducting discreet back-channel referencing before introducing candidate dossiers.",
  },
  {
    question: "What are your search fee structures and engagement models?",
    answer: "We offer three primary engagement architectures: Retained Executive Search (governed by milestone delivery: one-third on initiation, one-third on shortlist presentation, and one-third on executive appointment), Contingent Specialist Placement for rare individual contributors, and Embedded RPO for hypergrowth team build-outs.",
  },
  {
    question: "How do you protect candidate confidentiality and current employment?",
    answer: "Confidentiality is our primary currency. We never submit a candidate's credentials or identifiable details to an employer without prior explicit discussion and written candidate consent. All searches operate under strict mutual non-disclosure standards.",
  },
  {
    question: "Do you offer a placement warranty or replacement guarantee?",
    answer: "Yes. All retained executive placements are covered by our contractual 12-month performance and cultural fit warranty. In the unlikely event an executive departs within the first year, our practice desk executes an immediate replacement search at zero additional professional fee.",
  },
  {
    question: "Are there any fees or costs for job seekers and candidates?",
    answer: "Never. Under our strict governance charter and global employment ethics, candidates are never charged for representation, advisory, or placement services. Our fees are exclusively covered by hiring client organizations.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#E1E8E3]">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Sticky Concierge Desk (Spans 4 cols) */}
          <motion.div 
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="eyebrow block">08 // TRANSPARENT GOVERNANCE</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-[#0F3B27]">
              Frequently asked governance questions.
            </h2>
            <p className="text-sm text-[#3D614E] font-light leading-relaxed">
              Unvarnished answers regarding our search SLAs, fee models, and candidate protection protocols.
            </p>

            <div className="p-6 rounded-2xl bg-[#0F3B27] text-[#F7F9F7] space-y-4 border border-[#92FF5F]/20 bracket-corners">
              <div className="text-xs font-mono font-bold text-[#92FF5F] uppercase tracking-wider">
                Require Custom SLA Calibration?
              </div>
              <p className="text-xs text-[#CFF1D2]/80 leading-relaxed font-light">
                Connect directly with our Managing Directors for an unvarnished review of market availability.
              </p>
              <Link href="/contact" className="block pt-1">
                <Button className="w-full bg-[#92FF5F] text-[#0F3B27] hover:bg-[#F7F9F7] rounded-full h-11 text-xs font-mono font-bold uppercase tracking-wider shadow-lime-glow gap-1.5">
                  <span>Speak With a Partner</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Accordion Deck (Spans 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white/95 border-[#0F3B27]/30 shadow-card"
                      : "bg-white/80 border-[#E1E8E3] hover:border-[#92FF5F]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold font-serif text-lg sm:text-xl text-[#0F3B27]">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${
                        isOpen ? "bg-[#0F3B27] text-[#92FF5F]" : "bg-[#F7F9F7] text-[#0F3B27]"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#3D614E] leading-relaxed font-light border-t border-[#E1E8E3] pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
