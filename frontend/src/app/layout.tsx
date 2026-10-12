import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nexus Consulting",
    default: "Nexus Consulting | Market Intelligence & Technology Services",
  },
  description: "Global strategy and technology consulting firm dedicated to helping organizations navigate complexity and accelerate growth through data, insights, and action.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nexusconsulting.example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Nexus Consulting | Market Intelligence & Technology Services",
    description: "Global strategy and technology consulting firm dedicated to helping organizations navigate complexity and accelerate growth.",
    siteName: "Nexus Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Consulting | Market Intelligence & Technology Services",
    description: "Global strategy and technology consulting firm dedicated to helping organizations navigate complexity and accelerate growth.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
