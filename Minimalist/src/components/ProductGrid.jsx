import React from 'react';
import { ChevronDown } from 'lucide-react';
import { assets } from '../assets/assets';

const products = [
  { id: 1, name: 'Round Terra Marble Table', price: 34, image: assets.Product1 },
  { id: 2, name: 'Ceramic Rustic Vase', price: 11, image: assets.Product2 },
  { id: 3, name: 'Metro Luxe Duo Sofa', price: 120, image: assets.Product3 },
  { id: 4, name: 'Kitchen Bar Stool', price: 19, image: assets.Product4 },
  { id: 5, name: 'Luxe Modern Armchair', price: 60, image: assets.Product5 },
  { id: 6, name: 'Round Fluted Accent Table', price: 90, image: assets.Product6 },
  { id: 7, name: 'Round Terra Marble Side Table', price: 11, image: assets.Product7 },
  { id: 8, name: 'Luna Modern Round Ottoman', price: 14, image: assets.Product8 },
];

const ProductGrid = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Collection</h1>
          <div className="relative w-[180px]">
            <select className="block w-full bg-white border border-gray-300 text-gray-900 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="space-y-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square rounded object-cover  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-200"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-medium truncate flex-grow">{product.name}</h2>
                <span className="text-sm font-medium rounded-lg bg-white px-2 py-1 ml-2">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          {/* <p className="mb-4">Showing 20 of 48 results</p> */}
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
            Show more <span className="ml-1">&gt;</span>
           
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductGrid;
  