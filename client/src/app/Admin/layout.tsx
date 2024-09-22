'use client'

import { ReactNode, use, useEffect, useState } from 'react';
import BackButton from '@/components/Back';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLogin from '@/components/AdminLogin';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/verify");
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  const handleLogOut = () => {
    fetch("/api/admin/logout").then(() => {
      setIsAuthenticated(false);
      window.location.reload();
    });
  };

  return (
    <div className="relative min-h-screen">
      {isAuthenticated ?
        <div className="absolute top-4 right-4">
          <Button onClick={handleLogOut} variant="outline" className="flex items-center">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div> : null
      }

      <main className="p-4">
        <BackButton />
        {children}
      </main>
    </div>
  );
}