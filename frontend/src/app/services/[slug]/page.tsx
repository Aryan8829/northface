import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Quote, Anchor } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Nexus Talent Partners`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Editorial Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent opacity-50 blur-3xl" />
        </div>
        
        <div className="container-enterprise relative z-10">
          <Breadcrumb
            items={[
              { label: "Capabilities", href: "/services" },
              { label: service.title },
            ]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <span className="eyebrow block mb-4 border-l-2 border-accent pl-4 text-white/80">
                {service.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-3xl leading-relaxed font-light mt-6">
                {service.heroDescription}
              </p>
            </div>
            
            <div className="lg:col-span-4 lg:pl-12 lg:border-l border-white/10 flex flex-col items-start lg:items-end text-left lg:text-right">
              <Link href="/contact" className="w-full">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 rounded-sm h-14 px-8 text-base font-bold gap-2 group shadow-premium">
                  Discuss Your Needs
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative">
            
            {/* Sticky Anchor Sidebar */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-32 space-y-8 pr-8 border-r border-border">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Anchor className="h-4 w-4 text-accent" />
                  Navigation
                </h3>
                <nav className="flex flex-col gap-4 relative">
                  <div className="absolute left-1.5 top-2 bottom-2 w-px bg-border" />
                  <a href="#overview" className="flex items-center gap-4 text-sm font-semibold text-foreground hover:text-accent transition-colors">
                    <div className="w-3 h-3 rounded-full bg-background border-2 border-accent relative z-10" />
                    Overview
                  </a>
                  <a href="#sub-services" className="flex items-center gap-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <div className="w-3 h-3 rounded-full bg-background border-2 border-border relative z-10" />
                    Sub-Practices
                  </a>
                  <a href="#approach" className="flex items-center gap-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <div className="w-3 h-3 rounded-full bg-background border-2 border-border relative z-10" />
                    Methodology
                  </a>
                  <a href="#industries" className="flex items-center gap-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <div className="w-3 h-3 rounded-full bg-background border-2 border-border relative z-10" />
                    Sectors Served
                  </a>
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 space-y-24">
              
              {/* Overview / Core Capabilities */}
              <div id="overview" className="scroll-mt-32">
                <span className="eyebrow block mb-4">01 / Overview</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Deliver</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-4xl">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3 p-5 border border-border rounded-xl bg-surface">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-semibold">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Services */}
              <div id="sub-services" className="scroll-mt-32">
                <span className="eyebrow block mb-4">02 / Sub-Practices</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Deep Specialization</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {service.subServices.map((sub, i) => (
                    <div key={sub.title} className="group p-8 bg-surface border border-border rounded-xl hover:shadow-premium hover:border-accent/30 transition-all duration-300">
                      <div className="text-5xl font-bold font-serif text-border mb-6 group-hover:text-accent/20 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{sub.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div id="approach" className="scroll-mt-32">
                <span className="eyebrow block mb-4">03 / Methodology</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Execution Framework</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {service.approach.map((step) => (
                    <div key={step.step} className="space-y-4 border-t border-border pt-6">
                      <div className="text-sm font-bold uppercase tracking-widest text-accent">
                        Phase {step.step}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Served */}
              <div id="industries" className="scroll-mt-32 border-t border-border pt-12">
                <span className="eyebrow block mb-4">04 / Sectors</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cross-Sector Expertise</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Our {service.title.toLowerCase()} capabilities are deployed across the following major verticals, 
                  allowing us to cross-pollinate best practices while respecting specific regulatory architectures.
                </p>
                <div className="flex flex-wrap gap-4">
                  {service.industries.map((industry) => (
                    <div key={industry} className="px-6 py-4 bg-surface border border-border rounded-xl text-sm font-bold shadow-sm">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Testimonial block */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <Quote className="h-16 w-16 text-accent mx-auto opacity-50" />
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif leading-snug text-white font-medium">
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <div className="space-y-2 pt-8 border-t border-white/10 w-fit mx-auto min-w-[300px]">
              <div className="font-bold text-xl text-white">
                {service.testimonial.author}
              </div>
              <div className="text-primary-foreground/60 text-base font-medium">
                {service.testimonial.role}, {service.testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
