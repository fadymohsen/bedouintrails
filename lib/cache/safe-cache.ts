import { unstable_cache } from "next/cache";

const fallbackStore = new Map<string, unknown>();

/**
 * Wraps a DB read with time-based caching (unstable_cache) plus an
 * in-memory last-good fallback. If the DB call fails on a cache miss,
 * the previous successful result is served instead of throwing —
 * so a transient DB outage doesn't 500 pages that already rendered once
 * on this server instance. Cold start with DB down on the very first
 * request still throws (no data has ever been cached yet).
 */
export function withDbFallback<T>(key: string, fn: () => Promise<T>, revalidateSeconds = 300) {
  const cached = unstable_cache(
    async () => {
      const data = await fn();
      fallbackStore.set(key, data);
      return data;
    },
    [key],
    { revalidate: revalidateSeconds },
  );

  return async (): Promise<T> => {
    try {
      return await cached();
    } catch (err) {
      const fallback = fallbackStore.get(key);
      if (fallback !== undefined) return fallback as T;
      throw err;
    }
  };
}
