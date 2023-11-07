import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname.startsWith("/") && isAuthenticated) {
    return NextResponse.redirect(new URL("/sie"));
  }

  return await withAuth(req, {
    pages: {
      signIn: "/",
    },
  });
}

export const config = {
  matcher: "/((?!.*\\.).*)",
};
