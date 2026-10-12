import React from "react";

export function WhyUsSection() {
  const points = [
    { num: "01", title: "Unbiased Intelligence", desc: "Our analysts rely on proprietary data models, bypassing vendor hype to deliver ground-truth market reality." },
    { num: "02", title: "C-Suite Perspective", desc: "We don't just supply data. We contextualize it for executive decision-makers focusing on ROI and risk." },
    { num: "03", title: "Global Footprint", desc: "Local analysts in 14 countries providing hyper-regional insights alongside global macroeconomic trends." },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary border-y border-border">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3 flex flex-col justify-center">
            <span className="eyebrow mb-6">04 / Why Nexus</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              The clarity<br />advantage.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a landscape saturated with noise, we provide the singular, data-backed truth required to navigate uncertainty.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-12">
            {points.map((point) => (
              <div key={point.num} className="flex gap-8 group">
                <div className="text-3xl md:text-4xl font-serif text-accent font-bold opacity-50 group-hover:opacity-100 transition-opacity pt-1">
                  {point.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
