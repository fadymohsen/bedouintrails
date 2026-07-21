import "server-only";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import type { ParsedBlogFile } from "@/lib/blog-import/parse-markdown";

export type BlogImportResult = { blogId: number; created: boolean; warnings: string[] };

async function uniqueSlug(preferred: string): Promise<string> {
  const base = slugify(preferred) || "post";
  let slug = base;
  let suffix = 2;
  while (await prisma.blog.findFirst({ where: { slug } })) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  return slug;
}

function asRecord(value: unknown): Record<string, string> {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, string>) : {};
}

function mergeI18n(existing: unknown, entries: [string, string | undefined][]): Record<string, string> {
  const additions = Object.fromEntries(entries.filter((e): e is [string, string] => Boolean(e[1])));
  return { ...asRecord(existing), ...additions };
}

function wordCount(html: string): number {
  return html
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

// Merges any number of single-locale parsed files into one Blog row (plus
// its BlogFaq rows). Creating a brand-new post needs English and Arabic in
// the same batch — they're the two required, non-i18n columns everything
// else falls back to. Updating an existing post (matched by slug) can add
// just one more language at a time; everything else is left untouched.
export async function importBlogFromFiles(files: ParsedBlogFile[]): Promise<BlogImportResult> {
  if (files.length === 0) throw new Error("No files provided.");

  const slugsUsed = new Set(files.map((f) => f.slug));
  if (slugsUsed.size > 1) {
    throw new Error(
      `Uploaded files target different posts (${[...slugsUsed].join(", ")}). Upload one language set per post at a time.`
    );
  }
  const targetSlug = files[0].slug;
  const byLocale = new Map(files.map((f) => [f.locale, f]));
  const warnings: string[] = [];

  const faqCounts = new Set(files.map((f) => f.faqs.length));
  if (faqCounts.size > 1) {
    warnings.push(
      `FAQ counts differ across the uploaded languages (${[...faqCounts].join(", ")}) — questions are matched by position, so a missing one can misalign the rest.`
    );
  }

  const existing = await prisma.blog.findUnique({
    where: { slug: targetSlug },
    include: { faqs: { orderBy: { sortOrder: "asc" } } },
  });

  const en = byLocale.get("en");
  const ar = byLocale.get("ar");

  // titleEn/titleAr (and their content/excerpt/meta counterparts) are
  // required, non-nullable DB columns — a brand-new post can't be created
  // without something in both. Rather than blocking a single-file upload
  // that only has one language, borrow that language's content as a
  // placeholder for the other and flag it clearly instead of erroring out.
  let effectiveEn = en;
  let effectiveAr = ar;
  if (!existing) {
    if (!en && !ar) {
      effectiveEn = files[0];
      effectiveAr = files[0];
      warnings.push(
        `No English or Arabic content found — used "${files[0].locale}" as a placeholder for both. Upload English and Arabic files (same slug) later to replace them.`
      );
    } else if (!en) {
      effectiveEn = ar;
      warnings.push(
        "No English file provided — used the Arabic content as a placeholder for the required English fields. Upload an English file (same slug) later to replace it."
      );
    } else if (!ar) {
      effectiveAr = en;
      warnings.push(
        "No Arabic file provided — used the English content as a placeholder for the required Arabic fields. Upload an Arabic file (same slug) later to replace it."
      );
    }
  }

  const otherLocales = [...byLocale.keys()].filter((l) => l !== "en" && l !== "ar");

  const titleI18n = mergeI18n(existing?.titleI18n, otherLocales.map((l) => [l, byLocale.get(l)!.title]));
  const contentI18n = mergeI18n(existing?.contentI18n, otherLocales.map((l) => [l, byLocale.get(l)!.contentHtml]));
  const excerptI18n = mergeI18n(existing?.excerptI18n, otherLocales.map((l) => [l, byLocale.get(l)!.seoMeta]));
  const metaTitleI18n = mergeI18n(existing?.metaTitleI18n, otherLocales.map((l) => [l, byLocale.get(l)!.title]));
  const metaDescriptionI18n = mergeI18n(
    existing?.metaDescriptionI18n,
    otherLocales.map((l) => [l, byLocale.get(l)!.seoMeta])
  );

  // Updates only touch these when a real English file was uploaded (never a
  // borrowed placeholder); creates are fine falling back to whatever
  // English placeholder was resolved above, since the row needs *something*.
  const primaryKeywords = en ? [en.primaryKeyword].filter(Boolean) : undefined;
  const secondaryKeywords = en ? en.secondaryKeywords : undefined;
  const readingTime = en ? Math.max(1, Math.round(wordCount(en.contentHtml) / 200)) : undefined;
  const createPrimaryKeywords = effectiveEn ? [effectiveEn.primaryKeyword].filter(Boolean) : [];
  const createSecondaryKeywords = effectiveEn ? effectiveEn.secondaryKeywords : [];
  const createReadingTime = effectiveEn ? Math.max(1, Math.round(wordCount(effectiveEn.contentHtml) / 200)) : undefined;

  let blogId: number;
  let created = false;

  if (existing) {
    await prisma.blog.update({
      where: { id: existing.id },
      data: {
        ...(en
          ? { titleEn: en.title, contentEn: en.contentHtml, excerptEn: en.seoMeta, metaTitleEn: en.title, metaDescriptionEn: en.seoMeta }
          : {}),
        ...(ar
          ? { titleAr: ar.title, contentAr: ar.contentHtml, excerptAr: ar.seoMeta, metaTitleAr: ar.title, metaDescriptionAr: ar.seoMeta }
          : {}),
        titleI18n,
        contentI18n,
        excerptI18n,
        metaTitleI18n,
        metaDescriptionI18n,
        ...(primaryKeywords ? { primaryKeywords } : {}),
        ...(secondaryKeywords ? { secondaryKeywords } : {}),
        ...(readingTime ? { readingTime } : {}),
      },
    });
    blogId = existing.id;
  } else {
    const slug = await uniqueSlug(targetSlug);
    const createdRow = await prisma.blog.create({
      data: {
        slug,
        titleEn: effectiveEn!.title,
        titleAr: effectiveAr!.title,
        titleI18n,
        contentEn: effectiveEn!.contentHtml,
        contentAr: effectiveAr!.contentHtml,
        contentI18n,
        excerptEn: effectiveEn!.seoMeta,
        excerptAr: effectiveAr!.seoMeta,
        excerptI18n,
        metaTitleEn: effectiveEn!.title,
        metaTitleAr: effectiveAr!.title,
        metaTitleI18n,
        metaDescriptionEn: effectiveEn!.seoMeta,
        metaDescriptionAr: effectiveAr!.seoMeta,
        metaDescriptionI18n,
        author: "Bedouin Trails Team",
        category: "Planning & Practical Guides",
        primaryKeywords: createPrimaryKeywords,
        secondaryKeywords: createSecondaryKeywords,
        readingTime: createReadingTime,
        isPublished: false,
      },
    });
    blogId = createdRow.id;
    created = true;
  }

  const primaryFaqSource = effectiveEn ?? effectiveAr ?? files[0];
  const existingFaqs = existing?.faqs ?? [];

  for (let i = 0; i < primaryFaqSource.faqs.length; i++) {
    const questionEn = en?.faqs[i]?.question ?? (!existing ? effectiveEn?.faqs[i]?.question : undefined);
    const questionAr = ar?.faqs[i]?.question ?? (!existing ? effectiveAr?.faqs[i]?.question : undefined);
    const answerEn = en?.faqs[i]?.answer ?? (!existing ? effectiveEn?.faqs[i]?.answer : undefined);
    const answerAr = ar?.faqs[i]?.answer ?? (!existing ? effectiveAr?.faqs[i]?.answer : undefined);
    const existingRow = existingFaqs[i];

    const questionAdditions: [string, string | undefined][] = otherLocales.map((l) => [
      l,
      byLocale.get(l)!.faqs[i]?.question,
    ]);
    const answerAdditions: [string, string | undefined][] = otherLocales.map((l) => [
      l,
      byLocale.get(l)!.faqs[i]?.answer,
    ]);

    if (existingRow) {
      await prisma.blogFaq.update({
        where: { id: existingRow.id },
        data: {
          ...(questionEn ? { questionEn } : {}),
          ...(questionAr ? { questionAr } : {}),
          ...(answerEn ? { answerEn } : {}),
          ...(answerAr ? { answerAr } : {}),
          questionI18n: mergeI18n(existingRow.questionI18n, questionAdditions),
          answerI18n: mergeI18n(existingRow.answerI18n, answerAdditions),
        },
      });
      continue;
    }

    if (!questionEn || !questionAr || !answerEn || !answerAr) {
      warnings.push(`FAQ #${i + 1}: needs English and Arabic to create a new entry — skipped.`);
      continue;
    }

    await prisma.blogFaq.create({
      data: {
        blogId,
        questionEn,
        questionAr,
        answerEn,
        answerAr,
        questionI18n: Object.fromEntries(questionAdditions.filter((e): e is [string, string] => Boolean(e[1]))),
        answerI18n: Object.fromEntries(answerAdditions.filter((e): e is [string, string] => Boolean(e[1]))),
        sortOrder: i,
      },
    });
  }

  return { blogId, created, warnings };
}
