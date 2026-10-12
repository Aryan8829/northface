import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalCTA } from "@/components/sections/GlobalCTA";
import { MomentumField } from "@/components/motion/MomentumField";

interface AppShellProps {
  children: React.ReactNode;
  hideCTA?: boolean;
}

export function AppShell({ children, hideCTA = false }: AppShellProps) {
  return (
    <div className="relative min-h-screen bg-white text-[#202022] flex flex-col selection:bg-[#FF5B3D] selection:text-white">
      {/* Living Ambient Momentum Field (Site-wide decorative layer) */}
      <MomentumField />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10">
        {children}
      </main>

      {/* Closing CTA */}
      {!hideCTA && <GlobalCTA />}

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
