import "server-only";
import { del, put } from "@vercel/blob";

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];

export class UploadValidationError extends Error {}

export async function uploadImage(file: File, folder: string): Promise<string> {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new UploadValidationError(`Unsupported file type: ${file.type}`);
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new UploadValidationError("File exceeds 4MB limit");
  }

  const ext = file.name.split(".").pop() ?? "bin";
  const key = `${folder}/${crypto.randomUUID()}.${ext}`;

  const blob = await put(key, file, {
    access: "public",
    addRandomSuffix: false,
  });

  return blob.url;
}

export async function deleteImage(url: string | null | undefined): Promise<void> {
  if (!url) return;
  await del(url);
}
