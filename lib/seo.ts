import { locales } from "@/lib/i18n/config";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com"
).replace(/\/+$/, "");

export function buildAlternates(path: string, locale: string) {
  const suffix = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}/${loc}${suffix}`;
  }
  languages["x-default"] = `${SITE_URL}/en${suffix}`;
  return {
    canonical: `${SITE_URL}/${locale}${suffix}`,
    languages,
  };
}
