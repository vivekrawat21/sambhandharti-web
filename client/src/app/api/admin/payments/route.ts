import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Error" },
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: "GET request" });
}
