import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GlobalCTA() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground leading-tight">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partner with our experts to transform data into strategy, and strategy into industry-leading impact.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-sm px-8 h-14 text-lg">
                Talk to our experts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
