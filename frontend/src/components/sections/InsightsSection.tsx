import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InsightsSection() {
  const insights = [
    {
      type: "Research",
      date: "Oct 24, 2026",
      title: "How AI is Reshaping Enterprise Strategy in 2027",
      desc: "An analysis of board-level priorities as generative AI transitions from pilot programs to core operational infrastructure.",
      href: "/insights/ai-reshaping-enterprise-strategy"
    },
    {
      type: "Industry Focus",
      date: "Oct 18, 2026",
      title: "The Semiconductor Supply Chain Outlook",
      desc: "Navigating the geopolitical shifts and advanced packaging bottlenecks affecting global chip production.",
      href: "/insights/semiconductor-supply-chain-outlook"
    },
    {
      type: "Whitepaper",
      date: "Oct 12, 2026",
      title: "Sustainable Finance Frameworks",
      desc: "How tier-1 banks are restructuring their portfolios ahead of the new ESG compliance mandates.",
      href: "/insights/sustainable-finance-frameworks"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6 block">11 / Insights & Editorial</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Perspectives on the future.
            </h2>
          </div>
          <Link href="/insights">
            <Button variant="outline">View All Insights</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {insights.map((insight, idx) => (
            <Link 
              key={idx} 
              href={insight.href}
              className="group flex flex-col pt-8 border-t-2 border-border hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{insight.type}</span>
                <span className="text-xs text-muted-foreground">{insight.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {insight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                {insight.desc}
              </p>
              <div className="flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors">
                Read Article <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
