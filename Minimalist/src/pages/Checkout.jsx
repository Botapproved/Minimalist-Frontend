import React from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const fields = [
        { placeholder: 'First name', type: 'text' },
        { placeholder: 'Last name', type: 'text' },
        { placeholder: '+1', type: 'tel', icon: true },
        { placeholder: 'Address', type: 'text' },
      ];
    const navigate = useNavigate()
  return (
    <main className="flex overflow-hidden flex-col items-center px-8 pt-8  max-md:px-5">
        <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto w-11 h-11 bg-slate-50 rounded-[300px]">
        <img loading="lazy" src={assets.Close} alt="" className="object-contain cursor-pointer self-stretch my-auto w-6 aspect-square" onClick={() => navigate(-1)} />
      </div>
      <header className="flex flex-wrap items-center justify-center self-stretch w-full max-md:max-w-full">
      
        <h1 className="self-stretch my-auto text-xl font-semibold text-center text-black w-[568px] max-md:max-w-full">
          Checkout
        </h1>
      </header>
      <section className="flex flex-col items-center mt-8 max-w-full w-[353px]">
      
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap gap-2.5 justify-between items-center w-full">
        <h2 className="self-stretch my-auto text-xl font-semibold text-gray-500">
          Customer Information
        </h2>
        <p className="self-stretch my-auto text-base text-center text-slate-500">
          <span className="text-gray-500">Have an account?</span>{" "}
          <span className="font-semibold">Login</span>
        </p>
      </div>
      <InputField
        type="email"
        placeholder="hello@exam|"
        className="mt-6"
      />
    </div>
 
    <div className="flex flex-col mt-8 w-full text-base text-zinc-800">
      <h2 className="text-xl font-semibold text-gray-500">Shipping address</h2>
      {fields.map((field, index) => (
        <InputField
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          icon={field.icon}
          className="mt-6"
        />
      ))}
      <div className="flex gap-4 items-start mt-6 w-full  whitespace-nowrap">
        <InputField type="text" placeholder="City" className="w-[50%]" />
        <InputField type="text" placeholder="Country" className="w-[50%]" />
      </div>
    </div>
        <Button text="Proceed to payment" />
      </section>
    </main>
  );
}

export default Checkout;