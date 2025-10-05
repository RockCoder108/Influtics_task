import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import services from "../../../assets/services.png";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("Brand Collaborations");

  const tabs = [
    "Brand Collaborations",
    "Empowering Creators",
    "Content Planner",
    "Relevant Content",
    "Social Media Management",
  ];

  const tabContent = {
    "Brand Collaborations": {
      title: "Strategy Development",
      description:
        "Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl.",
      list: [
        "Unlimited influencer search",
        "Unlimited direct messages with freelancer",
        "Unlimited requests with celebrities",
        "Unlimited project tracking",
        "Unlimited campaign monitoring",
        "Goal Setting Begin by clearly defining",
      ],
      image: services,
    },
    "Empowering Creators": {
      title: "Creator Empowerment",
      description:
        "Tools and resources designed to help creators grow their brand and audience effectively.",
      list: [
        "Tools for content creation",
        "Monetization strategies",
        "Community building support",
        "Exclusive workshops and webinars",
        "Direct access to brand deals",
      ],
      image: services,
    },
    "Content Planner": {
      title: "Content Planner",
      description: "Plan and schedule your content efficiently.",
      list: [
        "Smart calendar view",
        "Automated reminders",
        "Integration with social platforms",
      ],
      image: services,
    },
    "Relevant Content": {
      title: "Relevant Content",
      description: "Discover content that resonates with your audience.",
      list: ["Trending topics", "Audience insights", "Content recommendations"],
      image: services,
    },
    "Social Media Management": {
      title: "Social Media Management",
      description: "Manage all your platforms from one dashboard.",
      list: [
        "Multi-platform posting",
        "Analytics and reports",
        "Community engagement tools",
      ],
      image: services,
    },
  };

  const currentContent =
    tabContent[activeTab] || tabContent["Brand Collaborations"];

  return (
    <section className="py-20 bg-white ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-pink-50 rounded-2xl p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            What Will I Give You?
          </h2>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-400 to-pink-500 rounded-[15px] hover:from-pink-500 hover:to-orange-400 transition-shadow text-base"
          >
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabs */}
          <div className="flex flex-col space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-6 rounded-lg text-left font-bold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-1">
                <img
                  src={currentContent.image}
                  alt="Service"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>

              <div className="order-2 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentContent.description}
                </p>
                <ul className="space-y-3">
                  {currentContent.list.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;