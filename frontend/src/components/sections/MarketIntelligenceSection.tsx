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
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent via-primary to-primary" />
      
      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="eyebrow block mb-6 text-white/70">08 / Intelligence Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Data is infinite.<br />
              Truth is rare.
            </h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Nexus Intelligence is our proprietary data engine. We ingest millions of data points daily across global supply chains, regulatory filings, and consumer sentiment indices to deliver actionable truth to our clients.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx}>
                  <feature.icon className="h-6 w-6 text-accent mb-4" />
                  <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full border border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] animate-[spin_60s_linear_infinite]" />
            <div className="aspect-square rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] animate-[spin_40s_linear_infinite_reverse]" />
            
            <div className="relative bg-secondary/10 border border-white/10 backdrop-blur-md rounded-2xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="text-white font-semibold">Live Market Signals</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-primary-foreground/60">Processing</span>
                  </div>
                </div>
                
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="h-4 bg-white/10 rounded w-1/4 mb-4" />
                    <div className="h-3 bg-white/5 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-white/5 rounded w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
