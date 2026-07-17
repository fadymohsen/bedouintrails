"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import { employeeFormSchema, createEmployeeFormSchema } from "@/lib/validators/employee";
import { createEmployee, updateEmployee } from "@/lib/services/adminEmployees";
import { isAdminPermission } from "@/lib/auth/permissions";

type ActionState = { success?: boolean; error?: string } | undefined;

function permissionsFromForm(form: FormData) {
  return form.getAll("permissions").map(String).filter(isAdminPermission);
}

export async function createEmployeeAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_users");

  let employeeId: number;
  try {
    const input = createEmployeeFormSchema.parse({
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      phone: form.get("phone") || undefined,
      password: form.get("password"),
      status: form.get("status") === "on",
      permissions: permissionsFromForm(form),
    });
    const employee = await createEmployee(input);
    employeeId = employee.id;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Something went wrong." };
  }

  revalidatePath("/admin/employees");
  redirect(`/admin/employees/${employeeId}`);
}

export async function updateEmployeeAction(employeeId: number, _prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_users");
  try {
    const input = employeeFormSchema.parse({
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      phone: form.get("phone") || undefined,
      status: form.get("status") === "on",
      permissions: permissionsFromForm(form),
    });
    await updateEmployee(employeeId, input);
    revalidatePath("/admin/employees");
    revalidatePath(`/admin/employees/${employeeId}`);
    return { success: true };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Something went wrong." };
  }
}
