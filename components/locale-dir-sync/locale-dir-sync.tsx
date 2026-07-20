"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { isRtl, type Locale } from "@/lib/i18n/config";

// The root <html lang dir> lives in app/layout.tsx, above the [locale]
// segment, so the App Router never re-renders it on a client-side locale
// switch — only on a hard reload. This keeps document attributes in sync
// on every locale change without one.
export default function LocaleDirSync() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl(locale as Locale) ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
