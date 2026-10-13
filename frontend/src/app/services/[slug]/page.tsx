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
      {/* Editorial Hero on Pure White Canvas */}
      <section className="bg-transparent text-[#202022] pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden border-b border-[#EAE8E5]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#BFF2F0]/30 blur-[140px] pointer-events-none" />
        
        <div className="container-enterprise relative z-10">
          <Breadcrumb
            items={[
              { label: "Capabilities", href: "/services" },
              { label: service.title },
            ]}
            className="mb-8 text-[#606064]"
          />
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm">
                {service.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F3B27] font-serif">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-[#3D614E] max-w-3xl leading-relaxed font-light mt-6">
                {service.heroDescription}
              </p>
            </div>
            
            <div className="lg:col-span-4 lg:pl-12 lg:border-l border-[#E1E8E3] flex flex-col items-start lg:items-end text-left lg:text-right">
              <Link href="/contact" className="w-full">
                <Button size="lg" className="w-full bg-[#0F3B27] text-white hover:bg-[#92FF5F] hover:text-[#0F3B27] transition-all rounded-sm h-14 px-8 text-base font-bold gap-2 group shadow-md">
                  <span>Discuss Your Needs</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="py-20 md:py-32 bg-transparent border-b border-[#EAE8E5]">
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

      {/* Enterprise Testimonial block on Soft White Canvas */}
      <section className="py-24 md:py-32 bg-transparent text-[#0F3B27] relative overflow-hidden border-t border-[#E1E8E3]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10 p-10 md:p-16 rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/20 shadow-2xl bracket-corners">
            <Quote className="h-12 w-12 text-[#92FF5F] mx-auto opacity-90" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-white font-normal">
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <div className="space-y-1 pt-6 border-t border-white/15 w-fit mx-auto min-w-[280px]">
              <div className="font-bold text-lg text-[#92FF5F]">
                {service.testimonial.author}
              </div>
              <div className="text-white/75 text-sm font-light">
                {service.testimonial.role}, {service.testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
