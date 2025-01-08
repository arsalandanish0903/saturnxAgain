import React from "react";
import About from "../../Pages/About/About";
import MissionandVision from "../MissionandVision/MissionandVision";
import TeamSection from "../TeamSection/TeamSection";
import ImageGallery from "../ImageGallery/ImageGallery";

function AboutBanner() {
  return (
    <>
    <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/aboutusbanner.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <div className="w-16 h-[2px] bg-[#F59E0D]"></div>
      </div>
    </div>
    <About />
    <MissionandVision />
    <TeamSection />
    <ImageGallery />
    </>
  );
}

export default AboutBanner;
