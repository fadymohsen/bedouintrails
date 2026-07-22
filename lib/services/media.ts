import "server-only";
import { list } from "@vercel/blob";

export type MediaItem = { url: string; pathname: string; uploadedAt: string; size: number };

export async function listMediaLibrary(): Promise<MediaItem[]> {
  const items: MediaItem[] = [];
  let cursor: string | undefined;

  do {
    const page = await list({ token: process.env.BLOB_READ_WRITE_TOKEN, cursor, limit: 1000 });
    items.push(
      ...page.blobs.map((b) => ({
        url: b.url,
        pathname: b.pathname,
        uploadedAt: b.uploadedAt.toString(),
        size: b.size,
      }))
    );
    cursor = page.cursor;
  } while (cursor);

  return items.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
}
