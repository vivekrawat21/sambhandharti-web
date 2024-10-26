import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DonationPage() {
  return (
    <div className="min-h-screen ">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-violet-500 mt-10 mb-6">
        Donation Form
      </h1>

      <div className="container mx-auto px-4 lg:px-36">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-start  p-6 md:p-12">
          
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              alt="Donation"
              className="rounded-lg shadow-md object-cover w-full h-60"
            />
            <div className="mt-6 text-sm text-gray-600">
              <p>
                Sambhandarti was established on 25th of May 2012. It is a
                national level society with the vision of a prosperous nation.
              </p>
              <p className="mt-4">
                You agree to share information with Sambhandarti and Razorpay,
                adhering to applicable laws.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Payment Details</h3>

            <form className="space-y-4">
              <Input placeholder="Name" className="w-full" required />
              <Input type="email" placeholder="Email" className="w-full" required />
              <Input type="tel" placeholder="Phone" className="w-full" required />
              <Input type="number" placeholder="PAN" className="w-full" required />
              <Input placeholder="Address (Optional)" className="w-full" />
              <Textarea placeholder="Message (Optional)" className="w-full" />
              <Input
                type="number"
                placeholder="₹ Enter Amount"
                className="w-full"
                required
              />
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                Pay ₹ 0.00
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
