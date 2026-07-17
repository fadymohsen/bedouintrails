"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/session";
import { updateOrderStatus, type AdminOrderStatus } from "@/lib/services/adminOrders";

export async function updateOrderStatusAction(orderId: number, status: AdminOrderStatus) {
  await requireAdmin("booking_requests");
  await updateOrderStatus(orderId, status);
  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${orderId}`);
}
