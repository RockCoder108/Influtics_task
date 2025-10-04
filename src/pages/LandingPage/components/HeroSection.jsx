import React from "react";
import home from "../../../assets/home.png"
import bryan from "../../../assets/bryan.png"
import love from "../../../assets/love.svg"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-300 via-orange-100 to-yellow-100 pt-32 overflow-hidden">
      <div className="grid grid-cols-[65fr_35fr] pl-10 pr-10">
        <div className="flex flex-col justify-center space-y-4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              <span className="block">I'm  Linda Susan</span>
              <span className="block">Beauty & Lifestyle Influencer</span>
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md hover:shadow-xl transition-all duration-300">
                About Me
              </button>
              <button className="px-8 py-3 text-lg font-semibold text-gray-700 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <p>developer</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;