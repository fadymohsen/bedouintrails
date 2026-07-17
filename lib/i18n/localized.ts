import type { Locale } from "./config";

export function localize(en: string, ar: string | null | undefined, locale: Locale): string {
  if (locale === "ar" && ar) return ar;
  return en;
}
