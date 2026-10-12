import React from "react";
import { MapPin } from "lucide-react";

export function GlobalPresenceSection() {
  const regions = [
    { name: "Americas", offices: ["New York (HQ)", "San Francisco", "São Paulo", "Toronto"] },
    { name: "EMEA", offices: ["London", "Frankfurt", "Dubai", "Johannesburg"] },
    { name: "APAC", offices: ["Singapore", "Tokyo", "Sydney", "Mumbai", "Shanghai", "Seoul"] },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary border-b border-border">
      <div className="container-enterprise">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-6">10 / Global Reach</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Local context.<br />Global scale.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our teams operate across 14 global hubs, allowing us to deploy cross-border expertise while maintaining hyper-local market awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div key={region.name} className="p-8 bg-background border border-border rounded-xl">
              <h3 className="text-2xl font-bold mb-8 border-b border-border pb-4">{region.name}</h3>
              <ul className="space-y-4">
                {region.offices.map((office) => (
                  <li key={office} className="flex items-center text-foreground font-semibold">
                    <MapPin className="h-4 w-4 text-accent mr-3" />
                    {office}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
