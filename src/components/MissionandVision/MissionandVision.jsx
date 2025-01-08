import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

function MissionandVision() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' }); // Initialize AOS with smooth animations
    }, []);

    return (
        <div className="bg-gray-50 py-16 px-6 lg:px-0">
            <div className="container mx-auto max-w-[1140px]">
                {/* Title Section */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-800">Our Mission & Vision</h2>
                    <p className="text-lg text-gray-600 mt-4">At SaturnX, we strive to redefine the digital experience and empower businesses to achieve their full potential through innovation and cutting-edge solutions.</p>
                </div>

                {/* Mission Section */}
                <div className="flex flex-col gap-4 lg:flex-row justify-between items-center mb-16">
                    <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
                        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h4>
                        <p className="text-lg text-gray-600">
                            Our mission is to deliver transformative digital solutions that foster creativity, elevate user experience, and provide measurable value to businesses of all sizes. We aim to be a partner in your digital journey, helping you succeed in a rapidly evolving digital world.
                        </p>
                    </div>
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <img src="/ourmission.svg" alt="Mission" className="w-full h-[350px] rounded-lg" />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <img src="/ourvision.jpg" alt="Vision" className="w-full h-[350px] rounded-lg" />
                    </div>
                    <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-left">
                        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h4>
                        <p className="text-lg text-gray-600">
                            Our vision is to be at the forefront of digital innovation, offering cutting-edge technology solutions that transform industries and create lasting impact. We envision a future where businesses can thrive and grow through the seamless integration of technology into their operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionandVision;
