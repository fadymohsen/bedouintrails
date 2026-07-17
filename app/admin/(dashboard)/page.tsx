import Link from "next/link";
import { getDashboardData } from "@/lib/services/dashboard";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminDashboardPage() {
  const { trapCount, userCount, orderCount, pendingOrders, recentOrders, adminCount } = await getDashboardData();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>{trapCount}</h3>
          <p>Trips</p>
        </div>
        <div className={styles.statCard}>
          <h3>{userCount}</h3>
          <p>Users</p>
        </div>
        <div className={styles.statCard}>
          <h3>{orderCount}</h3>
          <p>Orders</p>
        </div>
        <div className={styles.statCard}>
          <h3>{pendingOrders}</h3>
          <p>Pending Orders</p>
        </div>
        <div className={styles.statCard}>
          <h3>{adminCount}</h3>
          <p>Admin Accounts</p>
        </div>
      </div>

      <div className={styles.card}>
        <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Recent Orders</h2>
        {recentOrders.length === 0 ? (
          <p className={styles.emptyState}>No orders yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Trip</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>
                    {order.user.firstName} {order.user.lastName}
                  </td>
                  <td>{order.trap.nameEn}</td>
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
