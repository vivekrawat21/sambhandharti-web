"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleFileChange = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !category) return;

    setUploading(true);
    setUploadResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    try {
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setUploadResult({
          success: true,
          message: "File uploaded successfully! Check on Media UI",
        });
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadResult({
        success: false,
        message: "Error uploading file. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative p-6">
      <div className="flex justify-center items-center flex-col w-full max-w-4xl mx-auto min-h-96 p-6 bg-white border border-dashed rounded-lg shadow-md mt-20">
        <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
        <form onSubmit={handleFileUpload} className="flex flex-col w-full">
          <FileUpload onChange={handleFileChange} />
          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger className="mt-4">
              <SelectValue placeholder="Select safety category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CHILDREN_SAFETY">Children Safety</SelectItem>
              <SelectItem value="WOMEN_SAFETY">Women Safety</SelectItem>
            </SelectContent>
          </Select>
          {uploading && <p className="mt-4 text-blue-500">Uploading...</p>}
          {uploadResult && (
            <p
              className={`mt-4 ${
                uploadResult.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {uploadResult.message}
            </p>
          )}
          <Button
            type="submit"
            disabled={uploading || !file || !category}
            className="mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </div>
    </div>
  );
}
