import "server-only";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";
import type { ArticleFormInput } from "@/lib/validators/article";

async function uniqueSlug(name: string, excludeId?: number): Promise<string> {
  const base = slugify(name) || "article";
  let slug = base;
  let suffix = 2;
  while (
    await prisma.article.findFirst({
      where: { slug, ...(excludeId ? { id: { not: excludeId } } : {}) },
    })
  ) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  return slug;
}

export async function listArticles() {
  return prisma.article.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getArticle(id: number) {
  const article = await prisma.article.findUnique({ where: { id } });
  if (!article) throw new NotFoundError("Article not found.");
  return article;
}

export async function createArticle(input: ArticleFormInput, imageFile: File | null, imageUrl: string | null) {
  const slug = await uniqueSlug(input.titleEn);
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/articles") : imageUrl;
  return prisma.article.create({ data: { ...input, slug, image } });
}

export async function updateArticle(
  id: number,
  input: ArticleFormInput,
  imageFile: File | null,
  imageUrl: string | null
) {
  const existing = await prisma.article.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("Article not found.");

  const slug = existing.titleEn === input.titleEn ? existing.slug : await uniqueSlug(input.titleEn, id);

  // Images can be reused across entities via the media library picker, so an
  // old image is never deleted here — it may still be referenced elsewhere.
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/articles") : imageUrl ?? existing.image;

  return prisma.article.update({ where: { id }, data: { ...input, slug, image } });
}

export async function deleteArticle(id: number) {
  const article = await prisma.article.findUnique({ where: { id } });
  if (!article) throw new NotFoundError("Article not found.");
  await prisma.article.delete({ where: { id } });
}
