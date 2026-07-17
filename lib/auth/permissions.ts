export const ADMIN_PERMISSIONS = [
  "manage_trips",
  "manage_suspended_trips",
  "manage_users",
  "booking_requests",
  "manage_website",
] as const;

export type AdminPermission = (typeof ADMIN_PERMISSIONS)[number];

export function isAdminPermission(value: string): value is AdminPermission {
  return (ADMIN_PERMISSIONS as readonly string[]).includes(value);
}
