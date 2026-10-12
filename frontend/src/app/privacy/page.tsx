import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Candidate Data Protection | Nexus Talent Partners",
  description: "Learn how Nexus Talent Partners safeguards candidate resumes, executive portfolios, and corporate hiring briefs with military-grade discretion and GDPR/CCPA compliance.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-white text-[#202022] pt-32 pb-20 border-b border-[#EAE8E5]">
        <div className="container-enterprise">
          <Breadcrumb
            items={[{ label: "Privacy Policy" }]}
            className="mb-8 text-[#606064]"
          />
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF3EF] text-[#FF5B3D] border border-[#FF5B3D]/20">
              Data Protection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-[#202022]">
              Privacy Policy &amp; Candidate Data Governance
            </h1>
            <p className="text-xl text-[#606064] max-w-2xl font-light">
              Last Updated: October 2026 &bull; Strict Discretion Protocols
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-enterprise max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <h2>1. Our Commitment to Discretion</h2>
            <p>
              Nexus Talent Partners (&ldquo;Nexus,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates an executive search and specialized recruitment practice where confidentiality is our foundational currency. This Privacy Policy describes how we collect, safeguard, and process personal information submitted by prospective candidates, executive leaders, and hiring client organizations.
            </p>

            <h2>2. The Candidate Consent &amp; Zero-Exposure Guarantee</h2>
            <p>
              Unlike traditional contingency agencies, <strong>Nexus Talent Partners will NEVER distribute, transmit, or disclose a candidate&apos;s resume, identity, current employer, or portfolio to any client organization without prior, explicit written permission for that specific mandate.</strong>
            </p>
            <p>
              Candidate profiles registered through our confidential career intake forms are stored within an encrypted, access-controlled vault accessible exclusively by designated Practice Directors.
            </p>

            <h2>3. Information We Collect</h2>
            <p>
              We collect information strictly necessary to evaluate professional experience and facilitate executive placements:
            </p>
            <ul>
              <li><strong>Candidate Information:</strong> Full name, professional email, phone number, employment history, architectural and technical proficiencies, compensation targets, and publicly available professional profiles (e.g., LinkedIn, GitHub, Google Scholar).</li>
              <li><strong>Employer Information:</strong> Organization name, hiring authority contact information, organizational charts, technical specifications, and compensation budgets provided in hiring briefs.</li>
              <li><strong>Digital Interactions:</strong> Log data, IP address, and cookie identifiers used solely to maintain website performance and form security.</li>
            </ul>

            <h2>4. How We Use Professional Data</h2>
            <p>
              Data collected is utilized strictly to:
            </p>
            <ul>
              <li>Calibrate and match senior candidates with vetted, active search mandates.</li>
              <li>Communicate directly regarding career opportunities, compensation benchmarks, and executive search timelines.</li>
              <li>Verify past credentials and leadership achievements with candidate consent.</li>
              <li>Fulfill statutory employment and equal opportunity reporting obligations where mandated by applicable law.</li>
            </ul>

            <h2>5. Data Retention, Portability &amp; Right to Erasure</h2>
            <p>
              Under global data privacy frameworks (including the EU/UK General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA)):
            </p>
            <ul>
              <li>You may request a complete copy of all career records and notes maintained regarding your candidacy.</li>
              <li>You may request the immediate and irrevocable erasure of your profile and submitted resumes from our systems at any time by emailing <code>privacy@nexustalent.com</code>.</li>
              <li>We perform biennial audits to purge candidate records that have not engaged in active communication over a 24-month horizon.</li>
            </ul>

            <h2>6. Employer Mandate Confidentiality</h2>
            <p>
              All corporate hiring inquiries, succession plans, and organizational briefs submitted through our platform are treated as confidential proprietary business information protected by mutual non-disclosure standards. We will never publicly acknowledge an employer client partnership without prior corporate consent.
            </p>

            <h2>7. Contact Our Data Protection Officer</h2>
            <p>
              For questions regarding our candidate privacy protocols or to submit a data subject access request, contact:
            </p>
            <p className="font-mono text-sm">
              Nexus Talent Partners &bull; Data Governance Office<br />
              Email: privacy@nexustalent.com<br />
              555 California Street, Suite 4200, San Francisco, CA 94104
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
