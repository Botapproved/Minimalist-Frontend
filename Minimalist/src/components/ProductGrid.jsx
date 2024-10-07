import React, { useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';


const ProductGrid = ({ products,text }) => {
  // Destructure products and currency from context
  const { products: allProducts, currency } = useContext(ShopContext);

  // Use passed products or default to all products from the context
  const displayedProducts = products || allProducts;
  const title = text || "Collection";
  console.log("display",displayedProducts)

  
  
    return (
      <div className="container mx-auto px-4 py-8 mb-5">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
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
        {displayedProducts.map((product) => (
          <Link className='cursor-pointer' to={`/product/${product.id}`}>
          <div key={product.id} className="space-y-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square rounded object-cover  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-200"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium truncate flex-grow">{product.name}</h2>
              <span className="text-sm font-medium rounded-lg bg-white px-2 py-1 ml-2">
                {currency}{product.price}
              </span>
            </div>
          </div>
          </Link>
        ))}
      </div>
        
      </div>
    );
  };
  
  export default ProductGrid;
  