import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com";

const STATIC_PATHS = [
  "/",
  "/about",
  "/journeys",
  "/blogs",
  "/faq",
  "/contact",
  "/desert-yoga-retreat",
  "/djara-cave",
  "/camel-trek",
  "/white-desert-tour-from-cairo",
  "/black-desert-egypt",
  "/western-desert-egypt-guide",
  "/how-to-get-to-white-desert",
  "/what-to-pack-white-desert",
  "/best-time-to-visit-white-desert",
  "/white-desert-tour-cost",
  "/white-desert-vs-wadi-rum",
  "/stargazing-western-desert",
  "/crystal-mountain-egypt",
  "/desert-safety-guide",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [traps, blogs] = await Promise.all([
    prisma.trap.findMany({ where: { status: "active" }, select: { slug: true, updatedAt: true } }),
    prisma.blog.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const tripEntries: MetadataRoute.Sitemap = traps.map((trap) => ({
    url: `${SITE_URL}/journeys/${trap.slug}`,
    lastModified: trap.updatedAt,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt,
  }));

  return [...staticEntries, ...tripEntries, ...blogEntries];
}
