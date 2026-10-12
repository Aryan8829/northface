"use client";

import React, { useState } from "react";
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
    <section className="py-24 md:py-32 bg-white border-t border-[#EAE8E5]">
      <div className="container-enterprise max-w-4xl">
        <div className="text-center mb-16 space-y-3">
          <span className="eyebrow block text-[#FF5B3D]">08 / Transparent Guidance</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#606064] font-light max-w-xl mx-auto leading-relaxed">
            Unvarnished answers regarding our search timelines, fee models, and candidate protection protocols.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-200",
                  isOpen ? "bg-[#FAF9F7] border-[#FF5B3D]/40 shadow-sm" : "bg-white border-[#EAE8E5] hover:border-[#EAE8E5]"
                )}
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
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-[#606064] transition-transform duration-200",
                      isOpen && "rotate-180 text-[#FF5B3D]"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#606064] font-light leading-relaxed border-t border-[#EAE8E5]/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
