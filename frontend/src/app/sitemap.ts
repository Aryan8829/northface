import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { getAllReportSlugs } from "@/data/reports";
import { latestInsights } from "@/data/homepage";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexusconsulting.example.com";
  const currentDate = new Date().toISOString().split("T")[0];

  // Static routes
  const staticRoutes = ["", "/about", "/contact", "/services", "/industries", "/reports", "/insights"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic Industry routes
  const industryRoutes = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic Report routes
  const reportRoutes = getAllReportSlugs().map((slug) => ({
    url: `${baseUrl}/reports/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic Insight routes
  const insightRoutes = latestInsights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...reportRoutes,
    ...insightRoutes,
  ];
}
