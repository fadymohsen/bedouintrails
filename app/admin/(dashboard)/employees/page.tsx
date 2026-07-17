import Link from "next/link";
import { listEmployees } from "@/lib/services/adminEmployees";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminEmployeesPage() {
  const employees = await listEmployees();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Employees</h1>
        <Link href="/admin/employees/new" className={styles.primaryBtn}>
          + New Employee
        </Link>
      </div>

      <div className={styles.card}>
        {employees.length === 0 ? (
          <p className={styles.emptyState}>No employees yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.email}</td>
                  <td>
                    <span className={`${styles.badge} ${employee.status ? styles.active : styles.inactive}`}>
                      {employee.status ? "active" : "inactive"}
                    </span>
                  </td>
                  <td>
                    <Link href={`/admin/employees/${employee.id}`} className={styles.linkBtn}>
                      Edit
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
