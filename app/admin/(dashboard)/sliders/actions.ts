"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import { sliderFormSchema } from "@/lib/validators/slider";
import { createSlider, updateSlider, deleteSlider } from "@/lib/services/adminSliders";

function formToSliderInput(form: FormData) {
  return sliderFormSchema.parse({
    titleEn: form.get("titleEn") || undefined,
    titleAr: form.get("titleAr") || undefined,
    titleI18n: form.get("titleI18n"),
    descriptionEn: form.get("descriptionEn") || undefined,
    descriptionAr: form.get("descriptionAr") || undefined,
    descriptionI18n: form.get("descriptionI18n"),
  });
}

type ActionState = { success?: boolean; error?: string } | undefined;

export async function createSliderAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  const input = formToSliderInput(form);
  const imageFile = form.get("image");
  if (!(imageFile instanceof File) || imageFile.size === 0) {
    throw new Error("Image is required.");
  }
  const slider = await createSlider(input, imageFile);
  revalidatePath("/admin/sliders");
  redirect(`/admin/sliders/${slider.id}`);
}

export async function updateSliderAction(sliderId: number, _prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  const input = formToSliderInput(form);
  const imageFile = form.get("image");
  await updateSlider(sliderId, input, imageFile instanceof File && imageFile.size > 0 ? imageFile : null);
  revalidatePath("/admin/sliders");
  revalidatePath(`/admin/sliders/${sliderId}`);
  return { success: true };
}

export async function deleteSliderAction(sliderId: number) {
  await requireAdmin("manage_website");
  await deleteSlider(sliderId);
  revalidatePath("/admin/sliders");
  redirect("/admin/sliders");
}
