import { notFound } from "next/navigation";
import { getUserForAdmin } from "@/lib/services/adminUsers";
import { NotFoundError } from "@/lib/services/errors";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminUserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let user;
  try {
    user = await getUserForAdmin(Number(id));
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {user.firstName} {user.lastName}
        </h1>
      </div>

      <div className={styles.card}>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Verified:</strong> {user.isVerify ? "Yes" : "No"}
        </p>
        <p>
          <strong>Joined:</strong> {user.createdAt.toDateString()}
        </p>
      </div>

      <div className={styles.card}>
        <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Orders</h2>
        {user.orders.length === 0 ? (
          <p className={styles.emptyState}>No orders yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Trip</th>
                <th>Status</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.trap.nameEn}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[order.status]}`}>{order.status}</span>
                  </td>
                  <td>
                    {order.startDate.toDateString()} - {order.endDate.toDateString()}
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
