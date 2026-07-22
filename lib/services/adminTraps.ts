import "server-only";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";
import type { TrapFormInput } from "@/lib/validators/trap";

async function uniqueSlug(name: string, excludeId?: number): Promise<string> {
  const base = slugify(name) || "trip";
  let slug = base;
  let suffix = 2;
  while (
    await prisma.trap.findFirst({
      where: { slug, ...(excludeId ? { id: { not: excludeId } } : {}) },
    })
  ) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  return slug;
}

export async function listAllTraps() {
  return prisma.trap.findMany({
    include: { galleries: { take: 1, orderBy: { id: "asc" } } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getTrapForAdmin(id: number) {
  const trap = await prisma.trap.findUnique({
    where: { id },
    include: {
      galleries: true,
      trapDays: { include: { cards: true }, orderBy: { dayNumber: "asc" } },
    },
  });
  if (!trap) throw new NotFoundError("Trip not found.");
  return trap;
}

export async function createTrap(input: TrapFormInput) {
  const slug = await uniqueSlug(input.nameEn);
  return prisma.trap.create({ data: { ...input, slug } });
}

export async function updateTrap(id: number, input: TrapFormInput) {
  const existing = await prisma.trap.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("Trip not found.");

  const slug = existing.nameEn === input.nameEn ? existing.slug : await uniqueSlug(input.nameEn, id);
  return prisma.trap.update({ where: { id }, data: { ...input, slug } });
}

export async function deleteTrap(id: number) {
  const trap = await prisma.trap.findUnique({ where: { id } });
  if (!trap) throw new NotFoundError("Trip not found.");

  // Images can be reused across entities via the media library picker, so
  // we never delete blobs on entity deletion — they may be referenced elsewhere.
  await prisma.trap.delete({ where: { id } });
}

export async function addGalleryImages(trapId: number, files: File[]) {
  const urls = await Promise.all(files.map((f) => uploadImage(f, "uploads/images/traps")));
  await prisma.gallery.createMany({ data: urls.map((image) => ({ trapId, image })) });
}

export async function addGalleryImageUrls(trapId: number, urls: string[]) {
  await prisma.gallery.createMany({ data: urls.map((image) => ({ trapId, image })) });
}

export async function deleteGalleryImage(galleryId: number) {
  const gallery = await prisma.gallery.findUnique({ where: { id: galleryId } });
  if (!gallery) throw new NotFoundError("Image not found.");
  await prisma.gallery.delete({ where: { id: galleryId } });
}
