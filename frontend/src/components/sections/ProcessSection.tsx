"use client";

import React from "react";
import { processSteps } from "@/data/homepage";
import { motion, fadeInUp, staggerContainer } from "@/components/ui/animations";

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-2xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Our Approach
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            How We Help You Win
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-border z-0" />
              )}

              <div className="relative z-10 space-y-4">
                <div className="text-6xl md:text-7xl font-bold font-serif text-accent/15">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold -mt-6">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
