import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SocialStats from "./components/SocialStats";
import VideoReels from "./components/VideoReels";
import ServicesSection from "./components/ServicesSection";
import AboutCreator from "./components/AboutCreator";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ArticlesSection from "./components/ArticlesSection";
import PremiumVideosSection from "./components/PremiumVideosSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialStats />
      <VideoReels />
      <ServicesSection />
      <AboutCreator />
      <PremiumVideosSection />
      <ContactSection />
      <ArticlesSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
