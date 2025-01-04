import React from "react";
import Button from "../Buttons/Button";
import MainService from "../MainService/MainService";

function ServicesBanner() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center font-poppins"
        style={{ backgroundImage: "url('/outservices.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="container mx-auto max-w-[1140px] h-full flex items-center">
          {/* Content */}
          <div className="relative text-white px-4">
            <h4 className="text-4xl font-bold mb-4  uppercase">Software Development Services of <span className="lg:block">Any Type and Complexity</span>
            </h4>
            <div className="w-16 h-[2px] bg-[#F59E0D] mb-4"></div>
            <p className="mb-6 text-lg">
            We create scalable, robust solutions built to grow with your business. Together, let’s develop custom <span className="lg:block">software your customers will love while driving your company’s success.</span>


            </p>
            <Button mainButton="Book A Free Consultation"/>
          </div>
        </div>
      </div>
      <MainService />
    </>
  );
}

export default ServicesBanner;


{/* <Services /> */ }