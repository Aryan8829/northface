import React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexus Consulting",
  description: "Privacy Policy and Data Handling procedures for Nexus Consulting.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container-enterprise">
          <Breadcrumb
            items={[{ label: "Privacy Policy" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white">
              Privacy Policy
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
            <h2>1. Introduction</h2>
            <p>
              Nexus Consulting (&ldquo;Nexus,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services (collectively, the &ldquo;Services&rdquo;). This Privacy Policy applies to our website and describes our practices for handling your personal data.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal data that you provide directly to us, such as when you request information, register for events, download insights, or contact us. This may include your name, business email address, corporate title, company name, and phone number.
            </p>
            <p>
              We also collect data automatically through your use of the Services, such as IP addresses, browser types, operating systems, and information about your interaction with our website using cookies and similar technologies.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our Services.</li>
              <li>Improve, personalize, and expand our Services.</li>
              <li>Understand and analyze how you use our Services.</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
              <li>Send you emails containing thought leadership, market insights, or service offerings.</li>
            </ul>

            <h2>4. Data Security & Enterprise Standards</h2>
            <p>
              As an enterprise intelligence firm, we maintain the highest standards of data security. We implement advanced technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. We regularly audit our security protocols to ensure compliance with global data protection regulations (including GDPR and CCPA).
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at:
            </p>
            <p>
              <strong>Email:</strong> privacy@nexusconsulting.com<br />
              <strong>Address:</strong> One World Trade Center, Suite 4500, New York, NY 10007, United States
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
