import React from "react";
import Link from "next/link";
import { Input } from "./Ui/input"; // Assuming you're using a custom Input component
import { Search } from "lucide-react"; // Assuming you're using lucide-react for icons
import { Button } from "./Ui/button";

const Footer = () => {
  return (
    <div className="p-8">
      {/* Footer Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Address */}
        <div className=" text-gray-600 ">
          <h1 className="text-xl mb-4  "> 400 University Drive Suite 200</h1>
          <p className="text-lg">Coral Gables, </p>
          <p  className="text-lg"> FL 33134 USA</p>
        </div>


        <div>
          <h1 className="text-lg font-semibold mb-4">Links</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Shop
            </Link>
          </div>
        </div>

       
        <div>
          <h1 className="text-lg font-semibold mb-4">Help</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
              Return
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h1 className="text-lg font-semibold mb-4">Newsletter</h1>
          <p className="text-sm text-gray-600 mb-4">
            Sign up for the latest updates and offers.
          </p>
          <div className="relative">
            <Input
              placeholder="Enter your email"
              className="bg-[#F5F5F5] rounded  pl-3 pr-8"
            />
            <Search className="absolute right-3 top-2.5 text-gray-600" />
          </div>
          <div><Button className="pt-4 underline ">SUBSCRIBE</Button></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
