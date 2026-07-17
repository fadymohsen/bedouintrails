import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";

const ORDER_STATUSES = ["pending", "accepted", "paid", "cancelled"] as const;
export type AdminOrderStatus = (typeof ORDER_STATUSES)[number];

export async function listOrders(status?: string, search?: string) {
  return prisma.order.findMany({
    where: {
      ...(status && ORDER_STATUSES.includes(status as AdminOrderStatus) ? { status: status as AdminOrderStatus } : {}),
      ...(search
        ? {
            OR: [
              { firstName: { contains: search, mode: "insensitive" as const } },
              { lastName: { contains: search, mode: "insensitive" as const } },
              { phone: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {}),
    },
    include: { user: { select: { firstName: true, lastName: true, email: true } }, trap: { select: { nameEn: true } } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getOrderForAdmin(id: number) {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      user: { select: { firstName: true, lastName: true, email: true, phone: true } },
      trap: { select: { nameEn: true, slug: true } },
    },
  });
  if (!order) throw new NotFoundError("Order not found.");
  return order;
}

export async function updateOrderStatus(id: number, status: AdminOrderStatus) {
  const order = await prisma.order.findUnique({ where: { id } });
  if (!order) throw new NotFoundError("Order not found.");
  return prisma.order.update({ where: { id }, data: { status } });
}
