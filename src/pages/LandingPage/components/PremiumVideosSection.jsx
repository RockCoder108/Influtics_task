import React from "react";
import video_1 from "../../../assets/video_1.jpg";
import video_2 from "../../../assets/video_2.jpg";
import video_3 from "../../../assets/video_3.jpg";
import video_4 from "../../../assets/video_4.jpg";
import video_5 from "../../../assets/video_5.jpg";
import video_6 from "../../../assets/video_6.jpg";

const PremiumVideosSection = () => {
  const videosTop = [video_1, video_2, video_3];
  const videosBottom = [video_4, video_5, video_6];

  const renderVideoCard = (img, isPremium = true) => (
    <div
      key={img}
      className="relative rounded-2xl overflow-hidden max-w-[30vw] min-w-[30vw] md:max-w-[350px] sm:max-w-[315px] bg-gray-200 group flex-shrink-0"
    >
      <img src={img} alt="Video Thumbnail" className="w-full object-cover" />
      <div className="absolute inset-5 flex flex-col justify-between">
        {/* top controls */}
        <div className="flex justify-between">
          <a
            href="https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg"
            className="border border-white rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-white hover:text-pink-600 transition"
          >
            <i className="flaticon-play"></i>
          </a>
          {isPremium && (
            <span className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full">
              <i className="flaticon-premium-quality"></i>
            </span>
          )}
        </div>

        {/* bottom info */}
        <div className="transform translate-y-[calc(100%-27px)] group-hover:translate-y-0 transition-all">
          <span className="inline-block bg-white text-pink-600 font-semibold text-xs px-3 py-1 rounded-full mb-2">
            {isPremium ? "$5.00" : "Free"}
          </span>
          <h5 className="font-bold text-xl text-white mb-1 hover:text-pink-400">
            Smiley woman pop party studio medium shot
          </h5>
          <div className="text-white/90 text-sm font-light flex gap-3">
            <span>16M views</span>
            <span className="border-l border-white pl-2">49 minutes ago</span>
          </div>
        </div>
      </div>

      {/* overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-600/40 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all"></div>
    </div>
  );

  return (
    <section className="py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My Latest Premium Videos
          </h2>
          <a
            href="#"
            className="relative text-pink-600 font-semibold after:absolute after:inset-[1px] after:bg-white after:rounded-md after:-z-10 hover:text-white hover:after:opacity-0 transition"
          >
            <i className="flaticon-premium-quality mr-1"></i> View All Videos
          </a>
        </div>

        {/* Slider 1 - Scroll Left */}
        <div className="flex gap-6 animate-scroll-left">
          {[...videosTop, ...videosTop].map((img) =>
            renderVideoCard(img, true)
          )}
        </div>

        {/* Slider 2 - Scroll Right */}
        <div className="flex gap-6 mt-10 animate-scroll-right">
          {[...videosBottom, ...videosBottom].map((img, i) =>
            renderVideoCard(img, i !== 0)
          )}
        </div>
      </div>
    </section>
  );
};

export default PremiumVideosSection;
