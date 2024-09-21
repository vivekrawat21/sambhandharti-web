"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/verify");
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const handleFileChange = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  const handleLogOut = () => {
    fetch("/api/admin/logout").then(() => {
      setIsAuthenticated(false);
      window.location.reload(); 
    });
  };

  const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setUploadResult(null);

    const formData = new FormData();
    formData.append("file", file);

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

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-[70vh] ">
        <Card className="p-8 w-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-4">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit}>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full mb-4"
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col w-full max-w-4xl mx-auto min-h-96 p-6 bg-white dark:bg-black border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
      <Button
        className="w-full bg-purple-500 hover:bg-purple-600 text-white"
        onClick={handleLogOut}
      >
        Logout
      </Button>
      <form onSubmit={handleFileUpload} className="flex flex-col">
        <FileUpload onChange={handleFileChange} />
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
        <button
          type="submit"
          disabled={uploading || !file}
          className="mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
