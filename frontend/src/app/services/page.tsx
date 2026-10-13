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
    <div className="min-h-screen bg-transparent text-[#202022]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="relative min-h-[50vh] flex items-center bg-transparent text-[#202022] overflow-hidden pt-32 pb-20 border-b border-[#EAE8E5]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFF3EF]/60 blur-[140px] pointer-events-none" />
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Solutions" }]}
            className="mb-8 text-[#606064]"
          />
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
              Recruitment Frameworks
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#202022] font-serif">
              Talent Solutions
            </h1>
            <p className="text-xl md:text-2xl text-[#606064] max-w-2xl leading-relaxed font-light">
              We deploy dedicated search directors and rigorous qualification architectures to secure transformational leaders and critical technical specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Capability Index */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="flex flex-col gap-24">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Cpu;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={service.slug} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start group">
                  
                  {/* Text Side */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="sticky top-32">
                      <div className="h-14 w-14 rounded-xl bg-white/90 flex items-center justify-center mb-8 border border-[#EAE8E5] group-hover:bg-[#FFF3EF] group-hover:border-[#FF5B3D]/40 transition-all shadow-sm">
                        <Icon className="h-7 w-7 text-[#FF5B3D]" />
                      </div>
                      <span className="eyebrow block mb-3">{service.subtitle}</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                        <Link href={`/services/${service.slug}`} className="hover:text-[#FF5B3D] transition-colors">
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-[#606064] text-lg mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5B3D] hover:underline uppercase tracking-wider"
                      >
                        Explore Methodology
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Capabilities / Sub-services Side */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#EAE8E5] shadow-sm space-y-8">
                      <div className="border-b border-[#EAE8E5] pb-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#606064] mb-4">Core Practice Capabilities</h3>
                        <div className="flex flex-wrap gap-2.5">
                          {service.capabilities.map((cap) => (
                            <span 
                              key={cap}
                              className="px-3 py-1.5 rounded-sm bg-[#FAF9F7] border border-[#EAE8E5] text-xs font-medium text-[#202022]"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#606064]">Specialized Mandates</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          {service.subServices.map((sub) => (
                            <div key={sub.title} className="space-y-2">
                              <h4 className="font-bold text-base font-serif text-[#202022]">{sub.title}</h4>
                              <p className="text-xs text-[#606064] leading-relaxed font-light">{sub.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="pt-6 border-t border-[#EAE8E5]">
                        <p className="text-sm italic text-[#606064] leading-relaxed">
                          &ldquo;{service.testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-3 text-xs font-semibold text-[#202022]">
                          {service.testimonial.author} &mdash; <span className="text-[#606064] font-normal">{service.testimonial.role}, {service.testimonial.company}</span>
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
