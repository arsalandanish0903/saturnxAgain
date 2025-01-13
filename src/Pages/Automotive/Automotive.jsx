import React from 'react'
import Button from '../../components/Buttons/Button'
import LogisticsDigitalTransformation from '../../components/LogisticsDigitalTransformation/LogisticsDigitalTransformation'
import LogisticsAccordion from '../../components/LogisticsAccordion/LogisticsAccordion'
import DataCentric from '../../components/DataCentric/DataCentric'

function Automotive() {
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
            <h2 className="text-3xl sm:text-4xl mb-4">Automotive Software Development</h2>
            <p className="text-md sm:text-lg mb-4">
              SaturnX is a leading provider of cutting-edge software solutions and sustainable building technologies, empowering businesses worldwide to thrive in a rapidly evolving digital landscape. Our expert team delivers tailored, industry-specific services designed to optimize operational efficiency, enhance collaboration, and drive sustainable growth.
            </p>
            <Button
              mainButton="Contact Us"
              btnPath="/contactus"
              className="mt-4"
            />
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