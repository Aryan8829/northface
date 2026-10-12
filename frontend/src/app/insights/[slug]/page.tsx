import React from "react";
import { notFound } from "next/navigation";
import { latestInsights } from "@/data/homepage";
import { ArrowLeft, Clock, Share2, Bookmark, Mail, Link as LinkIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return latestInsights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = latestInsights.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | Nexus Consulting`,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = latestInsights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <article className="bg-background min-h-screen pt-24 md:pt-32 pb-24">
        
        {/* Navigation / Progress Bar Area */}
        <div className="border-b border-border bg-background/80 backdrop-blur-md sticky top-16 z-40 hidden md:block">
          <div className="container-enterprise h-14 flex items-center justify-between">
            <Link href="/insights" className="flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Insights
            </Link>
            <div className="flex items-center gap-4 text-muted-foreground">
              <button className="hover:text-primary transition-colors p-2"><Share2 className="h-4 w-4" /></button>
              <button className="hover:text-primary transition-colors p-2"><Bookmark className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <header className="container-enterprise max-w-4xl pt-12 md:pt-20 pb-12 text-center space-y-8 border-b border-border">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-sm">
              {insight.category}
            </span>
            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {insight.readingTime} read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-balance">
            {insight.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light text-balance">
            {insight.excerpt}
          </p>

          <div className="pt-8 flex flex-col items-center justify-center gap-2">
            <div className="font-bold text-foreground">{insight.author}</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              {new Date(insight.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 pt-16 relative">
            
            {/* Left Sidebar - Social Share */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="sticky top-40 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Share</span>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"><LinkIcon className="h-4 w-4" /></button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"><Share2 className="h-4 w-4" /></button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"><Mail className="h-4 w-4" /></button>
              </div>
            </div>

            {/* Content Body */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-loose prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:font-normal prose-blockquote:text-muted-foreground prose-blockquote:not-italic prose-li:marker:text-accent">
                
                <p className="lead text-xl md:text-2xl font-light text-foreground mb-12">
                  The intersection of macroeconomic volatility and rapid technological advancement is forcing enterprise leaders to rethink their operating models from the ground up.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <h2>The Changing Landscape</h2>
                
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <blockquote>
                  &ldquo;Innovation distinguishes between a leader and a follower. The ability to execute distinguishes between an idea and a business.&rdquo;
                </blockquote>

                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>

                <h2>Strategic Imperatives for {new Date().getFullYear()}</h2>
                
                <p>
                  To navigate this complexity, leadership teams must focus on three core pillars:
                </p>

                <ul>
                  <li><strong>Operational Resilience:</strong> Organizations must realign their operating models to withstand supply chain shocks and geopolitical instability.</li>
                  <li><strong>Technological Convergence:</strong> Capital allocation needs to shift toward emerging technologies that offer compounding efficiency gains.</li>
                  <li><strong>Human Capital Evolution:</strong> Talent acquisition and retention strategies must be completely rethought in an era of demographic shifts and new working paradigms.</li>
                </ul>

                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                
              </div>
              
              {/* Author Bio Box */}
              <div className="mt-20 pt-10 border-t border-border flex items-start gap-6 bg-surface p-8 rounded-xl">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 font-serif font-bold text-xl text-muted-foreground border border-border">
                  {insight.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{insight.author}</h4>
                  <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Senior Partner, Nexus Consulting</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {insight.author} leads the Global Strategy Practice at Nexus, advising Fortune 500 executives on corporate transformation, digital strategy, and macroeconomic resilience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Empty or Ads */}
            <div className="hidden lg:block lg:col-span-2">
              {/* Deliberately left blank for premium whitespace, as seen in top tier publications */}
            </div>

          </div>
        </div>
      </article>

      {/* Recommended Reading */}
      <section className="py-24 bg-primary text-primary-foreground border-t border-border">
        <div className="container-enterprise">
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-2xl font-bold font-serif">Recommended Reading</h2>
            <Link href="/insights" className="text-sm font-bold text-white hover:text-accent uppercase tracking-widest transition-colors flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestInsights.filter(i => i.slug !== slug).slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="group">
                <div className="space-y-4 border-l border-white/10 pl-6 group-hover:border-accent transition-colors h-full">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold font-serif leading-snug group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm text-primary-foreground/50">
                    {item.author}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
