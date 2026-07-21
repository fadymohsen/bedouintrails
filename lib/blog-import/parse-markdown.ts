import "server-only";
import { marked } from "marked";
import { locales, type Locale } from "@/lib/i18n/config";

export type ParsedFaq = { question: string; answer: string };

export type ParsedBlogFile = {
  locale: Locale;
  slug: string;
  title: string;
  seoMeta: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  contentHtml: string;
  faqs: ParsedFaq[];
};

export class MarkdownImportError extends Error {}

// Frontmatter values are always "quoted strings" or ["quoted", "arrays"] in
// the documented format — no nested objects, no multi-line scalars. A tiny
// hand-rolled parser keeps this dependency-free instead of pulling in a full
// YAML parser for three value shapes.
function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new MarkdownImportError("No frontmatter block found (file must start with '---').");
  }
  const [, frontmatter, body] = match;
  const data: Record<string, string | string[]> = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const lineMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!lineMatch) continue;
    const [, key, rawValue] = lineMatch;
    const value = rawValue.trim();

    if (value.startsWith("[")) {
      try {
        const parsed = JSON.parse(value.replace(/'/g, '"'));
        if (Array.isArray(parsed)) {
          data[key] = parsed.map((v) => String(v));
          continue;
        }
      } catch {
        // Fall through to string handling below.
      }
    }

    const unquoted = value.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
    data[key] = unquoted;
  }

  return { data, body };
}

// A file can bundle every language in one frontmatter block (title_en AND
// title_ar AND title_fr ...) — this finds every locale that has at least a
// title_XX key, in the order its key first appears.
function detectAllLocales(data: Record<string, string | string[]>): Locale[] {
  const found: Locale[] = [];
  for (const key of Object.keys(data)) {
    const localeMatch = key.match(/^title_([a-z]{2})$/);
    if (localeMatch && (locales as readonly string[]).includes(localeMatch[1])) {
      const locale = localeMatch[1] as Locale;
      if (!found.includes(locale)) found.push(locale);
    }
  }
  if (found.length === 0) {
    throw new MarkdownImportError(
      `Couldn't detect a locale from the frontmatter keys (expected e.g. "title_en", "title_ar").`
    );
  }
  return found;
}

function field(data: Record<string, string | string[]>, name: string, locale: string): string {
  const value = data[`${name}_${locale}`];
  if (Array.isArray(value)) return value.join(", ");
  return value ?? "";
}

