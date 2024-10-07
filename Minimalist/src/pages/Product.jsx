import React, { useState,useEffect } from 'react'
import ProductDetails from '../components/ProductDetails'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { products } from '../assets/assets'


const Product = () => {
  const {productId}=useParams();
  const {products} = useContext(ShopContext);
  const [productData,setproductData] = useState(false)
  const [image,setImage] = useState('')
  const fetchProductData =async() =>{
    products.map((item)=>{
      if (item.id === productId){
        setproductData(item);
        setImage(item.image[0])
        return null;
      }
    })

  }
  useEffect(()=>{
    fetchProductData();
  },[productId, products])


  return productData? (
    
    <ProductDetails product={productData}/>
  ) : <div className='opacity-0'></div>
}

export default Product