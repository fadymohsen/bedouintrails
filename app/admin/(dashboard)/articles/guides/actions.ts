"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/session";
import { travelGuideFormSchema } from "@/lib/validators/travel-guide";
import { updateTravelGuide } from "@/lib/services/adminTravelGuides";

type ActionState = { success?: boolean; error?: string } | undefined;

function readImageInputs(form: FormData, fileKey: string, urlKey: string) {
  const file = form.get(fileKey);
  const url = form.get(urlKey);
  return {
    file: file instanceof File && file.size > 0 ? file : null,
    url: typeof url === "string" && url.trim() ? url.trim() : null,
  };
}

export async function updateTravelGuideAction(
  guideId: number,
  _prevState: unknown,
  form: FormData,
): Promise<ActionState> {
  await requireAdmin("manage_website");
  try {
    const input = travelGuideFormSchema.parse({
      heroPosition: form.get("heroPosition") || undefined,
      sortOrder: form.get("sortOrder"),
      visible: form.get("visible") === "on",
    });
    const img = readImageInputs(form, "image", "imageUrl");
    const hero = readImageInputs(form, "heroImage", "heroImageUrl");
    await updateTravelGuide(guideId, input, img.file, img.url, hero.file, hero.url);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save." };
  }
  revalidatePath("/admin/articles/guides");
  revalidatePath(`/admin/articles/guides/${guideId}`);
  // Revalidate public pages that consume guide data
  revalidatePath("/[locale]/(public)/articles");
  return { success: true };
}
