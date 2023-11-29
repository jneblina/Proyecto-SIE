import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export {default} from "next-auth/middleware";


export const config = {
  matcher: "/api/:path*",
  
};
