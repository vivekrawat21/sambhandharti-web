'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Topbar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-orange-100 dark:bg-orange-900/20  text-orange-700 dark:text-orange-300 py-2 px-4 flex flex-row justify-between items-center"
        >
            <div className="flex items-center space-x-4 text-gray-500">
                <a href="mailto:info@sambandharthi.org" className="flex items-center space-x-2 ">
                    <Mail size={16} />
                    <span>sambharndaharti</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-2 ">
                    <Phone size={16} />
                    <span>+91 81789 02068</span>
                </a>
            </div>

            <div className="flex gap-1">
              <Link
                href="#"
                className="p-1 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="p-1 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="p-1 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
        </motion.div>
    )
}
