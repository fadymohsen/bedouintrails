import "server-only";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/blob";
import { NotFoundError } from "./errors";

export type TrapDayCardInput = {
  titleEn: string;
  titleAr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
};

export async function createTrapDayCard(
  trapDayId: number,
  input: TrapDayCardInput,
  imageFile: File | null,
  imageUrl: string | null
) {
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/transitDayCards") : imageUrl;
  return prisma.trapDayCard.create({ data: { trapDayId, ...input, image } });
}

export async function updateTrapDayCard(
  cardId: number,
  input: TrapDayCardInput,
  imageFile: File | null,
  imageUrl: string | null
) {
  const card = await prisma.trapDayCard.findUnique({ where: { id: cardId } });
  if (!card) throw new NotFoundError("Card not found.");

  // Images can be reused across entities via the media library picker, so an
  // old image is never deleted here — it may still be referenced elsewhere.
  const image = imageFile ? await uploadImage(imageFile, "uploads/images/transitDayCards") : imageUrl ?? card.image;

  return prisma.trapDayCard.update({ where: { id: cardId }, data: { ...input, image } });
}

export async function deleteTrapDayCard(cardId: number) {
  const card = await prisma.trapDayCard.findUnique({ where: { id: cardId } });
  if (!card) throw new NotFoundError("Card not found.");
  await prisma.trapDayCard.delete({ where: { id: cardId } });
}
