import React from 'react';
import { ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets';

const categories = [
  {
    title: "Sitting Room",
    image: assets.SittingRoom,
    alt: "A modern grey sofa with white pillows",
  },
  {
    title: "Accessories",
    image: assets.Accessories,
    alt: "A potted plant with large green leaves",
  },
  {
    title: "Kitchen",
    image: assets.Kitchen,
    alt: "A red kettle",
  },
  {
    title: "Bedroom",
    image: assets.Bedroom,
    alt: "A wooden bedside table",
  },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`relative overflow-hidden rounded-lg ${
              index === 0 
                ? "col-span-1 md:col-span-2 lg:col-span-4 h-[400px]"
                : index === 3
                ? "col-span-1 md:col-span-2 h-[300px]"
                : "h-[300px]"
            } bg-muted`}
          >
            <img
              src={category.image}
              alt={category.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-grey hover:bg-slate-600 hover:bg-opacity-20 hover:text-black flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-black mb-2">{category.title}</h3>
              <button className="inline-flex items-center justify-center rounded-full bg-transparent border border-black text-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;