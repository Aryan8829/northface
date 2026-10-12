import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Search Standards | Nexus Talent Partners",
  description: "Terms and conditions for utilizing Nexus Talent Partners search platforms, executive advisory services, and candidate representation.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container-enterprise">
          <Breadcrumb
            items={[{ label: "Terms of Service" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white">
              Terms of Service &amp; Search Governance
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl font-light">
              Last Updated: October 2026 &bull; Professional Search Standards
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-enterprise max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, submitting candidate credentials, or transmitting corporate hiring briefs, you agree to comply with these Terms of Service. These terms govern the digital services provided by Nexus Talent Partners (&ldquo;Nexus,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;). Formal retained executive search and embedded talent partnership agreements are governed by distinct, signed master service agreements (MSAs).
            </p>

            <h2>2. Candidate Representation Standards</h2>
            <p>
              Candidate submissions through our portal constitute a confidential request for representation. Registration does not establish an exclusive employment representation contract until a formal candidate engagement letter is executed.
            </p>
            <p>
              Candidates represent that all employment history, educational credentials, certifications, and compensation disclosures provided are accurate and truthful.
            </p>

            <h2>3. Employer Mandates &amp; Non-Solicitation</h2>
            <p>
              Organizations submitting hiring briefs or retaining Nexus Talent Partners agree to engage with candidates introduced through our network in good faith. 
            </p>
            <p>
              Direct outreach or circumvention of Nexus regarding introduced candidates within a 12-month period from initial presentation constitutes a breach of professional search standards and triggers full standard placement fees as detailed in our commercial search terms.
            </p>

            <h2>4. Equal Opportunity Commitment</h2>
            <p>
              Nexus Talent Partners operates strictly in compliance with all federal, state, and international equal opportunity laws. We do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, veteran status, or disability in evaluating candidates for executive search mandates.
            </p>

            <h2>5. Intellectual Property &amp; Market Intelligence</h2>
            <p>
              All proprietary content published on this website—including salary benchmarking frameworks, organizational models, and published research articles—remains the exclusive intellectual property of Nexus Talent Partners. Reproduction or commercial syndication without prior written consent is strictly prohibited.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              While Nexus performs rigorous candidate vetting and background checks, the ultimate hiring decision rests solely with the employer client organization. Nexus Talent Partners shall not be held liable for indirect, incidental, or consequential damages resulting from employment relationships entered into between candidates and hiring organizations.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.
            </p>

            <h2>8. Inquiries Regarding Search Terms</h2>
            <p className="font-mono text-sm">
              Nexus Talent Partners &bull; Legal Affairs Office<br />
              Email: legal@nexustalent.com<br />
              555 California Street, Suite 4200, San Francisco, CA 94104
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
