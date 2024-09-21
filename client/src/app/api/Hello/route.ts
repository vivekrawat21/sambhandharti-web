import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(process.env.R2_SECRET_ACCESS_KEY);
  console.log(process.env.DATABASE_URL);
  return NextResponse.json({ message: "GET request" });
}
