import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart, Lightbulb, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatWeDoSection() {
  const offerings = [
    {
      title: "Market Intelligence",
      description: "Proprietary datasets, 2,500+ deep-dive industry reports, and custom syndicated research.",
      icon: BarChart,
      href: "/reports"
    },
    {
      title: "Enterprise Consulting",
      description: "Strategic advisory, digital transformation, and competitive benchmarking for Fortune 500s.",
      icon: Lightbulb,
      href: "/services/consulting"
    },
    {
      title: "Technology Integration",
      description: "Implementing AI, advanced analytics, and cloud architectures to operationalize insights.",
      icon: ShieldCheck,
      href: "/services/technology"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-enterprise">
        <div className="grid-editorial">
          
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="eyebrow mb-6">03 / What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Intelligence.<br />Strategy.<br />Execution.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              We bridge the gap between high-level market data and on-the-ground operational deployment.
            </p>
            <Link href="/services">
              <Button variant="outline" className="w-fit">View All Capabilities</Button>
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {offerings.map((item, i) => (
                <Link key={item.title} href={item.href} className={`group block p-8 rounded-xl border border-border bg-surface hover:shadow-lg transition-all duration-300 ${i === 2 ? 'sm:col-span-2' : ''}`}>
                  <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.description}</p>
                  <div className="flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
