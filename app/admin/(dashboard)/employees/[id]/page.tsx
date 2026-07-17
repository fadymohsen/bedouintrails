import { notFound } from "next/navigation";
import { getEmployee } from "@/lib/services/adminEmployees";
import { NotFoundError } from "@/lib/services/errors";
import { updateEmployeeAction } from "../actions";
import EmployeeForm from "@/components/admin/employee-form";
import styles from "@/components/admin/admin.module.scss";

export default async function EditEmployeePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const employeeId = Number(id);

  let employee;
  try {
    employee = await getEmployee(employeeId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const permissions =
    employee.permissions && typeof employee.permissions === "object"
      ? Object.entries(employee.permissions as Record<string, boolean>)
          .filter(([, granted]) => granted)
          .map(([key]) => key)
      : [];

  const boundUpdate = updateEmployeeAction.bind(null, employeeId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {employee.firstName} {employee.lastName}
        </h1>
      </div>
      <div className={styles.card}>
        <EmployeeForm
          action={boundUpdate}
          submitLabel="Save Changes"
          initial={{
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            phone: employee.phone ?? "",
            status: employee.status,
            permissions,
          }}
        />
      </div>
    </div>
  );
}
