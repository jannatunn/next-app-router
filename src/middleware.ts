import { NextRequest, NextResponse } from "next/server";


export default function midlleware(request: NextRequest) {
  const isLogin = true;
  if(!isLogin){
    return NextResponse.rewrite(new URL("/login", request.url))
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/about/:path*"]
}