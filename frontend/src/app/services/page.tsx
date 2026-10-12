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
    <main className="min-h-screen bg-background">
      {/* Editorial Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-primary text-primary-foreground overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10" />
        </div>
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Solutions" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow block mb-4 text-accent border-l-2 border-accent pl-4">
              Recruitment Frameworks
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-serif">
              Talent Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/75 max-w-2xl leading-relaxed font-light">
              We deploy dedicated search directors and rigorous qualification architectures to secure transformational leaders and critical technical specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Capability Index */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
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
                      <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center mb-8 border border-border group-hover:bg-accent/10 group-hover:border-accent/40 transition-all">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <span className="eyebrow block mb-3">{service.subtitle}</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                        <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors">
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline uppercase tracking-wider"
                      >
                        Explore Methodology
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Capabilities / Sub-services Side */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-surface rounded-2xl p-8 md:p-12 border border-border space-y-8">
                      <div className="border-b border-border pb-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Core Practice Capabilities</h3>
                        <div className="flex flex-wrap gap-2.5">
                          {service.capabilities.map((cap) => (
                            <span 
                              key={cap}
                              className="px-3 py-1.5 rounded-sm bg-background border border-border text-xs font-medium text-foreground"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Specialized Mandates</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          {service.subServices.map((sub) => (
                            <div key={sub.title} className="space-y-2">
                              <h4 className="font-bold text-base font-serif text-foreground">{sub.title}</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed font-light">{sub.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="pt-6 border-t border-border">
                        <p className="text-sm italic text-muted-foreground leading-relaxed">
                          &ldquo;{service.testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-3 text-xs font-semibold text-foreground">
                          {service.testimonial.author} &mdash; <span className="text-muted-foreground font-normal">{service.testimonial.role}, {service.testimonial.company}</span>
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
    </main>
  );
}
