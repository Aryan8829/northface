import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ArrowRight, BarChart, TrendingUp, Building2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Client Impact | Nexus Consulting",
  description: "Explore how Nexus Consulting delivers measurable impact and strategic transformation for Fortune 500 enterprises.",
};

const caseStudies = [
  {
    slug: "global-bank-ai-transformation",
    client: "Tier 1 Global Bank",
    title: "Orchestrating a $2B AI-driven operational overhaul.",
    category: "Financial Services",
    metric: "40% Cost Reduction",
    description: "How we restructured the core operations of a legacy financial institution using generative AI and advanced automation.",
  },
  {
    slug: "automotive-supply-chain-resilience",
    client: "Leading Automotive OEM",
    title: "Building supply chain resilience in a fragmented world.",
    category: "Manufacturing",
    metric: "$800M Value Protected",
    description: "Designing a predictive digital twin to secure critical components and mitigate geopolitical supply risks.",
  },
  {
    slug: "pharma-digital-health-spinout",
    client: "Top 5 Pharma Company",
    title: "Structuring a $5B digital health venture spinout.",
    category: "Healthcare",
    metric: "3x Valuation Arbitrage",
    description: "Strategic diligence and structural architecture for spinning out an undervalued digital therapeutics portfolio.",
  },
  {
    slug: "retail-omnichannel-unification",
    client: "Global Retail Conglomerate",
    title: "Unifying fragmented data silos into a singular commerce engine.",
    category: "Retail",
    metric: "22% Revenue Lift",
    description: "Architecting a unified customer data platform (CDP) to drive hyper-personalized omnichannel experiences.",
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 to-transparent opacity-60 mix-blend-overlay" />
        </div>
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Case Studies" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-4xl space-y-6">
            <span className="eyebrow block text-accent border-l-2 border-accent pl-4">
              Client Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif leading-tight text-white">
              The anatomy of transformation.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-3xl leading-relaxed font-light">
              We measure our success by a single metric: the magnitude of the impact we deliver. Explore our proprietary methodologies in action.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.slug} className="group flex flex-col h-full bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-premium transition-all duration-300">
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/5 rounded-full">
                      {study.category}
                    </span>
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-muted-foreground">{study.client}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6 group-hover:text-accent transition-colors leading-tight">
                    {study.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-1">
                    {study.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Impact</div>
                        <div className="font-bold text-foreground">{study.metric}</div>
                      </div>
                    </div>
                    
                    <Link href={`/contact`} className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary border-t border-border text-center">
        <div className="container-enterprise max-w-3xl">
          <BarChart className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Ready to architect your own success story?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light">
            Our principal architects are ready to audit your current operating model and identify asymmetric growth levers.
          </p>
          <Link href="/contact">
            <button className="h-14 px-8 rounded-sm bg-primary text-primary-foreground text-base font-bold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 group">
              Request a Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
