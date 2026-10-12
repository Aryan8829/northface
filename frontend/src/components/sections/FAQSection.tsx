"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is your typical executive search delivery timeline?",
    answer: "Our average time to calibrated shortlist presentation is 18 business days. We initiate deep talent mapping within 48 hours of brief calibration, conducting confidential referencing before candidate introductions.",
  },
  {
    question: "What are your search fee structures and engagement models?",
    answer: "We offer three primary engagement models: Retained Executive Search (one-third on initiation, one-third on shortlist presentation, and one-third on placement execution), Contingent Direct-Hire for specialist individual contributors, and Embedded RPO for team build-outs.",
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
    <section className="py-24 md:py-32 bg-surface border-b border-border">
      <div className="container-enterprise max-w-4xl">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">07 / Transparent Guidance</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-base font-light">
            Answers to common questions regarding our search protocols, timelines, and candidate representation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-border rounded-xl bg-background overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg font-serif transition-colors hover:text-accent"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-accent"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed font-light border-t border-border/50 pt-4">
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
