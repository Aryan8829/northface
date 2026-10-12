import React from "react";
import Link from "next/link";
import { footerNavigation } from "@/config/navigation";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32 border-t border-white/10 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl">
            <span className="eyebrow mb-6 block text-white/70">Ready to explore what&apos;s next?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8">
              Transform data into decisive action.
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
              Connect with our principal analysts and technology architects to discuss your strategic challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 rounded-sm text-base font-semibold bg-white text-primary hover:bg-white/90 gap-2 group">
                  Start the Conversation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-sm text-base font-semibold border-white/20 text-white hover:bg-white/10">
                  Explore Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-white/10 pt-20 pb-8">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 pr-8">
              <Link href="/" className="inline-block mb-6">
                <div className="font-serif font-bold text-3xl tracking-tight text-white">
                  Nexus<span className="text-accent">.</span>
                </div>
              </Link>
              <p className="text-primary-foreground/70 text-sm mb-8 leading-relaxed">
                We equip leaders with the market intelligence, strategic clarity, and technological 
                capabilities required to win in an era of unprecedented disruption.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>350 Fifth Avenue, New York, NY 10118</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+1 (800) 555-0190</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>contact@nexusconsulting.com</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-sm mb-6 tracking-wide text-white uppercase">Services</h3>
              <ul className="space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-primary-foreground/60 hover:text-white transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-bold text-sm mb-6 tracking-wide text-white uppercase">Reports</h3>
              <ul className="space-y-4">
                {footerNavigation.reports.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-primary-foreground/60 hover:text-white transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-bold text-sm mb-6 tracking-wide text-white uppercase">Insights</h3>
              <ul className="space-y-4">
                {footerNavigation.insights.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-primary-foreground/60 hover:text-white transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-bold text-sm mb-6 tracking-wide text-white uppercase">Company</h3>
              <ul className="space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-primary-foreground/60 hover:text-white transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Nexus Consulting. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {footerNavigation.legal.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-medium text-primary-foreground/50 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
