import React from 'react';
import { Button } from '@/components/Ui/button';
import { ChevronRight } from 'lucide-react';
import S3 from '../Shop/S3';

const MyAccount = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src="/image/Meubel House_Logos-05.png"
            width={135}
            height={135}
            alt="Meubel House Logo"
          />
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">My Account</h1>
        </div>
        <div className="text-lg sm:text-xl text-center mt-6 flex items-center justify-center space-x-4">
          <span className="underline hover:text-blue-500 cursor-pointer">Home</span>
          <Button variant="outline" size="icon" className="p-2">
            <ChevronRight />
          </Button>
          <span className="underline cursor-pointer">My Account</span>
        </div>
      </div>

      {/* Login and Registration Section */}
      <div className="min-h-screen flex items-center justify-center py-12 px-4 gap-8">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden">
          {/* Login Form */}
          <div className="p-8 ">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Login</h2>
            <form className="space-y-4">
              {/* Username/Email */}
              <div>
                <label htmlFor="login-email"  className="block text-sm font-medium text-gray-600">
                  Username or Email
                </label>
                <input
                  type="text"
                  id="login-email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your username or email"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center pb-12">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 rounded focus:ring focus:ring-blue-300"
                />
                <label htmlFor="remember" className="ml-2  text-sm text-gray-600">
                  Remember Me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button> 
              <Button className='gap-10'>Lost Your Password?</Button>
            </form>
          </div>

          {/* Registration Form */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Register</h2>
               {/* Email Address */}
               <div>
                <label htmlFor="register-email" className="block text-sm font-medium py-6 text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your email address"
                />
              </div>
            <p className="text-sm text-gray-600 mb-6 py-6">
            A link to set a new password will be sent to your email address.
            </p>
            <p className='text-gray-600'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our</p>
            <p className='font-semibold pb-4'>privacy policy.</p>
            <form className="space-y-4">

              {/* Register Button */}
              <button
                type="submit"
                className="w-full gap-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-slate-300
                 focus:outline-none focus:ring focus:ring-green-300" >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <S3/>
    </div>
  );
};

export default MyAccount;
