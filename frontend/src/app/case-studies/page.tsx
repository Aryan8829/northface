import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ArrowRight, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Case Studies & Search Mandates | Nexus Talent Partners",
  description: "Explore how Nexus Talent Partners delivers transformative leadership appointments and rapid specialized engineering team build-outs.",
};

const caseStudies = [
  {
    slug: "foundation-ai-infrastructure-buildout",
    client: "Tier-1 Foundation AI Lab",
    title: "Building an elite 45-person LLM research & systems team in 90 days.",
    category: "Technology & AI",
    metric: "90-Day Buildout SLA Met",
    subMetric: "96% 2-Year Retention",
    description: "When an open-weights frontier AI research institute raised a Series B to build 50k-GPU clusters, they engaged Nexus under an Embedded Talent Partner model. We placed the VP of ML Infrastructure, 8 Principal Distributed Systems Fellows, and 36 research scientists.",
    outcomes: [
      "Zero production cluster downtime during scaling sprint",
      "Average time-to-hire reduced from 64 days to 21 days",
      "100% of placed leads achieved performance targets at 12-month review",
    ],
  },
  {
    slug: "regulated-fintech-cto-succession",
    client: "Federally Chartered Digital Asset Platform",
    title: "Securing a Tier-1 FinTech CTO under active regulatory scrutiny.",
    category: "Quantitative Finance",
    metric: "14-Day Calibrated Shortlist",
    subMetric: "Unanimous Board Approval",
    description: "Following a sudden C-suite departure, the Board of Directors required a high-reputation engineering executive with SEC/CFTC regulatory fluency and ultra-low-latency distributed ledger mastery. Search conducted under military-grade non-disclosure.",
    outcomes: [
      "Target candidate identified from passive competitor leadership pool",
      "Complex equity and bonus structure aligned without friction",
      "Seamless public appointment announcement with zero media leaks",
    ],
  },
  {
    slug: "precision-oncology-clinical-suite",
    client: "Clinical-Stage BioPharma",
    title: "Recruiting a complete clinical development leadership suite.",
    category: "Healthcare & Bio",
    metric: "3 VP/Director Placements",
    subMetric: "4 Months Ahead of Phase II",
    description: "A precision oncology spinout required an M.D. VP of Clinical Development, Head of Biostatistics, and Head of Regulatory Affairs to launch registration trials for a novel antibody-drug conjugate (ADC).",
    outcomes: [
      "Attracted a renowned Medical Director from a global pharmaceutical leader",
      "Enabled Phase II trial protocol FDA submission 4 months ahead of schedule",
      "Established long-term scientific advisory board relationships",
    ],
  },
  {
    slug: "industrial-robotics-interim-coo",
    client: "Private Equity-Backed Robotics Manufacturer",
    title: "Deploying an Interim COO for a £250M cross-border integration.",
    category: "Industrial Systems",
    metric: "Deployed within 11 Days",
    subMetric: "£18M EBITDA Synergies",
    description: "Following a major UK/German industrial robotics acquisition, the sponsor needed an immediate, battle-tested operator to consolidate disparate factory footprints and restructure pan-European supply agreements.",
    outcomes: [
      "Stabilized operational delivery across 4 manufacturing sites",
      "Restructured procurement contracts to extract £18M in annualized EBITDA synergies",
      "Orchestrated smooth succession to a permanent COO within 8 months",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#202022]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="bg-transparent text-[#202022] pt-32 pb-20 relative overflow-hidden border-b border-[#EAE8E5]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFF3EF]/60 blur-[140px] pointer-events-none" />
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Case Studies" }]}
            className="mb-8 text-[#606064]"
          />
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
              Proven Search Outcomes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#202022] font-serif">
              Impact measured in organizational trajectory.
            </h1>
            <p className="text-xl md:text-2xl text-[#606064] max-w-2xl leading-relaxed font-light">
              We do not measure our success by resumes submitted. We measure success by the durability, cultural elevation, and performance of the leaders we place.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32 bg-transparent border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-10">
            {caseStudies.map((study) => (
              <div 
                key={study.slug}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#EAE8E5] p-8 md:p-12 flex flex-col justify-between hover:border-[#FF5B3D]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE8E5] pb-5">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFF3EF] text-[#FF5B3D]">
                      {study.category}
                    </span>
                    <span className="text-xs font-semibold text-[#606064]">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-serif leading-snug text-[#202022]">
                    {study.title}
                  </h3>

                  <p className="text-sm text-[#606064] leading-relaxed font-light">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF9F7] border border-[#EAE8E5]">
                    <div>
                      <div className="text-xl font-bold font-serif text-[#FF5B3D]">{study.metric}</div>
                      <div className="text-[11px] text-[#606064] uppercase tracking-wider font-semibold mt-0.5">Primary SLA</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold font-serif text-[#202022]">{study.subMetric}</div>
                      <div className="text-[11px] text-[#606064] uppercase tracking-wider font-semibold mt-0.5">Durability Metric</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#606064]">Key Mandate Deliverables</div>
                    {study.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#202022]">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <span>Verified Mandate Outcome</span>
                  </div>
                  <Link href="/contact?type=employer">
                    <Button variant="outline" className="text-xs rounded-sm gap-2 font-semibold">
                      <span>Discuss Similar Brief</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-secondary/40 border border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Award className="h-4 w-4" />
                <span>Executive Search Certainty</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-foreground">
                Ready to calibrate an upcoming leadership mandate?
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Connect directly with our Managing Directors for an unvarnished review of market availability, compensation benchmarks, and expected search timelines.
              </p>
            </div>

            <Link href="/contact?type=employer" className="shrink-0">
              <Button size="lg" className="h-12 px-7 rounded-sm bg-accent text-white hover:bg-accent/90 gap-2 font-semibold">
                <span>Initiate Mandate Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
