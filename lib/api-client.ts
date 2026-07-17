"use client";

export class ApiClientError extends Error {}

export async function apiPost<T = unknown>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data.status === false) {
    throw new ApiClientError(data.message || "Something went wrong. Please try again.");
  }

  return data as T;
}
