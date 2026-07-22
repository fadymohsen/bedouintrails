"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import { trapFormSchema, trapDayCardFormSchema } from "@/lib/validators/trap";
import {
  createTrap,
  updateTrap,
  deleteTrap,
  addGalleryImages,
  addGalleryImageUrls,
  deleteGalleryImage,
} from "@/lib/services/adminTraps";
import { createTrapDay, deleteTrapDay } from "@/lib/services/trapDays";
import { createTrapDayCard, updateTrapDayCard, deleteTrapDayCard } from "@/lib/services/trapDayCards";

function formToTrapInput(form: FormData) {
  return trapFormSchema.parse({
    nameEn: form.get("nameEn"),
    nameAr: form.get("nameAr"),
    nameI18n: form.get("nameI18n"),
    interfaceFromEn: form.get("interfaceFromEn"),
    interfaceFromAr: form.get("interfaceFromAr"),
    interfaceFromI18n: form.get("interfaceFromI18n"),
    interfaceToEn: form.get("interfaceToEn"),
    interfaceToAr: form.get("interfaceToAr"),
    interfaceToI18n: form.get("interfaceToI18n"),
    descriptionEn: form.get("descriptionEn") || undefined,
    descriptionAr: form.get("descriptionAr") || undefined,
    descriptionI18n: form.get("descriptionI18n"),
    duration: form.get("duration") || 0,
    status: form.get("status") || "active",
    metaTitle: form.get("metaTitle") || undefined,
    metaDescription: form.get("metaDescription") || undefined,
  });
}

type ActionState = { success?: boolean; error?: string } | undefined;

export async function createTrapAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_trips");
  const input = formToTrapInput(form);
  const trap = await createTrap(input);
  revalidatePath("/admin/trips");
  redirect(`/admin/trips/${trap.id}`);
}

export async function updateTrapAction(tripId: number, _prevState: unknown, form: FormData) {
  await requireAdmin("manage_trips");
  const input = formToTrapInput(form);
  await updateTrap(tripId, input);
  revalidatePath("/admin/trips");
  revalidatePath(`/admin/trips/${tripId}`);
  return { success: true };
}

export async function deleteTrapAction(tripId: number) {
  await requireAdmin("manage_trips");
  await deleteTrap(tripId);
  revalidatePath("/admin/trips");
  redirect("/admin/trips");
}

export async function addGalleryImagesAction(tripId: number, form: FormData) {
  await requireAdmin("manage_trips");
  const files = form.getAll("images").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > 0) await addGalleryImages(tripId, files);
  revalidatePath(`/admin/trips/${tripId}`);
}

export async function addGalleryImageUrlsAction(tripId: number, urls: string[]) {
  await requireAdmin("manage_trips");
  if (urls.length > 0) await addGalleryImageUrls(tripId, urls);
  revalidatePath(`/admin/trips/${tripId}`);
}

export async function deleteGalleryImageAction(tripId: number, galleryId: number) {
  await requireAdmin("manage_trips");
  await deleteGalleryImage(galleryId);
  revalidatePath(`/admin/trips/${tripId}`);
}

export async function addTrapDayAction(tripId: number) {
  await requireAdmin("manage_trips");
  await createTrapDay(tripId);
  revalidatePath(`/admin/trips/${tripId}`);
}

export async function deleteTrapDayAction(tripId: number, dayId: number) {
  await requireAdmin("manage_trips");
  await deleteTrapDay(dayId);
  revalidatePath(`/admin/trips/${tripId}`);
}

function readImageInputs(form: FormData) {
  const imageFile = form.get("image");
  const imageUrl = form.get("imageUrl");
  return {
    file: imageFile instanceof File && imageFile.size > 0 ? imageFile : null,
    url: typeof imageUrl === "string" && imageUrl.trim() ? imageUrl.trim() : null,
  };
}

export async function addTrapDayCardAction(tripId: number, dayId: number, form: FormData) {
  await requireAdmin("manage_trips");
  const input = trapDayCardFormSchema.parse({
    titleEn: form.get("titleEn"),
    titleAr: form.get("titleAr"),
    titleI18n: form.get("titleI18n"),
    descriptionEn: form.get("descriptionEn") || undefined,
    descriptionAr: form.get("descriptionAr") || undefined,
    descriptionI18n: form.get("descriptionI18n"),
  });
  const { file, url } = readImageInputs(form);
  await createTrapDayCard(dayId, input, file, url);
  revalidatePath(`/admin/trips/${tripId}`);
}

export async function updateTrapDayCardAction(tripId: number, cardId: number, form: FormData) {
  await requireAdmin("manage_trips");
  const input = trapDayCardFormSchema.parse({
    titleEn: form.get("titleEn"),
    titleAr: form.get("titleAr"),
    titleI18n: form.get("titleI18n"),
    descriptionEn: form.get("descriptionEn") || undefined,
    descriptionAr: form.get("descriptionAr") || undefined,
    descriptionI18n: form.get("descriptionI18n"),
  });
  const { file, url } = readImageInputs(form);
  await updateTrapDayCard(cardId, input, file, url);
  revalidatePath(`/admin/trips/${tripId}`);
}

export async function deleteTrapDayCardAction(tripId: number, cardId: number) {
  await requireAdmin("manage_trips");
  await deleteTrapDayCard(cardId);
  revalidatePath(`/admin/trips/${tripId}`);
}