function arrayField(data: Record<string, string | string[]>, name: string, locale: string): string[] {
  const value = data[`${name}_${locale}`];
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function slugFromUrl(url: string): string {
  const cleaned = url.replace(/\/+$/, "");
  const segments = cleaned.split("/");
  const last = segments[segments.length - 1];
  if (!last) throw new MarkdownImportError(`Couldn't extract a slug from url "${url}".`);
  return last;
}

function leadingHeading(section: string): string {
  const headingMatch = section.match(/^\s*#\s+(.+)$/m);
  return headingMatch ? headingMatch[1].trim() : "";
}

// Splits a file that bundles multiple languages into one body per locale.
// Each language's content is a "# Title" block separated from the next by a
// standalone "---" line, and is matched back to its locale by comparing
// that "# Title" line against the frontmatter's title_XX value — order in
// the file doesn't matter, only that the heading text matches exactly.
function splitBodyByLocale(
  body: string,
  data: Record<string, string | string[]>,
  detectedLocales: Locale[],
  fileName: string
): Map<Locale, string> {
  if (detectedLocales.length === 1) {
    return new Map([[detectedLocales[0], body]]);
  }

  const sections = body
    .split(/\r?\n\s*-{3,}\s*\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (sections.length !== detectedLocales.length) {
    throw new MarkdownImportError(
      `"${fileName}": frontmatter has ${detectedLocales.length} language(s) (${detectedLocales.join(
        ", "
      )}) but the body has ${sections.length} section(s) separated by "---". Each language needs its own "# Title" section, separated by a line containing only "---".`
    );
  }

  const byLocale = new Map<Locale, string>();
  const unmatchedSections = new Set(sections);

  for (const locale of detectedLocales) {
    const expectedTitle = field(data, "title", locale).trim();
    const match = sections.find((section) => leadingHeading(section) === expectedTitle);
    if (!match) {
      throw new MarkdownImportError(
        `"${fileName}": couldn't find a body section starting with "# ${expectedTitle}" for locale "${locale}". Each section's "# Title" heading must exactly match its title_${locale} value.`
      );
    }
    byLocale.set(locale, match);
    unmatchedSections.delete(match);
  }

  return byLocale;
}

// The FAQ section renders separately (BlogFaq rows, shown in its own block
// on the blog page) rather than inline in the article body, so it has to be
// cut out of the markdown before the rest converts to HTML. It's identified
// structurally — always the last "## " section within a locale's body —
// rather than by heading text, since that text is translated per language.
function extractFaqSection(body: string): { body: string; faqs: ParsedFaq[] } {
  const sections = body.split(/\n(?=##\s+)/);
  if (sections.length < 2) return { body, faqs: [] };

  const lastSection = sections[sections.length - 1];
  const bulletPattern = /\*\s+\*\*(.+?)\*\*\s*\n\s+([\s\S]+?)(?=\n\*\s+\*\*|\n*$)/g;
  const faqs: ParsedFaq[] = [];
  let match: RegExpExecArray | null;
  while ((match = bulletPattern.exec(lastSection)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim().replace(/\s+/g, " "),
    });
  }

  if (faqs.length === 0) return { body, faqs: [] };

  const remaining = sections.slice(0, -1).join("\n");
  return { body: remaining, faqs };
}

// Renders the "> **Label:** ..." tip blockquotes as the site's styled
// .callout box instead of a plain <blockquote>, which has no CSS at all.
const renderer = new marked.Renderer();
renderer.blockquote = ({ tokens }) => `<div class="callout">${marked.Parser.parse(tokens)}</div>\n`;

function stripLeadingTitleHeading(body: string): string {
  return body.replace(/^\s*#\s+.+\n+/, "");
}

async function markdownToHtml(body: string): Promise<string> {
  const withoutTitle = stripLeadingTitleHeading(body);
  const html = await marked.parse(withoutTitle, { renderer, async: true });
  return html.trim();
}

// Parses one uploaded .md file into one ParsedBlogFile per language it
// contains — a single-locale file (the common case) returns an array of
// one; a bundled multi-language file returns one entry per language.
export async function parseBlogMarkdownFile(raw: string, fileName: string): Promise<ParsedBlogFile[]> {
  const { data, body } = parseFrontmatter(raw);
  const detectedLocales = detectAllLocales(data);
  const bodyByLocale = splitBodyByLocale(body, data, detectedLocales, fileName);

  const results: ParsedBlogFile[] = [];
  for (const locale of detectedLocales) {
    const title = field(data, "title", locale);
    const urlKey = `url_${locale}`;
    const url = typeof data[urlKey] === "string" ? (data[urlKey] as string) : "";
    if (!title) throw new MarkdownImportError(`"${fileName}": missing title_${locale} in frontmatter.`);
    if (!url) throw new MarkdownImportError(`"${fileName}": missing url_${locale} in frontmatter.`);

    const slug = slugFromUrl(url);
    const localeBody = bodyByLocale.get(locale) ?? "";
    const { body: bodyWithoutFaqs, faqs } = extractFaqSection(localeBody);
    const contentHtml = await markdownToHtml(bodyWithoutFaqs);

    results.push({
      locale,
      slug,
      title,
      seoMeta: field(data, "seo_meta", locale),
      primaryKeyword: field(data, "primary_keyword", locale),
      secondaryKeywords: arrayField(data, "secondary_keywords", locale),
      contentHtml,
      faqs,
    });
  }

  return results;
}
