import React from "react";
import card1 from "../../../assets/card1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";

import { FaUser, FaTag, FaArrowRight } from "react-icons/fa";

const articles = [
  {
    img: card1,
    date: { day: "10", month: "June" },
    author: "Admin",
    category: "Music",
    title: "Many of those Products Offer the Potential",
    link: "#",
  },
  {
    img: card2,
    date: { day: "10", month: "June" },
    author: "Admin",
    category: "Music",
    title: "Many of those Products Offer the Potential",
    link: "#",
  },
  {
    img: card3,
    date: { day: "10", month: "June" },
    author: "Admin",
    category: "Music",
    title: "Many of those Products Offer the Potential",
    link: "#",
  },
];

const ArticlesSection = () => {
  return (
    <section className="py-24 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Latest Articles & News</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full aspect-[402/265] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-lg text-center text-black uppercase">
                  <span className="block bg-red-500 text-white rounded-t px-2 py-1 text-sm font-semibold">
                    {article.date.day}
                  </span>
                  <span className="block px-3 py-1 text-sm">
                    {article.date.month}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-6 mb-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-red-600" />
                    <span>By {article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTag className="text-red-600" />
                    <span>{article.category}</span>
                  </div>
                </div>

                <h4 className="text-lg md:text-xl font-semibold mb-4 hover:text-red-500">
                  <a href={article.link}>{article.title}</a>
                </h4>

                <a
                  href={article.link}
                  className="inline-flex items-center font-semibold text-red-600 hover:text-black"
                >
                  Read More <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
