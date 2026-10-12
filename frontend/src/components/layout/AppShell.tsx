import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalCTA } from "@/components/sections/GlobalCTA";

interface AppShellProps {
  children: React.ReactNode;
  hideCTA?: boolean;
}

export function AppShell({ children, hideCTA = false }: AppShellProps) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-screen">
        {children}
      </main>
      {!hideCTA && <GlobalCTA />}
      <Footer />
    </>
  );
}
