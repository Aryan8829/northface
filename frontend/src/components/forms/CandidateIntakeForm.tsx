"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, ShieldCheck, UserCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CandidateState {
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  discipline: string;
  targetLocation: string;
  compensationExpectation: string;
  linkedinUrl: string;
  summary: string;
  agreedToConsent: boolean;
}

const initialCandidateForm: CandidateState = {
  fullName: "",
  email: "",
  phone: "",
  currentRole: "",
  discipline: "Machine Learning & AI",
  targetLocation: "Hybrid / Remote US",
  compensationExpectation: "$250k - $350k",
  linkedinUrl: "",
  summary: "",
  agreedToConsent: false,
};

export function CandidateIntakeForm() {
  const [form, setForm] = useState<CandidateState>(initialCandidateForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please provide a valid personal or professional email.";
    }
    if (!form.currentRole.trim()) errs.currentRole = "Your current or most recent title is required.";
    if (!form.agreedToConsent) {
      errs.agreedToConsent = "Consent is required to manage your profile securely.";
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
          <h3 className="text-2xl font-bold font-serif text-foreground">Profile Confidentially Registered</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Thank you, <span className="font-semibold text-foreground">{form.fullName}</span>. Your career dossier has been securely logged with our senior talent partners.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-background border border-border inline-block text-left text-xs space-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-accent" />
            <span>Zero-Exposure Rule: <strong>Your profile is NEVER shared without written permission.</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>We review each profile individually for executive &amp; specialist mandates.</span>
          </div>
        </div>
        <div className="pt-2">
          <Button
            variant="outline"
            onClick={() => {
              setForm(initialCandidateForm);
              setIsSuccess(false);
            }}
            className="text-xs rounded-sm"
          >
            Update Submission
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-surface border border-border shadow-xl space-y-6">
      <div className="space-y-1 border-b border-border pb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
          <Lock className="h-4 w-4" />
          <span>Confidential Career Registration</span>
        </div>
        <h3 className="text-2xl font-bold font-serif text-foreground">Submit Your Background Privately</h3>
        <p className="text-xs text-muted-foreground">
          Join our curated talent network for confidential executive search mandates and high-growth opportunities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Full Name *</label>
          <input
            type="text"
            placeholder="e.g. Marcus Thorne"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-sm bg-background border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.fullName ? "border-red-500" : "border-border"
            }`}
          />
          {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Confidential Email *</label>
          <input
            type="email"
            placeholder="marcus@personal.me"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-sm bg-background border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.email ? "border-red-500" : "border-border"
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Current Title / Level *</label>
          <input
            type="text"
            placeholder="e.g. Senior Staff Infrastructure Engineer"
            value={form.currentRole}
            onChange={(e) => setForm({ ...form, currentRole: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-sm bg-background border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.currentRole ? "border-red-500" : "border-border"
            }`}
          />
          {errors.currentRole && <p className="text-[11px] text-red-500">{errors.currentRole}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">LinkedIn / GitHub Profile URL</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/..."
            value={form.linkedinUrl}
            onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-sm bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Discipline Focus</label>
          <select
            value={form.discipline}
            onChange={(e) => setForm({ ...form, discipline: e.target.value })}
            className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>Machine Learning &amp; AI</option>
            <option>Distributed Systems &amp; Cloud</option>
            <option>Quantitative Trading / Research</option>
            <option>Executive Engineering (VP / CTO)</option>
            <option>Security &amp; Cryptography</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Target Workplace</label>
          <select
            value={form.targetLocation}
            onChange={(e) => setForm({ ...form, targetLocation: e.target.value })}
            className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>Hybrid / Remote US</option>
            <option>San Francisco / Bay Area</option>
            <option>New York Metro</option>
            <option>London / UK Hybrid</option>
            <option>Global Remote</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Target Compensation</label>
          <select
            value={form.compensationExpectation}
            onChange={(e) => setForm({ ...form, compensationExpectation: e.target.value })}
            className="w-full px-3 py-2.5 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>$180k - $250k</option>
            <option>$250k - $350k</option>
            <option>$350k - $500k</option>
            <option>$500k+ / Exec Package</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-foreground">Career Goals &amp; Ideal Mandate Attributes</label>
        <textarea
          rows={3}
          placeholder="What motivates your next move? (e.g. moving from big tech to high-growth series B, greenfield architecture, equity upside...)"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-sm bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="space-y-2 pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.agreedToConsent}
            onChange={(e) => setForm({ ...form, agreedToConsent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            I understand that Nexus Talent Partners will never send my credentials or CV to any employer without my explicit, prior written permission for that specific mandate.
          </span>
        </label>
        {errors.agreedToConsent && <p className="text-[11px] text-red-500">{errors.agreedToConsent}</p>}
      </div>

      <div className="pt-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Strict Discretion Agreement</span>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 px-6 rounded-sm bg-accent text-white hover:bg-accent/90 gap-2 font-semibold"
        >
          {isSubmitting ? (
            <span>Securing Submission...</span>
          ) : (
            <>
              <span>Submit Confidential Profile</span>
              <Send className="h-3.5 w-3.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
