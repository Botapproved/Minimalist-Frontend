import React from 'react';

function ProductInfo({product}) {
  console.log(product)
  return (
    <div className="flex flex-col py-2 w-full max-md:max-w-full">
      <h1 className="flex-1 shrink w-full text-3xl font-medium text-zinc-800 max-md:max-w-full">
       {product.name}
      </h1>
      <div className="flex gap-4 items-center self-start mt-2">
        <div className="flex gap-2.5 items-start self-stretch my-auto">
          {[1, 2, 3, 4].map((star) => (
            <img key={star} src="https://cdn.builder.io/api/v1/image/assets/TEMP/259fdebcc79cc587be27415ac0b91b080efa6f81927ae888ad28b98fe439b86e?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210" alt="Full star" className="object-contain shrink-0 w-5 aspect-square" />
          ))}
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/999f6c036cf232298c95ee2158bbb7c3151e99128d4b34ef2390eb7e8e075804?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210" alt="Half star" className="object-contain shrink-0 w-5 aspect-square" />
        </div>
        <span className="self-stretch my-auto text-sm text-gray-500">4.8 stars</span>
      </div>
      <div className="flex gap-1.5 items-center self-start mt-6 text-base whitespace-nowrap">
        <span className="self-stretch my-auto text-2xl font-semibold text-slate-500"> {product.price}</span>
        <span className="self-stretch my-auto text-gray-500">$1999.00</span>
        <span className="gap-2.5 self-stretch px-2 py-1 my-auto font-medium text-rose-500 bg-rose-500 bg-opacity-20 rounded-[300px]">
          -40%
        </span>
      </div>
      <p className="mt-6 text-xl leading-8 text-gray-500 max-md:max-w-full">
        {product.description}
      </p>
    </div>
  );
}

export default ProductInfo;