"use client"

import AdminLogin from '@/components/AdminLogin';
import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const payments = [
  {
    id: "001",
    amount: 100.50,
    date: "2023-09-23T10:30:00Z",
    status: "Completed"
  },
  {
    id: "002",
    amount: 250.00,
    date: "2023-09-20T14:00:00Z",
    status: "Pending"
  },
  {
    id: "003",
    amount: 75.25,
    date: "2023-09-21T09:15:00Z",
    status: "Failed"
  }
];


const PaymentDetails = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [payments, setPayments] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/verify");
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     fetchPayments();
  //   }
  // }, [isAuthenticated]);

  // const fetchPayments = async () => {
  //   try {
  //     const response = await fetch("/api/admin/payments");
  //     const data = await response.json();
  //     setPayments(data);
  //   } catch (error) {
  //     console.error("Failed to fetch payments:", error);
  //   }
  // };

  



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PaymentDetails