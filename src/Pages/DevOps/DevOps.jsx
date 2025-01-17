import React from 'react';
import Button from '../../components/Buttons/Button';
import { FaCogs, FaCode, FaCloud, FaLock, FaChartLine, FaRegHandshake } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import AOS from 'aos'; // Import AOS for animations
import ContactUs from '../ContactUs/ContactUs';

// Initialize AOS animation library
AOS.init();

function DevOps() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/DevOpsBanner.jpg')`, // Replace with your background image URL
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    <div className="relative z-10 max-w-3xl text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">DevOps Services at SaturnX Digital Solution Company</h2>
                        <p className="text-md sm:text-lg mb-4">
                            Accelerate Your Development with Expert DevOps Solutions. At SaturnX, we streamline your software development
                            lifecycle, enhance collaboration, and ensure faster delivery of high-quality applications.
                        </p>
                        <Button mainButton="Contact Us" btnPath="/contactus" className="mt-4" />
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className='px-6 lg:px-0 bg-gray-200 py-16 relative w-full font-poppins'>
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-xl lg:text-4xl font-bold text-center mb-8">Why Choose SaturnX for Your DevOps Needs?</h4>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Service Cards */}
                        {[
                            {
                                title: 'Seamless Integration',
                                description: 'Ensure smooth integration between development, QA, and operations for quicker release cycles.',
                                icon: <FaCogs size={40} className="text-[#1476F2]" />,
                            },
                            {
                                title: 'Automation & Efficiency',
                                description: 'Automate repetitive tasks and enable CI/CD to save time and resources.',
                                icon: <FaCode size={40} className="text-[#1476F2]" />,
                            },
                            {
                                title: 'Scalable Solutions',
                                description: 'Tailored DevOps solutions to scale with your business growth and handle increasing traffic.',
                                icon: <FaCloud size={40} className="text-[#1476F2]" />,
                            },
                            {
                                title: 'Enhanced Collaboration',
                                description: 'Foster innovation by breaking down silos between your teams, enabling better communication.',
                                icon: <FaRegHandshake size={40} className="text-[#1476F2]" />,
                            },
                            {
                                title: 'Improved Reliability',
                                description: 'Automate testing and deployment to ensure stable, reliable, and production-ready applications.',
                                icon: <FaLock size={40} className="text-[#1476F2]" />,
                            },
                            {
                                title: 'Continuous Monitoring',
                                description: 'Implement real-time monitoring and centralized logging to detect and resolve issues proactively.',
                                icon: <FaChartLine size={40} className="text-[#1476F2]" />,
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 200} // Animation delay for staggered effect
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className='px-6 lg:px-0 py-16 relative font-poppins w-full'>
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-xl lg:text-4xl font-bold text-center text-gray-800 mb-8">The SaturnX Advantage</h4>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        At SaturnX, we provide customized DevOps solutions that cater to your business's unique needs. Here's why you should choose us:
                    </p>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* First Card */}
                        <div
                            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <div className="mb-4">
                                <img src="/track.jpg" alt="Track Record" className="w-full h-full object-cover rounded-lg mb-4" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Proven Track Record</h4>
                            <p className="text-gray-600">
                                We've helped numerous organizations across industries implement DevOps practices that led to faster release cycles,
                                improved quality, and better collaboration. Our successful case studies reflect our commitment to excellence.
                            </p>
                        </div>

                        {/* Second Card */}
                        <div
                            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <div className="mb-4">
                                <img src="/customizeSolutions.jpg" alt="Customized Solutions" className="w-full h-full object-cover rounded-lg mb-4" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Customized Solutions</h4>
                            <p className="text-gray-600">
                                Our DevOps services are tailored to meet the unique needs of your business, ensuring that the solutions we provide are
                                the best fit for your team. We analyze your workflow to craft the perfect solution.
                            </p>
                        </div>
                    </div>

                    {/* Additional Content Section */}
                </div>
            </div>
            <div className='relative py-16 px-6 lg:px-0 bg-gray-200 w-full font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>

                    <h4 className="text-xl lg:text-4xl font-bold text-center text-gray-800 mb-8">Our DevOps Approach</h4>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* First Additional Card */}
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="mb-4">
                                <img src="/cloudInfraStructure.jpg" alt="Cloud Infrastructure" className="w-full h-52 object-cover rounded-lg mb-4" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Cloud Infrastructure Management</h4>
                            <p className="text-gray-600">
                                We help you design and manage scalable, cost-effective cloud infrastructures tailored to your business needs. Our team
                                specializes in AWS, Azure, and GCP platforms to deliver optimal cloud solutions.
                            </p>
                        </div>

                        {/* Second Additional Card */}
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="mb-4">
                                <img src="/automotionandEffecincy.jpg" alt="Automation" className="w-full h-52 object-cover rounded-lg mb-4" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Automation & Efficiency</h4>
                            <p className="text-gray-600">
                                Automate your workflows to increase efficiency, minimize errors, and enable rapid deployment cycles with continuous
                                integration and delivery pipelines.
                            </p>
                        </div>

                        {/* Third Additional Card */}
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1400"
                        >
                            <div className="mb-4">
                                <img src="/securityFirst.jpg" alt="Security" className="w-full h-52 object-cover rounded-lg mb-4" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Security First</h4>
                            <p className="text-gray-600">
                                We integrate security into every phase of your DevOps pipeline, ensuring that your systems are protected from day one
                                through continuous monitoring and proactive threat detection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs />
        </>
    );
}

export default DevOps;
