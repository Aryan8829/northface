"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "How does Nexus source its market intelligence data?",
      a: "Our data is sourced through a proprietary blend of primary research, executive interviews, and automated scraping of over 10,000 global regulatory, financial, and industry databases. All data is vetted by senior analysts before inclusion in our reports."
    },
    {
      q: "Can you execute the strategies you recommend?",
      a: "Yes. Unlike pure-play research firms, Nexus maintains a robust Technology & Integration practice. We build the cloud architectures, deploy the AI models, and manage the digital transformations we recommend."
    },
    {
      q: "Do you offer custom syndicate research?",
      a: "Absolutely. We routinely partner with Fortune 500 organizations to conduct deep-dive, proprietary research into highly niche or emerging markets that are not covered in our standard catalog."
    },
    {
      q: "How is your consulting model structured?",
      a: "We operate on a partner-led model. This means you will always have a senior partner managing your engagement, backed by a dedicated team of analysts, technologists, and industry specialists tailored to your exact challenge."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5">
            <span className="eyebrow mb-6 block">12 / Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Clarity on how we operate.
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in total transparency regarding our methodologies, data sources, and engagement models.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="flex w-full items-start justify-between text-left focus:outline-none group"
                  >
                    <h3 className="text-xl font-bold pr-8 group-hover:text-accent transition-colors">
                      {faq.q}
                    </h3>
                    <div className="flex-shrink-0 h-8 w-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors mt-0.5">
                      {openIndex === idx ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === idx ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
