import React from "react";
import logo from "../../../assets/logo-white.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Instagram_feed_1 from "../../../assets/Instagram_feed_1.png";
import Instagram_feed_2 from "../../../assets/Instagram_feed_2.png";
import Instagram_feed_3 from "../../../assets/Instagram_feed_3.png";
import Instagram_feed_4 from "../../../assets/Instagram_feed_4.png";

const FooterSection = () => {
  const categories = [
    "Music",
    "Sports",
    "Gaming",
    "Fashion",
    "Art",
    "Photography",
  ];

  const instagramImages = [
    Instagram_feed_1,
    Instagram_feed_2,
    Instagram_feed_3,
    Instagram_feed_4,
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top */}
        <div className="bg-gradient-to-r from-red-600 to-orange-400 rounded-b-2xl py-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <a href="#">
              <img src={logo} alt="Logo" className="w-52 sm:w-40" />
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex justify-center w-full lg:w-1/2">
            <form className="flex w-full bg-white rounded-full overflow-hidden max-w-lg">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-6 py-3 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-400 font-semibold text-white rounded-full m-1 transition-shadow"
              >
                Get Newsletter
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-end gap-3">
            <a className="rounded-full w-10 h-10 flex items-center justify-center bg-white-none border border-white/90 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition text-white">
              <FaFacebookF />
            </a>
            <a className="rounded-full w-10 h-10 flex items-center justify-center bg-white-none border border-white/90 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition text-white">
              <FaTwitter />
            </a>
            <a className="rounded-full w-10 h-10 flex items-center justify-center bg-white-none border border-white/90 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition text-white">
              <FaInstagram />
            </a>
            <a className="rounded-full w-10 h-10 flex items-center justify-center bg-white-none border border-white/90 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 text-gray-300">
          {/* Contact */}
          <div>
            <h5 className="font-bold mb-4 text-white">Get in Touch</h5>
            <a
              href="mailto:contact.me@gmail.com"
              className="hover:text-pink-500 text-lg"
            >
              samyakjain.developer@gmail.com
            </a>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-bold mb-4 text-white">Browse Categories</h5>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <a key={cat} href="#" className="hover:text-pink-500">
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div>
            <h5 className="font-bold mb-4 text-white">Instagram Feed</h5>
            <div className="flex flex-wrap gap-2">
              {instagramImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Instagram ${idx + 1}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 py-4 text-center text-gray-500">
          <p>Copyright &copy; {new Date().getFullYear()} Developed by Samyak</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

