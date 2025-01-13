import React from 'react'
import Button from '../../components/Buttons/Button'
import OurDigitalTransformation from '../../components/OurDigitalTransformation/OurDigitalTransformation'

function DigitalTransformation() {
  return (
    <>
        <div
            className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
            style={{
                backgroundImage: `url('/digitalTransformation.jpg')`, // Replace with your background image URL
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                {/* Content */}
                <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl mb-4">Digital Transformation</h2>
                    <p className="text-md sm:text-lg mb-4">
                    At SaturnX, we provide scalable, efficient, and transformative digital solutions that grow alongside your business. Together, let's craft innovative strategies that captivate your customers and propel your company to new heights of success.
                    </p>
                    <Button
                        mainButton="Book A Free Consultation"
                        btnPath="/contactus"
                        className="mt-4"
                    />
                </div>
            </div>
        </div>
        <OurDigitalTransformation />
    </>
  )
}

export default DigitalTransformation