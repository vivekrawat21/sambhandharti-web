"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import ShimmerButton from "./ui/shimmer-button";
import { Heart } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Projects", link: "/Projects" },
    { name: "Media", link: "/Media" },
    { name: "Volunteership", link: "/Volunteer" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={cn(
          "flex w-full max-w-screen-2xl mx-auto top-2 items-center justify-between relative px-4 "
        )}
      >
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-orange-500 mr-2" />
              <Link href="/" className="text-xl font-semibold text-orange-500">
                Sambandharthi
              </Link>
            </div>

        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "text-neutral-600  text-md hover:text-neutral-500 "
              )}
            >
              {navItem.name}
            </Link>
          ))}

            <Link
              href="/Donate"
              onClick={toggleMenu}
            >
             <ShimmerButton
                shimmerColor="#ff0000"
                shimmerSize="0.05em"
                shimmerDuration="2s"
                borderRadius="50px"
                background="rgba(249, 115, 32, 0.8)"
            >
                Donate Now
            </ShimmerButton>

            </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <MenuIcon className="h-6 w-6 text-neutral-600 " />
          </button>
        </div>
      </div>

      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-3/4 h-full bg-white  shadow-lg z-50 md:hidden"
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-orange-500 mr-2" />
              <Link href="/" className="text-xl font-semibold text-orange-500">
                Sambandharthi
              </Link>
            </div>
            <button onClick={toggleMenu} className="ml-4">
              <XIcon className="h-6 w-6 text-neutral-600 " />
            </button>
          </div>

          <div className="flex flex-col space-y-3 mt-5">
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                className="text-lg text-neutral-600  hover:text-neutral-500 "
                onClick={toggleMenu}
              >
                {navItem.name}
              </Link>
            ))}

            <Link
              href="/Donate"
              className="mt-4 px-4 py-2 border border-neutral-600  rounded-full hover:bg-neutral-100 "
              onClick={toggleMenu}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </motion.nav>

      <Separator className="mt-5" />
    </>
  );
}
