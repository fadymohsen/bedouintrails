import "server-only";
import { prisma } from "@/lib/prisma";
import { uploadImage, deleteImage } from "@/lib/blob";
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

export async function createAboutUs(input: AboutUsFormInput, imageFile: File | null) {
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/about-us") : null;
  return prisma.aboutUs.create({ data: { ...input, image } });
}

export async function updateAboutUs(id: number, input: AboutUsFormInput, imageFile: File | null) {
  const existing = await prisma.aboutUs.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("About Us entry not found.");

  let image = existing.image;
  if (imageFile) {
    image = await uploadImage(imageFile, "uploads/images/about-us");
    await deleteImage(existing.image);
  }

  return prisma.aboutUs.update({ where: { id }, data: { ...input, image } });
}

export async function deleteAboutUs(id: number) {
  const aboutUs = await prisma.aboutUs.findUnique({ where: { id } });
  if (!aboutUs) throw new NotFoundError("About Us entry not found.");
  await deleteImage(aboutUs.image);
  await prisma.aboutUs.delete({ where: { id } });
}
