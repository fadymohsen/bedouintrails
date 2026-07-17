import "server-only";
import { prisma } from "@/lib/prisma";

export async function getDashboardData() {
  const [trapCount, userCount, orderCount, pendingOrders, recentOrders, adminCount] = await Promise.all([
    prisma.trap.count(),
    prisma.user.count(),
    prisma.order.count(),
    prisma.order.count({ where: { status: "pending" } }),
    prisma.order.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { user: { select: { firstName: true, lastName: true } }, trap: { select: { nameEn: true } } },
    }),
    prisma.admin.count(),
  ]);

  return { trapCount, userCount, orderCount, pendingOrders, recentOrders, adminCount };
}
