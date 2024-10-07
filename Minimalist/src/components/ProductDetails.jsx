import React from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';


function ProductDetails({product}) {
    
    console.log('id',product.id)
    const colors = [
        { name: 'Light Gray', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fae420755fcdc4109f071d55d6bb45e72487948de7908a597efd81eeb740939d?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210' },
        { name: 'Dark Gray', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5537cb9e72c589e07eb49cf2f60cc1d9e2c0e4f4490f56eb7a3f82d33be8ea3d?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210' },
        { name: 'Beige', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/150d4125db96068b2302e69b614aaee170b0ed7bad673145698352afe4c92618?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210' }
      ];

      const features = [
        { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/64f0fbf39800247055723966b2ccf81060bbf3b72e64bcee4452d240d28b5bff?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210', text: 'Free shipping included' },
        { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b670256eb51b73a73bb08a4f35c1bf91f04b685388461f6368c29393db0cb31?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210', text: 'Made from the best of materials sourced' }
      ];
  return (
    <main className="flex overflow-hidden flex-col ">
      <section className="flex overflow-hidden flex-col px-20 py-16 w-full  max-md:px-5 max-md:max-w-full">
        <BreadcrumbNav title={product.name} category={product.category}/>
        <div className="flex flex-wrap gap-8 items-start mt-8 w-full max-md:max-w-full">
          <ProductImage image={product.image[0]}/>
          <div className="flex flex-col flex-1 shrink pr-4 pl-8 basis-0 min-w-[240px] max-md:pl-5 max-md:max-w-full">
            <ProductInfo product={product}/>
            <div className="flex flex-wrap gap-10 justify-between mt-8 w-full max-md:max-w-full">
          




    <div className="flex gap-6 items-start my-auto">
      {colors.map((color, index) => (
        <div key={color.name} className="flex relative gap-2.5 items-start p-0.5 rounded-[300px] w-[54px]">
          {index === 0 && (
            <div className="flex z-0 shrink-0 border-2 border-solid bg-stone-200 border-zinc-500 h-[50px] w-[50px]" />
          )}
          <img 
            src={color.image} 
            alt={`${color.name} color option`} 
            className={`object-contain ${index === 0 ? 'absolute top-2/4 left-2/4 z-0 shrink-0 -translate-x-2/4 -translate-y-2/4' : ''} aspect-square h-[50px] w-[50px]`}
          />
        </div>
      ))}
    </div>

              <div className="flex overflow-hidden gap-2 justify-center items-center px-3.5 py-4 h-full text-2xl font-semibold whitespace-nowrap rounded-3xl border border-solid bg-slate-50 border-neutral-300 text-zinc-800 w-[77px]">
      <div className="flex gap-2 items-center self-stretch my-auto">
        <span className="self-stretch my-auto opacity-50">1</span>
      </div>
    </div>
            </div>
            <div className="flex gap-10 items-start py-4 mt-8 w-full text-xl font-semibold text-center text-white max-md:max-w-full">
      <button className="flex-1 shrink gap-5 self-stretch p-5 w-full bg-slate-500 hover:bg-slate-600 min-h-[63px] min-w-[240px] rounded-[300px] max-md:max-w-full">
        Buy now
      </button>
    </div>
    <div className="flex flex-col items-start py-6 mt-2.5 w-full text-sm text-black max-md:max-w-full">
      {features.map((feature, index) => (
        <div key={index} className={`flex gap-2 items-start ${index > 0 ? 'mt-8' : ''} max-w-full w-[298px]`}>
          <img src={feature.icon} alt="" className="object-contain shrink-0 w-5 aspect-square" />
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
          </div>
        </div>
      </section>
      <RelatedProducts category={product.category} id={product.id}/>
    </main>
  );
}

export default ProductDetails;