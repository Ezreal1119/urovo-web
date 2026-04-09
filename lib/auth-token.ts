// src/lib/auth-token.ts
import { SignJWT, jwtVerify } from "jose";

export const COOKIE_NAME = "auth_token";
export const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function getSecretKey() {
  const secret = process.env.PROTECTED_SITE_PASSWORD;
  if (!secret) {
    throw new Error("Missing PROTECTED_SITE_PASSWORD");
  }
  return new TextEncoder().encode(secret);
}

export type AuthTokenPayload = {
  signedIn: true;
  username: string;
};

export async function signAuthToken(payload: AuthTokenPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .sign(getSecretKey());
}

export async function verifyAuthToken(token: string) {
  const { payload } = await jwtVerify(token, getSecretKey());
  return payload as unknown as AuthTokenPayload;
}
