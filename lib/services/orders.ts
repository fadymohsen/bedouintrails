import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError, OwnershipError } from "./errors";

export type CreateOrderInput = {
  trapId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description?: string;
  numberOfAdults: number;
  numberOfChildren: number;
  startDate: Date;
  endDate: Date;
};

export async function createOrder(userId: number, input: CreateOrderInput) {
  const trap = await prisma.trap.findUnique({ where: { id: input.trapId } });
  if (!trap) throw new NotFoundError("Trip not found.");

  const peopleCount = input.numberOfAdults + input.numberOfChildren;

  return prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId,
        trapId: input.trapId,
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone,
        description: input.description,
        numberOfAdults: input.numberOfAdults,
        numberOfChildren: input.numberOfChildren,
        startDate: input.startDate,
        endDate: input.endDate,
        status: "pending",
      },
    });

    await tx.trap.update({
      where: { id: input.trapId },
      data: { countPeople: { increment: peopleCount } },
    });

    return order;
  });
}

export async function getMyOrders(userId: number) {
  return prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      trap: {
        include: { galleries: { take: 1, orderBy: { id: "asc" } } },
      },
    },
  });
}

export async function getOrderDetails(orderId: number, userId: number) {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      trap: {
        include: {
          trapDays: { include: { cards: true }, orderBy: { dayNumber: "asc" } },
          galleries: true,
        },
      },
      reviews: { include: { user: { select: { firstName: true, lastName: true, image: true } } } },
    },
  });

  if (!order) throw new NotFoundError("Order not found.");
  if (order.userId !== userId) throw new OwnershipError("You do not have access to this order.");

  return order;
}

export async function cancelOrder(orderId: number, userId: number) {
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  if (!order) throw new NotFoundError("Order not found.");
  if (order.userId !== userId) throw new OwnershipError("You do not have access to this order.");

  return prisma.order.update({ where: { id: orderId }, data: { status: "cancelled" } });
}
