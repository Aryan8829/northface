import React from "react";
import Link from "next/link";
import { footerNavigation } from "@/config/navigation";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { RibbonDivider } from "@/components/motion/RibbonDivider";

export function Footer() {
  return (
    <footer className="bg-[#F7F9F7] text-[#0F3B27] border-t border-[#E1E8E3] pt-16 pb-12 relative z-10">
      {/* Decorative Ribbon Flourish */}
      <RibbonDivider variant="loop" accentFrom="forest" accentTo="lime" className="mb-10" />

      <div className="container-enterprise">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-6 space-y-5">
            <Link href="/" className="inline-block">
              <div className="font-serif font-bold text-2xl tracking-tight text-[#0F3B27] flex items-center gap-2">
                <span>Nexus</span>
                <span className="text-[#92FF5F] text-[11px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded-full bg-[#0F3B27] border border-[#92FF5F]/30 shadow-sm">
                  Talent Partners
                </span>
              </div>
            </Link>

            <p className="text-[#3D614E] text-xs leading-relaxed max-w-sm font-light">
              Executive search and specialist recruitment consultancy built around people, potential, and long-term organizational fit. We partner with boards, founders, and leaders to appoint transformative talent.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#3D614E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-[#0F3B27] shrink-0 mt-0.5" />
                <span>One Vanderbilt Avenue, 38th Floor, New York, NY 10017</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-[#0F3B27] shrink-0" />
                <span>+1 (212) 555-0180</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-[#0F3B27] shrink-0" />
                <span>mandates@nexustalent.com</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#0F3B27] font-mono font-semibold">
              <ShieldCheck className="h-3.5 w-3.5 text-[#0F3B27]" />
              <span>Strict Discretion &amp; Non-Disclosure Standards</span>
            </div>
          </div>

          {/* For Employers */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs mb-4 tracking-wider text-[#0F3B27] uppercase font-mono">
              For Employers
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.employers.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs text-[#3D614E] hover:text-[#0F3B27] hover:font-bold transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Candidates */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs mb-4 tracking-wider text-[#0F3B27] uppercase font-mono">
              For Candidates
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.candidates.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs text-[#3D614E] hover:text-[#0F3B27] hover:font-bold transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs mb-4 tracking-wider text-[#0F3B27] uppercase font-mono">
              Practice Desks
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.practiceAreas.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs text-[#3D614E] hover:text-[#0F3B27] hover:font-bold transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs mb-4 tracking-wider text-[#0F3B27] uppercase font-mono">
              Firm
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs text-[#3D614E] hover:text-[#0F3B27] hover:font-bold transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E1E8E3] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#3D614E]">
          <p>
            &copy; {new Date().getFullYear()} Nexus Talent Partners. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px]">
            {footerNavigation.legal.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[#0F3B27] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
