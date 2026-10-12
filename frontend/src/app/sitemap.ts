import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { getAllReportSlugs } from "@/data/reports";
import { latestInsights } from "@/data/homepage";
import { getAllJobSlugs } from "@/data/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexustalent.com";
  const currentDate = new Date().toISOString().split("T")[0];

  // Core Static routes
  const staticRoutes = [
    "",
    "/employers",
    "/candidates",
    "/jobs",
    "/about",
    "/case-studies",
    "/contact",
    "/services",
    "/industries",
    "/privacy",
    "/terms",
    "/reports",
    "/insights",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/employers" || route === "/candidates" || route === "/jobs" ? 0.95 : 0.8,
  }));

  // Dynamic Job routes
  const jobRoutes = getAllJobSlugs().map((slug) => ({
    url: `${baseUrl}/jobs/${slug}`,
    lastModified: currentDate,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  // Dynamic Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Dynamic Industry routes
  const industryRoutes = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
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
    ...jobRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...reportRoutes,
    ...insightRoutes,
  ];
}
