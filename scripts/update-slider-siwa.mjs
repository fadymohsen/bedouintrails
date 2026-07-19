import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Replacements: "Siwa Oasis" → "the Western Desert" in all languages
const replacements = {
  ar: [
    ["واحة سيوة", "الصحراء الغربية"],
    ["في سيوة", "في الصحراء الغربية"],
  ],
  en: [
    ["Siwa Oasis", "the Western Desert"],
    ["in Siwa", "in the Western Desert"],
  ],
  de: [
    ["Oase Siwa", "der Westlichen Wüste"],
    ["Siwa-Oase", "Westliche Wüste"],
    ["Siwa Oasis", "the Western Desert"],
    ["in Siwa", "in der Westlichen Wüste"],
  ],
  es: [
    ["Oasis de Siwa", "el Desierto Occidental"],
    ["en Siwa", "en el Desierto Occidental"],
  ],
  fr: [
    ["l'oasis de Siwa", "le Désert Occidental"],
    ["oasis de Siwa", "Désert Occidental"],
    ["à Siwa", "dans le Désert Occidental"],
  ],
  it: [
    ["Oasi di Siwa", "il Deserto Occidentale"],
    ["a Siwa", "nel Deserto Occidentale"],
  ],
  nl: [
    ["Siwa-oase", "de Westelijke Woestijn"],
    ["in Siwa", "in de Westelijke Woestijn"],
  ],
  pt: [
    ["Oásis de Siwa", "o Deserto Ocidental"],
    ["em Siwa", "no Deserto Ocidental"],
  ],
  zh: [
    ["锡瓦绿洲", "西部沙漠"],
    ["在锡瓦", "在西部沙漠"],
    ["Siwa Oasis", "Western Desert"],
  ],
};

function applyReplacements(text, locale) {
  if (!text) return text;
  let result = text;
  const pairs = replacements[locale] || [];
  for (const [from, to] of pairs) {
    result = result.replaceAll(from, to);
  }
  return result;
}

async function main() {
  const sliders = await prisma.slider.findMany();
  console.log(`Found ${sliders.length} sliders\n`);

  for (const slider of sliders) {
    const hasAr = slider.descriptionAr?.includes("سيوة");
    const hasEn = slider.descriptionEn?.includes("Siwa");
    const hasI18n = slider.descriptionI18n && JSON.stringify(slider.descriptionI18n).includes("Siwa") || JSON.stringify(slider.descriptionI18n || "").includes("سيوة");

    if (!hasAr && !hasEn && !hasI18n) continue;

    console.log(`Updating slider #${slider.id}: "${slider.titleEn}"`);

    const newDescAr = applyReplacements(slider.descriptionAr, "ar");
    const newDescEn = applyReplacements(slider.descriptionEn, "en");

    let newDescI18n = slider.descriptionI18n;
    if (newDescI18n && typeof newDescI18n === "object") {
      newDescI18n = { ...newDescI18n };
      for (const [locale, text] of Object.entries(newDescI18n)) {
        newDescI18n[locale] = applyReplacements(text, locale);
      }
    }

    // Also check title fields
    const newTitleAr = applyReplacements(slider.titleAr, "ar");
    const newTitleEn = applyReplacements(slider.titleEn, "en");
    let newTitleI18n = slider.titleI18n;
    if (newTitleI18n && typeof newTitleI18n === "object") {
      newTitleI18n = { ...newTitleI18n };
      for (const [locale, text] of Object.entries(newTitleI18n)) {
        newTitleI18n[locale] = applyReplacements(text, locale);
      }
    }

    await prisma.slider.update({
      where: { id: slider.id },
      data: {
        descriptionAr: newDescAr,
        descriptionEn: newDescEn,
        descriptionI18n: newDescI18n,
        titleAr: newTitleAr,
        titleEn: newTitleEn,
        titleI18n: newTitleI18n,
      },
    });

    console.log("  AR:", newDescAr?.slice(0, 80) + "...");
    console.log("  EN:", newDescEn?.slice(0, 80) + "...");
    if (newDescI18n) {
      for (const [locale, text] of Object.entries(newDescI18n)) {
        console.log(`  ${locale.toUpperCase()}:`, String(text).slice(0, 80) + "...");
      }
    }
    console.log("");
  }

  console.log("Done!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
