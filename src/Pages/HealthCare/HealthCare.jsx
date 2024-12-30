import React from 'react';

function HealthCare() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[500px] overflow-hidden font-poppins">
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="/healthcare.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
                            Healthcare Software Solutions
                        </h1>
                        <p className="text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                            Empowering the healthcare industry with innovative technology to improve patient care and operational efficiency.
                        </p>
                    </div>
                </div>
            </div>

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
