import { z } from "zod";

/**
 * Admin forms submit the optional-language values (de/fr/es/it/pt/zh/nl) as
 * a single JSON-string hidden input per field (see I18nField). This parses
 * that string into the plain object Prisma's Json column expects, dropping
 * anything malformed or empty instead of failing the whole form submit.
 */
export function i18nField() {
  return z
    .string()
    .optional()
    .transform((raw): Record<string, string> | undefined => {
      if (!raw) return undefined;
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          const entries = Object.entries(parsed).filter(
            ([, v]) => typeof v === "string" && v.trim().length > 0
          ) as [string, string][];
          return entries.length > 0 ? Object.fromEntries(entries) : undefined;
        }
      } catch {
        // Malformed JSON from a tampered request — treat as no translations.
      }
      return undefined;
    });
}
