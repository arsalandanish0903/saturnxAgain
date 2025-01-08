import React, { useState } from 'react';

function CustomMadeIt() {
    const [activeCard, setActiveCard] = useState(0);

    const cardData = [
        {
            title: 'Mobile Hotel Application',
            image: '/mobileHote.jpg',
            description: 'Empower your guests with a seamless mobile hotel application that enables bookings, room service, and more at their fingertips. Enhance user experience and convenience in hospitality.',
        },
        {
            title: 'Contactless Hospitality Solutions',
            image: '/mobilehospitality.jpg',
            description: 'Redefine hospitality with contactless solutions for check-ins, payments, and personalized services. Ensure safety and satisfaction for all your guests.',
        },
        {
            title: 'Mobile Kiosk',
            image: '/mobilekesok.jpg',
            description: 'Streamline guest interactions with innovative mobile kiosks for self-check-ins, bookings, and other hotel services. A step towards smarter hospitality.',
        },
        {
            title: 'Smart Rooms',
            image: '/smartrooms.jpg',
            description: 'Transform your rooms into smart spaces with IoT-enabled devices, voice control, and advanced automation for a futuristic guest experience.',
        },
    ];

    return (
        <div className="relative bg-gray-100 py-16 font-poppins w-full">
            <div className="container mx-auto max-w-6xl px-4 lg:px-0">
                {/* Heading */}
                <h4 className="text-2xl md:text-4xl text-center font-bold uppercase text-gray-800 tracking-wide mb-12">
                    Custom-Made IT Solutions for <span className='block'> Hospitality Industry</span>
                </h4>
                
                {/* Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side: Cards */}
                    <div className="flex flex-col gap-6">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className={`p-6 border rounded-lg cursor-pointer shadow-sm transition-all duration-300 ${
                                    activeCard === index
                                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                                        : 'border-gray-300 bg-white'
                                }`}
                                onMouseEnter={() => setActiveCard(index)}
                            >
                                <h4 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex justify-center">
                        <div className="relative w-full h-64 md:h-80 lg:h-96">
                            <img
                                src={cardData[activeCard].image}
                                alt={`Image for ${cardData[activeCard].title}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomMadeIt;
