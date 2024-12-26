import React from 'react';

const Hero2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#FBEBB5] px-6 py-12">

      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 pt-12 lg:pt-24 pl-0 lg:pl-10">
        <img
          src="/images/Granite square side table 1.png"
          width={605}
          height={562}
          className="rounded-lg"
          alt="Granite Side Table"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          Side Table
        </h1>
        <div className="flex space-x-4 pt-4 lg:pt-8 pl-0 lg:pl-24">
          <button className="text-black text-lg px-6 py-2 rounded hover:bg-blue-800 transition-all ease-in-out duration-300 underline">
            View All
          </button>
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start pt-12 lg:pt-24 pl-0 lg:pl-10">
        <img
          src="/images/Mask group.png"
          alt="3 Seater Sofa"
          width={605}
          height={562}
          className="rounded-lg"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          3 Seater Sofa
        </h1>
        <div className="flex space-x-4 pt-4 lg:pt-8 pl-0 lg:pl-24">
          <button className="px-6 py-2 text-lg text-black rounded hover:bg-blue-800 transition-all ease-in-out duration-300 underline">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
