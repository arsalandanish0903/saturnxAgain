import React from "react";
import Services from "../../Pages/Services/Services";

function ServicesBanner() {
  return (
    <>
    <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/outservices.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <div className="w-16 h-[2px] bg-[#F59E0D]"></div>
      </div>
    </div>
    <Services />
    </>
  );
}

export default ServicesBanner;
