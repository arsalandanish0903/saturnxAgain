import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Button from '../Buttons/Button';

function SuccessSoftware() {
    const sliderData = [
        {
            img: '/digitalAudit.jpg',
            title: 'Digital Audit Platform',
            description: 'We delivered a comprehensive digital audit platform through our software development services, designed to streamline complex audit processes, enhance data accuracy, and ensure seamless collaboration among financial teams. The platform leverages advanced software development techniques to provide robust data management tools, automated workflows, and top-notch security features, enabling Ernst & Young to perform efficient and reliable financial assessments while...',
        },
        {
            img: '/travel.jpg',
            title: 'Software For Booking And Travel Updates',
            description: 'We worked with Eurostar, the renowned high-speed train operator, to transform their digital experience and improve how passengers plan and manage their journeys. By leveraging our software development services, we developed a user-friendly mobile app and integrated backend systems to make ticket booking, real-time updates, and travel information easily accessible. Our focus on intuitive design and scalable software development ensured a seamless...',
        },
        {
            img: '/movies.jpg',
            title: 'Video Content Search Engine and Aggregator',
            description: 'We built a powerful video content search engine and aggregator using our expertise in software development services to make discovering and accessing video content easier than ever. With advanced search algorithms, personalized recommendations, and a clean, intuitive interface, the platform allows users to find exactly what they’re looking for. Designed with high performance and scalability in mind, this software development...',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    

    return (
        <div className="relative w-full px-6 lg:px-0 py-16 font-poppins bg-gray-50">
            <div className="container mx-auto max-w-[1140px] overflow-hidden">
            <h4 className="text-black text-4xl font-semibold text-center  leading-snug">Success Stories in Custom Software Development</h4>
            <p className="text-center text-gray-600 mt-4 mb-8">Explore how our tailored software development services drive efficiency, security, and innovation.</p>
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {sliderData.map((slide, index) => (
                        <div
                            key={index}
                            className="min-w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8"
                        >
                            {/* Left Side Image */}
                            <div>
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="rounded-lg  object-cover w-full h-70"
                                />
                            </div>

                            {/* Right Side Content */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                                    {slide.title}
                                </h4>
                                <p className="text-gray-600 mb-6">{slide.description}</p>
                                <Button 
                                mainButton="Contact Us"
                                className="changeColor"
                                btnPath="/contactus"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                

                {/* Dots Navigation */}
                <div className="flex justify-center mt-4">
                    {sliderData.map((_, index) => (
                        <div
                            key={index}
                            className={`h-3 w-3 rounded-full mx-2 cursor-pointer ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SuccessSoftware;
