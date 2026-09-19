import { MetadataRoute } from "next";
import { WORK_PROJECTS, JOURNAL_POSTS } from "@/data/kottData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kott.studio";

  const coreRoutes = [
    "",
    "/work",
    "/services",
    "/journal",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const workRoutes = WORK_PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalRoutes = JOURNAL_POSTS.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...workRoutes, ...journalRoutes];
}
