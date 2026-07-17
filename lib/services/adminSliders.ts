import "server-only";
import { prisma } from "@/lib/prisma";
import { uploadImage, deleteImage } from "@/lib/blob";
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

export async function createSlider(input: SliderFormInput, imageFile: File) {
  const image = await uploadImage(imageFile, "uploads/images/sliders");
  return prisma.slider.create({ data: { ...input, image } });
}

export async function updateSlider(id: number, input: SliderFormInput, imageFile: File | null) {
  const existing = await prisma.slider.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("Slider not found.");

  let image = existing.image;
  if (imageFile) {
    image = await uploadImage(imageFile, "uploads/images/sliders");
    await deleteImage(existing.image);
  }

  return prisma.slider.update({ where: { id }, data: { ...input, image } });
}

export async function deleteSlider(id: number) {
  const slider = await prisma.slider.findUnique({ where: { id } });
  if (!slider) throw new NotFoundError("Slider not found.");
  await deleteImage(slider.image);
  await prisma.slider.delete({ where: { id } });
}
