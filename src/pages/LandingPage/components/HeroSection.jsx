import React from "react";
import banner from "../../../assets/banner.png";
import banner_vector from "../../../assets/banner_vector.svg";
import banner_vector12 from "../../../assets/banner_vector12.svg";
import home from "../../../assets/home.png";
import banner_vector_1 from "../../../assets/banner_vector_1.svg";
import banner_vector_2 from "../../../assets/banner_vector_2.svg";
import love from "../../../assets/love.svg";
import bryan from "../../../assets/bryan.png";
import BryanReaction from "./BryanReaction";

const HeroSection = () => {
  return (
    <section
      className="relative pt-32 pl-0 overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="grid ">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Linda</span>
                <img
                  src={banner_vector}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full z-0"
                />
                <img
                  src={banner_vector12}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full z-20"
                />
              </span>{" "}
              Susan <br /> Beauty & Lifestyle Influencer
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-400 rounded-[10px] transition-all duration-300">
                About Me
              </button>
              <button className="px-8 py-3 text-lg font-semibold text-white bg-white-0 border from-border-pink-300 to-border-orange-300 hover:bg-pink-500 hover:border-none rounded-[10px] transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-full flex items-end justify-center lg:justify-end">
            <img
              src={home}
              alt="Linda Susan, Influencer"
              className="relative z-10 w-full max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


{/* 

  
            <div className="absolute top-1/4 -left-8 lg:left-0 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center animate-pulse z-20">
              <img
                src={bryan}
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <p className="text-sm font-bold">Bryan has</p>
                <p className="text-xs text-gray-500">liked</p>
              </div>
              <img src={love} alt="Heart icon" className="w-5 h-5 ml-2" />
            </div>

*/}