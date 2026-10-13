"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { EmployerBriefForm } from "@/components/forms/EmployerBriefForm";
import { CandidateIntakeForm } from "@/components/forms/CandidateIntakeForm";
import { MapPin, Mail, ShieldCheck, Clock, Building2, UserCheck } from "lucide-react";

function ContactTabs() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type");
  const [activeTab, setActiveTab] = useState<"employer" | "candidate">(
    initialType === "candidate" ? "candidate" : "employer"
  );

  return (
    <div className="space-y-8">
      {/* Storytelling Tab Switcher */}
      <div className="flex p-1.5 rounded-full bg-[#E1E8E3]/60 border border-[#E1E8E3] max-w-md mx-auto sm:mx-0">
        <button
          type="button"
          onClick={() => setActiveTab("employer")}
          className={`flex-1 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "employer"
              ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
              : "text-[#3D614E] hover:text-[#0F3B27]"
          }`}
        >
          <Building2 className="h-4 w-4" />
          <span>For Employers</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("candidate")}
          className={`flex-1 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "candidate"
              ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
              : "text-[#3D614E] hover:text-[#0F3B27]"
          }`}
        >
          <UserCheck className="h-4 w-4" />
          <span>For Candidates</span>
        </button>
      </div>

      {/* Render Active Form */}
      {activeTab === "employer" ? (
        <EmployerBriefForm />
      ) : (
        <CandidateIntakeForm />
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#0F3B27]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="bg-transparent text-[#0F3B27] pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden border-b border-[#E1E8E3]">
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Contact & Intake" }]}
            className="mb-8 text-[#3D614E]"
          />
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm">
              Discreet Engagement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F3B27] font-serif">
              Begin a confidential dialogue.
            </h1>
            <p className="text-xl md:text-2xl text-[#3D614E] max-w-2xl leading-relaxed font-light">
              Connect with our search directors to initiate a retained executive search, discuss an embedded hiring partnership, or register your leadership profile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* Left Column — Interactive Intake Tabs */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-12 text-center text-sm text-[#3D614E]">Loading inquiry form...</div>}>
                <ContactTabs />
              </Suspense>
            </div>

            {/* Right Column — Practice Desks & Commitments */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Practice Desks Overview */}
              <div>
                <span className="eyebrow block mb-3">Global Practice Desks</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-6 text-[#0F3B27]">Principal Locations</h2>
                
                <div className="space-y-4">
                  {/* San Francisco */}
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#E1E8E3] space-y-2 bracket-corners hover:border-[#0F3B27]/40 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#CFF1D2]/50 flex items-center justify-center text-[#0F3B27]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-serif text-[#0F3B27]">San Francisco</h4>
                        <p className="text-xs text-[#3D614E] font-medium">Technology &amp; Foundation AI Practice</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#3D614E]/80 pl-11 font-light">
                      555 California Street, Suite 4200, San Francisco, CA 94104
                    </p>
                  </div>

                  {/* New York */}
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#E1E8E3] space-y-2 bracket-corners hover:border-[#0F3B27]/40 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#BFF2F0]/50 flex items-center justify-center text-[#0F3B27]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-serif text-[#0F3B27]">New York</h4>
                        <p className="text-xs text-[#3D614E] font-medium">Quantitative Finance &amp; BioPharma Practice</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#3D614E]/80 pl-11 font-light">
                      One Vanderbilt Avenue, 38th Floor, New York, NY 10017
                    </p>
                  </div>

                  {/* London */}
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#E1E8E3] space-y-2 bracket-corners hover:border-[#0F3B27]/40 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#92FF5F]/20 flex items-center justify-center text-[#0F3B27]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-serif text-[#0F3B27]">London</h4>
                        <p className="text-xs text-[#3D614E] font-medium">Interim Leadership &amp; European Operations</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#3D614E]/80 pl-11 font-light">
                      100 Bishopsgate, Level 22, London EC2N 4AG, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Level Agreement Commitments Prestige Box */}
              <div className="p-7 rounded-2xl bg-[#0F3B27] text-white border border-[#92FF5F]/20 shadow-xl space-y-4 bracket-corners">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#92FF5F]">
                  <ShieldCheck className="h-4 w-4 text-[#92FF5F]" />
                  <span>Our Service Guarantees</span>
                </div>

                <div className="space-y-3.5 text-xs text-white/80">
                  <div className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-[#92FF5F] shrink-0 mt-0.5" />
                    <span><strong className="text-white">4-Hour Response SLA:</strong> Employer briefs are assigned to a practice director within 4 business hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 text-[#92FF5F] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Direct Inquiries:</strong> Reach our executive desk directly at <code className="text-[#92FF5F] bg-white/10 px-1 py-0.5 rounded">mandates@nexustalent.com</code>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-[#92FF5F] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Binding Non-Disclosure:</strong> All initial briefings are covered under mutual non-disclosure protections.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
