import { notFound } from "next/navigation";
import Link from "next/link";
import { getOrderForAdmin } from "@/lib/services/adminOrders";
import { NotFoundError } from "@/lib/services/errors";
import OrderStatusControl from "@/components/admin/order-status-control";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let order;
  try {
    order = await getOrderForAdmin(Number(id));
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Order #{order.id}</h1>
        <OrderStatusControl orderId={order.id} status={order.status} />
      </div>

      <div className={styles.formRow}>
        <div className={styles.card}>
          <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Customer</h2>
          <p>
            {order.firstName} {order.lastName}
          </p>
          <p>{order.email}</p>
          <p>{order.phone}</p>
          <p>
            Account:{" "}
            <Link href={`/admin/users/${order.userId}`} className={styles.linkBtn}>
              {order.user.firstName} {order.user.lastName}
            </Link>
          </p>
        </div>

        <div className={styles.card}>
          <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Trip</h2>
          <p>{order.trap.nameEn}</p>
          <p>
            {order.startDate.toDateString()} - {order.endDate.toDateString()}
          </p>
          <p>
            {order.numberOfAdults} adults, {order.numberOfChildren} children
          </p>
          <Link href={`/journeys/${order.trap.slug}`} className={styles.linkBtn} target="_blank">
            View trip page
          </Link>
        </div>
      </div>

      {order.description && (
        <div className={styles.card}>
          <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Notes</h2>
          <p>{order.description}</p>
        </div>
      )}
    </div>
  );
}
