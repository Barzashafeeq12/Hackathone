import React from 'react';

const Hero4 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#FBEBB5] py-4">
      {/* Image Section */}
      <div id="img" className="w-full lg:w-1/2 flex justify-end mb-6 lg:mb-0">
        <img
          src="/images/Asgaard sofa 1 (1).png"
          alt="Asgaard sofa"
          className="rounded-lg max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 pt-10 lg:pt-0">
        <h2 className="text-2xl font-medium">New Arrivals</h2>
        <h1 className="text-4xl lg:text-6xl font-bold">Asgaard Sofa</h1>
        <div className="flex justify-center items-center lg:justify-start pt-6">
          <button className="bg-black text-white px-6 py-2   rounded hover:bg-gray-800 transition">
            Order NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
