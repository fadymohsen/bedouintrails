import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { IntlErrorCode } from "next-intl";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

function pickFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2));
  for (const lang of preferred) {
    if (isLocale(lang)) return lang;
  }
  return null;
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;

  let locale: Locale;
  if (cookieLocale && isLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const headerList = await headers();
    locale = pickFromAcceptLanguage(headerList.get("accept-language")) ?? defaultLocale;
  }

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
    timeZone: "Africa/Cairo",
    // A handful of guide-page strings were never translated into every
    // locale in the original site either (i18next silently fell back to
    // the raw key there) — match that behavior instead of failing the
    // request for a missing content string.
    onError(error) {
      if (error.code !== IntlErrorCode.MISSING_MESSAGE) {
        console.error(error);
      }
    },
    getMessageFallback({ key }) {
      return key;
    },
  };
});

export { locales, defaultLocale };
