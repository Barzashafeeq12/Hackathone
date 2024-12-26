import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'

const S1 = () => {
  return (
<div>
<div className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black"
      style={{
        backgroundImage: "url('/images/Rectangle 1.png')", 
      }}>

      <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center">
      <img src='/image/Meubel House_Logos-05.png' width={135} height={135}/>
        <h1>Shop</h1>
      </div>
      <div className="text-lg sm:text-xl text-center mb-6 flex items-center justify-center space-x-4">
        <span className="underline hover:text-blue-500">Home</span>
        <Button variant="outline" size="icon" className="p-2">
          <ChevronRight />
        </Button>
        <span className='underline'>Shop</span>
      </div>
      <Button className=" hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base">
        Follow Us
      </Button>
 </div>
 
</div>
  )
}

export default S1
