import "server-only";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";
import type { BlogFormInput } from "@/lib/validators/blog";

async function uniqueSlug(title: string, excludeId?: number): Promise<string> {
  const base = slugify(title) || "post";
  let slug = base;
  let suffix = 2;
  while (
    await prisma.blog.findFirst({ where: { slug, ...(excludeId ? { id: { not: excludeId } } : {}) } })
  ) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  return slug;
}

export async function listBlogs() {
  return prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getBlogForAdmin(id: number) {
  const blog = await prisma.blog.findUnique({
    where: { id },
    include: { faqs: { orderBy: { sortOrder: "asc" } } },
  });
  if (!blog) throw new NotFoundError("Blog post not found.");
  return blog;
}

export async function createBlog(input: BlogFormInput, imageFile: File | null, imageUrl: string | null) {
  const slug = await uniqueSlug(input.titleEn);
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/blogs") : imageUrl;
  return prisma.blog.create({
    data: { ...input, slug, image, publishedAt: input.isPublished ? new Date() : null },
  });
}

export async function updateBlog(
  id: number,
  input: BlogFormInput,
  imageFile: File | null,
  imageUrl: string | null
) {
  const existing = await prisma.blog.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("Blog post not found.");

  const slug = existing.titleEn === input.titleEn ? existing.slug : await uniqueSlug(input.titleEn, id);

  // Images can be reused across entities via the media library picker, so an
  // old image is never deleted here — it may still be referenced elsewhere.
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/blogs") : imageUrl ?? existing.image;

  const publishedAt = input.isPublished ? existing.publishedAt ?? new Date() : null;

  return prisma.blog.update({ where: { id }, data: { ...input, slug, image, publishedAt } });
}

export async function deleteBlog(id: number) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) throw new NotFoundError("Blog post not found.");
  await prisma.blog.delete({ where: { id } });
}
