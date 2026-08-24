"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import { sliderFormSchema } from "@/lib/validators/slider";
import { createSlider, updateSlider, deleteSlider, reorderSliders } from "@/lib/services/adminSliders";

function formToSliderInput(form: FormData) {
  return sliderFormSchema.parse({
    titleEn: form.get("titleEn"),
    titleAr: form.get("titleAr"),
    titleI18n: form.get("titleI18n"),
    descriptionEn: form.get("descriptionEn"),
    descriptionAr: form.get("descriptionAr"),
    descriptionI18n: form.get("descriptionI18n"),
    objectPosition: form.get("objectPosition") || "center",
    sortOrder: form.get("sortOrder") || 0,
  });
}

type ActionState = { success?: boolean; error?: string } | undefined;

function readImageInputs(form: FormData) {
  const imageFile = form.get("image");
  const imageUrl = form.get("imageUrl");
  return {
    file: imageFile instanceof File && imageFile.size > 0 ? imageFile : null,
    url: typeof imageUrl === "string" && imageUrl.trim() ? imageUrl.trim() : null,
  };
}

export async function createSliderAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  let sliderId: number;
  try {
    const input = formToSliderInput(form);
    const { file, url } = readImageInputs(form);
    const slider = await createSlider(input, file, url);
    sliderId = slider.id;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save. Please try again." };
  }
  revalidatePath("/admin/sliders");
  revalidatePath("/");
  redirect(`/admin/sliders/${sliderId}`);
}

export async function updateSliderAction(sliderId: number, _prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  try {
    const input = formToSliderInput(form);
    const { file, url } = readImageInputs(form);
    await updateSlider(sliderId, input, file, url);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save. Please try again." };
  }
  revalidatePath("/admin/sliders");
  revalidatePath(`/admin/sliders/${sliderId}`);
  revalidatePath("/");
  return { success: true };
}

export async function deleteSliderAction(sliderId: number) {
  await requireAdmin("manage_website");
  await deleteSlider(sliderId);
  revalidatePath("/admin/sliders");
  revalidatePath("/");
  redirect("/admin/sliders");
}

export async function reorderSlidersAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  try {
    const idsRaw = form.get("ids");
    const ids = JSON.parse(typeof idsRaw === "string" ? idsRaw : "[]") as number[];
    await reorderSliders(ids);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to reorder." };
  }
  revalidatePath("/admin/sliders");
  revalidatePath("/");
  return { success: true };
}
