import "server-only";
import { prisma } from "@/lib/prisma";
import { deleteImage, uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";

export type TrapDayCardInput = {
  titleEn: string;
  titleAr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
};

export async function createTrapDayCard(trapDayId: number, input: TrapDayCardInput, imageFile: File | null) {
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/transitDayCards") : null;
  return prisma.trapDayCard.create({ data: { trapDayId, ...input, image } });
}

export async function updateTrapDayCard(cardId: number, input: TrapDayCardInput, imageFile: File | null) {
  const card = await prisma.trapDayCard.findUnique({ where: { id: cardId } });
  if (!card) throw new NotFoundError("Card not found.");

  let image = card.image;
  if (imageFile) {
    image = await uploadImage(imageFile, "uploads/images/transitDayCards");
    await deleteImage(card.image);
  }

  return prisma.trapDayCard.update({ where: { id: cardId }, data: { ...input, image } });
}

export async function deleteTrapDayCard(cardId: number) {
  const card = await prisma.trapDayCard.findUnique({ where: { id: cardId } });
  if (!card) throw new NotFoundError("Card not found.");
  await deleteImage(card.image);
  await prisma.trapDayCard.delete({ where: { id: cardId } });
}
