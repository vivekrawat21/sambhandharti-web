"use client"
import React from "react";
import { TwitterIcon } from "lucide-react";
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <div className="py-10 mt-6 mb-1 mx-auto w-[85%]">
      <Separator className="mb-4 w-[60%] mx-auto" />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-semibold text-indigo-500">Logo</span>
          </Link>
          <div>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <TwitterIcon size={30} className="text-indigo-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;