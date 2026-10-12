import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";

export function GlobalCTA() {
  return (
    <section className="bg-secondary py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="eyebrow block">Confidential Partnership</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground leading-tight">
            Build the leadership team that defines your future.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Partner with our practice directors to secure exceptional executive leaders and critical technical specialists backed by our 12-month placement guarantee.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=employer">
              <Button size="lg" className="rounded-sm px-8 h-14 text-base font-semibold gap-2 bg-accent text-white hover:bg-accent/90 shadow-md">
                <Building2 className="h-4 w-4" />
                <span>Submit a Hiring Brief</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/jobs">
              <Button size="lg" variant="outline" className="rounded-sm px-8 h-14 text-base font-semibold gap-2 border-border">
                <Briefcase className="h-4 w-4 text-accent" />
                <span>Explore Verified Mandates</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
