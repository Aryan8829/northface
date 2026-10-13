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
      <section className="bg-transparent text-[#0F3B27] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E1E8E3]">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[{ label: "Industries" }]}
            className="mb-8 text-[#3D614E]"
          />
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm">
              Sector Practices
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0F3B27] font-serif">
              Industries We Cover
            </h1>
            <p className="text-xl text-[#3D614E] max-w-2xl leading-relaxed font-light">
              Deep domain expertise across {industries.length} major industry verticals with {totalReports}+ published intelligence dossiers
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
                  <div className="h-full p-8 md:p-10 border border-[#E1E8E3] rounded-2xl bg-white/90 backdrop-blur-sm hover:shadow-xl hover:border-[#0F3B27]/40 transition-all duration-300 bracket-corners">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3.5 bg-[#0F3B27] text-[#92FF5F] rounded-xl group-hover:bg-[#92FF5F] group-hover:text-[#0F3B27] transition-all shadow-sm">
                        <Icon className="h-6 w-6 transition-colors" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#0F3B27] font-serif">{industry.reportCount}</span>
                        <span className="text-xs text-[#3D614E]">Reports</span>
                        <ArrowRight className="h-4 w-4 text-[#0F3B27] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-2" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 font-serif text-[#0F3B27] group-hover:opacity-80 transition-opacity">
                      {industry.name}
                    </h2>
                    <p className="text-[#3D614E] text-sm leading-relaxed mb-6 font-light">
                      {industry.description}
                    </p>

                    {/* Sub-categories */}
                    <div className="flex flex-wrap gap-2">
                      {industry.subCategories.map((sub) => (
                        <span
                          key={sub.slug}
                          className="text-xs bg-[#F7F9F7] border border-[#E1E8E3] px-2.5 py-1 rounded-sm text-[#0F3B27] font-medium"
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
