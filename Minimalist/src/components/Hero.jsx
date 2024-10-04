import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col mt-20 max-w-full min-h-[760px]  lg:px-[8vw] max-md:mt-10">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
      <div className="flex flex-col items-center mr-0 w-full max-md:max-w-full">
        <h1 className="text-lg font-custom2 font-medium text-black">FURNITURE STORE</h1>

<h2 className="font-custom3 self-center px-6 mt-6 text-6xl font-semibold text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Discover the Artistry of Modern Contemporary Furniture
        </h2>
        <p className="px-6 mx-auto mt-6 text-xl leading-8 text-center text-zinc-800 max-md:max-w-full">
          Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation
        </p>
      </div>
    </div>
    <img 
        src={assets.heroCouch} 
        alt="Modern contemporary furniture showcase" 
        className="object-contain flex-1 gap-2.5 py-2.5 my-[-60px] mx-auto w-full rounded-md aspect-[-0.97] max-w-full max-md:flex max-md:max-w-full max-sm:flex" 
        loading="lazy"
      />
        </div>
  )
}

export default Hero