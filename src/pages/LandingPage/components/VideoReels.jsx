import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Bell } from "lucide-react";
import facebook from "../../../assets/facebook.png";
import reel_thumb_1 from "../../../assets/reel_thumb_1.jpg";
import reel_thumb_2 from "../../../assets/reel_thumb_2.jpg";
import reel_thumb_3 from "../../../assets/reel_thumb_3.jpg";
import reel_thumb_4 from "../../../assets/reel_thumb_4.jpg";
import reel_thumb_5 from "../../../assets/reel_thumb_5.jpg";

const VideoReels = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const reels = [
    {
      thumb: reel_thumb_1,
      title: "Can Robot Solve This? ...",
      views: "16M views",
      platform: "Facebook Reel",
      platformIcon: facebook,
    },
    {
      thumb: reel_thumb_2,
      title: "Can Robot Solve This? ...",
      views: "12M views",
      platform: "Facebook Reel",
      platformIcon: facebook,
    },
    {
      thumb: reel_thumb_3,
      title: "Can Robot Solve This? ...",
      views: "21M views",
      platform: "Facebook Reel",
      platformIcon: facebook,
    },
    {
      thumb: reel_thumb_4,
      title: "Can Robot Solve This? ...",
      views: "18M views",
      platform: "Facebook Reel",
      platformIcon: facebook,
    },
    {
      thumb: reel_thumb_5,
      title: "Can Robot Solve This? ...",
      views: "14M views",
      platform: "Facebook Reel",
      platformIcon: facebook,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with buttons */}
        <div className="flex justify-center items-center mb-12 relative">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 bg-red-100 rounded-full shadow-md flex items-center justify-center text-red-600 hover:bg-red-500 hover:text-white transition-colors absolute left-0 z-10"
          >
            <ChevronLeft />
          </button>

          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Latest Video Reels
          </h2>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 bg-red-100 rounded-full shadow-md flex items-center justify-center text-red-600 hover:bg-red-500 hover:text-white transition-colors absolute right-0 z-10"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Scrollable Reels Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 px-2 pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {reels.map((reel, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-70 snap-start group transition-transform hover:scale-105"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="relative cursor-pointer">
                  <img
                    src={reel.thumb}
                    alt={reel.title}
                    className="w-full h-[450px] object-cover"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors">
                      <Play size={32} className="text-white fill-white" />
                    </div>
                  </div>

                  {/* Platform badge (centered bottom) */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1 px-3 py-1 bg-white/80 rounded-full text-xs text-gray-800 font-semibold">
                    <img
                      src={reel.platformIcon}
                      alt={reel.platform}
                      className="w-4 h-4"
                    />
                    <span>{reel.platform}</span>
                  </div>
                </div>

                {/* Title and views */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 truncate">
                    <a href="#" className="hover:text-red-500">
                      {reel.title}
                    </a>
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Bell size={14} className="mr-2 text-red-500" />
                    <span>{reel.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReels;
