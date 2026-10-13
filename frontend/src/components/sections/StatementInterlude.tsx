"use client";

import React from "react";
import { motion } from "framer-motion";
import { RibbonDivider } from "@/components/motion/RibbonDivider";

export function StatementInterlude() {
  return (
    <section className="py-20 md:py-28 bg-transparent border-t border-[#EAE8E5] overflow-hidden relative" aria-label="Brand Philosophy">
      <div className="container-enterprise">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="eyebrow inline-block text-[#FF5B3D] px-3.5 py-1 rounded-full bg-[#FFF3EF] border border-[#FF5B3D]/20 text-xs font-bold uppercase tracking-widest"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            02 / The Conviction
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#202022] leading-[1.08] tracking-tight text-balance">
            Great companies aren&apos;t built on algorithms.<br />
            <motion.span 
              className="text-[#FF5B3D] italic font-normal inline-block"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              Talent moves everything.
            </motion.span>
          </h2>

          <p className="text-base sm:text-lg text-[#606064] font-light max-w-2xl mx-auto leading-relaxed pt-2">
            In a market flooded with automated scraping, we operate with human discernment, deep architectural fluency, and radical candidate discretion.
          </p>
        </motion.div>
      </div>

      {/* Passing curve to bridge into services */}
      <RibbonDivider variant="curve" accentFrom="coral" accentTo="orange" className="mt-12" />
    </section>
  );
}
