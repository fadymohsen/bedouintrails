import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";

export async function listPublishedBlogs() {
  return prisma.blog.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
  });
}

export async function getBlogBySlug(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: { slug },
    include: { faqs: { orderBy: { sortOrder: "asc" } } },
  });
  if (!blog || !blog.isPublished) throw new NotFoundError("Blog post not found.");
  return blog;
}

export async function getFirstPublishedBlog() {
  const blog = await prisma.blog.findFirst({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
    include: { faqs: { orderBy: { sortOrder: "asc" } } },
  });
  if (!blog) throw new NotFoundError("No published blog posts.");
  return blog;
}
