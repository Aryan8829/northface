import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Lock,
  ArrowRight
} from "lucide-react";
import { jobs, getJobBySlug } from "@/data/jobs";
import { JobApplicationModal } from "@/components/forms/JobApplicationModal";
import { Button } from "@/components/ui/button";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Mandate Not Found | Nexus Talent Partners",
    };
  }

  return {
    title: `${job.title} | Executive Search | Nexus Talent Partners`,
    description: job.excerpt,
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const relatedJobs = jobs
    .filter((j) => j.slug !== job.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-transparent text-[#202022]">
      {/* Editorial Header on Pure White Canvas */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-transparent text-[#202022] border-b border-[#EAE8E5] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#FFF3EF]/60 blur-[120px] pointer-events-none" />

        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl space-y-6">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#606064] hover:text-[#FF5B3D] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all active mandates</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
                {job.department} Practice
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF9F7] text-[#202022] border border-[#EAE8E5]">
                {job.experienceLevel} Level
              </span>
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 ml-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Retained Mandate
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              {job.title}
            </h1>

            {/* Quick Metadata Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-8 text-sm text-[#606064] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FF5B3D]" />
                <span>{job.location} ({job.workplaceType})</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-[#FF5B3D]" />
                <span>{job.employmentType}</span>
              </div>
              <div className="flex items-center gap-2 text-[#202022] font-semibold">
                <DollarSign className="h-4 w-4 text-[#FF5B3D]" />
                <span>{job.salaryRange}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Mandate Overview & Specifications */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Context & Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-serif text-foreground">
                  Mandate Context &amp; Organizational Scope
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  {job.description}
                </p>
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif text-foreground">
                  Core Strategic Deliverables
                </h3>
                <div className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-1" />
                      <span className="leading-relaxed font-light">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Candidate Profile */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif text-foreground">
                  Candidate Qualification Profile
                </h3>
                <div className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span className="leading-relaxed font-light">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package & Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif text-foreground">
                  Compensation &amp; Executive Package
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {job.benefits.map((benefit, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-surface border border-border text-xs text-foreground font-medium flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ethical Search Statement */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Strict Confidentiality Protocol</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Nexus Talent Partners is exclusively retained to conduct this search. Inquiries and applications are handled with strict discretion under binding non-disclosure standards. Your current employer will not be notified under any circumstances.
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Application Box & Director Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Application Action Card */}
              <div className="p-6 rounded-2xl bg-surface border border-border shadow-lg space-y-6">
                <div className="space-y-2 pb-4 border-b border-border">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Direct Application</span>
                  <div className="text-2xl font-bold font-serif text-foreground">{job.salaryRange.split("+")[0]}</div>
                  <div className="text-xs text-muted-foreground font-medium">Target Total Compensation Range</div>
                </div>

                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Search Mandate Type:</span>
                    <strong className="text-foreground">{job.employmentType}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Location Format:</span>
                    <strong className="text-foreground">{job.workplaceType}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Target Shortlist:</span>
                    <strong className="text-emerald-600">Active Review</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <JobApplicationModal
                    jobTitle={job.title}
                    jobSlug={job.slug}
                    practiceArea={job.department}
                  />
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground pt-1">
                  <Lock className="h-3 w-3 text-emerald-600" />
                  <span>Protected by Non-Disclosure Agreement</span>
                </div>
              </div>

              {/* Search Lead Card */}
              <div className="p-6 rounded-2xl bg-surface border border-border space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent-soft flex items-center justify-center text-accent font-serif font-bold text-base">
                    NT
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Executive Practice Lead</h4>
                    <p className="text-[11px] text-muted-foreground">{job.department} &amp; Leadership Desk</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Have confidential questions about the organizational structure or board requirements before applying?
                </p>

                <Link href={`/contact?mandate=${job.slug}`}>
                  <Button variant="outline" className="w-full text-xs rounded-sm gap-2">
                    <span>Inquire Privately</span>
                    <Clock className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>

              {/* Related Mandates */}
              {relatedJobs.length > 0 && (
                <div className="p-6 rounded-2xl bg-surface border border-border space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5 text-accent" />
                    <span>Other Open Searches</span>
                  </div>

                  <div className="space-y-3">
                    {relatedJobs.map((rj) => (
                      <Link
                        key={rj.slug}
                        href={`/jobs/${rj.slug}`}
                        className="block p-3 rounded-lg hover:bg-background border border-transparent hover:border-border transition-all group"
                      >
                        <h5 className="text-xs font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                          {rj.title}
                        </h5>
                        <div className="text-[11px] text-muted-foreground mt-1 flex items-center justify-between">
                          <span>{rj.location}</span>
                          <span className="text-accent font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                            View <ArrowRight className="h-2.5 w-2.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
