import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductGrid from './ProductGrid';


const RelatedProducts = ({category,id}) => {
    const {products}=useContext(ShopContext);
    
    console.log(category)
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        const Suggestions = products.filter((item) => item.category == category && item.id != id )
        console.log('suggestions',Suggestions)
        setfilteredProducts(Suggestions)},[]
    

    )
    console.log("related products",filteredProducts)

  return filteredProducts[0]? (
    <ProductGrid products={filteredProducts} text='Related Products'/>
  ) : <div className='opacity-0'></div>
}

export default RelatedProducts