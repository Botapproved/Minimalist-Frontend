import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {

 
    return (
      
      <>
      <div className="flex overflow-hidden flex-col items-center px-8 py-10 mx-auto w-full  max-w-[1430px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap items-center self-stretch w-full max-md:max-w-full">
       
        
      </div>
      <h2 className="flex-1 shrink self-stretch my-auto text-xl font-semibold text-center text-black basis-5 max-md:max-w-full">
        
        </h2>
        <img loading="lazy" src={assets.OrderPlaced} alt="Login illustration" className="object-contain mt-8 max-w-full aspect-square w-[227px]" />
        <section className="flex flex-col mt-8 max-w-full text-base font-semibold text-zinc-800 w-[353px]">
          <h1 className="text-2xl mx-auto font-medium">Your Order is Confirmed!</h1>
         

          <div className="self-center mt-8 text-center text-zinc-500">
        <span className="text-gray-500">Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!</span>{" "}
        <Link to="/"><button type="submit" className="gap-5 self-stretch px-5 py-5 mt-6 w-full font-semibold text-center text-white whitespace-nowrap bg-zinc-500 min-h-[56px] rounded-[300px]">
        Continue Shopping
      </button></Link>
      </div>
        </section>
      </div>
  
  
       </>
    );

  
}

export default PlaceOrder