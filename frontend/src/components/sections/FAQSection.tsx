"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is your typical executive search delivery timeline?",
    answer: "Our average time to calibrated shortlist presentation is 18 business days. We initiate deep talent mapping within 48 hours of brief calibration, conducting confidential referencing before candidate introductions.",
  },
  {
    question: "What are your search fee structures and engagement models?",
    answer: "We offer three primary engagement models: Retained Executive Search (one-third on initiation, one-third on shortlist presentation, and one-third on placement execution), Contingent Direct-Hire for specialist individual contributors, and Embedded RPO for sprint team build-outs.",
  },
  {
    question: "How do you protect candidate confidentiality and current employment?",
    answer: "Confidentiality is fundamental to our practice. We never submit a candidate's credentials or identifiable details to an employer without prior explicit discussion and written candidate consent. All searches operate under mutual non-disclosure agreements.",
  },
  {
    question: "Do you offer a placement warranty or replacement guarantee?",
    answer: "Yes. All retained executive placements are covered by our 12-month performance and cultural fit guarantee. In the unlikely event an executive departs within the first year, our practice desk executes an immediate replacement search at zero additional professional fee.",
  },
  {
    question: "Are there any fees or costs for job seekers and candidates?",
    answer: "Never. Under our strict ethics charter and global employment regulations, candidates are never charged for representation, advisory, or placement services. Our fees are exclusively covered by hiring client organizations.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-[#EAE8E5]">
      <div className="container-enterprise max-w-4xl">
        <motion.div 
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow block text-[#FF5B3D]">08 / Transparent Guidance</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#606064] font-light max-w-xl mx-auto leading-relaxed">
            Unvarnished answers regarding our search timelines, fee models, and candidate protection protocols.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen 
                    ? "bg-white border-[#FF5B3D]/50 shadow-md" 
                    : "bg-white/85 backdrop-blur-sm border-[#EAE8E5] hover:border-[#FF5B3D]/30 hover:bg-white shadow-sm"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg font-serif transition-colors text-[#202022]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={cn("h-4 w-4 shrink-0 transition-colors", isOpen ? "text-[#FF5B3D]" : "text-[#606064]")} />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors",
                        isOpen ? "text-[#FF5B3D]" : "text-[#606064]"
                      )}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#606064] font-light leading-relaxed border-t border-[#EAE8E5]/60">
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
    </section>
  );
}
