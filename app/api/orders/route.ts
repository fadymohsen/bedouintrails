import { createOrderSchema } from "@/lib/validators/order";
import { createOrder, getMyOrders } from "@/lib/services/orders";
import { getUserSession } from "@/lib/auth/session";
import { ok, fail, handleApiError } from "@/lib/api/respond";

export async function GET() {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const orders = await getMyOrders(session.uid);
    return ok({ orders });
  } catch (err) {
    return handleApiError(err);
  }
}

export async function POST(request: Request) {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const body = createOrderSchema.parse(await request.json());
    const order = await createOrder(session.uid, body);
    return ok({ order });
  } catch (err) {
    return handleApiError(err);
  }
}
