"use client";

import { useActionState } from "react";
import { ADMIN_PERMISSIONS } from "@/lib/auth/permissions";
import styles from "./admin.module.scss";

export type EmployeeFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: boolean;
  permissions: string[];
};

type ActionState = { success?: boolean; error?: string } | undefined;

export default function EmployeeForm({
  initial,
  action,
  submitLabel,
  showPassword,
}: {
  initial?: Partial<EmployeeFormValues>;
  action: (prevState: ActionState, form: FormData) => Promise<ActionState>;
  submitLabel: string;
  showPassword?: boolean;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const grantedPermissions = new Set(initial?.permissions ?? []);

  return (
    <form action={formAction} className={styles.form}>
      {state?.error && <div className={styles.errorBanner}>{state.error}</div>}
      {state?.success && <div className={styles.card}>Saved.</div>}

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>First name</label>
          <input name="firstName" required defaultValue={initial?.firstName} />
        </div>
        <div className={styles.field}>
          <label>Last name</label>
          <input name="lastName" required defaultValue={initial?.lastName} />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Email</label>
          <input name="email" type="email" required defaultValue={initial?.email} />
        </div>
        <div className={styles.field}>
          <label>Phone</label>
          <input name="phone" defaultValue={initial?.phone} />
        </div>
      </div>

      {showPassword && (
        <div className={styles.field}>
          <label>Password</label>
          <input name="password" type="password" required />
        </div>
      )}

      <div className={styles.checkboxField}>
        <input type="checkbox" name="status" id="status" defaultChecked={initial?.status ?? true} />
        <label htmlFor="status">Active</label>
      </div>

      <div className={styles.field}>
        <label>Permissions</label>
        {ADMIN_PERMISSIONS.map((permission) => (
          <div key={permission} className={styles.checkboxField}>
            <input
              type="checkbox"
              name="permissions"
              value={permission}
              id={permission}
              defaultChecked={grantedPermissions.has(permission)}
            />
            <label htmlFor={permission}>{permission.replace(/_/g, " ")}</label>
          </div>
        ))}
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
