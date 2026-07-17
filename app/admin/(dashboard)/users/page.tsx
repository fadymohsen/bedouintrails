import Link from "next/link";
import { listUsers } from "@/lib/services/adminUsers";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const users = await listUsers(search);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Users</h1>
        <form>
          <input name="search" defaultValue={search} placeholder="Search users..." style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e5e5e5" }} />
        </form>
      </div>

      <div className={styles.card}>
        {users.length === 0 ? (
          <p className={styles.emptyState}>No users found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Verified</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <span className={`${styles.badge} ${user.isVerify ? styles.active : styles.inactive}`}>
                      {user.isVerify ? "verified" : "unverified"}
                    </span>
                  </td>
                  <td>
                    <Link href={`/admin/users/${user.id}`} className={styles.linkBtn}>
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
