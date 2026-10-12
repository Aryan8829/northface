"use client";

import React, { useState } from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Editorial Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-50 blur-3xl" />
        </div>
        
        <div className="container-enterprise relative z-20">
          <Breadcrumb
            items={[{ label: "Global Offices" }]}
            className="mb-8 text-primary-foreground/50"
          />
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow block text-accent border-l-2 border-accent pl-4">
              Engage Nexus
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-serif">
              Let&apos;s build what&apos;s next.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl leading-relaxed font-light">
              Connect with our partners to discuss your strategic challenges, request bespoke research, or explore firm-level engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left — Form */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <span className="eyebrow block mb-4">Direct Inquiry</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Engage our analysts</h2>
                <p className="text-muted-foreground text-lg">
                  Submit your details below. A dedicated relationship partner will review your inquiry and respond within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-surface rounded-2xl p-12 text-center border border-border shadow-sm">
                  <CheckCircle2 className="h-20 w-20 text-accent mx-auto mb-6" />
                  <h3 className="text-3xl font-bold font-serif mb-4">Inquiry Received</h3>
                  <p className="text-muted-foreground mb-10 text-lg max-w-md mx-auto">
                    Thank you for reaching out to Nexus Consulting. Your dossier has been routed to the appropriate practice leader.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-sm h-12 px-8">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 bg-surface p-8 md:p-12 rounded-2xl border border-border shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name *</label>
                      <input
                        id="firstName"
                        required
                        type="text"
                        className="w-full h-14 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-foreground font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name *</label>
                      <input
                        id="lastName"
                        required
                        type="text"
                        className="w-full h-14 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-foreground font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Corporate Email *</label>
                      <input
                        id="email"
                        required
                        type="email"
                        className="w-full h-14 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-foreground font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company / Organization *</label>
                      <input
                        id="company"
                        required
                        type="text"
                        className="w-full h-14 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-foreground font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="topic" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Inquiry Type *</label>
                    <select
                      id="topic"
                      required
                      className="w-full h-14 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-foreground font-medium appearance-none"
                    >
                      <option value="" disabled selected>Select an area of interest...</option>
                      <option value="consulting">Management Consulting</option>
                      <option value="research">Market Research & Intelligence</option>
                      <option value="data">Data & Analytics Solutions</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Engagement Details *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Please provide context regarding your strategic objectives..."
                      className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none text-foreground font-medium"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 rounded-sm text-base font-bold gap-2 group">
                    Submit Inquiry
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>

            {/* Right — Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="eyebrow block mb-4">Global Headquarters</span>
                <h2 className="text-3xl font-bold font-serif mb-8">New York</h2>
                
                <div className="bg-secondary p-8 rounded-2xl border border-border space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Office Location</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        One World Trade Center<br />
                        Suite 4500<br />
                        New York, NY 10007<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Direct Line</h4>
                      <p className="text-muted-foreground text-sm font-medium">+1 (212) 555-0199</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">General Inquiries</h4>
                      <p className="text-muted-foreground text-sm font-medium">inquiries@nexusconsulting.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <span className="eyebrow block mb-6">Regional Hubs</span>
                <div className="space-y-6">
                  {[
                    { city: "London", region: "EMEA Headquarters", phone: "+44 20 7123 4567" },
                    { city: "Singapore", region: "APAC Headquarters", phone: "+65 6789 0123" },
                  ].map(hub => (
                    <div key={hub.city} className="flex items-center justify-between p-6 border border-border rounded-xl bg-surface hover:border-accent/30 transition-colors">
                      <div>
                        <h4 className="font-bold text-lg">{hub.city}</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">{hub.region}</p>
                      </div>
                      <div className="text-sm font-medium text-foreground">{hub.phone}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
