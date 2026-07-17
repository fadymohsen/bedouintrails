import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";

export async function createTrapDay(trapId: number) {
  return prisma.$transaction(async (tx) => {
    const lastDay = await tx.trapDay.findFirst({
      where: { trapId },
      orderBy: { dayNumber: "desc" },
    });
    const dayNumber = (lastDay?.dayNumber ?? 0) + 1;

    const day = await tx.trapDay.create({ data: { trapId, dayNumber } });
    await tx.trap.update({ where: { id: trapId }, data: { duration: { increment: 1 } } });

    return day;
  });
}

export async function deleteTrapDay(trapDayId: number) {
  return prisma.$transaction(async (tx) => {
    const day = await tx.trapDay.findUnique({ where: { id: trapDayId } });
    if (!day) throw new NotFoundError("Day not found.");

    await tx.trapDayCard.deleteMany({ where: { trapDayId } });
    await tx.trapDay.delete({ where: { id: trapDayId } });

    await tx.trapDay.updateMany({
      where: { trapId: day.trapId, dayNumber: { gt: day.dayNumber } },
      data: { dayNumber: { decrement: 1 } },
    });

    await tx.trap.update({ where: { id: day.trapId }, data: { duration: { decrement: 1 } } });

    return day;
  });
}
