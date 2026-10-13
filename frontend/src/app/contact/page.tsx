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
      {/* Tab Switcher */}
      <div className="flex p-1.5 rounded-xl bg-secondary border border-border max-w-md mx-auto sm:mx-0">
        <button
          type="button"
          onClick={() => setActiveTab("employer")}
          className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "employer"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Building2 className="h-4 w-4 text-accent" />
          <span>For Employers</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("candidate")}
          className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "candidate"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <UserCheck className="h-4 w-4 text-accent" />
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
    <main className="min-h-screen bg-transparent text-[#202022]">
      {/* Editorial Hero on Pure White Canvas */}
      <section className="bg-transparent text-[#202022] pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden border-b border-[#EAE8E5]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF3EF]/70 blur-[140px] pointer-events-none" />
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Contact & Intake" }]}
            className="mb-8 text-[#606064]"
          />
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/25 shadow-sm">
              Discreet Engagement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#202022] font-serif">
              Begin a confidential dialogue.
            </h1>
            <p className="text-xl md:text-2xl text-[#606064] max-w-2xl leading-relaxed font-light">
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
              <Suspense fallback={<div className="p-12 text-center text-sm text-muted-foreground">Loading inquiry form...</div>}>
                <ContactTabs />
              </Suspense>
            </div>

            {/* Right Column — Practice Desks & Commitments */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Practice Desks Overview */}
              <div>
                <span className="eyebrow block mb-3">Global Practice Desks</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-6">Principal Locations</h2>
                
                <div className="space-y-4">
                  {/* San Francisco */}
                  <div className="bg-surface p-6 rounded-2xl border border-border space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent-soft flex items-center justify-center text-accent">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-serif text-foreground">San Francisco</h4>
                        <p className="text-xs text-accent font-medium">Technology &amp; Foundation AI Practice</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground pl-11 font-light">
                      555 California Street, Suite 4200, San Francisco, CA 94104
                    </p>
                  </div>

                  {/* New York */}
                  <div className="bg-surface p-6 rounded-2xl border border-border space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent-soft flex items-center justify-center text-accent">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-serif text-foreground">New York</h4>
                        <p className="text-xs text-accent font-medium">Quantitative Finance &amp; BioPharma Practice</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground pl-11 font-light">
                      One Vanderbilt Avenue, 38th Floor, New York, NY 10017
                    </p>
                  </div>

                  {/* London */}
                  <div className="bg-surface p-6 rounded-2xl border border-border space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent-soft flex items-center justify-center text-accent">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-serif text-foreground">London</h4>
                        <p className="text-xs text-accent font-medium">Interim Leadership &amp; European Operations</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground pl-11 font-light">
                      100 Bishopsgate, Level 22, London EC2N 4AG, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Level Agreement Commitments */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Our Service Guarantees</span>
                </div>

                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>4-Hour Response SLA:</strong> Employer briefs are assigned to a practice director within 4 business hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>Direct Inquiries:</strong> Reach our executive desk directly at <code>mandates@nexustalent.com</code>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Binding Non-Disclosure:</strong> All initial briefings are covered under mutual non-disclosure protections.</span>
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
