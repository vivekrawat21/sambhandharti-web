import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ success: true });
  response.headers.set(
    "Set-Cookie",
    `adminToken=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict`
  );
  return response;
}
