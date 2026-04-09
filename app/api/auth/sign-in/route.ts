// app/api/auth/sign-in/route.ts
import { NextRequest, NextResponse } from "next/server";
import { AUTH_PASSWORD, AUTH_USERNAME } from "@/lib/auth-config";
import { COOKIE_NAME, MAX_AGE_SECONDS, signAuthToken } from "@/lib/auth-token";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Missing username or password." },
        { status: 400 },
      );
    }

    if (!AUTH_USERNAME || !AUTH_PASSWORD) {
      return NextResponse.json(
        { error: "Auth credentials are not configured." },
        { status: 500 },
      );
    }

    if (username !== AUTH_USERNAME || password !== AUTH_PASSWORD) {
      return NextResponse.json(
        { error: "Incorrect username or password." },
        { status: 401 },
      );
    }

    const token = await signAuthToken({
      signedIn: true,
      username,
    });

    const res = NextResponse.json({ success: true });

    res.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: MAX_AGE_SECONDS,
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unexpected server error.",
      },
      { status: 500 },
    );
  }
}
