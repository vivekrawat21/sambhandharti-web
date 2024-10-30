'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import LoadingSpinner from '@/components/LoadingSpinner'

export default function DonationPage() {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message') || ''
        }

        try {
            const response = await fetch('/api/DonateTemp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                const result = await response.json()
                throw new Error(result.error || 'Something went wrong')
            }

            setSubmitted(true)
        } catch (error:any) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            <Heart className="w-6 h-6 text-red-500 mr-2" />
                        </motion.div>
                        Thank You for Your Interest!
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600">
                        We appreciate your willingness to donate. Please fill out the form below, and our volunteer will contact you about the payment process.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {!submitted ? (
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="Your full name" required />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="Your email address" required />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                            </div>
                            <div>
                                <Label htmlFor="message">Message (Optional)</Label>
                                <Textarea id="message" name="message" placeholder="Any additional information or preferred contact time..." />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? <LoadingSpinner /> : 'Submit Details'}
                            </Button>
                        </motion.form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center space-y-4"
                        >
                            <div className="flex items-center justify-center space-x-2 text-green-600">
                                <Send className="w-5 h-5" />
                                <span className="font-medium">Form Submitted Successfully!</span>
                            </div>
                            <p className="text-gray-600">
                                Thank you for providing your details. Our volunteer will contact you shortly to discuss the donation process.
                            </p>
                        </motion.div>
                    )}
                </CardContent>
                <CardFooter className="text-center text-sm text-gray-500">
                    Your generosity makes a difference. Thank you for your support!
                </CardFooter>
            </Card>
        </div>
    )
}
