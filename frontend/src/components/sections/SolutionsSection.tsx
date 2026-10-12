"use client";

import React, { useState } from "react";
import Link from "next/link";
import { solutions } from "@/data/homepage";
import { motion, fadeInUp, staggerContainer } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-2xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Solutions
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Platforms & Products
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Tab Navigation — Left */}
          <div className="lg:col-span-4 flex lg:flex-col gap-3">
            {solutions.map((sol, i) => (
              <button
                key={sol.id}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left px-6 py-5 rounded-lg border transition-all duration-200 w-full",
                  active === i
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card border-border hover:border-accent/30 hover:shadow-sm"
                )}
              >
                <div className={cn("text-xs font-semibold uppercase tracking-wider mb-1",
                  active === i ? "text-accent" : "text-muted-foreground"
                )}>
                  {sol.category}
                </div>
                <div className="text-lg font-bold">{sol.name}</div>
              </button>
            ))}
          </div>

          {/* Content Panel — Right */}
          <div className="lg:col-span-8">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl p-8 md:p-12 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {solutions[active].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {solutions[active].name}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {solutions[active].description}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-4">
                  {solutions[active].features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-8">
                <Link href={solutions[active].href}>
                  <Button variant="default" className="rounded-sm gap-2 group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
