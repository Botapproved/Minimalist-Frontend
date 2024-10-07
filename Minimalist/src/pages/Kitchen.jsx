import React, { useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Kitchen = () => {
    const {products, currency} = useContext(ShopContext);
    const [filteredProducts, setfilteredProducts] = useState([]);
    useEffect(()=>{
        const sittingProduct = products.filter((item) => (item.category=='Kitchen'));
        console.log(sittingProduct)
        setfilteredProducts(sittingProduct);
      },[])
      console.log(filteredProducts);
  return (
    
    <ProductGrid products={filteredProducts} text="Kitchen" />
  )
}

export default Kitchen