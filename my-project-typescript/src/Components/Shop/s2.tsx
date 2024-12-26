import React from 'react';

const products = [
  {
    imgSrc: '/images/Trenton modular sofa_3 1 (1).png',
    title: 'Trenton modular sofa_3',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/images/Granite dining table with dining chair 1.png',
    title: 'Granite dining table with dining chair',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/images/Outdoor bar table and stool 1 (1).png',
    title: 'Outdoor bar table and stool',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/images/Plain console with teak mirror 1 (1).png',
    title: 'Plain console with teak mirror',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/image/Grain coffee table 1 (1).png',
    title: 'Grain coffee table',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/image/Kent coffee table 1 (1).png',
    title: 'Kent coffee table',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/image/Round coffee table_color 2 1.png',
    title: 'Round coffee table_color 2',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/image/Reclaimed teak coffee table 1.png',
    title: 'Reclaimed teak coffee table',
    price: 'Rs. 25,000.00',
  },
  {
    imgSrc: '/image/Kent coffee table 1 (1).png',
    title: 'Plain console_',
    price: 'Rs. 250,000.00',
  },
  {
    imgSrc: '/image/Reclaimed teak Sideboard 1.png',
    title: 'Reclaimed teak Sideboard',
    price: 'Rs. 255,000.00',
  },
  {
    imgSrc: '/image/SJP_0825  1.png',
    title: 'SJP_0825',
    price: 'Rs. 251,000.00',
  },
  {
    imgSrc: '/image/Bella chair and table 1.png',
    title: 'Bella chair and table',
    price: 'Rs. 143,000.00',
  },
  {
    imgSrc: '/images/Granite square side table 1.png',
    title: 'Granite square side table',
    price: 'Rs. 205,000.00',
  },
  {
    imgSrc: '/images/Asgaard sofa 1 (1).png',
    title: 'Asgaard sofa',
    price: 'Rs. 100,000.00',
  },
  {
    imgSrc: '/image/Maya sofa three seater 1.png',
    title: 'Outdoor sofa set',
    price: 'Rs. 251,000.00',
  },
  {
    imgSrc: '/image/Outdoor sofa set 1.png',
    title: 'Trenton modular sofa_3',
    price: 'Rs. 255,000.00',
  },
];

const S2 = () => {
  return (
    <div className="p-6">
    
      <div className="mb-6">
        <img src="/images/Group 63.png" alt="Header" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="mx-auto"
              width={287}
              height={287}
            />
            <h1 className="text-xl font-semibold mt-4">{product.title}</h1>
            <p className="text-lg text-gray-700 mt-2">{product.price}</p>
          </div>
        ))}
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
    </div>
  );
};

export default S2;
