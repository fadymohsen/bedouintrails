import { z } from "zod";
import { ADMIN_PERMISSIONS } from "@/lib/auth/permissions";

export const employeeFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  status: z.coerce.boolean().default(true),
  permissions: z.array(z.enum(ADMIN_PERMISSIONS)).default([]),
});

export const createEmployeeFormSchema = employeeFormSchema.extend({
  password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/, "Password must be at least 8 characters and include a letter and a number"),
});
