'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface VolunteerFormValues {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  collegeOrWork: string;
  address: string;
  registrationDuration: string;
  paymentMethod: string;
}

export default function VolunteerForm ()  {
  const [formValues, setFormValues] = useState<VolunteerFormValues>({
    name: '',
    phoneNumber: '',
    emailAddress: '',
    collegeOrWork: '',
    address: '',
    registrationDuration: '',
    paymentMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
    // Add logic to submit form data
  };

  return (
    <div className={`min-h-screen w-[70%] mx-auto flex items-center justify-center lg:w-[60%] xl:w-[40%] `}>
      <div className="p-16 bg-white shadow-xl rounded-xl w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-6"
            required
          />
          <Input
            name="emailAddress"
            type="email"
            value={formValues.emailAddress}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-6"
            required
          />
          <Input
            name="phoneNumber"
            type="tel"
            value={formValues.phoneNumber}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-6"
            required
          />
          <Input
            name="collegeOrWork"
            value={formValues.collegeOrWork}
            onChange={handleChange}
            placeholder="College/Working"
            className="w-full p-6"
            required
          />
          <Textarea
            name="address"
            value={formValues.address}
            onChange={handleChange}
            placeholder="Address "
            className="w-full p-6"
          />
          <Input
            name="registrationDuration"
            type="number"
            value={formValues.registrationDuration}
            onChange={handleChange}
            placeholder="Registration duration (in weeks)"
            className="w-full p-6"
          />
          <Input
            name="paymentMethod"
            type="number"
            value={formValues.paymentMethod}
            onChange={handleChange}
            placeholder="₹ Enter Amount"
            className="w-full p-6"
            required
          />
          <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white p-3">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
