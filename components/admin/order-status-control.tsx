"use client";

import { useTransition } from "react";
import { updateOrderStatusAction } from "@/app/admin/(dashboard)/orders/actions";
import type { AdminOrderStatus } from "@/lib/services/adminOrders";

const STATUSES: AdminOrderStatus[] = ["pending", "accepted", "paid", "cancelled"];

export default function OrderStatusControl({ orderId, status }: { orderId: number; status: AdminOrderStatus }) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      value={status}
      disabled={pending}
      onChange={(e) => startTransition(() => updateOrderStatusAction(orderId, e.target.value as AdminOrderStatus))}
      style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e5e5e5" }}
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
