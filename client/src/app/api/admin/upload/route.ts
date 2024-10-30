import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const S3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get("file") as File | null;
    const category = data.get("category") as string | null;

    if (!file || !category) {
      return NextResponse.json({ error: "File and category are required" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const fileName = `${Date.now()}-${file.name}`;

    await S3.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: fileName,
        Body: Buffer.from(buffer),
        ContentType: file.type,
      })
    );

    const uploadedFile = await prisma.uploadedFile.create({
      data: {
        fileName,
        url: `${process.env.R2_PUBLIC_URL}/${fileName}`,
        category: category as "CHILDREN_SAFETY" | "WOMEN_SAFETY",
      },
    });

    return NextResponse.json({
      success: true,
      fileName,
      fileId: uploadedFile.id,
      category: uploadedFile.category,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }
}
