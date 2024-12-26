import React from 'react';
import { Button } from '@/components/Ui/button';
import { ChevronRight } from 'lucide-react';
import S3 from '@/components/Shop/S3';
import Link from 'next/link';

const Cart = () => {
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
            className="mb-4"
          />
          <h1>Cart</h1>
        </div>
        <div className="text-lg sm:text-xl text-center mb-6 flex items-center justify-center space-x-4">
          <span className="underline hover:text-blue-500 cursor-pointer">Home</span>
          <Button variant="outline" size="icon" className="p-2">
            <ChevronRight />
          </Button>
          <span className="underline">Cart</span>
        </div>
      </div>

      {/* Cart Items Grid */}
      <div className="pr-8 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-6 gap-6">
        {/* Product */}
        <div className="col-span-1 flex flex-col items-center">
          <h3 className="font-semibold text-center mb-2 bg-[#FFF9E5]">Product</h3>
          <img
            src='/images/Asgaard sofa 1 (1).png'
            width={112}
            height={92}
            className='bg-[#FBEBB5] mb-2'
            alt="Asgaard sofa"
          />
          <p className="text-[#9F9F9F] text-center ">Asgaard sofa</p>
        </div>

        {/* Price */}
        <div className="col-span-1 flex flex-col items-center ">
          <h3 className="font-semibold text-center  bg-[#FFF9E5]">Price</h3>
          <p className="text-[#9F9F9F] text-center">Rs. 250,000.00</p>
        </div>

        {/* Quantity */}
        <div className="col-span-1 flex flex-col items-center">
          <h3 className="font-semibold text-center  bg-[#FFF9E5]">Quantity</h3>
          <button className="text-[#9F9F9F] border border-solid border-black p-2 text-center">
            1
          </button>
        </div>

        {/* Subtotal */}
        <div className="col-span-1 flex flex-col items-center">
          <h3 className="font-semibold text-center bg-[#FFF9E5] ">Subtotal</h3>
          <p className="text-center">Rs. 250,000.00</p>
        </div>

        {/* Cart Tools */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex flex-col items-center p-4 m-4 gap-4 bg-[#FFF9E5] rounded-lg shadow-lg">
          <h3 className="font-semibold text-center text-xl mb-4">Cart Tools</h3>
          <ul className="text-center space-y-2">
            <li>SubTotal: Rs. 250,000.00</li>
            <li className="text-[#B88E2F]">Total: Rs. 250,000.00</li>
          </ul>
          import Link from 'next/link';

<Link href="/Checkout">
  <button className="mt-4 border border-black rounded-lg px-6 py-2 text-lg font-semibold hover:bg-black hover:text-white transition duration-200">
    Check Out
  </button>
</Link>

        </div>
      </div>
<S3/>
    </div>
  );
};

export default Cart;
