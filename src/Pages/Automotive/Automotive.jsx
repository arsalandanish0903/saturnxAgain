import React from 'react'
import Button from '../../components/Buttons/Button'
import LogisticsDigitalTransformation from '../../components/LogisticsDigitalTransformation/LogisticsDigitalTransformation'
import LogisticsAccordion from '../../components/LogisticsAccordion/LogisticsAccordion'
import DataCentric from '../../components/DataCentric/DataCentric'
import { FaCarAlt, FaWifi, FaRobot, FaMobileAlt, FaCloud, FaWrench } from "react-icons/fa";

function Automotive() {
  const automotiveServices = [
    {
      icon: <FaCarAlt className="text-blue-500 text-5xl" />,
      title: "Vehicle Management Software Development",
      description:
        "Optimize fleet and vehicle operations with our tailored software solutions that streamline processes and improve efficiency.",
    },
    {
      icon: <FaWifi className="text-green-500 text-5xl" />,
      title: "IoT Integration for Connected Vehicles",
      description:
        "Leverage IoT technology to enable real-time vehicle tracking, predictive maintenance, and enhanced connectivity.",
    },
    {
      icon: <FaRobot className="text-yellow-500 text-5xl" />,
      title: "AI-Powered Analytics for Predictive Maintenance",
      description:
        "Utilize AI to analyze vehicle performance data, reduce downtime, and improve operational efficiency.",
    },
    {
      icon: <FaMobileAlt className="text-pink-500 text-5xl" />,
      title: "Mobile App Development for Automotive Solutions",
      description:
        "Engage customers with intuitive mobile applications for vehicle booking, service management, and personalized offers.",
    },
    {
      icon: <FaCloud className="text-purple-500 text-5xl" />,
      title: "Cloud Solutions for Automotive Data Management",
      description:
        "Scale your business with secure cloud solutions that handle large volumes of vehicle and operational data seamlessly.",
    },
    {
      icon: <FaWrench className="text-red-500 text-5xl" />,
      title: "Predictive Maintenance Tools",
      description:
        "Develop tools that use data and insights to keep your vehicles running smoothly and reduce unexpected breakdowns.",
    },
  ];
  return (
    <>
      <div
        className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
        style={{
          backgroundImage: `url('/automotiveMain.jpg')`, // Replace with your background image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
          {/* Content */}
          <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl mb-4">Welcome to SaturnX Digital Solution Company – Your Trusted Automotive Digital Solution Provider</h2>
            <p className="text-md sm:text-lg mb-4">
              At SaturnX Digital Solution Company, we specialize in delivering innovative and scalable digital solutions for the automotive industry. With years of expertise, we empower businesses in the automotive sector to drive efficiency, enhance customer experiences, and stay ahead of the competition.
            </p>
            <Button
              mainButton="Contact Us"
              btnPath="/contactus"
              className="mt-4"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full py-16 px-6 lg:px-0 font-poppins bg-gray-50">
        <div className="container mx-auto max-w-[1140px]">
          <div className="my-2 w-full flex flex-col items-center justify-center text-center">
            <h4 className="text-2xl lg:text-4xl mb-8 font-bold max-w-4xl text-gray-800">
              Why Choose SaturnX Digital Solution Company?
            </h4>
            <div className="space-y-8 text-left w-full">
              {/* Section 1: Image Left, Text Right */}
              <div className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                  <img
                    src="/compherisivedigital.jpg"
                    alt="Comprehensive Digital Solutions"
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-6">
                  <h5 className="text-lg font-semibold text-gray-700 mb-4">
                    1. Comprehensive Digital Solutions for Automotive Businesses
                  </h5>
                  <p className="text-gray-600 mb-4">
                    We understand the unique challenges faced by the automotive industry and offer a wide range of tailored digital services, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Custom software development for vehicle management and operations.</li>
                    <li>IoT solutions for connected vehicles and real-time tracking.</li>
                    <li>AI and ML-powered analytics for predictive maintenance and optimization.</li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Text Left, Image Right */}
              <div className="flex flex-col lg:flex-row-reverse items-center  bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                  <img
                    src="/advanceTechnology.jpg"
                    alt="Advanced Technology for Innovation"
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="lg:w-1/2 lg:pr-6">
                  <h5 className="text-lg font-semibold text-gray-700 mb-4">
                    2. Advanced Technology for Innovation
                  </h5>
                  <p className="text-gray-600">
                    As a trusted digital provider, we utilize cutting-edge technologies to help automotive businesses modernize their operations. From cloud computing to advanced data analytics, we ensure your business runs efficiently in the fast-paced automotive sector.
                  </p>
                </div>
              </div>

              {/* Section 3: Image Left, Text Right */}
              <div className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                  <img
                    src="/scalableandcost.jpg"
                    alt="Scalable and Cost-Effective Services"
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-6">
                  <h5 className="text-lg font-semibold text-gray-700 mb-4">
                    3. Scalable and Cost-Effective Services
                  </h5>
                  <p className="text-gray-600">
                    Our solutions are designed to scale with your business. Whether you're a startup or an established player in the automotive industry, our cost-effective approach ensures maximum value at every stage of your digital transformation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="py-16 px-6 lg:px-0 font-poppins bg-gray-100">
        <div className="container mx-auto max-w-[1140px]">
          <div className="text-center mb-12">
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Services We Offer
            </h4>
            <p className="text-gray-600 mt-4">
              Discover our comprehensive range of digital solutions tailored for the automotive industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {automotiveServices.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LogisticsDigitalTransformation />
      <DataCentric />
      <LogisticsAccordion />
    </>
  )
}

export default Automotive