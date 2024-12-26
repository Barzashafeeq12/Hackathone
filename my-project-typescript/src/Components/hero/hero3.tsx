import React from 'react';

const Hero3 = () => {
  return (
    <div className="py-8 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Top Picks For You</h1>
        <p className="text-lg text-gray-600 mt-2">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
   
        <div className="flex flex-col items-center">
          <img
            src="/images/Trenton modular sofa_3 1 (1).png"
            alt="Trenton modular sofa"
            className="w-full h-auto rounded-lg"
          />
          <h1 className="text-xl font-semibold mt-4">Trenton modular sofa_3</h1>
          <p className="text-lg text-gray-700 mt-2">Rs. 25,000.00</p>
        </div>

   
        <div className="flex flex-col items-center">
          <img
            src="/images/Granite dining table with dining chair 1.png"
            alt="Granite dining table"
            className="w-full h-auto rounded-lg"
          />
          <h1 className="text-xl font-semibold mt-4">Granite dining table with dining chair</h1>
          <p className="text-lg text-gray-700 mt-2">Rs. 25,000.00</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/Outdoor bar table and stool 1 (1).png"
            alt="Outdoor bar table and stool"
            className="w-full h-auto rounded-lg"
          />
          <h1 className="text-xl font-semibold mt-4 pt-8">Outdoor bar table and stool</h1>
          <p className="text-lg text-gray-700 mt-2">Rs. 25,000.00</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/Plain console with teak mirror 1 (1).png"
            alt="Plain console with teak mirror"
            className="w-full h-auto rounded-lg"
          />
          <h1 className="text-xl font-semibold mt-4">Plain console with teak mirror</h1>
          <p className="text-lg text-gray-700 mt-2">Rs. 25,000.00</p>
        </div>
         </div>

      <div className="flex space-x-4 pt-4 lg:pt-8 pl-0 lg:pl-24 items-center justify-center">
          <button className="px-6 py-2 text-lg text-black rounded hover:bg-blue-800 transition-all ease-in-out duration-300 underline">
            View All
          </button>
          </div>
    </div>
  );
};

export default Hero3;
