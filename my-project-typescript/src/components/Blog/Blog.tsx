'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Ui/button';
import { ChevronRight } from 'lucide-react';
import S3 from '../Shop/S3';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Craft', 'Handmade', 'Inferior Design', 'Wood'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            alt="Meubel House Logo"
          />
          <h1>Blog</h1>
        </div>
        <div className="text-lg sm:text-xl text-center mb-6 flex items-center justify-center space-x-4">
          <span className="underline hover:text-blue-500 cursor-pointer">Home</span>
          <Button variant="outline" size="icon" className="p-2">
            <ChevronRight />
          </Button>
          <span className="underline cursor-pointer">Blog</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Left Column: Blog Image */}
        <div className="col-span-2 p-4 rounded-lg">
          <img src="/image/Group 176 (1).png" alt="Blog Image" width={605} height={348} className="rounded-lg"/>
        </div>

        {/* Right Column: Search Bar and List */}
        <div className="p-4 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* List of Items */}
          <ul className="w-full mt-4 bg-white rounded-lg overflow-hidden">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="px-4 py-4 text-gray-500">No items found</li>
            )}
          </ul>
          <img src="/image/Group 184.png" alt="" />
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center px-4 py-8">
        <button className="px-6 py-4 bg-[#FBEBB5] rounded hover:bg-gray-300">
          1
        </button>
        <button className="px-6 py-4 bg-[#FFF9E5] rounded hover:bg-gray-300">
          2
        </button>
        <button className="px-6 py-4 bg-[#FFF9E5] rounded hover:bg-gray-300">
          3
        </button>
        <button className="px-8 py-2 bg-[#FFF9E5] rounded hover:bg-gray-300">
          Next
        </button>
      </div>
      <S3/>
    </div>
  );
};

export default Blog;
