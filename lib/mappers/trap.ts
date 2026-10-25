import type { Locale } from "@/lib/i18n/config";
import { localize } from "@/lib/i18n/localized";
import { getLocalFallbackImage } from "@/lib/image-fallback";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type I18nJson = Record<string, string> | any;

type TrapLike = {
  id: number;
  slug: string;
  nameEn: string;
  nameAr: string | null;
  nameI18n?: I18nJson;
  interfaceFromEn: string;
  interfaceFromAr: string | null;
  interfaceFromI18n?: I18nJson;
  interfaceToEn: string;
  interfaceToAr: string | null;
  interfaceToI18n?: I18nJson;
  duration: number;
  countPeople: number;
  category?: string | null;
  galleries?: { image: string }[];
  rate?: number;
};

export type TripCardData = {
  id: number;
  slug: string;
  name: string;
  interfaceFrom: string;
  interfaceTo: string;
  duration: number;
  countPeople: number;
  category: string | null;
  image: string | null;
  rate: number;
};

export function mapTrapForCard(trap: TrapLike, locale: Locale): TripCardData {
  return {
    id: trap.id,
    slug: trap.slug,
    name: localize(trap.nameEn, trap.nameAr, locale, trap.nameI18n),
    interfaceFrom: localize(trap.interfaceFromEn, trap.interfaceFromAr, locale, trap.interfaceFromI18n),
    interfaceTo: localize(trap.interfaceToEn, trap.interfaceToAr, locale, trap.interfaceToI18n),
    duration: trap.duration,
    countPeople: trap.countPeople,
    category: trap.category ?? null,
    image: getLocalFallbackImage(trap.galleries?.[0]?.image ?? null),
    rate: trap.rate ?? 0,
  };
}
