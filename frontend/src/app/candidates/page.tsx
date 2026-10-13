"use client";

import React from "react";
import Link from "next/link";
import { 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  Briefcase, 
  Sparkles, 
  Compass, 
  Scale, 
  HelpCircle 
} from "lucide-react";
import { CandidateIntakeForm } from "@/components/forms/CandidateIntakeForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const candidateCharter = [
  {
    icon: Lock,
    title: "100% Written Consent Rule",
    description: "We will NEVER share your resume, identity, or portfolio with any organization without your explicit, mandate-specific written permission beforehand.",
    accent: "#FF5B3D",
  },
  {
    icon: Users,
    title: "Direct Founder & Board Access",
    description: "Skip automated ATS resume screeners. Our search directors present you directly to CEOs, Founders, Board Members, and VPs of Engineering.",
    accent: "#FF9A39",
  },
  {
    icon: Scale,
    title: "Total Compensation Transparency",
    description: "We provide truthful compensation ranges—including base salary, performance incentives, and clear cap-table equity structures—before first interviews.",
    accent: "#E83379",
  },
  {
    icon: Compass,
    title: "Lifelong Career Navigation",
    description: "Whether you are actively exploring a move or simply desire a confidential sounding board on compensation and market trajectory, our doors are open.",
    accent: "#FFC84B",
  },
];

const candidateSteps = [
  {
    step: "01",
    title: "Confidential Introduction",
    description: "Submit your background privately or connect directly with a sector practice lead. No automated sorting algorithms.",
  },
  {
    step: "02",
    title: "Career & Value Calibration",
    description: "A 45-minute confidential discussion exploring your architectural passions, compensation goals, and ideal organizational culture.",
  },
  {
    step: "03",
    title: "Curated Mandate Alignment",
    description: "We introduce you to hand-selected retained mandates that genuinely match your criteria—with full contextual intelligence on company challenges.",
  },
  {
    step: "04",
    title: "Advocacy & Offer Stewardship",
    description: "We advocate on your behalf throughout negotiation to secure market-leading equity, relocation support, and clear executive charters.",
  },
];

const candidateFaqs = [
  {
    q: "Will my current employer ever find out I registered?",
    a: "Never. We enforce military-grade discretion protocols. Your profile is kept confidential within our secure partner enclave and is never published or exposed publicly.",
  },
  {
    q: "Is there any fee or cost for candidates?",
    a: "Absolutely not. Our services are 100% retained and funded by our hiring partner organizations. Candidates are never charged any fees whatsoever.",
  },
  {
    q: "What types of roles do you specialize in?",
    a: "We specialize in VP/C-suite leadership, Principal/Staff individual contributors, Quant researchers, ML systems architects, and specialized engineering heads.",
  },
  {
    q: "What if I'm not actively looking right now?",
    a: "Over 70% of our network are passive leaders. Registering allows us to notify you exclusively when a rare, transformative leadership mandate aligns with your career horizon.",
  },
];

export default function CandidatesPage() {
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3EF] text-xs font-bold uppercase tracking-wider text-[#FF5B3D] border border-[#FF5B3D]/25 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>For Exceptional Talent &amp; Leaders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-[#202022]">
              Discreet career representation built on trust and respect.
            </h1>

            <p className="text-lg sm:text-xl text-[#606064] font-light leading-relaxed">
              Your career is not a commodity. We represent senior technical specialists and executive leaders with complete confidentiality, honest market intelligence, and zero unsolicited resume distribution.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a href="#candidate-intake">
                <Button size="lg" className="h-12 px-7 rounded-sm bg-[#202022] text-white hover:bg-[#FF5B3D] gap-2 font-semibold text-xs shadow-md transition-all">
                  <span>Register Confidentially</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </a>
              <Link href="/jobs">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-sm border-[#EAE8E5] bg-white text-[#202022] hover:bg-[#FAF9F7] gap-2 text-xs font-semibold shadow-sm">
                  <Briefcase className="h-3.5 w-3.5 text-[#FF5B3D]" />
                  <span>View Verified Mandates</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Candidate Charter Section */}
      <section className="py-24 md:py-32 bg-white border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-3 block text-[#FF5B3D]">Our Candidate Charter</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              How we protect and elevate your career.
            </h2>
            <p className="text-[#606064] mt-3 text-sm sm:text-base font-light">
              Recruitment has lost its human touch in an age of automated scrapers and spam. We hold ourselves to a strict ethical standard.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {candidateCharter.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] space-y-4 hover:border-[#FF5B3D]/50 transition-colors">
                  <div
                    className="h-12 w-12 rounded-xl bg-white border border-[#EAE8E5] flex items-center justify-center"
                    style={{ color: item.accent }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-[#202022]">{item.title}</h3>
                  <p className="text-xs text-[#606064] leading-relaxed font-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Candidate Journey */}
      <section className="py-24 md:py-32 bg-white border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-3 block text-[#FF9A39]">The Representation Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              A bespoke, collaborative trajectory.
            </h2>
            <p className="text-[#606064] mt-3 text-sm sm:text-base font-light">
              From our first private conversation to year-one executive milestones, we act as your personal career strategist.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {candidateSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] space-y-3">
                <span className="text-2xl font-bold font-serif text-[#FF9A39]">{s.step}</span>
                <h4 className="text-sm font-bold text-[#202022] font-serif">{s.title}</h4>
                <p className="text-xs text-[#606064] leading-relaxed font-light">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Registration Form */}
      <section id="candidate-intake" className="py-24 md:py-32 bg-white border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block text-[#FF5B3D]">Confidential Registration</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-[#202022]">
                Connect with our senior executive search directors.
              </h2>
              <p className="text-[#606064] text-sm sm:text-base font-light leading-relaxed">
                Whether you are seeking your next venture-backed VP role or want to be considered for unadvertised stealth mandates, register below.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] space-y-3">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  <span className="text-xs font-bold text-[#202022] uppercase tracking-wider">The Confidentiality Guarantee</span>
                </div>
                <p className="text-xs text-[#606064] leading-relaxed font-light">
                  We maintain strict Chinese walls and never discuss candidate identities with outside parties without explicit consent. Your existing employment security is our highest priority.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/jobs">
                  <Button variant="outline" className="h-10 px-5 rounded-sm gap-2 text-xs font-semibold border-[#EAE8E5] text-[#202022] hover:bg-[#FAF9F7]">
                    <span>Browse Current Verified Vacancies</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CandidateIntakeForm />
            </div>
          </div>
        </div>
      </section>

      {/* Candidate FAQs */}
      <section className="py-24 md:py-32 bg-white border-b border-[#EAE8E5]">
        <div className="container-enterprise max-w-4xl">
          <div className="text-center mb-16 space-y-3">
            <span className="eyebrow block text-[#FF5B3D]">Common Inquiries</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-[#202022]">
              Candidate representation frequently asked questions.
            </h2>
          </div>

          <div className="space-y-4">
            {candidateFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#EAE8E5] space-y-2">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-4 w-4 text-[#FF5B3D] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-[#202022] font-serif">{faq.q}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#606064] pl-7 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
