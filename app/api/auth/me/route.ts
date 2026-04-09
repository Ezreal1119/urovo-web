// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, verifyAuthToken } from "@/lib/auth-token";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json({ signedIn: false });
  }

  try {
    const payload = await verifyAuthToken(token);

    if (!payload.signedIn) {
      return NextResponse.json({ signedIn: false });
    }

    return NextResponse.json({
      signedIn: true,
      username: payload.username,
    });
  } catch {
    return NextResponse.json({ signedIn: false });
  }
}
