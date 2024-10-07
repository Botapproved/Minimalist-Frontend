import React from 'react';

function ProductImage({image}) {
  console.log('Image:',image)
  return (
    <div className="flex relative flex-col min-w-[240px] w-[624px] max-md:max-w-full">
      <div className="flex overflow-hidden z-0 flex-col max-w-full rounded-md w-[624px]">
        <img src={image} alt="Product Image" className="object-contain w-full aspect-square max-md:max-w-full" />
      </div>
      <button className="flex absolute z-0 gap-4 justify-center items-center self-start px-6 py-2.5 text-base font-medium text-slate-500 bg-white right-[23px] rounded-[300px] top-[23px] max-md:px-5">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/187f62a8ee66df3c253cd55a31b015f19f02d0afe2d9a4c6222a23315bd896c6?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <span>View in AR</span>
      </button>
    </div>
  );
}

export default ProductImage;