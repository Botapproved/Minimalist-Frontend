import React from 'react';

function InputField({ type, placeholder, icon, className }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex flex-col w-full">
        <div className="flex overflow-hidden gap-2 items-center px-3.5 py-4 py-6 w-full bg-white rounded-3xl border border-solid shadow-sm border-stone-300 min-h-[64px]">
          {icon && (
            <div className="flex shrink-0 self-stretch my-auto w-6 h-6 bg-zinc-500" />
          )}
          <input
            type={type}
            placeholder={placeholder}
            className="flex-1 shrink self-stretch my-auto opacity-50 basis-0"
            aria-label={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

export default InputField;