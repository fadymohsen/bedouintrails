import "server-only";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";
import type { AboutUsFormInput } from "@/lib/validators/aboutUs";

export async function listAboutUs() {
  return prisma.aboutUs.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getAboutUs(id: number) {
  const aboutUs = await prisma.aboutUs.findUnique({ where: { id } });
  if (!aboutUs) throw new NotFoundError("About Us entry not found.");
  return aboutUs;
}

export async function createAboutUs(input: AboutUsFormInput, imageFile: File | null, imageUrl: string | null) {
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/about-us") : imageUrl;
  return prisma.aboutUs.create({ data: { ...input, image } });
}

export async function updateAboutUs(
  id: number,
  input: AboutUsFormInput,
  imageFile: File | null,
  imageUrl: string | null
) {
  const existing = await prisma.aboutUs.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("About Us entry not found.");

  // Images can be reused across entities via the media library picker, so an
  // old image is never deleted here — it may still be referenced elsewhere.
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/about-us") : imageUrl ?? existing.image;

  return prisma.aboutUs.update({ where: { id }, data: { ...input, image } });
}

export async function deleteAboutUs(id: number) {
  const aboutUs = await prisma.aboutUs.findUnique({ where: { id } });
  if (!aboutUs) throw new NotFoundError("About Us entry not found.");
  await prisma.aboutUs.delete({ where: { id } });
}
