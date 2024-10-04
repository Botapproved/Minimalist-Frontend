import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-black text-[#F3F1ED] py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="flex font-custom1 flex-col space-y-2">
            <Link to="/">
              <p className="  hover:text-gray-300">Home</p>
            </Link>
            <Link to="/blog">
              <p className="hover:text-gray-300">Blog</p>
            </Link>
            <Link to="/sale">
              <p className="hover:text-gray-300">Sale</p>
            </Link>
            <Link to="/about-us">
              <p className="hover:text-gray-300">About us</p>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex font-custom1 flex-col items-center">
            <h3 className="text-sm  mb-2">Contact Us</h3>
            <p className="text-2xl font-custom2 mb-4">+1 999 888-76-54</p>
            <h3 className="text-sm  mb-2">Email</h3>
            <p className="text-sm">hello@logoipsum.com</p>
          </div>

          {/* Address and Hours */}
          <div className="flex flex-col items-end">
            <div className="text-right">
              <h3 className="text-sm font-semibold mb-2">ADDRESS</h3>
              <p className="text-sm">2118 Thornridge Cir. Syracuse,</p>
              <p className="text-sm">Connecticut 35624</p>
            </div>
            <div className="text-right mt-4">
              <h3 className="text-sm font-semibold mb-2">OPENING HOURS</h3>
              <p className="text-2xl font-bold">9am—6pm</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2024 — Copyright
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
