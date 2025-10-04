import React from "react";
import logo from "../../../assets/logo.svg"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white/60 backdrop-blur-lg flex items-center justify-between h-20 px-8 rounded-bl-[15px] rounded-br-[15px]">
          <a href="#" className="flex items-center space-x-3">
            <img src={logo}/>
          </a>

          <nav className="hidden lg:flex items-center space-x-10">
            <a href="#" className="text-gray-800 font-semibold hover:text-pink-500 transition-colors">Home</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-pink-500 transition-colors">About Me</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-pink-500 transition-colors">Streaming Videos</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-pink-500 transition-colors">Pages</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-pink-500 transition-colors">Blog</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-pink-500 transition-colors">Contact</a>
            <button className="flex items-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-400 to-pink-600   hover:from-pink-600 hover:to-orange-400 rounded-[5px] transition-all">
              + Follow Me
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
