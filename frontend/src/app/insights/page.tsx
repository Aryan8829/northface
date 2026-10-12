import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { latestInsights } from "@/data/homepage";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Perspectives | Nexus Consulting",
  description: "Read our latest thinking, research, and analysis on the trends shaping the future of enterprise.",
};

export default function InsightsPage() {
  const featuredInsight = latestInsights[0];
  const remainingInsights = latestInsights.slice(1);

  return (
    <>
      {/* Editorial Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-enterprise">
          <Breadcrumb
            items={[{ label: "Insights" }]}
            className="mb-12 text-primary-foreground/50"
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12 mb-12">
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow block text-accent border-l-2 border-accent pl-4">
                The Quarterly
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-serif">
                Perspectives
              </h1>
            </div>
            <div className="text-primary-foreground/60 max-w-sm text-sm">
              Provocative thinking and deep research on the forces transforming the global economy.
            </div>
          </div>
          
          {/* Featured Insight (Hero Article) */}
          <Link href={`/insights/${featuredInsight.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="aspect-[16/9] lg:aspect-square bg-white/5 relative overflow-hidden rounded-xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="space-y-6 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-sm">
                    {featuredInsight.category}
                  </span>
                  <span className="text-xs font-medium text-primary-foreground/50 flex items-center gap-1.5">
                    <Clock className="h-3 w-3" /> {featuredInsight.readingTime}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white group-hover:text-accent transition-colors leading-tight font-serif">
                  {featuredInsight.title}
                </h2>
                
                <p className="text-lg text-primary-foreground/70 leading-relaxed font-light">
                  {featuredInsight.excerpt}
                </p>
                
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{featuredInsight.author}</div>
                    <div className="text-xs text-primary-foreground/50">
                      {new Date(featuredInsight.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="container-enterprise">
          <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
            <h2 className="text-2xl font-bold font-serif">Latest Publications</h2>
            <Link href="#" className="text-sm font-bold text-primary hover:text-accent uppercase tracking-widest transition-colors flex items-center gap-2">
              View Archive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {remainingInsights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group flex flex-col h-full">
                <div className="aspect-[4/3] bg-surface relative overflow-hidden rounded-lg mb-6 border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-background/90 px-3 py-1 rounded-sm border border-border">
                      {insight.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold leading-snug group-hover:text-accent transition-colors font-serif">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  
                  <div className="pt-4 mt-auto flex items-center justify-between text-sm">
                    <span className="font-bold text-foreground">
                      {insight.author}
                    </span>
                    <span className="text-muted-foreground font-medium">
                      {new Date(insight.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container-enterprise max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Get our latest thinking</h2>
          <p className="text-lg text-muted-foreground">Subscribe to receive our weekly dispatch of strategic insights and macro-economic analysis.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-4">
            <input 
              type="email" 
              placeholder="Enter your corporate email" 
              className="flex-1 h-12 px-4 rounded-sm border border-border bg-background focus:outline-none focus:border-accent"
            />
            <button className="h-12 px-8 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
