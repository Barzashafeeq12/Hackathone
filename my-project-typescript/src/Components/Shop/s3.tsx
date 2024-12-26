import React from 'react';

const S3 = () => {
  return (
    <div className="bg-[#FAF4F4] my-4 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Delivery Section */}
          <div className="text-center max-w-sm mx-auto">
            <h1 className="font-bold text-xl">Free Delivery</h1>
            <p className="text-lg text-gray-600 pt-4">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          
          {/* 90 Days Return Section */}
          <div className="text-center  max-w-sm mx-auto">
            <h1 className="font-bold text-xl">90 Days Return</h1>
            <p className="text-large text-gray-600 pt-4">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          
          {/* Secure Payment Section */}
          <div className="text-center max-w-sm mx-auto">
            <h1 className="font-bold text-xl">Secure Payment</h1>
            <p className="text-lg text-gray-600 pt-4">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S3;
