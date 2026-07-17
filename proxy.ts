import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const USER_PROTECTED_PREFIXES = ["/my-journeys", "/book", "/profile"];
const ADMIN_COOKIE = "admin_session";
const USER_COOKIE = "session";

function getSecretKey(): Uint8Array {
  return new TextEncoder().encode(process.env.AUTH_SECRET ?? "");
}

async function isValidSession(token: string | undefined, realm: "user" | "admin"): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload.realm === realm;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;
    const valid = await isValidSession(token, "admin");
    if (!valid) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (USER_PROTECTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    const token = request.cookies.get(USER_COOKIE)?.value;
    const valid = await isValidSession(token, "user");
    if (!valid) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-journeys/:path*", "/book/:path*", "/profile/:path*", "/admin/:path*"],
};
