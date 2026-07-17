import { getOrderDetails, cancelOrder } from "@/lib/services/orders";
import { getUserSession } from "@/lib/auth/session";
import { ok, fail, handleApiError } from "@/lib/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const { id } = await params;
    const order = await getOrderDetails(Number(id), session.uid);
    return ok({ order });
  } catch (err) {
    return handleApiError(err);
  }
}

export async function PUT(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const { id } = await params;
    const order = await cancelOrder(Number(id), session.uid);
    return ok({ order });
  } catch (err) {
    return handleApiError(err);
  }
}
