import React from 'react';

function SocialLogin() {
  const socialOptions = [
    { name: 'Google', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/802d7d0ed7f192ee827312c69d7043a9d45b5b22763e35ee35195793066d7359?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210' },
    { name: 'Apple', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a7d4b9b5785750811522d9877abc317f82b608d65f4549da43812882d26a724?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210' }
  ];

  return (
    <>
      <div className="flex justify-between items-center mt-8 w-full text-center text-gray-500 whitespace-nowrap">
        <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-500 border-solid basis-10 w-[145px]" />
        <div className="gap-2.5 self-stretch px-5 my-auto">OR</div>
        <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-500 border-solid basis-10 w-[145px]" />
      </div>
      {socialOptions.map((option, index) => (
        <button
          key={index}
          className="flex gap-3 justify-center items-center px-5 py-4 mt-8 w-full text-center border border-solid border-zinc-500 min-h-[56px] rounded-[300px]"
        >
          <img loading="lazy" src={option.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <span className="self-stretch my-auto">Continue with {option.name}</span>
        </button>
      ))}
    </>
  );
}

export default SocialLogin;