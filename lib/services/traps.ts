import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";

export type TrapFilters = {
  search?: string;
  duration?: number;
  interfaceFrom?: string;
  interfaceTo?: string;
};

const activeTrapInclude = {
  galleries: { take: 1, orderBy: { id: "asc" as const } },
};

export async function listActiveTraps(filters: TrapFilters = {}) {
  const traps = await prisma.trap.findMany({
    where: {
      status: "active",
      ...(filters.duration ? { duration: filters.duration } : {}),
      ...(filters.interfaceFrom ? { interfaceFromEn: filters.interfaceFrom } : {}),
      ...(filters.interfaceTo ? { interfaceToEn: filters.interfaceTo } : {}),
      ...(filters.search
        ? {
            OR: [
              { nameEn: { contains: filters.search } },
              { nameAr: { contains: filters.search } },
              { slug: { contains: filters.search } },
            ],
          }
        : {}),
    },
    include: activeTrapInclude,
    orderBy: { createdAt: "desc" },
  });

  const [durations, fromLocations, toLocations] = await Promise.all([
    prisma.trap.findMany({
      where: { status: "active" },
      select: { duration: true },
      distinct: ["duration"],
      orderBy: { duration: "asc" },
    }),
    prisma.trap.findMany({
      where: { status: "active" },
      select: { interfaceFromEn: true },
      distinct: ["interfaceFromEn"],
    }),
    prisma.trap.findMany({
      where: { status: "active" },
      select: { interfaceToEn: true },
      distinct: ["interfaceToEn"],
    }),
  ]);

  return {
    traps,
    facets: {
      durations: durations.map((d) => d.duration),
      fromLocations: fromLocations.map((f) => f.interfaceFromEn),
      toLocations: toLocations.map((t) => t.interfaceToEn),
    },
  };
}

export async function getTrapBySlug(slug: string) {
  const trap = await prisma.trap.findUnique({
    where: { slug },
    include: {
      trapDays: { include: { cards: true }, orderBy: { dayNumber: "asc" } },
      galleries: true,
      reviews: { include: { user: { select: { firstName: true, lastName: true, image: true } } } },
    },
  });
  if (!trap) throw new NotFoundError("Trip not found.");

  const rate =
    trap.reviews.length > 0
      ? Math.round((trap.reviews.reduce((sum, r) => sum + r.stars, 0) / trap.reviews.length) * 10) / 10
      : 0;

  return { ...trap, rate };
}
