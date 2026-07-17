import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { AuthError, NotFoundError, OwnershipError } from "@/lib/services/errors";

export function ok(data: unknown = {}, init?: number) {
  return NextResponse.json({ status: true, ...toObject(data) }, { status: init ?? 200 });
}

function toObject(data: unknown) {
  return typeof data === "object" && data !== null ? data : { data };
}

export function fail(message: string, status = 400) {
  return NextResponse.json({ status: false, message }, { status });
}

export function handleApiError(err: unknown) {
  if (err instanceof ZodError) {
    return fail(err.issues[0]?.message ?? "Invalid request", 422);
  }
  if (err instanceof AuthError) {
    return fail(err.message, 401);
  }
  if (err instanceof NotFoundError) {
    return fail(err.message, 404);
  }
  if (err instanceof OwnershipError) {
    return fail(err.message, 403);
  }
  console.error(err);
  return fail("Something went wrong. Please try again.", 500);
}
