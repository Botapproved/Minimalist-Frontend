import React from 'react'
import { Image } from 'lucide-react';
import { Minus, Plus, X } from "lucide-react";
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 pb-24 max-w-2xl min-h-screen flex flex-col">
    <div className="flex justify-between items-center py-6">
      <h1 className="text-2xl font-semibold">Cart</h1>
      
      <button variant="ghost" size="icon" onClick={() =>navigate(-1)}>
        <X className="h-6 w-6" />
        <span className="sr-only cursor-pointer">Close</span>
      </button>
      
    </div>
    <div className="flex-grow overflow-hidden space-y-6">
      <CartItem
        image={assets.Product1}
        title="Luxe Armchair - Left Arm Chute"
        description="Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspira..."
        price="$899.00"
      />
      <CartItem
        image={assets.Product2}
        title="Round Terra Marble Center Table"
        description="Let's take a look at how Japanese and Scandinavian styles combine to create bea..."
        price="$369.00"
      />
    </div>
    <div className="mt-8">
    <Button text="Proceed to payment" />
      </div>
  </div>
);
}

function CartItem({ image, title, description, price }) {
return (
  <div className="flex gap-4">
    <div className="w-28 h-28 bg-[#F8F8FB] rounded-2xl overflow-hidden flex-shrink-0">
      <img
        src={image}
        alt={title}
        width={112}
        height={112}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 space-y-1">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 custom4 line-clamp-2">{description}</p>
      <div className="text-xl font-semibold text-slate-500">{price}</div>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300" />
          <div className="w-5 h-5 rounded-full bg-[#F3D8C7] border border-[#F3D8C7]" />
          <div className="w-5 h-5 rounded-full bg-[#E5ECF4] border border-[#E5ECF4]" />
        </div>
        <div className="flex items-center border rounded-full bg-[#F8F8FB]">
          <button variant="ghost" size="icon" className="h-8 w-8 rounded-l-full">
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </button>
          <input
            type="number"
            className="h-8 w-12 border-none bg-transparent text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value="1"
          />
          <button variant="ghost" size="icon" className="h-8 w-8 rounded-r-full">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart