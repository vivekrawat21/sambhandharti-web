import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get("cookie");
    const adminToken = cookie
      ?.split("; ")
      .find((c) => c.startsWith("adminToken="))
      ?.split("=")[1];

    if (!adminToken || !JWT_SECRET) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    await jwtVerify(adminToken, new TextEncoder().encode(JWT_SECRET));

    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
