import React from 'react';
import Button from '../../components/Buttons/Button';

function HealthCare() {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/healtcarebanner.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">Smart Solutions for Healthcare: Custom Software Development Services</h2>
                        <p className="text-md sm:text-lg mb-4">
                            Automate routine tasks and reduce administrative burdens with SaturnX's custom healthcare software development services. Our solutions streamline appointment scheduling, billing, and documentation, allowing your team to focus on delivering exceptional patient care. Enhance workflows, minimize errors, and accelerate service delivery with our innovative, tailored healthcare software solutions.
                        </p>
                        <Button
                            mainButton="Talk To Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side Content */}
                            <div data-aos="fade-right">
                                <h4 className="text-3xl font-bold mb-6">Our Expertise in Healthcare Software Development</h4>
                                <p className="text-lg mb-4">
                                    We specialize in delivering state-of-the-art healthcare solutions, including Electronic Health Records (EHR), patient management systems, and telemedicine platforms.
                                </p>
                                <p className="text-lg">
                                    Our team of seasoned developers and healthcare consultants ensures that our solutions are compliant, secure, and tailored to meet the needs of healthcare providers and patients alike.
                                </p>
                            </div>

                            {/* Right Side Image */}
                            <div data-aos="fade-left">
                                <img
                                    src="/healthcareAbout.jpg"
                                    alt="Healthcare Software"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container mx-auto max-w-[1140px]'>
                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Right Side Image */}
                            <div data-aos="fade-left">
                                <img
                                    src="/transformingPatinets.jpg"
                                    alt="Transforming Patient Care"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            {/* Left Side Content */}
                            <div data-aos="fade-right">
                                <h4 className="text-3xl font-bold mb-6">Transforming Patient Care with Telemedicine Software Solutions</h4>
                                <p className="text-lg mb-4">
                                At SaturnX, we specialize in developing innovative telemedicine platforms that connect patients and healthcare providers seamlessly. Our solutions enable virtual consultations, secure data sharing, and efficient appointment scheduling, ensuring accessible and high-quality care.
                                </p>
                                <p className="text-lg">
                                Designed to meet industry compliance standards, our telemedicine software empowers healthcare providers to enhance patient outcomes and streamline operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 py-16 px-4'>
                <div className='container mx-auto max-w-[1140px] '>
                    {/* Additional Information Section */}
                    <h4 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in">
                        Why Choose Us?
                    </h4>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center bg-white p-8 shadow-lg rounded-md" data-aos="fade-up">
                            <h3 className="text-xl font-bold mb-4">Patient-Centric Design</h3>
                            <p>
                                Our solutions focus on enhancing patient care and engagement, making healthcare services more accessible and efficient.
                            </p>
                        </div>
                        <div className="text-center bg-white p-8 shadow-lg rounded-md" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-bold mb-4">Secure and Compliant</h3>
                            <p>
                                We ensure that all software complies with healthcare regulations like HIPAA and GDPR, offering robust security for sensitive data.
                            </p>
                        </div>
                        <div className="text-center bg-white p-8 shadow-lg rounded-md" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-xl font-bold mb-4">Innovative Technology</h3>
                            <p>
                                Leveraging AI, machine learning, and cloud technology, we deliver cutting-edge solutions that transform healthcare operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthCare;