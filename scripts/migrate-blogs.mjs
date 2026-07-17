import { PrismaClient } from "@prisma/client";
import fs from "node:fs";

const prisma = new PrismaClient();

const blogs = JSON.parse(fs.readFileSync("C:/Users/MANDO/AppData/Local/Temp/blogs.json", "utf8"));
const blogFaqs = JSON.parse(fs.readFileSync("C:/Users/MANDO/AppData/Local/Temp/blog_faqs.json", "utf8"));

function toBool(v) {
  return v === 1 || v === "1" || v === true;
}

function toDate(v) {
  return v ? new Date(v) : null;
}

function parseJsonField(v) {
  if (!v) return null;
  try {
    return JSON.parse(v);
  } catch {
    return null;
  }
}

const idMap = new Map();

for (const b of blogs) {
  const existing = await prisma.blog.findUnique({ where: { slug: b.slug } });
  if (existing) {
    console.log(`Skip existing blog: ${b.slug}`);
    idMap.set(b.id, existing.id);
    continue;
  }

  const created = await prisma.blog.create({
    data: {
      slug: b.slug,
      titleEn: b.title_en,
      titleAr: b.title_ar,
      contentEn: b.content_en,
      contentAr: b.content_ar,
      excerptEn: b.excerpt_en,
      excerptAr: b.excerpt_ar,
      metaTitleEn: b.meta_title_en,
      metaTitleAr: b.meta_title_ar,
      metaDescriptionEn: b.meta_description_en,
      metaDescriptionAr: b.meta_description_ar,
      image: b.image,
      author: b.author ?? "Bedouin Trails Team",
      category: b.category,
      tags: parseJsonField(b.tags),
      primaryKeywords: parseJsonField(b.primary_keywords),
      secondaryKeywords: parseJsonField(b.secondary_keywords),
      readingTime: b.reading_time,
      isPublished: toBool(b.is_published),
      publishedAt: toDate(b.published_at),
    },
  });
  idMap.set(b.id, created.id);
  console.log(`Created blog #${created.id}: ${created.slug}`);
}

for (const f of blogFaqs) {
  const blogId = idMap.get(f.blog_id);
  if (!blogId) {
    console.log(`Skip FAQ for unknown blog_id ${f.blog_id}`);
    continue;
  }
  await prisma.blogFaq.create({
    data: {
      blogId,
      questionEn: f.question_en,
      questionAr: f.question_ar,
      answerEn: f.answer_en,
      answerAr: f.answer_ar,
      sortOrder: f.sort_order ?? 0,
    },
  });
}

console.log(`Migrated ${blogs.length} blogs and ${blogFaqs.length} FAQs.`);
await prisma.$disconnect();
