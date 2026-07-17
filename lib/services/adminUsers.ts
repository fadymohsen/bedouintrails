import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";

export async function listUsers(search?: string) {
  return prisma.user.findMany({
    where: search
      ? {
          OR: [
            { firstName: { contains: search, mode: "insensitive" } },
            { lastName: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: { createdAt: "desc" },
  });
}

export async function getUserForAdmin(id: number) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      orders: {
        include: { trap: { select: { nameEn: true } } },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!user) throw new NotFoundError("User not found.");
  return user;
}
