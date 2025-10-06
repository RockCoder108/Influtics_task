import React from "react";
import form_icon from "../../../assets/form_icon.svg";
import form_right from "../../../assets/form_right.png";
import contact_bg from "../../../assets/contact_bg.jpg";
import partner1 from "../../../assets/partner1.png";
import partner2 from "../../../assets/partner2.png";
import partner3 from "../../../assets/partner3.png";
import partner4 from "../../../assets/partner4.png";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* 🔹 TOP SECTION */}
      <div
        className="bg-cover bg-center pt-24 md:pt-28 relative"
        style={{ backgroundImage: `url(${contact_bg})` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-end gap-12">
          {/* LEFT: Contact Form */}
          <div className="relative h-full z-20 bg-white rounded-2xl shadow-[0_4px_70px_rgba(255,0,0,0.1)] p-2 md:p-2 -mb-32 lg:mb-0">
            <img src={form_icon} alt="icon" className="w-12 mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let’s Work Together on your next Project
            </h2>
            <p className="text-gray-600 mb-8">
              consectetur adipiscing elit. Donec non mattis nulla, in ultrices
              diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut
              non mauris bibendum.
            </p>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Your Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Write Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write Message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 h-32 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-500 hover:to-orange-400 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: Floating Image + Rings */}
          <div className="hidden lg:flex justify-center relative mt-0">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/50 bg-white/20 opacity-50 animate-[ping_3s_linear_infinite]"></div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-white/40 bg-white/10 opacity-40 animate-[ping_3s_linear_infinite_delay_1.5s]"></div>
            <img
              src={form_right}
              alt="Contact"
              className="relative z-10 w-[90%] max-w-md"
            />
          </div>
        </div>
      </div>

      {/* 🔹 BOTTOM SECTION */}
      <div className="bg-[#FFF1F1] pt-5 pb-5 lg:pt-5">
        <div className="max-w-7xl mx-auto  lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-center">
          <h5 className="text-2xl font-semibold text-gray-900 mb-12"></h5>

          <div className="">
            <h5 className="text-2xl font-semibold text-gray-900 mb-8 items-center">
              Trusted Partners
            </h5>
            {[partner1, partner2, partner3, partner4, partner1, partner2].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Partner ${i + 1}`}
                  className="w-12 md:w-12 transition-all duration-300 inline-block mx-4 mb-4"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
