import React from 'react'

const Hero1 = () => {
  return (
    <div  className=' main flex flex-row item-center justify-between bg-[#FBEBB5] '>
    <div className='w-1/2 flex-col justify-center items-center space-y-4 pt-[141px] pl-10 mr-8'>
       <h1 className='text-6xl font-bold'>Rocket single seater </h1>
      
      <div className='flex space-x-8 pt-24 pl-24'> <button className='bg-black px-8 py-2 text-white
       rounded hover:bg-grey-800 '>Shop Now</button></div>
     </div>
     <div id='img' className='w-1/2 flex justify-center'>
     <img src='/images/Rocket single seater 1.png'
     alt='hero-img featuring a learning theme'
     width={853}
     height={1000}
     className='rounded-lg'
     />
     </div>
   </div>
  )
}

export default Hero1

