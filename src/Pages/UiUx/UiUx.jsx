import React from 'react'
import Button from '../../components/Buttons/Button'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'

function UiUx() {
  return (
    <>
        <div
            className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
            style={{
                backgroundImage: `url('/uiixbanner.jpg')`, // Replace with your background image URL
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                {/* Content */}
                <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl mb-4">Ui /Ux Design</h2>
                    <p className="text-md sm:text-lg mb-4">
                    We design seamless, engaging user experiences with a focus on creativity and functionality. From wireframes to high-fidelity prototypes, we ensure that your digital products captivate users and drive engagement.
                    </p>
                    <Button
                        mainButton="Contact Us"
                        btnPath="/contactus"
                        className="mt-4"
                    />
                </div>
            </div>
        </div>
        <WhyChooseUs />
    </>
  )
}

export default UiUx