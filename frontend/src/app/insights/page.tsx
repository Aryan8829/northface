import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { latestInsights } from "@/data/homepage";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Talent Perspectives | Nexus Talent Partners",
  description: "Market intelligence, compensation frameworks, and executive search perspectives across technology, quant finance, and healthcare.",
};

export default function InsightsPage() {
  const featuredInsight = latestInsights[0];
  const remainingInsights = latestInsights.slice(1);

  return (
    <>
      {/* Editorial Hero on Pure White Canvas */}
      <section className="bg-white text-[#202022] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <Breadcrumb
            items={[{ label: "Insights" }]}
            className="mb-12 text-[#606064]"
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#EAE8E5] pb-12 mb-12">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
                The Executive Quarterly
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#202022] font-serif">
                Perspectives
              </h1>
            </div>
            <div className="text-[#606064] max-w-sm text-sm font-light">
              Provocative thinking and deep research on the forces transforming leadership, governance, and talent.
            </div>
          </div>
          
          {/* Featured Insight (Hero Article) */}
          <Link href={`/insights/${featuredInsight.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 md:p-12 rounded-3xl bg-[#FAF9F7] border border-[#EAE8E5] hover:border-[#FF5B3D]/30 transition-all">
              <div className="aspect-[16/9] lg:aspect-square bg-white relative overflow-hidden rounded-2xl border border-[#EAE8E5]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="space-y-6 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B3D] bg-[#FFF3EF] px-3 py-1 rounded-sm border border-[#FF5B3D]/20">
                    {featuredInsight.category}
                  </span>
                  <span className="text-xs font-medium text-[#606064] flex items-center gap-1.5">
                    <Clock className="h-3 w-3" /> {featuredInsight.readingTime}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202022] group-hover:text-[#FF5B3D] transition-colors leading-tight font-serif">
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
            <button className="h-12 px-8 bg-[#FF5B3D] text-white font-bold rounded-sm hover:bg-[#FF5B3D]/90 transition-colors uppercase tracking-widest text-sm shadow-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
