import EmployeeForm from "@/components/admin/employee-form";
import { createEmployeeAction } from "../actions";
import styles from "@/components/admin/admin.module.scss";

export default function NewEmployeePage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>New Employee</h1>
      </div>
      <div className={styles.card}>
        <EmployeeForm action={createEmployeeAction} submitLabel="Create Employee" showPassword />
      </div>
    </div>
  );
}
