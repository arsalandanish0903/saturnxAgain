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
            content: 'Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. By leveraging technology, businesses can innovate, improve operational efficiency, and deliver better customer experiences.',
        },
        {
            title: 'Why is Digital Transformation Important?',
            content: 'Digital transformation is essential for staying competitive in today\'s fast-evolving market. It enhances efficiency, improves customer experiences, and enables businesses to adapt to new technologies and trends.',
        },
        {
            title: 'How Can SaturnX Help with Digital Transformation?',
            content: 'At SaturnX, we specialize in delivering customized digital transformation solutions that align with your business goals. Our solutions are designed to foster innovation, scalability, and long-term growth for your company in the digital space.',
        },
        {
            title: 'What Are the Benefits of Partnering with SaturnX?',
            content: 'Partnering with SaturnX means you gain access to cutting-edge technologies and expert insights that drive your digital transformation journey. Our scalable, cost-effective solutions ensure your business stays ahead of the curve in the digital era.',
        },
    ];

    return (
        <>
            <div className="relative py-16 bg-gray-200 px-6 lg:px-0 w-full font-poppins">
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-3xl font-bold text-center mb-2">Why Choose SaturnX for Your Digital Transformation?</h4>
                    <p className="text-center mb-12">Discover how SaturnX Digital Solution Company empowers businesses to thrive in the digital era.</p>
                    <div className="grid lg:grid-cols-2 items-center grid-cols-1 gap-4">
                        {/* Left Side: Accordion */}
                        <div className="lg:pr-8 h-80">
                            {accordionData.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <button
                                        className="w-full text-left p-2 rounded-lg flex justify-between items-center focus:outline-none"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <h4 className="font-semibold">{item.title}</h4>
                                        {activeIndex === index ? (
                                            <FaChevronUp className="text-gray-600" />
                                        ) : (
                                            <FaChevronDown className="text-gray-600" />
                                        )}
                                    </button>
                                    {activeIndex === index && (
                                        <div className="p-2 rounded-lg">
                                            <p>{item.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side: Image */}
                        <div className="lg:pl-8">
                            <img
                                src="/digitalAbout.jpg"
                                alt="Digital Transformation"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-16 px-6 lg:px-0 w-full font-poppins">
                <div className="container mx-auto max-w-[1140px]">
                    <div className="mt-16">
                        <h4 className="text-3xl font-bold text-center mb-2">Services We Offer as Your Digital Solutions Provider</h4>
                        <p className="text-center mb-12">Explore our wide range of services that help businesses embrace digital transformation seamlessly.</p>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Custom Software Development</h3>
                                <p>We design and develop custom software solutions tailored to meet your business requirements, ensuring a smooth and efficient digital transformation journey.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                                <p>Our mobile apps bring interactive learning and business operations into the hands of your users, improving accessibility and engagement.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning Solutions</h3>
                                <p>We integrate AI and machine learning technologies into your business to provide personalized experiences, predictive analytics, and automation.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Digital Marketing Solutions</h3>
                                <p>Reach and engage your audience through targeted digital marketing strategies, including SEO, social media, and content marketing.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Cloud Solutions & Integration</h3>
                                <p>We offer cloud-based solutions that ensure scalability, security, and easy access to data, enabling businesses to scale effortlessly.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">UX/UI Design & Development</h3>
                                <p>We create engaging, user-friendly interfaces that provide seamless experiences for your users, optimizing both functionality and design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurDigitalTransformation;
