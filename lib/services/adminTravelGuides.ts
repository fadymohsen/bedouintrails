import "server-only";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";
import type { TravelGuideFormInput } from "@/lib/validators/travel-guide";

export async function listTravelGuides() {
  return prisma.travelGuide.findMany({ orderBy: { sortOrder: "asc" } });
}

export async function getTravelGuide(id: number) {
  const guide = await prisma.travelGuide.findUnique({ where: { id } });
  if (!guide) throw new NotFoundError("Travel guide not found.");
  return guide;
}

export async function getTravelGuideByPath(path: string) {
  return prisma.travelGuide.findUnique({ where: { path } });
}

export async function listVisibleTravelGuides() {
  return prisma.travelGuide.findMany({
    where: { visible: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function updateTravelGuide(
  id: number,
  input: TravelGuideFormInput,
  imageFile: File | null,
  imageUrl: string | null,
  heroImageFile: File | null,
  heroImageUrl: string | null,
) {
  const existing = await prisma.travelGuide.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("Travel guide not found.");

  const image = imageFile
    ? await uploadImage(imageFile, "uploads/images/guides")
    : imageUrl ?? existing.image;

  const heroImage = heroImageFile
    ? await uploadImage(heroImageFile, "uploads/images/guides")
    : heroImageUrl ?? existing.heroImage;

  return prisma.travelGuide.update({
    where: { id },
    data: { ...input, image, heroImage },
  });
}
