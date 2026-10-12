import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CaseStudiesSection() {
  const cases = [
    {
      client: "Global Pharma Co.",
      title: "Supply Chain Digitization",
      metric: "40%",
      metricLabel: "Reduction in lead times",
      desc: "Implemented AI-driven predictive modeling to restructure the API supply chain across 12 countries.",
    },
    {
      client: "Top 5 European Bank",
      title: "Core System Modernization",
      metric: "$2.1B",
      metricLabel: "New capital unlocked",
      desc: "Migrated 40 years of legacy mainframe infrastructure to a cloud-native microservices architecture.",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="eyebrow mb-6">09 / Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Proof of<br />Execution.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We measure our success entirely by the quantifiable impact we generate for our clients.
            </p>
            <Link href="/case-studies">
              <Button variant="outline" className="w-fit">View All Case Studies</Button>
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((study, idx) => (
                <div key={idx} className="group p-8 border border-border bg-surface rounded-xl hover:shadow-lg hover:border-accent/30 transition-all duration-300 flex flex-col">
                  <div className="mb-8 pb-8 border-b border-border flex flex-col items-start gap-2">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{study.client}</span>
                    <div className="text-5xl font-serif font-bold text-primary group-hover:text-accent transition-colors">{study.metric}</div>
                    <span className="text-sm font-bold text-foreground">{study.metricLabel}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-8">{study.desc}</p>
                  
                  <div className="flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors mt-auto">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
