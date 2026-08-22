import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";

export async function createTrapDay(trapId: number) {
  const lastDay = await prisma.trapDay.findFirst({
    where: { trapId },
    orderBy: { dayNumber: "desc" },
  });
  const dayNumber = (lastDay?.dayNumber ?? 0) + 1;
  const day = await prisma.trapDay.create({ data: { trapId, dayNumber } });
  await prisma.trap.update({ where: { id: trapId }, data: { duration: { increment: 1 } } });
  return day;
}

export async function deleteTrapDay(trapDayId: number) {
  const day = await prisma.trapDay.findUnique({ where: { id: trapDayId } });
  if (!day) throw new NotFoundError("Day not found.");

  await prisma.trapDayCard.deleteMany({ where: { trapDayId } });
  await prisma.trapDay.delete({ where: { id: trapDayId } });
  await prisma.trapDay.updateMany({
    where: { trapId: day.trapId, dayNumber: { gt: day.dayNumber } },
    data: { dayNumber: { decrement: 1 } },
  });
  await prisma.trap.update({ where: { id: day.trapId }, data: { duration: { decrement: 1 } } });

  return day;
}
