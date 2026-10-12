import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Nexus Consulting",
  description: "Terms and conditions for engaging with Nexus Consulting and our intellectual property.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container-enterprise">
          <Breadcrumb
            items={[{ label: "Terms of Service" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl font-light">
              Last Updated: October 1, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-enterprise max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website and utilizing our insights, reports, or advisory services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Nexus Consulting.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              All content published by Nexus Consulting, including but not limited to market research reports, whitepapers, strategic frameworks, methodologies, design elements, and digital assets, are the exclusive property of Nexus Consulting. This material is protected by international copyright and trademark laws. 
            </p>
            <p>
              Enterprise clients purchasing our reports are granted a non-exclusive, non-transferable license to use the data internally, in accordance with the specific licensing tier purchased (e.g., Single User, Enterprise Wide).
            </p>

            <h2>3. Use Limitations</h2>
            <p>
              You may not:
            </p>
            <ul>
              <li>Reproduce, distribute, or publicly display our proprietary research without explicit written permission.</li>
              <li>Resell, sublicense, or commercially exploit our data models and forecasts.</li>
              <li>Attempt to reverse-engineer our proprietary methodologies or technological platforms.</li>
              <li>Use our brand, logo, or trademarks without authorization.</li>
            </ul>

            <h2>4. Disclaimers & Limitation of Liability</h2>
            <p>
              The market intelligence and strategic advisory provided by Nexus Consulting is intended for informational and strategic planning purposes only. While we employ rigorous methodologies and rely on primary data sources, we do not guarantee the absolute accuracy or completeness of any forecasts or projections. 
            </p>
            <p>
              Nexus Consulting shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from strategic business decisions or capital allocations made based upon our insights or research reports.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
            </p>

            <h2>6. Contact</h2>
            <p>
              For inquiries regarding licensing, compliance, or these Terms of Service, please contact our legal department at:
            </p>
            <p>
              <strong>Email:</strong> legal@nexusconsulting.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
