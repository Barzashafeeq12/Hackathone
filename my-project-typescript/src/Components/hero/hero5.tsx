import React from 'react';
import { Button } from '../ui/button';

const Instagram = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black"
      style={{
        backgroundImage: "url('/images/Rectangle 17.png')",
      }}
    >
      <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center">
        <h1>Our Instagram</h1>
      </div>

      <div className="underline hover:text-blue-500 mb-6 text-lg sm:text-xl text-center">
        Follow our store on Instagram
      </div>

      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base">
        Follow Us
      </Button>
    </div>
  );
};

export default Instagram;
