"use client"
import React from "react";
import Link from 'next/link'
import {  FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
<div className="py-10 mt-6 pb-2 w-full ">
<Separator className="mb-4 w-[60%] mx-auto" />
  <div className="mb-1 mx-auto w-[90%] sm:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 md:gap-2">
    {/* Logo and Description */}
    <div className="md:col-span-4 text-gray-600">
      <Link href="/" target="_blank" className="flex items-center mb-2">
        <span className="text-lg font-semibold text-indigo-500">Logo</span>
      </Link>
      <p className="text-justify mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam unde repudiandae omnis commodi, illo porro animi at aliquam eveniet hic aliquid rerum veritatis eum reiciendis perspiciatis labore incidunt quas velit!
      </p>
      {/* Social Media Icons */}
      <ol>
     <div
          className="flex flex-row justify-start space-x-6 sm:space-x-8 mx-auto my-2"
        >
          <Link href="#" target="_blank">
            <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-600 list-none hover:text-sky-600">
              <FaLinkedin className="w-7 h-7 md:w-8 md:h-8" />
            </li>
          </Link>
          <Link href="#" target="_blank">
            <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-600 list-none hover:text-pink-400">
              <FaInstagram className="w-7 h-7 md:w-8 md:h-8" />
            </li>
          </Link>
          <Link href="#" target="_blank">
            <li className="transition-transform duration-200 ease-in-out transform hover:scale-125 text-gray-500 list-none hover:text-sky-600">
              <FaTwitter className="w-7 h-7 md:w-8 md:h-8" />
            </li>
          </Link>
        </div>
      </ol>
    </div>

    {/* Contact Section */}
    <div className="md:col-span-3 text-gray-600">
      <h2 className="text-violet-500 text-lg md:text-xl mb-2">Contact</h2>
      <p>Phone: +91 1234567890</p>
      <p>Email: office@123sambhardarthi.com</p>
      <p>Address: 123, XYZ Street, ABC City, 123456</p>
    </div>

    {/* Important Links */}
    <div className="md:col-span-1 text-gray-600">
      <h2 className="text-violet-500 text-lg md:text-xl mb-2">Important Links</h2>
      <ul>
        <Link href="#" target="_blank">
          <li className="mb-1">Privacy Policy</li>
        </Link>
        <Link href="#" target="_blank">
          <li className="mb-1">Refund Policy</li>
        </Link>
        <Link href="#">
          <li className="mb-1">Career</li>
        </Link>
        <Link href="#" target="_blank">
          <li className="mb-1">Donate Now</li>
        </Link>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="w-full h-auto text-lg  text-center text-gray-600 mt-4">
    <p className="text-center text-sm md:text-base">
      © 2024 Sambhardarthi Foundation. All Rights Reserved.
      <span>&nbsp;|&nbsp;</span>
      <Link href="#" target="_blank">Privacy Policy</Link>
      <span>&nbsp;|&nbsp;</span>
      <Link href="#" target="_blank">Terms & Conditions</Link>
    </p>
    
  </div>
</div>

  );
};

export default Footer;