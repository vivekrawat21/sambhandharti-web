import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Sambandharthi ",
  description: "Sambandharthi is a platform for Helping others.",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-r from-green-50 via-violet-50 to-teal-50 antialiased",
          poppins.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
