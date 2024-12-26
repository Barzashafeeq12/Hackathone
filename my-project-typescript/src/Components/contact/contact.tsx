'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronRight, Clock10Icon, PhoneCallIcon } from 'lucide-react';
import S3 from '../Shop/s3';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API or email)
    console.log(formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center gap-4">
          <img
            src='/image/Meubel House_Logos-05.png'
            width={135}
            height={135}
            alt="Meubel House Logo"
          />
          <h1>Contact</h1>
        </div>
        <div className="text-lg sm:text-xl text-center mb-6 flex items-center justify-center space-x-4">
          <span className="underline hover:text-blue-500">Home</span>
          <Button variant="outline" size="icon" className="p-2">
            <ChevronRight />
          </Button>
          <span className="underline">Contact</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-10 px-4 text-center items-center justify-center ">
        <h1 className="font-semibold text-2xl sm:text-3xl mb-4">GET In Touch With Us</h1>
        <p className="text-sm sm:text-lg text-center justify-center text-[#4B4B4B] mb-8 pl-8">
          For more information about our products & services, feel free to drop us an email. Our staff is always ready to assist you. Don't hesitate to get in touch!
        </p>
      </div>

      {/* Contact Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4">

        {/* Form Column */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-left font-semibold">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left font-semibold">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" type="submit" className="px-8 py-3 bg-blue-500 hover:to-slate-50">
                Submit
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information Column */}
        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="font-semibold text-xl">
              <img src='/image/Vector.png' alt="Address Icon" />
              Address
            </h2>
            <p className="text-gray-700">236 5th SE Avenue, New York NY10000, United States</p>
          </div>

          <div className="flex items-center space-x-2">
            <PhoneCallIcon className="text-gray-700" />
            <div>
              <h2 className="font-semibold text-xl">Phone</h2>
              <p className="text-gray-700">Mobile: +(84) 546-6789</p>
              <p className="text-gray-700">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Clock10Icon className="text-gray-700" />
            <div>
              <h2 className="font-semibold text-xl">Working Time</h2>
              <p className="text-gray-700">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-700">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* S3 Component */}
      <S3 />
    </div>
  );
};

export default Contact;
