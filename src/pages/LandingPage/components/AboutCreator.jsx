import React from "react";
import content_creator_intro from "../../../assets/content_creator_intro.png";
import intro_vector from "../../../assets/intro_vector.svg";
import intro_live_bg from "../../../assets/intro_live_bg.png";
import umcoming_1 from "../../../assets/umcoming_1.png";
import umcoming_2 from "../../../assets/umcoming_2.png";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import checkmark from "../../../assets/checkmark.svg";
import { FaPlay } from "react-icons/fa";

const upcomingLives = [
  {
    img: umcoming_1,
    platform: "Facebook Live",
    platformLogo: facebook,
    title: "Smiley woman pop party studio medium shot",
    date: "25 Jun, 2024",
    descr:
      "consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.",
    link: "#",
  },
  {
    img: umcoming_2,
    platform: "Youtube Live",
    platformLogo: youtube,
    title: "Smiley woman pop party studio medium shot",
    date: "25 Jun, 2024",
    descr:
      "consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.",
    link: "#",
  },
];

const features = [
  "Non mattis nulla, in ultrices diam",
  "Web design done Delightful Visualization",
  "Alienum phaedrum torquatos nec eu, vis detraxit periculis",
  "Software Makes Your Profit Double if You Scale Properly.",
];

const AboutCreator = () => {
  return (
    <div
      className="relative bg-black bg-cover bg-center py-12 md:py-24"
      style={{ backgroundImage: `url(${intro_live_bg})` }}
    >
      {/* Intro Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="container mx-auto px-4 pr-0 mt-0 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Text */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl font-bold mb-6">
              I'm a Social Media influencer & digital content creator
            </h2>
            <p className="mb-6 text-base md:text-lg">
              consectetur adipiscing elit. Donec non mattis nulla, in ultrices
              diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut
              non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec
              eget fermentum libero, ac aliquet lectus.
            </p>

            {/* Feature List */}
            <ul className="mb-8 space-y-3 list-none pl-0">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="relative pl-9 font-semibold text-white/90"
                >
                  <img
                    src={checkmark}
                    alt="checkmark"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="contact.html"
              className="relative inline-block px-6 py-3 font-semibold rounded-md bg-pink-500 hover:bg-black transition text-white"
            >
              Contact Me
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative flex justify-end lg:justify-end">
            <a
              href="https://youtu.be"
              className="absolute left-14 top-1/2 transform -translate-y-1/2 w-28 h-28 flex items-center justify-center rounded-full bg-white text-red-500 shadow-[0_0_0_20px_rgba(255,255,255,0.5)] hover:bg-red-500 hover:text-white transition"
            >
              <FaPlay className="text-2xl" />
            </a>
            <img
              src={content_creator_intro}
              alt="intro"
              className="rounded-l-full max-h-[35vw] ml-auto"
            />
          </div>
        </div>

        {/* Vector */}
        <img
          src={intro_vector}
          alt="vector"
          className="absolute top-7 -left-[32rem]"
          style={{
            animation: "spin 10s linear infinite",
          }}
        />
      </section>

      {/* Upcoming Lives Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center border-y border-white/20 py-10 mb-12">
            <h2 className="text-4xl font-bold text-white">My Upcoming Lives</h2>
          </div>

          <div className="flex flex-col gap-8">
            {upcomingLives.map((live, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-white/5 rounded-2xl p-6"
              >
                <div className="flex-shrink-0 rounded-2xl overflow-hidden lg:max-w-[26%]">
                  <img
                    src={live.img}
                    alt={live.title}
                    className="w-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1 text-white">
                  <a
                    href={live.link}
                    className="inline-flex items-center gap-2 mb-3 text-sm font-semibold"
                  >
                    <img
                      src={live.platformLogo}
                      alt={live.platform}
                      className="w-5 h-5"
                    />
                    {live.platform}
                  </a>
                  <h5 className="text-xl font-bold mb-2">{live.title}</h5>
                  <span className="block text-sm font-medium mb-3">
                    {live.date}
                  </span>
                  <p className="border-t border-white/20 pt-3 mb-4 text-white/70 text-sm">
                    {live.descr}
                  </p>
                  <a
                    href={live.link}
                    className="inline-block px-5 py-2 rounded-md bg-pink-500 hover:bg-black transition font-semibold text-white"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCreator;
