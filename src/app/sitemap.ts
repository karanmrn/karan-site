import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";
import { getWritingPosts } from "@/lib/writing";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes = [
    "",
    "/projects",
    "/certifications",
    "/writing",
    "/about",
    "/resume",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
  }));
  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: now,
  }));
  const writingPosts = await getWritingPosts();
  const writingRoutes = writingPosts.map((post) => ({
    url: `${site.url}/writing/${post.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...projectRoutes, ...writingRoutes];
}
