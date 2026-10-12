import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { reports, getReportBySlug, getAllReportSlugs } from "@/data/reports";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ReportCard } from "@/components/reports/ReportCard";
import { ArrowRight, Calendar, FileText, MapPin, TrendingUp, BookOpen, CheckCircle2, ShieldCheck, DollarSign, Lightbulb, Target } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllReportSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) return {};
  return {
    title: `${report.title} | Nexus Talent Partners`,
    description: report.excerpt,
  };
}

export default async function ReportDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  const relatedReports = reports
    .filter((r) => r.industrySlug === report.industrySlug && r.slug !== report.slug)
    .slice(0, 3);

  const isUpcoming = report.status === "upcoming";

  return (
    <>
      {/* Enterprise Hero on Pure White Canvas */}
      <section className="bg-white text-[#202022] pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden border-b border-[#EAE8E5]">
        <div className="container-enterprise relative z-10">
          <Breadcrumb
            items={[
              { label: "Reports", href: "/reports" },
              { label: report.industry, href: `/reports?industry=${report.industrySlug}` },
              { label: report.title },
            ]}
            className="mb-8 text-[#606064]"
          />
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            
            {/* Left — Title & Meta */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest bg-[#FFF3EF] text-[#FF5B3D] px-3 py-1 rounded-sm border border-[#FF5B3D]/20">
                  {report.industry}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest bg-[#FAF9F7] text-[#606064] px-3 py-1 rounded-sm border border-[#EAE8E5]">
                  {report.category}
                </span>
                {isUpcoming && (
                  <span className="text-xs font-bold uppercase tracking-widest bg-amber-50 text-amber-700 px-3 py-1 rounded-sm border border-amber-200">
                    Pre-Order
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#202022] font-serif text-balance">
                {report.title}
              </h1>
              <p className="text-xl text-[#606064] leading-relaxed max-w-3xl font-light">
                {report.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-[#EAE8E5] mt-8">
                <div className="flex items-center gap-3 text-sm text-[#202022] font-medium">
                  <div className="h-10 w-10 rounded-full bg-[#FAF9F7] border border-[#EAE8E5] flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-[#FF5B3D]" />
                  </div>
                  <div>
                    <div className="text-[#606064] text-xs uppercase tracking-widest mb-0.5">{isUpcoming ? "Expected" : "Published"}</div>
                    {new Date(report.publishedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-[#202022] font-medium">
                  <div className="h-10 w-10 rounded-full bg-[#FAF9F7] border border-[#EAE8E5] flex items-center justify-center">
                    <FileText className="h-4 w-4 text-[#FF5B3D]" />
                  </div>
                  <div>
                    <div className="text-[#606064] text-xs uppercase tracking-widest mb-0.5">Pages</div>
                    {report.pages}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#202022] font-medium">
                  <div className="h-10 w-10 rounded-full bg-[#FAF9F7] border border-[#EAE8E5] flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-[#FF5B3D]" />
                  </div>
                  <div>
                    <div className="text-[#606064] text-xs uppercase tracking-widest mb-0.5">Region</div>
                    {report.region}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Highlights */}
            <div className="lg:col-span-4 lg:pl-12 lg:border-l border-[#EAE8E5] flex flex-col gap-8">
              {report.marketSize && (
                <div>
                  <div className="text-5xl font-bold font-serif text-[#202022] mb-2">{report.marketSize}</div>
                  <div className="text-sm font-semibold text-[#606064] uppercase tracking-widest">Market Size ({report.forecastPeriod.split('-')[1] || "2032"})</div>
                </div>
              )}
              {report.cagr && (
                <div>
                  <div className="text-5xl font-bold font-serif text-[#FF5B3D] mb-2">{report.cagr}</div>
                  <div className="text-sm font-semibold text-[#606064] uppercase tracking-widest">CAGR ({report.forecastPeriod})</div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Report Content Sections */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Executive Summary */}
              <div id="executive-summary" className="scroll-mt-32">
                <span className="eyebrow block mb-6">Executive Summary</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Imperatives</h2>
                <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">
                  <p>
                    This comprehensive market research report provides an in-depth analysis of the <strong>{report.category.toLowerCase()}</strong> landscape
                    within the {report.industry.toLowerCase()} sector. The study covers market size estimation, growth trajectory analysis,
                    competitive benchmarking, and strategic recommendations for the {report.forecastPeriod} forecast period.
                  </p>
                  <p>
                    Our analysts have conducted extensive primary research including interviews with industry executives, technology leaders,
                    and domain experts, complemented by rigorous secondary data validation and proprietary modeling frameworks.
                  </p>
                </div>
              </div>

              {/* Market Dynamics */}
              <div id="market-dynamics" className="scroll-mt-32">
                <span className="eyebrow block mb-6">Market Dynamics</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Forces shaping the market</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: "Growth Drivers", icon: TrendingUp, desc: "Technological advancements, regulatory shifts, and changing consumer behaviors accelerating adoption." },
                    { label: "Market Restraints", icon: ShieldCheck, desc: "Supply chain bottlenecks, compliance costs, and macroeconomic headwinds limiting expansion." },
                    { label: "Emerging Opportunities", icon: Lightbulb, desc: "Untapped geographic markets, adjacent sector applications, and white-space product categories." },
                    { label: "Competitive Threats", icon: Target, desc: "Disruptive entrants, substitute technologies, and pricing pressures." },
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 border border-border rounded-xl bg-surface">
                      <item.icon className="h-6 w-6 text-accent mb-4" />
                      <h3 className="text-xl font-bold mb-3">{item.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div id="methodology" className="scroll-mt-32">
                <span className="eyebrow block mb-6">Data Integrity</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Research Methodology</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our research methodology combines top-down and bottom-up approaches with triangulated data validation.
                  Primary research includes 50+ expert interviews, while secondary research leverages proprietary databases.
                </p>
                <div className="bg-secondary p-8 rounded-xl border border-border">
                  <ul className="space-y-4">
                    {[
                      "Proprietary AI-driven data ingestion from 10,000+ sources.",
                      "Primary interviews with C-suite executives and domain experts.",
                      "Top-down and bottom-up market sizing models.",
                      "Rigorous peer-review by senior industry analysts."
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-4 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                
                {/* Purchase Card */}
                <div className="border border-border rounded-2xl p-8 bg-surface shadow-premium">
                  <div className="flex items-end justify-between mb-8 pb-8 border-b border-border">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Single User License</div>
                      <div className="text-5xl font-bold font-serif text-primary flex items-center">
                        <DollarSign className="h-8 w-8 text-muted-foreground mr-1" />
                        4,950
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <Link href="/contact">
                      <Button size="lg" className="w-full h-14 rounded-sm text-base font-bold gap-2 group">
                        {isUpcoming ? "Pre-order Now" : "Purchase License"}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="w-full h-14 rounded-sm text-base font-bold bg-background">
                        Request Sample PDF
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3" /> Includes 1-hour analyst briefing
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3" /> Excel data pack included
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3" /> Secure digital delivery (PDF)
                    </div>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="border border-border rounded-2xl p-8 bg-background">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    Table of Contents
                  </h3>
                  <nav className="flex flex-col gap-4 relative">
                    <div className="absolute left-1.5 top-2 bottom-2 w-px bg-border" />
                    
                    <a href="#executive-summary" className="flex items-center gap-4 text-sm font-semibold text-foreground hover:text-accent transition-colors">
                      <div className="w-3 h-3 rounded-full bg-background border-2 border-accent relative z-10" />
                      Executive Summary
                    </a>
                    <a href="#market-dynamics" className="flex items-center gap-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-3 h-3 rounded-full bg-background border-2 border-border relative z-10" />
                      Market Dynamics
                    </a>
                    <a href="#segmentation" className="flex items-center gap-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-3 h-3 rounded-full bg-background border-2 border-border relative z-10" />
                      Segmentation Analysis
                    </a>
                    <a href="#competitive" className="flex items-center gap-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-3 h-3 rounded-full bg-background border-2 border-border relative z-10" />
                      Competitive Landscape
                    </a>
                    <a href="#methodology" className="flex items-center gap-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-3 h-3 rounded-full bg-background border-2 border-border relative z-10" />
                      Methodology
                    </a>
                  </nav>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Reports */}
      {relatedReports.length > 0 && (
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container-enterprise">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="eyebrow block mb-4">Related Intelligence</span>
                <h2 className="text-3xl font-bold">More in {report.industry}</h2>
              </div>
              <Link href={`/reports?industry=${report.industrySlug}`}>
                <Button variant="outline">View All</Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedReports.map((relatedReport) => (
                <ReportCard key={relatedReport.slug} report={relatedReport} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
