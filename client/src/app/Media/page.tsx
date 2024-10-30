import Media from '@/components/Media';
import prisma from "@/lib/prisma";

async function getImages() {
  const images = await prisma.uploadedFile.findMany({
    orderBy: { uploadedAt: 'desc' },
  });

  return images.map(img => ({
    id: img.id,
    category: img.category === "CHILDREN_SAFETY" ? "Children Safety" : "Women Safety",
    src: img.url,
    fileName: img.fileName,
    uploadedAt: img.uploadedAt.toISOString(),
  }));
}

export default async function GalleryPage() {
  const initialImages = await getImages();

  return <Media initialImages={initialImages} />;
}

export const revalidate = 30;
