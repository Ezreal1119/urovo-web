// src/lib/require-sign-in.ts
import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, verifyAuthToken } from "@/lib/auth-token";

export async function requireSignIn(redirectTo = "/auth-required") {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    redirect(redirectTo);
  }

  try {
    const payload = await verifyAuthToken(token);

    if (!payload.signedIn) {
      redirect(redirectTo);
    }
  } catch {
    redirect(redirectTo);
  }
}
