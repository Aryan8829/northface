"use client";

import React from "react";
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
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-transparent text-[#202022]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-transparent border-b border-[#EAE8E5] relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          <motion.div 
            className="max-w-3xl space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3B27] text-xs font-bold uppercase tracking-wider text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm">
              <Building2 className="h-3.5 w-3.5 text-[#92FF5F]" />
              <span>For Enterprise Leaders &amp; Founders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-[#0F3B27]">
              Talent search engineered with zero tolerance for false positives.
            </h1>

            <p className="text-lg sm:text-xl text-[#3D614E] font-light leading-relaxed">
              We partner with board members, founders, and VP of Engineering leads who cannot afford costly hiring mistakes. Through deep domain specialism and rigorous vetting, we deliver transformational leaders.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a href="#hiring-brief">
                <Button size="lg" className="h-12 px-7 rounded-sm bg-[#0F3B27] text-white hover:bg-[#92FF5F] hover:text-[#0F3B27] gap-2 font-semibold text-xs shadow-md transition-all">
                  <span>Submit a Hiring Brief</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </a>
              <a href="#hiring-models">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-sm border-[#E1E8E3] bg-white text-[#0F3B27] hover:bg-[#F7F9F7] gap-2 text-xs font-semibold shadow-sm">
                  <span>Explore Search Models</span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Performance Proof Bar with Animated Counters */}
          <div className="mt-14 pt-8 border-t border-[#E1E8E3] grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] shadow-sm bracket-corners">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#0F3B27] flex items-baseline gap-1">
                <AnimatedCounter value={18} suffix=" Days" duration={1.5} />
                <span className="inline-block w-2 h-2 rounded-full bg-[#92FF5F]" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#3D614E] font-semibold mt-1">Average Shortlist SLA</div>
            </div>
            <div className="p-5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] shadow-sm bracket-corners">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#0F3B27]">
                <AnimatedCounter value={94} suffix="%" duration={1.6} />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#3D614E] font-semibold mt-1">3-Year Retention Rate</div>
            </div>
            <div className="p-5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] shadow-sm bracket-corners">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#0F3B27]">
                <AnimatedCounter value={98} suffix="%" duration={1.7} />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#3D614E] font-semibold mt-1">Offer Acceptance Rate</div>
            </div>
            <div className="p-5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] shadow-sm bracket-corners">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#0F3B27]">
                <AnimatedCounter value={12} suffix=" Mos" duration={1.4} />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#3D614E] font-semibold mt-1">Placement Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="hiring-models" className="py-24 md:py-32 bg-transparent border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-3 block">Flexible Partnership Frameworks</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
              Tailored search models for every stage of organizational growth.
            </h2>
            <p className="text-[#3D614E] mt-3 text-sm sm:text-base font-light">
              Choose the hiring partnership structure that matches your mandate complexity, confidentiality requirements, and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {hiringModels.map((model) => (
              <div
                key={model.title}
                className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] flex flex-col justify-between hover:border-[#0F3B27]/40 hover:shadow-xl transition-all duration-300 bracket-corners"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/20">
                      {model.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#0F3B27]">{model.title}</h3>
                    <p className="text-xs font-semibold text-[#3D614E] mt-1">{model.target}</p>
                  </div>

                  <p className="text-xs text-[#3D614E] leading-relaxed font-light">
                    {model.description}
                  </p>

                  <div className="pt-3 border-t border-[#E1E8E3] space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F3B27]">Key Advantages</div>
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#0F3B27]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#0F3B27] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E1E8E3]">
                  <div className="text-xs text-[#3D614E] italic mb-4 font-light">
                    <strong>Best for:</strong> {model.idealFor}
                  </div>
                  <a href="#hiring-brief" className="w-full block">
                    <Button variant="outline" className="w-full rounded-sm text-xs font-semibold gap-1.5 border-[#E1E8E3] text-[#0F3B27] hover:bg-[#0F3B27] hover:text-white transition-colors">
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
      <section className="py-24 md:py-32 bg-white/70 border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow mb-3 block">Qualification Architecture</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#0F3B27]">
              How we eliminate false positives.
            </h2>
            <p className="text-[#3D614E] mt-3 text-sm sm:text-base font-light">
              Our 5-stage qualification process ensures only genuinely qualified, culturally aligned, and compensation-calibrated leaders make it to your interview table.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {vettingRigorSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-[#F7F9F7] border border-[#E1E8E3] space-y-3 bracket-corners hover:border-[#0F3B27]/30 transition-all">
                <span className="text-2xl font-bold font-serif text-[#0F3B27]">{step.step}</span>
                <h4 className="text-sm font-bold text-[#0F3B27] font-serif leading-snug">{step.title}</h4>
                <p className="text-xs text-[#3D614E] leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Risk Mitigation Assurance Prestige Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-[#0F3B27] text-white border border-[#92FF5F]/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 bracket-corners">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-[#92FF5F]/30 flex items-center justify-center shrink-0 text-[#92FF5F]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-serif">The Nexus 12-Month Guarantee</h4>
                <p className="text-xs text-white/75 max-w-xl font-light mt-1">
                  In the rare event that a placed executive departs within the first 12 months, we initiate a full replacement search immediately at zero additional professional fee.
                </p>
              </div>
            </div>
            <Link href="/contact?type=employer">
              <Button className="rounded-sm text-xs font-semibold shrink-0 gap-2 bg-[#92FF5F] text-[#0F3B27] hover:bg-white transition-colors">
                <span>Discuss With Director</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Hiring Brief Section */}
      <section id="hiring-brief" className="py-24 md:py-32 bg-transparent border-b border-[#E1E8E3]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block">Immediate Mandate Initiation</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-[#0F3B27]">
                Submit your hiring brief in complete confidence.
              </h2>
              <p className="text-[#3D614E] text-sm sm:text-base font-light leading-relaxed">
                Whether you need a confidential executive search for an under-performing seat or are planning a high-velocity engineering expansion, our Practice Directors respond within 4 business hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E1E8E3]">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#0F3B27] text-[#92FF5F] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0F3B27] uppercase tracking-wider">Rapid Brief Consultation</h5>
                    <p className="text-xs text-[#3D614E] font-light">Direct 30-minute scoping call with a seasoned sector lead.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#CFF1D2] text-[#0F3B27] flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0F3B27] uppercase tracking-wider">Real-Time Market Calibration</h5>
                    <p className="text-xs text-[#3D614E] font-light">Compensation benchmarking and talent availability analysis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#BFF2F0] text-[#0F3B27] flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0F3B27] uppercase tracking-wider">Exclusivity &amp; Ethical Standards</h5>
                    <p className="text-xs text-[#3D614E] font-light">Zero spam. Zero generic CV drops. 100% curated shortlists.</p>
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
