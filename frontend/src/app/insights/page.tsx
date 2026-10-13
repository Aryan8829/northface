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
      <section className="bg-transparent text-[#0F3B27] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <Breadcrumb
            items={[{ label: "Insights" }]}
            className="mb-12 text-[#3D614E]"
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#E1E8E3] pb-12 mb-12">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm">
                The Executive Quarterly
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F3B27] font-serif">
                Perspectives
              </h1>
            </div>
            <div className="text-[#3D614E] max-w-sm text-sm font-light">
              Provocative thinking and deep research on the forces transforming leadership, governance, and talent.
            </div>
          </div>
          
          {/* Featured Insight (Hero Article) */}
          <Link href={`/insights/${featuredInsight.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 md:p-12 rounded-3xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] hover:border-[#0F3B27]/40 hover:shadow-xl transition-all bracket-corners">
              <div className="aspect-[16/9] lg:aspect-square bg-white relative overflow-hidden rounded-2xl border border-[#E1E8E3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="space-y-6 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#92FF5F] bg-[#0F3B27] px-3 py-1 rounded-sm border border-[#92FF5F]/20">
                    {featuredInsight.category}
                  </span>
                  <span className="text-xs font-medium text-[#3D614E] flex items-center gap-1.5">
                    <Clock className="h-3 w-3" /> {featuredInsight.readingTime}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3B27] group-hover:opacity-85 transition-opacity leading-tight font-serif">
                  {featuredInsight.title}
                </h2>
                
                <p className="text-lg text-[#3D614E] leading-relaxed font-light">
                  {featuredInsight.excerpt}
                </p>
                
                <div className="pt-6 border-t border-[#E1E8E3] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#0F3B27]">{featuredInsight.author}</div>
                    <div className="text-xs text-[#3D614E]">
                      {new Date(featuredInsight.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/30 flex items-center justify-center group-hover:bg-[#92FF5F] group-hover:text-[#0F3B27] transition-colors shadow-sm">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <div className="flex items-end justify-between mb-16 border-b border-[#E1E8E3] pb-6">
            <h2 className="text-2xl font-bold font-serif text-[#0F3B27]">Latest Publications</h2>
            <Link href="#" className="text-sm font-bold text-[#0F3B27] hover:text-[#0F3B27]/80 uppercase tracking-widest transition-colors flex items-center gap-2">
              View Archive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {remainingInsights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group flex flex-col h-full">
                <div className="aspect-[4/3] bg-white/90 relative overflow-hidden rounded-xl mb-6 border border-[#E1E8E3] shadow-sm bracket-corners">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F3B27]/5 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#92FF5F] bg-[#0F3B27] px-3 py-1 rounded-sm border border-[#92FF5F]/20">
                      {insight.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold leading-snug group-hover:opacity-80 transition-opacity font-serif text-[#0F3B27]">
                    {insight.title}
                  </h3>
                  <p className="text-[#3D614E] leading-relaxed flex-1 line-clamp-3 font-light text-sm">
                    {insight.excerpt}
                  </p>
                  
                  <div className="pt-4 mt-auto flex items-center justify-between text-sm border-t border-[#E1E8E3]">
                    <span className="font-bold text-[#0F3B27]">
                      {insight.author}
                    </span>
                    <span className="text-[#3D614E] font-medium text-xs">
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
      <section className="py-24 bg-transparent border-b border-[#E1E8E3]">
        <div className="container-enterprise max-w-4xl text-center space-y-8 p-10 md:p-14 rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/20 shadow-2xl bracket-corners">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Get our latest thinking</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto font-light">Subscribe to receive our weekly dispatch of strategic insights and macro-economic analysis.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-4">
            <input 
              type="email" 
              placeholder="Enter your corporate email" 
              className="flex-1 h-12 px-4 rounded-sm border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#92FF5F]"
            />
            <button className="h-12 px-8 bg-[#92FF5F] text-[#0F3B27] font-bold rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-xs shadow-md">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
