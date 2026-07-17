import { PrismaClient } from "@prisma/client";
import fs from "node:fs";

const prisma = new PrismaClient();
const DIR = "C:/Users/MANDO/AppData/Local/Temp/prod-data";

function readJson(name) {
  return JSON.parse(fs.readFileSync(`${DIR}/${name}`, "utf8"));
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w؀-ۿ-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function uniqueSlug(model, base) {
  let slug = base || "item";
  let suffix = 2;
  while (await model.findFirst({ where: { slug } })) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  return slug;
}

// --- Sliders ---
const home = readJson("home.json");
for (const s of home.data.sliders) {
  await prisma.slider.create({
    data: { image: s.image, titleEn: s.title, descriptionEn: s.description },
  });
}
console.log(`Migrated ${home.data.sliders.length} sliders.`);

// --- Traps (with days/cards/gallery) ---
const trapIds = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 3, 2];
for (const id of trapIds) {
  const res = readJson(`trap-${id}.json`);
  const t = res.data;
  const slug = await uniqueSlug(prisma.trap, slugify(t.name));

  const trap = await prisma.trap.create({
    data: {
      nameEn: t.name,
      slug,
      interfaceFromEn: t.interfaceFrom,
      interfaceToEn: t.interfaceTo,
      duration: t.duration,
      countPeople: t.countPeople ?? 0,
      status: t.status === "active" ? "active" : "inactive",
      metaTitle: t.meta_title,
      metaDescription: t.meta_description,
    },
  });

  for (const g of t.galleries ?? []) {
    await prisma.gallery.create({ data: { trapId: trap.id, image: g.image } });
  }

  for (const day of t.trapDays ?? []) {
    const trapDay = await prisma.trapDay.create({
      data: { trapId: trap.id, dayNumber: day.day_number },
    });
    for (const card of day.cards ?? []) {
      await prisma.trapDayCard.create({
        data: {
          trapDayId: trapDay.id,
          titleEn: card.title,
          descriptionEn: card.description,
          image: card.image,
        },
      });
    }
  }

  console.log(`Migrated trap #${trap.id}: ${slug}`);
}

// --- Articles ---
const articles = readJson("articles.json");
for (const key of Object.keys(articles.data)) {
  const a = articles.data[key];
  const slug = await uniqueSlug(prisma.article, slugify(a.title));
  await prisma.article.create({
    data: {
      titleEn: a.title,
      descriptionEn: a.description,
      slug,
      image: a.image,
      metaTitle: a.meta_title,
      metaDescription: a.meta_description,
    },
  });
}
console.log(`Migrated ${Object.keys(articles.data).length} articles.`);

// --- About Us ---
const aboutUs = readJson("about-us.json");
for (const a of aboutUs.data) {
  await prisma.aboutUs.create({
    data: { titleEn: a.title, descriptionEn: a.description, image: a.image },
  });
}
console.log(`Migrated ${aboutUs.data.length} about-us entries.`);

// --- Common Questions ---
const faqs = readJson("common-questions.json");
for (const f of faqs.data) {
  await prisma.commonQuestion.create({
    data: { questionEn: f.question, answerEn: f.answer },
  });
}
console.log(`Migrated ${faqs.data.length} common questions.`);

await prisma.$disconnect();
