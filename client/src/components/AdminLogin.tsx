"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import LoadingSpinner from './LoadingSpinner'

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); 
        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            const data = await response.json();
            if (response.ok) {
                setIsAuthenticated(true);

                toast.success('Login successful! Redirecting...');

                setTimeout(() => {
                    router.push('/Admin');
                    window.location.reload();
                }, 1500);
            } else {
                toast.error(data.error || "Login failed");
            }

        } catch (error) {
            console.error("Login error:", error);
            toast.error("An error occurred during login");
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="flex justify-center items-center h-[70vh]">
            <Card className="p-8 w-[400px]">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold mb-4">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handlePasswordSubmit}>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full mb-4"
                            disabled={isLoading} 
                        />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? <LoadingSpinner /> : "Login"} 
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <ToastContainer />
        </div>
    )
}

export default AdminLogin
