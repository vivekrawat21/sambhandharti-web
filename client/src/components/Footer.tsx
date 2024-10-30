"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Heart, Mail, Phone, MapPin } from "lucide-react"

const Links = [
    { name: 'About Us', href: '/About' },
    { name: 'Get Involved', href: '/Projects' },
    { name: 'Our Media', href: '/Media' },
    // { name: 'Success Stories', href: '/success-stories' },
    { name: 'Donate', href: '/Donate' }
];

export default function Footer() {
  return (
    <footer className="bg-orange-50 dark:bg-gray-900 pt-16 pb-4">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Sambandharthi
                </span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering communities through education, support, and sustainable development.
              Together, we can create lasting positive change in the lives of those who need it most.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
                {Links.map((item:any) => (
                    <li key={item.name}>
                    <Link
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                        {item.name}
                    </Link>
                    </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                <span>123 NGO Street, Sector 4, New Delhi - 110001, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <span>+91  81789 02068 </span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <span>info@sambandharthi.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our impact and upcoming initiatives.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-orange-200 dark:bg-orange-900/40" />

        <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>© 2024 Sambandharthi Foundation. All rights reserved.</p>
          <div className="flex justify-center gap-4"></div>
            <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
    </footer>
  )
}
