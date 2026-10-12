import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";

export function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6 block">06 / Industries</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Sector Expertise
            </h2>
          </div>
          <Link href="/industries">
            <Button variant="outline">Explore All Sectors</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {industries.slice(0, 8).map((industry) => (
            <Link 
              key={industry.slug} 
              href={`/industries/${industry.slug}`}
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-6 bg-secondary relative">
                {/* Fallback pattern for now, normally an image */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent transition-transform duration-700 group-hover:scale-150" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{industry.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                {industry.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                View Sector <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
