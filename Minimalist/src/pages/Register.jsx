import React from "react";
import SocialLogin from "../components/SocialLogin";
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';



const Register = () =>{
    const navigate = useNavigate();
    return (
        <>
        <div className="flex overflow-hidden flex-col items-center px-8 py-10 mx-auto w-full  max-w-[1430px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap items-center self-stretch w-full max-md:max-w-full">
          <div className="flex  justify-center items-center self-stretch  my-auto w-11 h-11 bg-slate-50 rounded-[300px]">
            <img loading="lazy" src={assets.Close} alt="" className="object-contain self-stretch  w-9 aspect-square cursor-pointer"  onClick={() => navigate(-1)}/>
          </div>
          
        </div>
        <h2 className="flex-1 shrink self-stretch my-auto text-xl font-semibold text-center text-black basis-5 max-md:max-w-full">
            Register
          </h2>
          <img loading="lazy" src={assets.NightStand} alt="Login illustration" className="object-contain mt-8 max-w-full aspect-square w-[227px]" />
          <section className="flex flex-col mt-8 max-w-full text-base font-semibold text-zinc-800 w-[353px]">
            
            <h1 className="text-2xl mx-auto font-medium">Let's setup your account</h1>
            <form className="flex flex-col items-end self-center mt-8 w-full max-w-[353px]">
          <div className="flex flex-col w-full whitespace-nowrap">
            <div className="flex overflow-hidden gap-2 items-center px-3.5 py-6 w-full bg-white rounded-3xl border border-purple-300 border-solid min-h-[64px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px]"
                placeholder="hello@exam|"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="flex flex-col mt-6 w-full whitespace-nowrap">
            <div className="flex overflow-hidden gap-2 items-center px-3.5 py-4 py-6 w-full bg-white rounded-3xl border border-solid shadow-sm border-stone-300 min-h-[64px]">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                className="flex-1 shrink self-stretch my-auto opacity-50 basis-0"
                placeholder="Password"
                aria-label="Password"
              />
              </div>
          </div>
          <a href="#" className="mt-6 font-semibold text-center">Forgot password?</a>
          <button type="submit" className="gap-5 self-stretch px-5 py-5 mt-6 w-full font-semibold text-center text-white whitespace-nowrap bg-zinc-500 min-h-[56px] rounded-[300px]">
            Login
          </button>
        </form>
            <SocialLogin />
            <div className="self-center mt-8 text-center text-zinc-500">
          <span className="text-gray-500">First time here?</span>{" "}
          <a href="#" className="font-semibold text-zinc-500">Create an account</a>
        </div>
          </section>
        </div>
    
    
         </>
      );
}

export default Register;