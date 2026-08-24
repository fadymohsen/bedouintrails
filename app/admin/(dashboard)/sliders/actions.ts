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

const DEFAULT_SLIDES = [
  {
    image: "/img/hero-camel-safari.jpg",
    titleEn: "Camel Safari Across the Desert",
    titleAr: "رحلة السفاري بالجمال",
    descriptionEn: "Experience Egypt's vast desert landscapes the authentic Bedouin way, on the back of a camel",
    descriptionAr: "اركب الجمال على الطريقة البدوية الأصيلة واستمتع بمناظر الصحراء الغربية الخلابة",
    objectPosition: "center",
    sortOrder: 0,
  },
  {
    image: "/img/hero-whale-valley.jpg",
    titleEn: "Valley of the Whales — A Desert UNESCO Wonder",
    titleAr: "وادي الحيتان — جوهرة الصحراء الغربية",
    descriptionEn: "Walk through 40 million years of prehistoric history in Egypt's breathtaking UNESCO World Heritage Site",
    descriptionAr: "استكشف بقايا حيتان عمرها ٤٠ مليون سنة وسط الصحراء المصرية البكر في موقع التراث العالمي",
    objectPosition: "center",
    sortOrder: 1,
  },
  {
    image: "/img/hero-white-desert-group.jpg",
    titleEn: "White Desert Group Adventures",
    titleAr: "جولات الصحراء البيضاء الجماعية",
    descriptionEn: "Join fellow adventurers from around the world and create unforgettable memories among the iconic chalk formations",
    descriptionAr: "انضم إلى مغامرين من كل أنحاء العالم وأنشئ ذكريات لا تُنسى وسط التكوينات الجيرية المذهلة",
    objectPosition: "center",
    sortOrder: 2,
  },
  {
    image: "/img/hero-wadi-rayan-waterfall.jpg",
    titleEn: "Wadi El Rayan Waterfalls — Egypt's Hidden Oasis",
    titleAr: "شلالات وادي الريان — واحة خفية",
    descriptionEn: "Discover Egypt's only natural waterfalls — a stunning green oasis tucked in the heart of the Western Desert",
    descriptionAr: "اكتشف الشلالات الطبيعية الوحيدة في مصر — واحة خضراء مذهلة في قلب الصحراء الغربية",
    objectPosition: "center",
    sortOrder: 3,
  },
  {
    image: "/img/hero-white-desert-trek.jpg",
    titleEn: "Trekking Through the White Desert",
    titleAr: "التنزه في الصحراء البيضاء",
    descriptionEn: "Trek through an otherworldly landscape of sculpted chalk pillars and golden dunes in Egypt's White Desert",
    descriptionAr: "اشق طريقك بين تماثيل الطباشير البيضاء الساحرة في واحدة من أجمل مناطق الصحراء في العالم",
    objectPosition: "center",
    sortOrder: 4,
  },
  {
    image: "/img/hero-jara-cave.jpg",
    titleEn: "Jara Cave — Secrets Beneath the Desert",
    titleAr: "كهف جارا — أسرار الأعماق",
    descriptionEn: "Step inside Egypt's largest cave and marvel at a candlelit world of ancient stalactites and stalagmites",
    descriptionAr: "ادخل إلى أكبر كهف طبيعي في مصر وانبهر بعالم من الصواعد والنوازل على ضوء الشموع",
    objectPosition: "center",
    sortOrder: 5,
  },
  {
    image: "/img/hero-blue-lagoon.jpg",
    titleEn: "Crystal Blue Desert Lagoons",
    titleAr: "البحيرات الزرقاء الكريستالية",
    descriptionEn: "Swim in pristine turquoise waters hidden deep within Egypt's Western Desert — an unforgettable escape",
    descriptionAr: "اسبح في مياه فيروزية نقية مختبئة وسط صحراء مصر الغربية — تجربة لا تصدق",
    objectPosition: "center",
    sortOrder: 6,
  },
];

export async function seedDefaultSlidersAction(): Promise<void> {
  await requireAdmin("manage_website");
  const { prisma } = await import("@/lib/prisma");
  await prisma.slider.createMany({ data: DEFAULT_SLIDES });
  revalidatePath("/admin/sliders");
  revalidatePath("/");
  redirect("/admin/sliders");
}
