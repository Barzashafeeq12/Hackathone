import { Contact, Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./Ui/input";
import { Button } from "./Ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,

} from "./Ui/sheet";


const Navbar = () => {
  return (
    <nav className='w-full border-separate border-gray-500'>
      <div className=' mx-auto flex items-center justify-between text-2xl font-bold'>
        <h1 className='font-bold text-2xl'></h1>
        <div className='hidden md:flex gap-8 text-3xl'>
  <Link href="#" className='font-normal hover:underline text-lg'>Home</Link>
  <Link href="/Contact" className='font-normal hover:underline text-lg'>Contact</Link>
  <Link href="/My Account" className='hover:underline text-lg'>About</Link>
  <Link href="/shop" className='font-normal hover:underline text-lg'>Shop</Link>
</div>

        <div className="hidden md:flex gap-8 pr-4">
     
            <Button variant={'outline'} size={'icon'} className=''>
                <Contact/>
            </Button>
            <Button variant={'outline'} size={'icon'} className=''>
                <Heart />
            </Button>
            <Button variant={'outline'} size={'icon'} className=''>
                <ShoppingCart/>
            </Button>
            <Button variant={'outline'} size={'icon'} className=''>
                <Search/>
            </Button>
        </div>
        <Sheet>
            <SheetTrigger className='flex md:hidden '>
            <Button variant={'outline'} size={'icon'} className='rounded-full bg-[#FBEBB5]'>
                <Menu className="size-4 text-gray-400 bg-[#FBEBB5] " />
            </Button>
            </SheetTrigger >
            <SheetContent side={"right"}>
           
            <div className="flex flex-col gap-8 items-center justify-center text-2xl fo nt-bold mt-6 ">
              <Link href={"#"} className="text-sm font-normal">Home</Link>
              <Link href={"#"} className="text-sm font-normal"> Contact</Link>
              <Link href={"#"} className="text-sm font-normal">About </Link>
              <Link href={"#"} className="text-sm font-normal"> Shop </Link>
              <div className="mt-4">
                <div className="relative">
                  <Input placeholder="Search Products" className="bg-[#F5F5F5] rounded"
                  />

                </div>
                <div className="flex gap-4 mt-6">
                  <Button variant={"outline"} size={"icon"} className="bg-[#FBEBB5]" >
                    <Heart /> </Button>
                  <Button variant={"outline"} size={"icon"} className="bg-[#FBEBB5]">
                    <ShoppingCart />
                  </Button>
                  <Button variant={'outline'} size={'icon'} className='bg-[#FBEBB5]'>
                <Contact/>
            </Button>
            <Button variant={'outline'} size={'icon'} className='bg-[#FBEBB5]'>
                <Search/>
            </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
    </div>
    </nav>
  )
}

export default Navbar
