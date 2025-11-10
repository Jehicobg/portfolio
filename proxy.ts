import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/en") || pathname.startsWith("/es")) {
    return NextResponse.next();
  }

  const preferredLang = request.headers.get("accept-language")?.startsWith("es")
    ? "es"
    : "en";

  return NextResponse.redirect(
    new URL(`/${preferredLang}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
