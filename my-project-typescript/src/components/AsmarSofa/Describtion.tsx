import React from 'react';
import { Button } from '../Ui/button';
import { FacebookIcon, Linkedin, Instagram } from 'lucide-react';

const Description = () => {
  return (
    <div className="main flex flex-wrap justify-between px-4 py-8 border border-black-800">
      {/* Image Section */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        <img
          src="/image/Group 99 (1).png"
          alt="Side View"
          className="max-w-full h-auto"
        />
        <img
          src="/images/Asgaard sofa 1 (1).png" width={481} height={391}
          alt="Main View"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 px-6">
        <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
        <h2 className="text-xl text-gray-700 font-semibold">Rs. 250,000.00</h2>
        <div className="flex items-center space-x-2">
          <img src="/image/Group 88.png" alt="Rating Stars" className="h-5" />
          <span className="text-gray-600 text-sm">| 5 Customer Reviews</span>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size Selection */}
        <div className="flex gap-4">
          {['SM', 'LG', 'XL'].map((size) => (
            <button
              key={size}
              className="px-6 py-2 bg-[#FBEBB5] rounded hover:bg-gray-300 transition-all"
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity and Cart */}
        <div className="flex gap-4 items-center">
          <Button variant="outline" className="w-20 text-center">
            - 1 +
          </Button>
          <Button>Add to Cart</Button>
        </div>

        {/* Product Details */}
        <ul className="text-gray-600 text-sm space-y-2">
          <li>
            <strong>SKU:</strong> SS001
          </li>
          <li>
            <strong>Category:</strong> Sofas
          </li>
          <li>
            <strong>Tags:</strong> Sofa, Chair, Home, Shop
          </li>
          <li>
            <strong>Share:</strong>
            <div className="flex gap-4 mt-2">
              {[FacebookIcon, Linkedin, Instagram].map((Icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Icon size={18} />
                </Button>
              ))}
            </div>
          </li>
        </ul>
      </div>

      {/* Additional Details */}
      <div className="w-full mt-8 border-t pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <h2 className="font-bold text-xl">Description</h2>
          <h2 className="text-xl">Review [5]</h2>
          <h2 className="text-xl">Secure Payment</h2>
        </div>
        <p className="pt-4 text-[#9F9F9F] leading-relaxed">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="pt-4 text-[#9F9F9F] leading-relaxed">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs. The analogue knobs allow you to fine-tune the controls to your personal preferences, while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Related Products Section */}
      <div className="w-full py-8 px-6 border-t">
        <h2 className="text-center text-4xl font-bold mb-12">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { src: "/images/Trenton modular sofa_3 1 (1).png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
            { src: "/images/Granite dining table with dining chair 1.png", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
            { src: "/images/Outdoor bar table and stool 1 (1).png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
            { src: "/images/Plain console with teak mirror 1 (1).png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-lg text-gray-700 mt-2">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 py-8">
          <a href='/hero' className="px-6 py-2 text-lg text-black underline hover:text-blue-800 transition-all">
            View More
          </a>
        </div>
      </div>

    </div>
  );
};

export default Description;
