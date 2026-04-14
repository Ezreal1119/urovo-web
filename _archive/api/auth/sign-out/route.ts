// app/api/auth/sign-out/route.ts
import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/auth-token";

export async function POST() {
  const res = NextResponse.json({ success: true });

  res.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return res;
}
