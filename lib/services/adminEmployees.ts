import "server-only";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth/password";
import { NotFoundError, AuthError } from "./errors";
import type { z } from "zod";
import type { employeeFormSchema, createEmployeeFormSchema } from "@/lib/validators/employee";

type EmployeeInput = z.infer<typeof employeeFormSchema>;
type CreateEmployeeInput = z.infer<typeof createEmployeeFormSchema>;

function permissionsToJson(permissions: string[]): Record<string, boolean> {
  return Object.fromEntries(permissions.map((p) => [p, true]));
}

export async function listEmployees() {
  return prisma.admin.findMany({ where: { role: "employee" }, orderBy: { createdAt: "desc" } });
}

export async function getEmployee(id: number) {
  const employee = await prisma.admin.findUnique({ where: { id, role: "employee" } });
  if (!employee) throw new NotFoundError("Employee not found.");
  return employee;
}

export async function createEmployee(input: CreateEmployeeInput) {
  const existing = await prisma.admin.findUnique({ where: { email: input.email } });
  if (existing) throw new AuthError("An account with this email already exists.");

  return prisma.admin.create({
    data: {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      password: await hashPassword(input.password),
      role: "employee",
      status: input.status,
      isVerify: true,
      permissions: permissionsToJson(input.permissions),
    },
  });
}

export async function updateEmployee(id: number, input: EmployeeInput) {
  const existing = await prisma.admin.findUnique({ where: { id, role: "employee" } });
  if (!existing) throw new NotFoundError("Employee not found.");

  return prisma.admin.update({
    where: { id },
    data: {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      status: input.status,
      permissions: permissionsToJson(input.permissions),
    },
  });
}
