import React from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Payment() {
    const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);
    const fields = [
        { placeholder: 'Card Number', type: 'text' },
        { placeholder: 'Expiry Date', type: 'date' },
        { placeholder: 'CVV', type: 'number' },
        { placeholder: 'Name on Card', type: 'text' },
      ];
    const navigate = useNavigate()
  return (
    <main className="flex overflow-hidden flex-col items-center px-8 pt-8  max-md:px-5">
        <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto w-11 h-11 bg-slate-50 rounded-[300px]">
        <img loading="lazy" src={assets.Close} alt="" className="object-contain cursor-pointer self-stretch my-auto w-6 aspect-square" onClick={() => navigate(-1)} />
      </div>
      <header className="flex flex-wrap items-center justify-center self-stretch w-full max-md:max-w-full">
      
        <h1 className="self-stretch my-auto text-xl font-semibold text-center text-black w-[568px] max-md:max-w-full">
          Payment
        </h1>
      </header>
      <section className="flex flex-col items-center mt-8 max-w-full w-[353px]">
      
   
 
    <div className="flex flex-col mt-8 w-full text-base text-zinc-800">
      <h2 className="text-xl font-semibold text-gray-500">Card Details</h2>
      {fields.map((field, index) => (
        <InputField
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          icon={field.icon}
          className="mt-6"
        />
      ))}
     
    </div>
    <div onClick={() => navigate("/orderplaced")}>
       <Button className='w-fit'  text="Pay Now"/>

       </div>
      </section>
    </main>
  );
}

export default Payment