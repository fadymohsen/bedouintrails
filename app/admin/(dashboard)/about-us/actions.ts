"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import { aboutUsFormSchema } from "@/lib/validators/aboutUs";
import { createAboutUs, updateAboutUs, deleteAboutUs } from "@/lib/services/adminAboutUs";

function formToAboutUsInput(form: FormData) {
  return aboutUsFormSchema.parse({
    titleEn: form.get("titleEn"),
    titleAr: form.get("titleAr"),
    titleI18n: form.get("titleI18n"),
    descriptionEn: form.get("descriptionEn"),
    descriptionAr: form.get("descriptionAr"),
    descriptionI18n: form.get("descriptionI18n"),
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

export async function createAboutUsAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  let aboutUsId: number;
  try {
    const input = formToAboutUsInput(form);
    const { file, url } = readImageInputs(form);
    const aboutUs = await createAboutUs(input, file, url);
    aboutUsId = aboutUs.id;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save. Please try again." };
  }
  revalidatePath("/admin/about-us");
  redirect(`/admin/about-us/${aboutUsId}`);
}

export async function updateAboutUsAction(aboutUsId: number, _prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  try {
    const input = formToAboutUsInput(form);
    const { file, url } = readImageInputs(form);
    await updateAboutUs(aboutUsId, input, file, url);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save. Please try again." };
  }
  revalidatePath("/admin/about-us");
  revalidatePath(`/admin/about-us/${aboutUsId}`);
  return { success: true };
}

export async function deleteAboutUsAction(aboutUsId: number) {
  await requireAdmin("manage_website");
  await deleteAboutUs(aboutUsId);
  revalidatePath("/admin/about-us");
  redirect("/admin/about-us");
}
