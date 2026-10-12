import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Lightbulb, BarChart3, Search, Compass, Globe } from "lucide-react";
import { services } from "@/data/services";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Lightbulb, BarChart3, Search, Compass, Globe,
};

export const metadata: Metadata = {
  title: "Our Capabilities | Nexus Consulting",
  description: "From technology and innovation to data analytics, consulting, and market intelligence — explore the full spectrum of Nexus capabilities.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Editorial Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-primary text-primary-foreground overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        </div>
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Capabilities" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow block mb-4 text-white/80 border-l-2 border-accent pl-4">
              Enterprise Operations
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
              Capabilities Index
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl leading-relaxed font-light">
              We deploy highly specialized, cross-functional teams to solve the most complex systemic challenges facing the modern enterprise.
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
                      <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center mb-8 border border-border group-hover:bg-accent/5 group-hover:border-accent/30 transition-all">
                        <Icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      
                      <span className="eyebrow mb-4 block">Practice Area {String(idx + 1).padStart(2, '0')}</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                      <p className="text-xl font-medium text-accent mb-6">{service.subtitle}</p>
                      
                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors">
                        Explore Practice <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Capabilities List Side */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} bg-surface border border-border rounded-2xl p-8 lg:p-12 shadow-sm`}>
                    <h3 className="font-bold text-lg mb-8 border-b border-border pb-4">Core Competencies</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-border">
                      <h3 className="font-bold text-lg mb-6">Sub-Practices</h3>
                      <div className="grid sm:grid-cols-2 gap-8">
                        {service.subServices.slice(0, 4).map((sub) => (
                          <div key={sub.title}>
                            <h4 className="font-bold text-primary mb-2 text-sm">{sub.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-3">{sub.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
