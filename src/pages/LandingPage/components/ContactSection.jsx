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
    <section className="overflow-hidden">
      {/* TOP SECTION */}
      <div
        className="bg-cover bg-center py-24 md:py-32"
        style={{ backgroundImage: `url(${contact_bg})` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-end gap-10">
          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex-1">
            <img src={form_icon} alt="icon" className="w-10 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let’s Work Together on your next Project
            </h2>
            <p className="text-gray-600 mb-6">
              consectetur adipiscing elit. Donec non mattis nulla, in ultrices
              diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut
              non mauris bibendum.
            </p>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-800 mb-2"
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
                  className="block font-semibold text-gray-800 mb-2"
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
                  className="block font-semibold text-gray-800 mb-2"
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

          {/* IMAGE */}
          <div className="hidden md:block flex-1 relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full border border-white/50 bg-white/20 blur-xl animate-pulse"></div>
            <img
              src={form_right}
              alt="Contact"
              className="relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-[#FFF1F1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h5 className="text-center text-2xl font-semibold text-gray-900 mb-12">
            Trusted Partners
          </h5>

          <div className="flex gap-10 justify-center flex-wrap">
            {[partner1, partner2, partner3, partner4, partner1, partner2].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Partner ${i + 1}`}
                  className="w-40 grayscale hover:grayscale-0 transition-all"
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
