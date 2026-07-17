import Link from "next/link";
import { listOrders } from "@/lib/services/adminOrders";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; search?: string }>;
}) {
  const { status, search } = await searchParams;
  const orders = await listOrders(status, search);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Orders</h1>
        <form style={{ display: "flex", gap: 8 }}>
          <input name="search" defaultValue={search} placeholder="Search..." style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e5e5e5" }} />
          <select name="status" defaultValue={status ?? ""} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e5e5e5" }}>
            <option value="">All statuses</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="paid">Paid</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button type="submit" className={styles.secondaryBtn}>
            Filter
          </button>
        </form>
      </div>

      <div className={styles.card}>
        {orders.length === 0 ? (
          <p className={styles.emptyState}>No orders found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Trip</th>
                <th>Dates</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    {order.firstName} {order.lastName}
                  </td>
                  <td>{order.trap.nameEn}</td>
                  <td>
                    {order.startDate.toDateString()} - {order.endDate.toDateString()}
                  </td>
                  <td>
                    <span className={`${styles.badge} ${styles[order.status]}`}>{order.status}</span>
                  </td>
                  <td>
                    <Link href={`/admin/orders/${order.id}`} className={styles.linkBtn}>
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
