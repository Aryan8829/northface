import React from "react";
import { Database, Search, Lock, Zap } from "lucide-react";

export function MarketIntelligenceSection() {
  const features = [
    { icon: Database, title: "Proprietary Data Lake", desc: "Access to over 10 petabytes of structured and unstructured market data, continuously updated." },
    { icon: Search, title: "Predictive Modeling", desc: "Machine learning algorithms that forecast market shifts with unprecedented accuracy." },
    { icon: Lock, title: "Bank-Grade Security", desc: "Your intelligence queries and custom research are protected by SOC2 Type II certified infrastructure." },
    { icon: Zap, title: "Real-Time Signals", desc: "Monitor competitor movements and supply chain disruptions as they happen." },
  ];

  return (
    <section className="py-24 md:py-32 bg-transparent text-[#0F3B27] relative overflow-hidden border-t border-[#E1E8E3]">
      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F] border border-[#92FF5F]/30 shadow-sm mb-6">
              08 / Intelligence Platform
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#0F3B27] font-serif mb-6">
              Data is infinite.<br />
              Truth is rare.
            </h2>
            <p className="text-lg text-[#3D614E] leading-relaxed mb-10 font-light">
              Nexus Intelligence is our proprietary search and telemetry engine. We ingest millions of real-time signals across venture capital allocations, compensation benchmarks, and executive leadership movements to deliver decisive truth to our partners.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E1E8E3] bracket-corners shadow-sm hover:border-[#0F3B27]/40 transition-all">
                  <div className="h-10 w-10 rounded-lg bg-[#CFF1D2]/40 border border-[#0F3B27]/10 flex items-center justify-center text-[#0F3B27] mb-3">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-[#0F3B27] mb-1.5">{feature.title}</h4>
                  <p className="text-xs text-[#3D614E] leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full border border-[#E1E8E3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] animate-[spin_60s_linear_infinite]" />
            <div className="aspect-square rounded-full border border-[#92FF5F]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] animate-[spin_40s_linear_infinite_reverse]" />
            
            <div className="relative bg-[#0F3B27] text-white border border-[#92FF5F]/20 rounded-2xl p-8 overflow-hidden shadow-2xl bracket-corners">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#92FF5F] to-transparent" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="text-white font-serif font-bold text-base">Live Executive Calibration Stream</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#92FF5F] animate-pulse" />
                    <span className="text-xs text-[#92FF5F] font-mono uppercase tracking-wider">Active</span>
                  </div>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/80">
                    <span className="text-[#92FF5F]">[CALIBRATED]</span> VP Systems Eng &rarr; $385K Base + 0.75% Equity
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/80">
                    <span className="text-[#92FF5F]">[VERIFIED]</span> Quant Research Lead &rarr; $520K PnL Comp
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/80">
                    <span className="text-[#92FF5F]">[DISPATCHED]</span> Head of ML Platform &rarr; Candidate Enclave
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
