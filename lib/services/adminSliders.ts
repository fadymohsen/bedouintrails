import "server-only";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";
import type { SliderFormInput } from "@/lib/validators/slider";

export async function listSliders() {
  return prisma.slider.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getSlider(id: number) {
  const slider = await prisma.slider.findUnique({ where: { id } });
  if (!slider) throw new NotFoundError("Slider not found.");
  return slider;
}

export async function createSlider(input: SliderFormInput, imageFile: File | null, imageUrl: string | null) {
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/sliders") : imageUrl;
  if (!image) throw new Error("Image is required.");
  return prisma.slider.create({ data: { ...input, image } });
}

export async function updateSlider(
  id: number,
  input: SliderFormInput,
  imageFile: File | null,
  imageUrl: string | null
) {
  const existing = await prisma.slider.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("Slider not found.");

  // Images can be reused across entities via the media library picker, so an
  // old image is never deleted here — it may still be referenced elsewhere.
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/sliders") : imageUrl ?? existing.image;

  return prisma.slider.update({ where: { id }, data: { ...input, image } });
}

export async function deleteSlider(id: number) {
  const slider = await prisma.slider.findUnique({ where: { id } });
  if (!slider) throw new NotFoundError("Slider not found.");
  await prisma.slider.delete({ where: { id } });
}
