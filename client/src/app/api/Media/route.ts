import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const images = await prisma.uploadedFile.findMany({
      orderBy: { uploadedAt: 'desc' },
    });

    const formattedImages = images.map(img => ({
      id: img.id,
      category: img.category === "CHILDREN_SAFETY" ? "Children Safety" : "Women Safety",
      src: img.url,
      fileName: img.fileName,
      uploadedAt: img.uploadedAt,
    }));

    return NextResponse.json(formattedImages);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Error fetching images" },
      { status: 500 }
    );
  }
}
