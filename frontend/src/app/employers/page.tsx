import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Clock, 
  BarChart3, 
  ChevronRight 
} from "lucide-react";
import { EmployerBriefForm } from "@/components/forms/EmployerBriefForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Employers | Executive Search & Specialist Hiring | Nexus Talent Partners",
  description: "Retained executive search, specialized individual contributor hiring, and embedded talent partners with an 18-day average shortlist SLA and 12-month placement guarantee.",
};

const hiringModels = [
  {
    title: "Retained Executive Search",
    badge: "Flagship SLA",
    target: "C-Suite, VP, Heads of Function & Board Mandates",
    description: "Dedicated search directors conduct an exhaustive, confidential market mapping of passive leadership talent. Prioritized access to top quartile performers with rigorous leadership qualification.",
    features: [
      "18-Day average shortlist delivery",
      "Confidential market mapping & compensation benchmarking",
      "Comprehensive multi-panel leadership vetting",
      "12-Month placement guarantee with free replacement",
    ],
    idealFor: "Critical leadership appointments where failure is not an option.",
  },
  {
    title: "Specialist Direct Placement",
    badge: "Contingent / Milestone",
    target: "Staff & Principal Engineers, Quant Researchers, Architects",
    description: "Laser-focused recruitment for hard-to-find individual contributors and specialist technical managers. Full vetting conducted before candidate introduction.",
    features: [
      "Zero upfront fees on contingent mandates",
      "Deep technical vetting against specific stack constraints",
      "Candidate exclusive presentation (no multi-agency bidding)",
      "90-Day replacement protection warranty",
    ],
    idealFor: "Scaling critical engineering desks without compromising seniority.",
  },
  {
    title: "Embedded Talent Partner (RPO)",
    badge: "Sprint Scaling",
    target: "10+ Technical Hires across a 3–6 Month Sprint",
    description: "Our senior recruitment directors embed directly inside your hiring stack, working with your engineering leads and founders to build out entire departments rapidly.",
    features: [
      "Direct integration into your Slack, Notion, and ATS",
      "Structured interview loop design & hiring rubric creation",
      "Significant cost savings compared to per-hire agency rates",
      "Complete ownership of employer branding and candidate experience",
    ],
    idealFor: "Post-funding scaleups and venture-backed spinouts building whole squads.",
  },
];

const vettingRigorSteps = [
  {
    step: "01",
    title: "Organizational & Cultural Calibration",
    description: "We meet the hiring committee, technical architects, and board to analyze not just the JD, but the implicit organizational dynamics, technical debt, and 24-month roadmap.",
  },
  {
    step: "02",
    title: "Confidential Market Mapping",
    description: "We don't post to job boards and wait. We conduct systematic outbound market mapping of passive leaders currently delivering results at peer institutions.",
  },
  {
    step: "03",
    title: "Deep Technical & Behavioral Defense",
    description: "Every candidate undergoes a 90-minute structured assessment examining real architectural trade-offs, team-scaling philosophies, and crisis leadership.",
  },
  {
    step: "04",
    title: "Offer Engineering & Counter-Offer Shielding",
    description: "We align compensation expectations, equity structures, and career aspirations upfront—resulting in our 98% first-round offer acceptance rate.",
  },
  {
    step: "05",
    title: "90-Day Onboarding Stewardship",
    description: "Our work doesn't stop on Day 1. We conduct bi-weekly syncs with both candidate and hiring manager through the first 90 days to ensure frictionless integration.",
  },
];

