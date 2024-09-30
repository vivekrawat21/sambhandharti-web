"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = ["All Images", "Children Safety", "Women Safety"];

interface Image {
  id: string;
  category: string;
  src: string;
  fileName: string;
  uploadedAt: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Images");
  const [allImages, setAllImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/Media');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        console.log(data)
        setAllImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = activeCategory === "All Images"
    ? allImages
    : allImages.filter(img => img.category === activeCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-xl sm:text-4xl mb-8 text-violet-500">
        Media
      </h1>
      <div className="flex gap-4 mb-6 mx-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.fileName}
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
