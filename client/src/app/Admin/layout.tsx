'use client'

import { ReactNode, useEffect, useState } from 'react';
import BackButton from '@/components/Back';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLogin from '@/components/AdminLogin';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    return <AdminLogin />;
  }

  const handleLogOut = async () => {
    setIsLoading(true); 
    try {
      const response = await fetch("/api/admin/logout");
      if (response.ok) {
        toast.success('Logout successful! Redirecting...', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          setIsAuthenticated(false);
          router.push('/Admin');
        }, 1500);
      } else {
        toast.error('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('An error occurred during logout.');
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="relative min-h-screen">
      {isAuthenticated ? (
        <div className="absolute top-4 right-4">
          <Button
            onClick={handleLogOut}
            variant="outline"
            className="flex items-center"
            disabled={isLoading} 
          >
            {isLoading ? <LoadingSpinner /> : (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </>
            )}
          </Button>
        </div>
      ) : null}

      <main className="p-4">
        <BackButton />
        {children}
        <ToastContainer />
      </main>
    </div>
  );
}