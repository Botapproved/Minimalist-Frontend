import React from 'react';

function Button({ text }) {
  return (
    <button className="flex flex-col flex-1 items-center mt-8 max-w-full text-xl leading-loose text-center text-white w-[720px]">
      <div className="gap-5 self-stretch px-5 py-4 w-full bg-slate-500 hover:bg-slate-600 min-h-[63px]">
        {text}
      </div>
    </button>
  );
}

export default Button;