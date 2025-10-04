import React from "react";
import facebookIcon from "../../../assets/facebook.png";
import instagramIcon from "../../../assets/instagram.png";
import tiktokIcon from "../../../assets/tiktok.png";
import youtubeIcon from "../../../assets/youtube.png";

const SocialStats = () => {
  const socials = [
    {
      name: "Facebook",
      followers: "20.5k followers",
      icon: facebookIcon,
      buttonText: "Follow Me",
    },
    {
      name: "Instagram",
      followers: "30.9k followers",
      icon: instagramIcon,
      buttonText: "Follow Me",
    },
    {
      name: "Tiktok",
      followers: "2.5M followers",
      icon: tiktokIcon,
      buttonText: "Follow Me",
    },
    {
      name: "YouTube",
      followers: "1.69M Subscribers",
      icon: youtubeIcon,
      buttonText: "Subscribe",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social) => (
            <div
              key={social.name}
              className="bg-gray-50 p-2 rounded-2xl border border-gray-100 flex items-center justify-between transition-all"
            >
              <div className="flex items-center">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-12 h-12"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-500">{social.followers}</p>
                </div>
              </div>
              <a
                href="#"
                className="text-sm text-white px-4 py-2 rounded-[10px] font-semibold bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-600 transition-all duration-300"
              >
                {social.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialStats;
