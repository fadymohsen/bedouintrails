import type { Locale } from "@/lib/i18n/config";
import { localize } from "@/lib/i18n/localized";

type TrapLike = {
  id: number;
  slug: string;
  nameEn: string;
  nameAr: string | null;
  interfaceFromEn: string;
  interfaceFromAr: string | null;
  interfaceToEn: string;
  interfaceToAr: string | null;
  duration: number;
  countPeople: number;
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
  image: string | null;
  rate: number;
};

export function mapTrapForCard(trap: TrapLike, locale: Locale): TripCardData {
  return {
    id: trap.id,
    slug: trap.slug,
    name: localize(trap.nameEn, trap.nameAr, locale),
    interfaceFrom: localize(trap.interfaceFromEn, trap.interfaceFromAr, locale),
    interfaceTo: localize(trap.interfaceToEn, trap.interfaceToAr, locale),
    duration: trap.duration,
    countPeople: trap.countPeople,
    image: trap.galleries?.[0]?.image ?? null,
    rate: trap.rate ?? 0,
  };
}
