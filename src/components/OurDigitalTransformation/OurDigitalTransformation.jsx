import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing arrow icons

function OurDigitalTransformation() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    

    const accordionData = [
        {
            title: 'What is Digital Transformation?',
            content: 'Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.',
        },
        {
            title: 'Why is it Important?',
            content: 'It helps businesses improve efficiency, enhance customer experiences, and stay competitive in a rapidly changing market.',
        },
        {
            title: 'How Can SaturnX Help?',
            content: 'We provide tailored digital transformation solutions that align with your business goals and drive sustainable growth.',
        },
        {
            title: 'How Can SaturnX Help?',
            content: 'We provide tailored digital transformation solutions that align with your business goals and drive sustainable growth.',
        },
        {
            title: 'How Can SaturnX Help?',
            content: 'We provide tailored digital transformation solutions that align with your business goals and drive sustainable growth.',
        },
    ];

    return (
        <div className='relative py-16 px-6 lg:px-0 w-full'>
            <div className='container mx-auto max-w-[1140px]'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    {/* Left Side: Accordion */}
                    <div className='lg:pr-8 h-80'>
                        {accordionData.map((item, index) => (
                            <div key={index} className='mb-4'>
                                <button
                                    className='w-full text-left p-2 rounded-lg flex justify-between items-center focus:outline-none'
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h4 className='font-semibold'>{item.title}</h4>
                                    {activeIndex === index ? (
                                        <FaChevronUp className='text-gray-600' />
                                    ) : (
                                        <FaChevronDown className='text-gray-600' />
                                    )}
                                </button>
                                {activeIndex === index && (
                                    <div className='p-2 rounded-lg'>
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Image */}
                    <div className='lg:pl-8'>
                        <img
                            src='/digitalAbout.jpg'
                            alt='Digital Transformation'
                            className='w-full h-auto rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurDigitalTransformation;