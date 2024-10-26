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
            className="bg-primary text-primary-foreground py-2 px-4 flex flex-row justify-between items-center"
        >
            <div className="flex items-center space-x-4">
                <a href="mailto:info@sambandharthi.org" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                    <Mail size={16} />
                    <span>sambharndaharti</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                    <Phone size={16} />
                    <span>+91 81789 02068</span>
                </a>
            </div>

            <div className="flex space-x-4">
                <Link href="#" className="hover:text-secondary transition-colors">
                    <Facebook size={16} />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors">
                    <Twitter size={16} />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors">
                    <Instagram size={16} />
                    <span className="sr-only">Instagram</span>
                </Link>
            </div>
        </motion.div>
    )
}
