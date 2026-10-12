import React from "react";
import { RibbonDivider } from "@/components/motion/RibbonDivider";

export function StatementInterlude() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#EAE8E5] overflow-hidden relative" aria-label="Brand Philosophy">
      <div className="container-enterprise">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="eyebrow block text-[#FF5B3D]">
            02 / The Conviction
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#202022] leading-[1.08] tracking-tight text-balance">
            Great companies aren&apos;t built on algorithms.<br />
            <span className="text-[#FF5B3D] italic font-normal">Talent moves everything.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#606064] font-light max-w-2xl mx-auto leading-relaxed pt-2">
            In a market flooded with automated scraping, we operate with human discernment, deep architectural fluency, and radical candidate discretion.
          </p>
        </div>
      </div>

      {/* Passing curve to bridge into services */}
      <RibbonDivider variant="curve" accentFrom="coral" accentTo="orange" className="mt-12" />
    </section>
  );
}
