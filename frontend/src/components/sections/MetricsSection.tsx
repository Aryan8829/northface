import React from "react";

export function MetricsSection() {
  const metrics = [
    { value: "40+", label: "Global Markets Analyzed" },
    { value: "24", label: "Industry Verticals" },
    { value: "2.5k+", label: "Research Reports" },
    { value: "14", label: "Global Offices" },
  ];

  return (
    <section className="border-b border-border bg-surface py-12 md:py-16">
      <div className="container-enterprise">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/50">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-2 ${index === 0 ? "pl-0" : "pl-8 md:pl-12"}`}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
