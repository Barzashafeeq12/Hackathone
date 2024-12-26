import React from 'react';
import Link from 'next/link';

const Hero5 = () => {
  return (
    <div className="py-10">
      {/* Title and Description */}
      <div className="text-center mb-12 ">
        <h1 className="text-4xl font-bold mb-2">Our Blogs</h1>
        <p className="text-lg text-gray-600">Find a bright idea to suit your taste with our great selection.</p>
      </div>

      {/* Blog Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog 1 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/Rectangle 13.png"
            alt="Blog Image 1"
            className="w-full h-auto rounded-lg mb-4"
            height={393}
            width={393}
          />
          <h2 className="text-xl font-semibold mb-2">Going all-in with millennial design</h2>
          <Link href="#" className="underline text-md font-bold hover:to-text-blue-600">Read More</Link>
        </div>

        {/* Blog 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/Rectangle 14.png"
            alt="Blog Image 2"
            className="w-full h-auto rounded-lg mb-4"
            height={393}
            width={393}
          />
          <h2 className="text-xl font-semibold mb-2">Going all-in with millennial design</h2>
          <Link href="#" className="underline text-md font-bold hover:to-text-blue-600">Read More</Link>
        </div>

        {/* Blog 3 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/Rectangle 15.png"
            alt="Blog Image 3"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Going all-in with millennial design</h2>
          <Link href="#" className="underline text-md font-bold hover:to-text-blue-600">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
