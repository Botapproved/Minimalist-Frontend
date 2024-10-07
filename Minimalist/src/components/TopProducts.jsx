import React, { useEffect, useState } from 'react';
import { ChevronDown} from 'lucide-react';
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';



const TopProducts = () => {
  const {products, currency} = useContext(ShopContext);
  const [bestSeller,setbestSeller] = useState([])
  useEffect(()=>{
    const topProduct = products.filter((item) => (item.bestseller));
    setbestSeller(topProduct)
  },[])

  console.log(products)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Top Products</h1>
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
        {bestSeller.map((product) => (
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
      <div className="mt-8 text-center">
        {/* <p className="mb-4">Showing 20 of 48 results</p> */}
        <Link to='/collection'><button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
          Show more <span className="ml-1">&gt;</span>
         
        </button></Link>
        
      </div>
    </div>
  );
};

export default TopProducts;
