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
    template: "%s | Nexus Talent Partners",
    default: "Nexus Talent Partners | Executive Search & Global Recruitment Consultancy",
  },
  description: "Specialist recruitment and executive talent consultancy built around people, potential, and long-term organizational fit.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nexustalent.example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Nexus Talent Partners | Executive Search & Recruitment Consultancy",
    description: "Specialist recruitment and executive talent consultancy built around people, potential, and long-term organizational fit.",
    siteName: "Nexus Talent Partners",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus Talent Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Talent Partners | Executive Search & Recruitment Consultancy",
    description: "Specialist recruitment and executive talent consultancy built around people, potential, and long-term organizational fit.",
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
