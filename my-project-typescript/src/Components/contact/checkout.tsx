'use client';

import { useState, FormEvent } from 'react';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import S3 from '../Shop/s3';

// Define the type for form data state
interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  region: string;
  address: string;
  town: string;
  city: string;
  province: string;
  zipCode: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    region: '',
    address: '',
    town: '',
    city: '',
    province: '',
    zipCode: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  const handleChange = (name: keyof FormData, value: string): void => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('Billing Details Submitted:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center gap-4">
          <img src='/image/Meubel House_Logos-05.png' width={135} height={135} alt="Logo" />
          <h1>Check Out</h1>
        </div>
        <div className="text-lg sm:text-xl text-center mb-6 flex items-center justify-center space-x-4">
          <span className="underline hover:text-blue-500">Home</span>
          <Button variant="outline" size="icon" className="p-2">
            <ChevronRight />
          </Button>
          <span className='underline'>Check Out</span>
        </div>
      </div>

      {/* Main Content with Grid Layout */}
      <div className="w-full max-w-7xl mx-auto p-6 mt-6 bg-white border border-separate border-4px shadow-md rounded-md grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Billing Details Column (Extended Form) */}
        <div className="col-span-2 p-6 rounded-md space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm font-medium">Region</label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={(e) => handleChange('region', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              ></textarea>
            </div>

            {/* Town/City */}
            <div>
              <label className="block text-sm font-medium">Town/City</label>
              <input
                type="text"
                name="town"
                value={formData.town}
                onChange={(e) => handleChange('town', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Province */}
            <div>
              <label className="block text-sm font-medium">Province</label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={(e) => handleChange('province', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-medium">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-medium">Additional Info</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleChange('additionalInfo', e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit Billing Details
              </button>
            </div>
          </form>
        </div>

        {/* Product & Subtotal Column */}
        <div className="col-span-1 p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-6">Product & Subtotal</h2>
          <div className="flex flex-col space-y-6">
            {/* Product Section */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul>
                <li className='text-[#9F9F9F]'>Asgaard sofa x 1</li>
              </ul>
            </div>

            {/* Subtotal Section */}
            <div className="flex flex-col space-y-4 mt-auto">
              <h3 className="font-semibold">Subtotal</h3>
              <ul>
                <li>Sub Total: Rs. 250,000.00</li>
                <li>Total: Rs. 250,000.00</li>
              </ul>
              <h3 className="text-[#B88E2F] text-xl">Grand Total: Rs. 250,000.00</h3>

              {/* Payment Options Section */}
              <div className="py-6 rounded-md mt-8 bg-white shadow-md">
                <h1 className='text-[#9F9F9F]'>Direct Bank Transfer</h1>
                <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                     Your order will not be shipped until the funds have cleared in our account.</p>
                <h2 className="text-xl font-semibold mb-4 pt-4">Select Payment Method</h2>
                <div className="flex-col flex">
                  <div className="p-2 text-[#9F9F9F] rounded-md cursor-pointer hover:bg-blue-50">
                    <h3 className="font-medium">Direct Bank Transfer</h3>
                  </div>

                  <div className="p-2 text-[#9F9F9F] rounded-md cursor-pointer hover:bg-blue-50">
                    <h3 className="font-medium">Cash On Delivery</h3>
                  </div>
                </div>
              </div>
              <p> Your personal data will be used to support your experience throughout this website,
               to manage access to your account, and for other purposes described in our privacy policy</p>
            </div>
          </div>
          <Button className='border rounded flex flex-col text-center  bg-blue-500 items-centerpt-4'> Place Order</Button>
        </div>
      </div>
<S3/>
    </div>
  );
};

export default Checkout;
