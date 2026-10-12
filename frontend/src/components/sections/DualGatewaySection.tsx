"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, UserCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DualGatewaySection() {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-border">
      <div className="container-enterprise">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow block mb-3">01 / Tailored Representation</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
            Built for hiring leaders and world-class candidates alike.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: For Hiring Managers / Employers */}
          <div className="p-8 sm:p-10 rounded-2xl bg-background border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="h-14 w-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Building2 className="h-7 w-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">For Employers &amp; Boards</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4">
                  Appoint leaders who compound organizational value.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  From critical individual contributor architects to Board &amp; C-suite appointments, we identify, evaluate, and secure verified talent that traditional recruiters overlook.
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Executive Search, Retained &amp; Contingent Models</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Proprietary 5-Stage Qualification Protocol</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>18-Day Average Shortlist Delivery SLA</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-border">
              <Link href="/employers">
                <Button className="w-full sm:w-auto h-12 px-6 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <span>Explore Hiring Solutions</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: For Candidates / Industry Specialists */}
          <div className="p-8 sm:p-10 rounded-2xl bg-background border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="h-14 w-14 rounded-xl bg-sage border border-emerald-500/20 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <UserCheck className="h-7 w-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-2 block">For Candidates &amp; Executives</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4">
                  Navigate your next career transformation with precision.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  We champion exceptional specialists with absolute discretion. Access verified leadership mandates, transparent compensation clarity, and dedicated career representation.
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>100% Confidential Candidate Representation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Verified Roles with Explicit Salary &amp; Equity Bounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Senior Practice Director Advisory at Every Stage</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-border">
              <Link href="/jobs">
                <Button variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-sm border-border hover:bg-secondary gap-2">
                  <span>Browse Open Opportunities</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
