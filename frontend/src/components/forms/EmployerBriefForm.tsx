"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, ShieldCheck, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormState {
  fullName: string;
  workEmail: string;
  companyName: string;
  roleTitle: string;
  practiceArea: string;
  seniority: string;
  timeline: string;
  budgetRange: string;
  notes: string;
  agreedToTerms: boolean;
}

const initialForm: FormState = {
  fullName: "",
  workEmail: "",
  companyName: "",
  roleTitle: "",
  practiceArea: "Technology & AI",
  seniority: "VP / Executive",
  timeline: "Immediate (< 30 days)",
  budgetRange: "$250k - $400k",
  notes: "",
  agreedToTerms: false,
};

export function EmployerBriefForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = "Please provide your full name.";
    if (!form.workEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
      errs.workEmail = "Please enter a valid business email address.";
    }
    if (!form.companyName.trim()) errs.companyName = "Organization name is required.";
    if (!form.roleTitle.trim()) errs.roleTitle = "Specify the primary role or position needed.";
    if (!form.agreedToTerms) {
      errs.agreedToTerms = "Please confirm adherence to search confidentiality.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission to talent operations queue
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-surface border border-emerald-500/30 text-center space-y-6 shadow-xl animate-in fade-in duration-300">
        <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-serif text-foreground">Hiring Brief Received</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Your brief for <span className="font-semibold text-foreground">{form.roleTitle}</span> at <span className="font-semibold text-foreground">{form.companyName}</span> has been dispatched to our Practice Director.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-background border border-border inline-block text-left text-xs space-y-1.5 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-accent" />
            <span>Target Response Window: <strong>Within 4 Business Hours</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Encrypted transmission &amp; NDA protocol active</span>
          </div>
        </div>
        <div className="pt-2">
          <Button
            variant="outline"
            onClick={() => {
              setForm(initialForm);
              setIsSuccess(false);
            }}
            className="text-xs rounded-sm"
          >
            Submit Another Role
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-surface border border-border shadow-xl space-y-6">
      <div className="space-y-1 border-b border-border pb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
          <Building2 className="h-4 w-4" />
          <span>Talent Mandate Brief</span>
        </div>
        <h3 className="text-2xl font-bold font-serif text-foreground">Initiate a Confidential Search</h3>
        <p className="text-xs text-muted-foreground">
          Outline your target hire requirements. A dedicated Practice Director will contact you directly.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Your Full Name *</label>
          <input
            type="text"
            placeholder="e.g. Eleanor Vance"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-sm bg-background border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.fullName ? "border-red-500" : "border-border"
            }`}
          />
          {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Work Email *</label>
          <input
            type="email"
            placeholder="eleanor@company.com"
            value={form.workEmail}
            onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-sm bg-background border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.workEmail ? "border-red-500" : "border-border"
            }`}
          />
          {errors.workEmail && <p className="text-[11px] text-red-500">{errors.workEmail}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Organization Name *</label>
          <input
            type="text"
            placeholder="e.g. Apex Compute Systems"
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-sm bg-background border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.companyName ? "border-red-500" : "border-border"
            }`}
          />
          {errors.companyName && <p className="text-[11px] text-red-500">{errors.companyName}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Target Role Title *</label>
          <input
            type="text"
            placeholder="e.g. Head of AI Systems"
            value={form.roleTitle}
            onChange={(e) => setForm({ ...form, roleTitle: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-sm bg-background border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.roleTitle ? "border-red-500" : "border-border"
            }`}
          />
          {errors.roleTitle && <p className="text-[11px] text-red-500">{errors.roleTitle}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Practice Desk</label>
          <select
            value={form.practiceArea}
            onChange={(e) => setForm({ ...form, practiceArea: e.target.value })}
            className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>Technology &amp; AI</option>
            <option>Quantitative &amp; FinTech</option>
            <option>HealthTech &amp; Bio</option>
            <option>Executive &amp; Board</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Seniority Level</label>
          <select
            value={form.seniority}
            onChange={(e) => setForm({ ...form, seniority: e.target.value })}
            className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>VP / Executive</option>
            <option>Principal / Staff IC</option>
            <option>Director / Head of</option>
            <option>Team Buildout (Multiple)</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Hiring Timeline</label>
          <select
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>Immediate (&lt; 30 days)</option>
            <option>Q1 / 60-90 Days</option>
            <option>Strategic Exploration</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-foreground">Key Mandate Requirements &amp; Cultural Priorities</label>
        <textarea
          rows={3}
          placeholder="Include critical technical must-haves, current team size, relocation parameters, or compensation targets..."
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-sm bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="space-y-2 pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.agreedToTerms}
            onChange={(e) => setForm({ ...form, agreedToTerms: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            I confirm this inquiry is confidential and agree to Nexus Talent Partners&apos; professional search representation standards.
          </span>
        </label>
        {errors.agreedToTerms && <p className="text-[11px] text-red-500">{errors.agreedToTerms}</p>}
      </div>

      <div className="pt-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Strict Discretion Guaranteed</span>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 px-6 rounded-sm bg-accent text-white hover:bg-accent/90 gap-2 font-semibold"
        >
          {isSubmitting ? (
            <span>Transmitting Brief...</span>
          ) : (
            <>
              <span>Submit Hiring Mandate</span>
              <Send className="h-3.5 w-3.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
