"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, ShieldCheck, X, Briefcase, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobApplicationModalProps {
  jobTitle: string;
  jobSlug: string;
  practiceArea: string;
}

export function JobApplicationModal({ jobTitle, jobSlug, practiceArea }: JobApplicationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [compensation, setCompensation] = useState("");
  const [notes, setNotes] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = "Full name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Valid email is required.";
    }
    if (!currentTitle.trim()) errs.currentTitle = "Current title is required.";
    if (!agreed) errs.agreed = "Please confirm representation consent.";
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

  const handleClose = () => {
    setIsOpen(false);
    if (isSuccess) {
      setIsSuccess(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setCurrentTitle("");
      setLinkedinUrl("");
      setCompensation("");
      setNotes("");
      setAgreed(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="w-full h-12 rounded-sm bg-accent text-white hover:bg-accent/90 font-semibold gap-2 shadow-md"
      >
        <span>Apply for this Mandate</span>
        <Briefcase className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl p-6 sm:p-8">
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground p-1 rounded-sm transition-colors"
              aria-label="Close application modal"
            >
              <X className="h-5 w-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8 space-y-6 animate-in fade-in">
                <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-foreground">Application Dispatched</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Your profile for <strong className="text-foreground">{jobTitle}</strong> has been transmitted directly to our Lead Partner.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border text-xs text-muted-foreground space-y-1.5 text-left inline-block">
                  <div className="flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-accent" />
                    <span>Reference Ref: <strong>NX-{jobSlug.substring(0, 8).toUpperCase()}-APPLY</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Practice Area: {practiceArea}</span>
                  </div>
                </div>
                <div>
                  <Button onClick={handleClose} className="rounded-sm text-xs font-semibold">
                    Close Window
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-border pb-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                    <Lock className="h-3.5 w-3.5" />
                    <span>Direct Mandate Application</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-foreground">{jobTitle}</h3>
                  <p className="text-xs text-muted-foreground">
                    Confidential submission. Your current employer will never be contacted.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rachel Chen"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-3 py-2 rounded-sm bg-background border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                        errors.fullName ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-500">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">Email *</label>
                    <input
                      type="email"
                      placeholder="rachel@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3 py-2 rounded-sm bg-background border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                        errors.email ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">Current Title / Level *</label>
                    <input
                      type="text"
                      placeholder="e.g. Senior Director of Engineering"
                      value={currentTitle}
                      onChange={(e) => setCurrentTitle(e.target.value)}
                      className={`w-full px-3 py-2 rounded-sm bg-background border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                        errors.currentTitle ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.currentTitle && <p className="text-[10px] text-red-500">{errors.currentTitle}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">LinkedIn or Portfolio URL</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      className="w-full px-3 py-2 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">Target Compensation Target</label>
                    <input
                      type="text"
                      placeholder="e.g. $400k+ base + equity"
                      value={compensation}
                      onChange={(e) => setCompensation(e.target.value)}
                      className="w-full px-3 py-2 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground">Executive Overview / Relevant Accomplishments</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly highlight your most relevant achievements matching this mandate's requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm bg-background border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="space-y-1 pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-[11px] text-muted-foreground leading-normal">
                      I agree to allow Nexus Talent Partners to evaluate my background for this specific mandate. I understand that my profile will remain strictly confidential.
                    </span>
                  </label>
                  {errors.agreed && <p className="text-[10px] text-red-500">{errors.agreed}</p>}
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-border">
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>100% Confidential</span>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 px-5 rounded-sm bg-accent text-white hover:bg-accent/90 gap-1.5 text-xs font-semibold"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="h-3 w-3" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
