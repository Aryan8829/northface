import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, getAllIndustrySlugs } from "@/data/industries";
import { services } from "@/data/services";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, FileText, BookOpen } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Practice Desk | Nexus Talent Partners`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const relatedServiceData = industry.relatedServices
    .map((sSlug) => services.find((s) => s.slug === sSlug))
    .filter(Boolean);

  return (
    <>
      {/* Hero on Pure White Canvas */}
      <section className="bg-white text-[#202022] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#EAE8E5]">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.name },
            ]}
            className="mb-8 text-[#606064]"
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
                Industry Practice
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#202022] font-serif">
                {industry.name}
              </h1>
              <p className="text-xl text-[#606064] max-w-2xl leading-relaxed font-light">
                {industry.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#FF5B3D] text-white hover:bg-[#FF5B3D]/90 rounded-sm h-13 px-8 text-base font-semibold gap-2 group shadow-sm">
                    Inquire for Sector Practice
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/jobs">
                  <Button size="lg" variant="outline" className="border-[#EAE8E5] text-[#202022] hover:bg-[#FAF9F7] rounded-sm h-13 px-8 text-base font-semibold">
                    View Practice Mandates
                  </Button>
                </Link>
              </div>
            </div>
            {/* Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="bg-[#FAF9F7] border border-[#EAE8E5] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold font-serif text-[#202022] mb-1">{industry.reportCount}</div>
                <div className="text-xs uppercase tracking-wider text-[#606064] font-semibold">Published Reports</div>
              </div>
              <div className="bg-[#FAF9F7] border border-[#EAE8E5] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold font-serif text-[#FF5B3D] mb-1">{industry.subCategories.length}</div>
                <div className="text-xs uppercase tracking-wider text-[#606064] font-semibold">Practice Desks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Categories */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Research Areas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {industry.name} Sub-Categories
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Explore specialized research across each segment of the {industry.name.toLowerCase()} landscape.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.subCategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/reports?industry=${industry.slug}&category=${sub.slug}`}
                className="group block"
              >
                <div className="p-8 border border-border rounded-lg bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-secondary rounded-md group-hover:bg-accent/10 transition-colors">
                      <FileText className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-accent">{sub.reportCount} reports</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                    {sub.name}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent transition-colors">
                    View Reports <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Trends */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Trends & Outlook
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Key Trends Shaping {industry.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our analysts continuously track the macro and micro trends reshaping the {industry.name.toLowerCase()} sector.
                These are the developments we believe will have the most strategic impact over the next 3-5 years.
              </p>
            </div>
            <div className="space-y-4">
              {industry.keyTrends.map((trend, i) => (
                <div
                  key={trend}
                  className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-md flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Trend {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold mt-1">{trend}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              How We Help
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Related Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServiceData.map((service) =>
              service ? (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="p-8 border border-border rounded-lg bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <BookOpen className="h-5 w-5 text-accent" />
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* CTA on Pure White Canvas */}
      <section className="py-24 md:py-32 bg-white text-[#202022] border-t border-[#EAE8E5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8 p-10 md:p-14 rounded-3xl bg-[#FAF9F7] border border-[#EAE8E5]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202022] leading-tight font-serif">
              Need Specialized Leadership in {industry.name}?
            </h2>
            <p className="text-xl text-[#606064] max-w-xl mx-auto font-light">
              Our dedicated practice directors connect high-growth enterprises and established leaders in the {industry.name.toLowerCase()} sector.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#FF5B3D] text-white hover:bg-[#FF5B3D]/90 rounded-sm h-13 px-8 text-base font-semibold gap-2 group shadow-sm">
                  Consult With Our Practice Lead
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
