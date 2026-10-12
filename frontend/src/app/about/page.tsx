import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Target, Globe, Milestone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firm Overview | Nexus Consulting",
  description: "Learn about Nexus Consulting's mission to shape strategy, technology, and impact for tomorrow's leaders.",
};

export default function AboutPage() {
  return (
    <>
      {/* Editorial Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-primary text-primary-foreground overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary opacity-90 z-10" />
          <div className="absolute right-0 top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        </div>
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Firm Overview" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-4xl space-y-8">
            <span className="eyebrow block text-accent border-l-2 border-accent pl-4">
              About Nexus
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-serif text-balance">
              Architecting the modern enterprise.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl leading-relaxed font-light text-balance">
              We are a global strategy and technology firm dedicated to helping organizations navigate complexity and accelerate growth in an era of unprecedented disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Metrics Strip */}
      <section className="py-12 bg-surface border-y border-border overflow-hidden">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">2010</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Firm Established</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">14</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Global Offices</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">850+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Expert Analysts</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold font-serif text-accent mb-2">95%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis / Mission */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 sticky top-32">
              <span className="eyebrow block mb-6">Our Thesis</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                Data-driven clarity in a complex world.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-16">
              <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">
                <p className="lead text-2xl text-foreground font-light mb-8">
                  Nexus was founded on a simple premise: in a world overwhelmed by noise, rigorous methodology and pristine data are the only true sources of competitive advantage.
                </p>
                <p>
                  Our mission is to equip leaders with the market intelligence, strategic clarity, and technological capabilities required to win. We don&apos;t just provide research; we provide the operational blueprints necessary to execute against that research.
                </p>
                <p>
                  Today, we are the trusted partner to 40% of the Fortune 500, advising boards and executive teams on multi-billion dollar capital allocation decisions, digital transformations, and market entry strategies.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
                <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm">
                  <Target className="h-8 w-8 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To architect sustainable growth for our clients through uncompromised intellectual rigor and technological leverage.
                  </p>
                </div>
                <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm">
                  <Globe className="h-8 w-8 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To remain the world&apos;s most trusted partner for enterprise transformation, measured entirely by the impact we create.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 md:py-32 bg-secondary border-t border-border">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-20">
            <span className="eyebrow block mb-4">Firm Principles</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
              The Nexus Standard
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "01", title: "Intellectual Rigor", desc: "We demand analytical excellence and evidence-based decision making in everything we do. Assumptions are lethal." },
              { id: "02", title: "Client Obsession", desc: "Our success is measured entirely by the long-term success and impact of our clients. We win when they win." },
              { id: "03", title: "Radical Candor", desc: "We tell our clients what they need to hear, not what they want to hear, with absolute respect and clarity." },
            ].map((principle) => (
              <div key={principle.id} className="bg-background p-10 border border-border rounded-2xl hover:shadow-premium transition-all duration-300 group">
                <div className="text-4xl font-bold font-serif text-accent/20 mb-6 group-hover:text-accent transition-colors">
                  {principle.id}
                </div>
                <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        </div>
        <div className="container-enterprise relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="eyebrow block text-accent border-l-2 border-accent pl-4">Global Reach</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
                Operating at the speed of global markets.
              </h2>
              <p className="text-lg text-primary-foreground/70 font-light max-w-lg leading-relaxed">
                With 14 offices across the Americas, EMEA, and APAC, we provide localized intelligence backed by global scale.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { region: "Americas", cities: ["New York (HQ)", "San Francisco", "Chicago", "Toronto"] },
                { region: "EMEA", cities: ["London", "Frankfurt", "Dubai", "Paris"] },
                { region: "APAC", cities: ["Singapore", "Tokyo", "Sydney", "Mumbai"] },
              ].map((hub) => (
                <div key={hub.region} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Milestone className="h-5 w-5 text-accent" /> {hub.region}
                  </h3>
                  <ul className="space-y-2">
                    {hub.cities.map(city => (
                      <li key={city} className="text-primary-foreground/70 text-sm font-medium">{city}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
