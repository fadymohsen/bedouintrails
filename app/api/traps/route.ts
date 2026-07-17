import { listActiveTraps } from "@/lib/services/traps";
import { ok, handleApiError } from "@/lib/api/respond";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") ?? undefined;
    const duration = searchParams.get("duration");
    const interfaceFrom = searchParams.get("from") ?? undefined;
    const interfaceTo = searchParams.get("to") ?? undefined;

    const result = await listActiveTraps({
      search,
      duration: duration ? Number(duration) : undefined,
      interfaceFrom,
      interfaceTo,
    });

    return ok(result);
  } catch (err) {
    return handleApiError(err);
  }
}
