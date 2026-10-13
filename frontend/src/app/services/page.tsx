import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Lightbulb, BarChart3, Award, Users, Briefcase, Clock } from "lucide-react";
import { services } from "@/data/services";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Users,
  Briefcase,
  Clock,
  Cpu,
  BarChart3,
  Lightbulb,
};

export const metadata: Metadata = {
  title: "Talent Solutions & Search Capabilities | Nexus Talent Partners",
  description: "Explore our recruitment and executive search practices: Retained Executive Search, Permanent Placement, Embedded RPO, and Interim Leadership.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0F3B27]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="relative min-h-[50vh] flex items-center bg-transparent text-[#0F3B27] overflow-hidden pt-32 pb-20 border-b border-[#E1E8E3]">
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Solutions" }]}
            className="mb-8 text-[#3D614E]"
          />
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF7036]/10 text-[#FF7036] border border-[#FF7036]/30 shadow-sm">
              Recruitment Frameworks
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F3B27] font-serif">
              Talent Solutions
            </h1>
            <p className="text-xl md:text-2xl text-[#3D614E] max-w-2xl leading-relaxed font-light">
              We deploy dedicated search directors and rigorous qualification architectures to secure transformational leaders and critical technical specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Capability Index */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <div className="flex flex-col gap-24">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Cpu;
              const isEven = idx % 2 === 0;
              const colorSchemes = [
                { iconBg: "bg-[#0F3B27] text-[#92FF5F] border-[#92FF5F]/30", hoverBorder: "hover:border-[#92FF5F]", bracket: "bracket-corners" },
                { iconBg: "bg-[#FF7036] text-white border-[#FF7036]/30", hoverBorder: "hover:border-[#FF7036]", bracket: "bracket-corners-orange" },
                { iconBg: "bg-[#BFF2F0] text-[#0F3B27] border-[#0F3B27]/15", hoverBorder: "hover:border-[#BFF2F0]", bracket: "bracket-corners-ice" },
                { iconBg: "bg-[#CFF1D2] text-[#0F3B27] border-[#0F3B27]/15", hoverBorder: "hover:border-[#CFF1D2]", bracket: "bracket-corners" },
              ];
              const scheme = colorSchemes[idx % colorSchemes.length];
              
              return (
                <div key={service.slug} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start group">
                  
                  {/* Text Side */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="sticky top-32">
                      <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-8 border shadow-md transition-all ${scheme.iconBg}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="eyebrow block mb-3">{service.subtitle}</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-[#0F3B27]">
                        <Link href={`/services/${service.slug}`} className="hover:opacity-80 transition-opacity">
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-[#3D614E] text-lg mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0F3B27] hover:text-[#0F3B27]/80 uppercase tracking-wider group/link"
                      >
                        <span>Explore Methodology</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Capabilities / Sub-services Side */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#E1E8E3] shadow-sm space-y-8 ${scheme.bracket} ${scheme.hoverBorder} hover:shadow-xl transition-all`}>
                      <div className="border-b border-[#E1E8E3] pb-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D614E] mb-4">Core Practice Capabilities</h3>
                        <div className="flex flex-wrap gap-2.5">
                          {service.capabilities.map((cap) => (
                            <span 
                              key={cap}
                              className="px-3 py-1.5 rounded-sm bg-[#F7F9F7] border border-[#E1E8E3] text-xs font-medium text-[#0F3B27]"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D614E]">Specialized Mandates</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          {service.subServices.map((sub) => (
                            <div key={sub.title} className="space-y-2">
                              <h4 className="font-bold text-base font-serif text-[#0F3B27]">{sub.title}</h4>
                              <p className="text-xs text-[#3D614E] leading-relaxed font-light">{sub.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="pt-6 border-t border-[#E1E8E3]">
                        <p className="text-sm italic text-[#3D614E] leading-relaxed">
                          &ldquo;{service.testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-3 text-xs font-semibold text-[#0F3B27]">
                          {service.testimonial.author} &mdash; <span className="text-[#3D614E] font-normal">{service.testimonial.role}, {service.testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
