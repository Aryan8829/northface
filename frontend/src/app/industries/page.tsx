import React from "react";
import Link from "next/link";
import { industries, getTotalReportCount } from "@/data/industries";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ArrowRight, Cpu, Heart, Landmark, Zap, Factory, ShoppingBag, Radio, Microscope } from "lucide-react";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Heart, Landmark, Zap, Factory, ShoppingBag, Radio, Microscope,
};

export const metadata: Metadata = {
  title: "Practice Areas & Industry Desks | Nexus Talent Partners",
  description: "Specialized executive search and recruitment practice desks across Technology, Quantitative Finance, Healthcare, and Industrial Systems.",
};

export default function IndustriesPage() {
  const totalReports = getTotalReportCount();

  return (
    <>
      {/* Hero on Pure White Canvas */}
      <section className="bg-transparent text-[#202022] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#EAE8E5]">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[{ label: "Industries" }]}
            className="mb-8 text-[#606064]"
          />
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
              Sector Practices
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#202022] font-serif">
              Industries We Cover
            </h1>
            <p className="text-xl text-[#606064] max-w-2xl leading-relaxed font-light">
              Deep domain expertise across {industries.length} major industry verticals with {totalReports}+ published reports
              and specialized executive networks.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Cpu;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group block"
                >
                  <div className="h-full p-8 md:p-10 border border-[#EAE8E5] rounded-xl bg-white/90 backdrop-blur-sm hover:shadow-xl hover:border-[#FF5B3D]/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-[#FFF3EF] rounded-md group-hover:bg-[#FF5B3D]/15 transition-colors">
                        <Icon className="h-6 w-6 text-[#FF5B3D] transition-colors" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-accent">{industry.reportCount}</span>
                        <span className="text-xs text-muted-foreground">Reports</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent ml-2" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Sub-categories */}
                    <div className="flex flex-wrap gap-2">
                      {industry.subCategories.map((sub) => (
                        <span
                          key={sub.slug}
                          className="text-xs bg-secondary px-2.5 py-1 rounded-sm text-muted-foreground font-medium"
                        >
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
