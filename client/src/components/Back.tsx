"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const pathname = usePathname();

  return (
    <Link href={pathname === '/Admin' ? "/" : "/Admin"}>
      <button className="flex items-center ml-4 space-x-1 text-indigo-400 hover:text-indigo-500 transition-all duration-300 group mt-4">
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Back</span>
      </button>
    </Link>
  );
};

export default BackButton;
