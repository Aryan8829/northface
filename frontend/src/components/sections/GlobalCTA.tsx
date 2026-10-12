import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Building2, ShieldCheck, Sparkles } from "lucide-react";

export function GlobalCTA() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-[#EAE8E5] relative overflow-hidden">
      {/* Decorative Warm Closing Loop SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none select-none opacity-40" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 700 500" fill="none">
          <path
            d="M50 250 C 50 100, 250 40, 450 60 C 650 80, 680 280, 520 420 C 380 520, 180 440, 150 320 C 130 220, 220 180, 350 200 C 480 220, 500 320, 420 380"
            stroke="url(#cta-loop-grad)"
            strokeWidth="1.25"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          <circle cx="420" cy="380" r="4" fill="#FF5B3D" />
          <defs>
            <linearGradient id="cta-loop-grad" x1="50" y1="50" x2="650" y2="450" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF5B3D" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#FF9A39" stopOpacity="0.6" />
              <stop offset="1" stopColor="#E83379" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-enterprise relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3EF] text-xs font-bold uppercase tracking-wider text-[#FF5B3D] border border-[#FF5B3D]/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Confidential Leadership Appointments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#202022] leading-[1.12]">
            Build the leadership team that defines your trajectory.
          </h2>

          <p className="text-base sm:text-lg text-[#606064] max-w-2xl mx-auto font-light leading-relaxed">
            Partner with dedicated search directors to secure exceptional executives and critical engineering specialists—backed by our uncompromised 12-month placement guarantee.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=employer">
              <Button size="lg" className="h-12 px-7 rounded-sm text-xs font-semibold gap-2 bg-[#202022] text-white hover:bg-[#FF5B3D] shadow-md transition-colors">
                <Building2 className="h-3.5 w-3.5" />
                <span>Submit a Hiring Brief</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>

            <Link href="/jobs">
              <Button size="lg" variant="outline" className="h-12 px-7 rounded-sm text-xs font-semibold gap-2 border-[#EAE8E5] text-[#202022] hover:bg-[#FAF9F7]">
                <Briefcase className="h-3.5 w-3.5 text-[#FF5B3D]" />
                <span>Explore Verified Mandates</span>
              </Button>
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#606064] font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>18-Day Shortlist SLA &bull; 12-Month Guarantee &bull; 100% Discretion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
