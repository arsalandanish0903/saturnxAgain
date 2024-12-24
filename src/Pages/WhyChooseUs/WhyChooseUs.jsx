import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTools, FaUsers, FaCogs, FaBolt } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const cards = [
        {
            title: 'Custom',
            description: 'Tailored solutions to meet your unique needs, ensuring a perfect fit for your business goals.',
            icon: <FaTools className="text-4xl text-blue-600" />,
        },
        {
            title: 'Dedicated',
            description: 'A committed team focused on delivering excellence and exceeding expectations every step of the way.',
            icon: <FaUsers className="text-4xl text-green-600" />,
        },
        {
            title: 'Adaptable',
            description: 'Flexibility to pivot and evolve with changing market demands and client requirements.',
            icon: <FaCogs className="text-4xl text-purple-600" />,
        },
        {
            title: 'Agile',
            description: 'Efficient processes and rapid delivery to keep you ahead in a competitive landscape.',
            icon: <FaBolt className="text-4xl text-yellow-500" />,
        },
    ];

    return (
        <section className="bg-gray-200 sm:py-16 px-6 py-6 relative overflow-hidden border-t-2 border-b-2 border-gray-300">
            <div className="container mx-auto max-w-[1140px] text-center relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <span className="text-black text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
                        What we're offering
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </span>
                    <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 font-poppins">
                        Why Choose Us
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className="bg-[#010522] shadow-lg rounded-lg p-6 hover:shadow-2xl transform transition hover:scale-105"
                        >
                            <div className="flex justify-center mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                            <p className="text-white">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