export default function EmployersPage() {
  return (
    <main className="min-h-screen bg-white text-[#202022]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-[#EAE8E5] relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3EF] text-xs font-bold uppercase tracking-wider text-[#FF5B3D] border border-[#FF5B3D]/20">
              <Building2 className="h-3.5 w-3.5" />
              <span>For Enterprise Leaders &amp; Founders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-[#202022]">
              Talent search engineered with zero tolerance for false positives.
            </h1>

            <p className="text-lg sm:text-xl text-[#606064] font-light leading-relaxed">
              We partner with board members, founders, and VP of Engineering leads who cannot afford costly hiring mistakes. Through deep domain specialism and rigorous vetting, we deliver transformational leaders.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a href="#hiring-brief">
                <Button size="lg" className="h-12 px-7 rounded-sm bg-[#202022] text-white hover:bg-[#FF5B3D] gap-2 font-semibold text-xs shadow-sm transition-colors">
                  <span>Submit a Hiring Brief</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </a>
              <a href="#hiring-models">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-sm border-[#EAE8E5] text-[#202022] hover:bg-[#FAF9F7] gap-2 text-xs font-semibold">
                  <span>Explore Search Models</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Performance Proof Bar */}
          <div className="mt-14 pt-8 border-t border-[#EAE8E5] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#FF5B3D]">18 Days</div>
              <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-1">Average Shortlist SLA</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#202022]">94%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-1">3-Year Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#202022]">98%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-1">Offer Acceptance Rate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#FF9A39]">12 Months</div>
              <div className="text-[11px] uppercase tracking-wider text-[#606064] font-semibold mt-1">Placement Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="hiring-models" className="py-24 md:py-32 bg-white border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-3 block text-[#FF5B3D]">Flexible Partnership Frameworks</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              Tailored search models for every stage of organizational growth.
            </h2>
            <p className="text-[#606064] mt-3 text-sm sm:text-base font-light">
              Choose the hiring partnership structure that matches your mandate complexity, confidentiality requirements, and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {hiringModels.map((model) => (
              <div
                key={model.title}
                className="p-8 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] flex flex-col justify-between hover:border-[#FF5B3D]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white text-[#FF5B3D] border border-[#FF5B3D]/25">
                      {model.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#202022]">{model.title}</h3>
                    <p className="text-xs font-semibold text-[#FF5B3D] mt-1">{model.target}</p>
                  </div>

                  <p className="text-xs text-[#606064] leading-relaxed font-light">
                    {model.description}
                  </p>

                  <div className="pt-3 border-t border-[#EAE8E5] space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#606064]">Key Advantages</div>
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#202022]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE8E5]">
                  <div className="text-xs text-[#606064] italic mb-4 font-light">
                    <strong>Best for:</strong> {model.idealFor}
                  </div>
                  <a href="#hiring-brief" className="w-full block">
                    <Button variant="outline" className="w-full rounded-sm text-xs font-semibold gap-1.5 border-[#EAE8E5] text-[#202022] hover:bg-white">
                      <span>Select This Model</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Methodology Timeline */}
      <section className="py-24 md:py-32 bg-white border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow mb-3 block text-[#E83379]">Qualification Architecture</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              How we eliminate false positives.
            </h2>
            <p className="text-[#606064] mt-3 text-sm sm:text-base font-light">
              Our 5-stage qualification process ensures only genuinely qualified, culturally aligned, and compensation-calibrated leaders make it to your interview table.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {vettingRigorSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] space-y-3">
                <span className="text-2xl font-bold font-serif text-[#E83379]">{step.step}</span>
                <h4 className="text-sm font-bold text-[#202022] font-serif leading-snug">{step.title}</h4>
                <p className="text-xs text-[#606064] leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Risk Mitigation Assurance */}
          <div className="mt-12 p-8 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white border border-[#EAE8E5] flex items-center justify-center shrink-0 text-[#FF5B3D]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#202022]">The Nexus 12-Month Guarantee</h4>
                <p className="text-xs text-[#606064] max-w-xl font-light">
                  In the rare event that a placed executive departs within the first 12 months, we initiate a full replacement search immediately at zero additional professional fee.
                </p>
              </div>
            </div>
            <Link href="/contact?type=employer">
              <Button className="rounded-sm text-xs font-semibold shrink-0 gap-2 bg-[#202022] text-white hover:bg-[#FF5B3D] transition-colors">
                <span>Discuss With Director</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Hiring Brief Section */}
      <section id="hiring-brief" className="py-24 md:py-32 bg-white border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block text-[#FF5B3D]">Immediate Mandate Initiation</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-[#202022]">
                Submit your hiring brief in complete confidence.
              </h2>
              <p className="text-[#606064] text-sm sm:text-base font-light leading-relaxed">
                Whether you need a confidential executive search for an under-performing seat or are planning a high-velocity engineering expansion, our Practice Directors respond within 4 business hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#EAE8E5]">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#FF5B3D] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#202022] uppercase tracking-wider">Rapid Brief Consultation</h5>
                    <p className="text-xs text-[#606064] font-light">Direct 30-minute scoping call with a seasoned sector lead.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-[#FF9A39] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#202022] uppercase tracking-wider">Real-Time Market Calibration</h5>
                    <p className="text-xs text-[#606064] font-light">Compensation benchmarking and talent availability analysis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-[#FFC84B] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#202022] uppercase tracking-wider">Exclusivity &amp; Ethical Standards</h5>
                    <p className="text-xs text-[#606064] font-light">Zero spam. Zero generic CV drops. 100% curated shortlists.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EmployerBriefForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
