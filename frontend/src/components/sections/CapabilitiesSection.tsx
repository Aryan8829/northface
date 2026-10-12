import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Lightbulb, Database, Activity, Target, Users } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Lightbulb, Database, Activity, Target, Users
};

export function CapabilitiesSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-enterprise">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow mb-6">05 / Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Architecting the modern enterprise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver highly specialized capabilities across strategy, technology, and operations, designed to solve complex, systemic challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className="group relative flex flex-col p-8 bg-background border border-border hover:border-accent/40 rounded-xl transition-all duration-300"
              >
                {/* Number overlay */}
                <div className="absolute top-6 right-8 text-6xl font-bold text-accent/5 font-serif pointer-events-none group-hover:text-accent/10 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-8">
                  <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {service.capabilities.slice(0, 3).map((cap, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
                  Explore Capability <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
