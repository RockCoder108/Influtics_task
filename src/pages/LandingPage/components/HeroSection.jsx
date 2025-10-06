import React from "react";
import bannerBg from "../../../assets/banner.png";
import homeImg from "../../../assets/home.png";
import vector1 from "../../../assets/banner_vector_1.svg";
import vector2 from "../../../assets/banner_vector_2.svg";
import vectorText1 from "../../../assets/banner_vector.svg";
import vectorText2 from "../../../assets/banner_vector12.svg";
import love from "../../../assets/love.svg";
import bryan from "../../../assets/bryan.png";
import banner_count from "../../../assets/banner_count.svg";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden z-10 pt-[8vw] sm:pt-[126px] lg:pt-[8.125vw]"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative vector at bottom right */}
      <img
        src={vector2}
        alt="decor vector"
        className="absolute bottom-[115px] right-0 w-auto h-auto pointer-events-none"
      />

      {/* Main Container */}
      <div className="mx-[7vw] sm:mx-[75px] max-[1199px]:mx-[45px] max-[479px]:mx-[15px] mt-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12">
          {/* Left Text Section */}
          <div className="relative space-y-8">
            {/* Notification */}
            <div className="bg-white flex items-center gap-2 rounded-full px-3 py-2 shadow-md w-max relative">
              <img src={bryan} alt="Bryan" className="w-10 h-10 rounded-full" />
              <span className="text-gray-500 text-sm font-medium">
                Bryan has liked
              </span>
              <span className="absolute -top-2 right-2 shadow-md rounded-full">
                <img src={love} alt="like icon" className="w-6 h-6" />
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-bold leading-[1.05] text-white text-[clamp(34px,5.73vw,110px)] space-y-2">
              <span className="block">
                I&apos;m{" "}
                <span className="relative inline-block z-10">
                  <span className="relative z-20">Linda</span>
                  {/* Decorative vectors behind text */}
                  <img
                    src={vectorText1}
                    alt="vector bg"
                    className="absolute -top-[10px] left-0 w-full h-full z-0"
                  />
                  <img
                    src={vectorText2}
                    alt="vector overlay"
                    className="absolute -top-[10px] -left-2 w-full h-full z-40"
                  />
                </span>{" "}
                Susan
              </span>
              <span className="block whitespace-nowrap">
                Beauty & Lifestyle <br /> Influencer
              </span>
            </h1>

            {/* Buttons */}
            <div className="flex gap-5 flex-wrap">
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-8 py-3 rounded-[10px] shadow-md hover:from-pink-500 hover:to-orange-400 transition-all duration-300">
                About Me
              </button>
              <button className="border border-pink-400 text-white font-semibold px-8 py-3 rounded-[10px] hover:bg-pink-500 transition-all duration-300">
                Contact Me
              </button>
            </div>

            {/* Floating vector on text side */}
            <img
              src={vector1}
              alt="vector"
              className="absolute -bottom-16 right-[370px] w-auto h-auto pointer-events-none"
            />
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Floating Like Bubble */}
            <div className="absolute top-[80%] left-[-40%] sm:left-10 bg-white flex items-center gap-2 rounded-full px-3 py-2 shadow-md w-max z-20">
              <img
                src={bryan}
                alt="Bryan"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">
                Bryan has liked
              </span>
              <span className="absolute -top-2 -right-2 shadow-md rounded-full bg-white p-1">
                <img
                  src={love}
                  alt="like icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </span>
            </div>

            {/* Main Image */}
            <img
              src={homeImg}
              alt="Linda"
              className="w-[60vw] sm:w-[40vw] lg:w-[33vw] max-w-lg relative z-10"
            />

            {/* Follower Badge */}
            <div
              className="absolute top-[25%] right-[-3%] bg-no-repeat bg-contain text-center flex flex-col items-center justify-center z-20"
              style={{
                width: "110px", // ✅ Set explicit width
                height: "120px", // ✅ Set explicit height
                
              }}
            >
              <img src={banner_count} alt="follower badge" className="w-full h-full absolute top-0 left-0 z-0" />
              <span className="block text-[#E91E63] font-bold text-3xl leading-none z-10">
                74K
              </span>
              <span className="text-black text-sm font-medium z-10">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
