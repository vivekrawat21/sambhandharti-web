"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All Images", "Children Safety", "Women Safety"];

const images = [
  { id: 1, category: "Children Safety", src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
  { id: 2, category: "Children Safety", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww" },
  { id: 3, category: "Women Safety", src: "https://plus.unsplash.com/premium_photo-1669324357773-a1ca561a4b72?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, category: "Women Safety", src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
  { id: 5, category: "All Images", src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
  { id: 6, category: "All Images", src: "https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=2814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Images");

  const filteredImages =
    activeCategory === "All Images"
      ? images
      : images.filter((img) => img.category === activeCategory);

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
      <div className="grid grid-cols-3 gap-6 mx-8">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
