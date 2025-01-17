import React from "react";
import Button from "../../components/Buttons/Button";
import LogisticsDigitalTransformation from "../../components/LogisticsDigitalTransformation/LogisticsDigitalTransformation";
import DataCentric from "../../components/DataCentric/DataCentric";
import LogisticsAccordion from "../../components/LogisticsAccordion/LogisticsAccordion";

function Logistics() {
    return (
        <>
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/logistics.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white   lg:text-left">
                        {/* <h1 className="text-sm text-center font-semibold py-1 w-20 mb-4 bg-[#164DA5] sm:mx-0">Logistics</h1> */}
                        <h2 className="text-xl sm:text-4xl mb-4">Digital Solutions for Logistics & Transportation Company | SaturnX Digital IT Company</h2>
                        <p className="text-md sm:text-lg mb-4">
                        Discover cutting-edge digital solutions tailored for logistics and transportation companies at SaturnX Digital IT Company. Drive efficiency, streamline operations, and embrace innovation today!
                        </p>
                        <Button
                            mainButton="Contact Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-xl lg:text-4xl mb-4 font-bold max-w-4xl">Why Choose Digital Solutions for Logistics & Transportation?</h4>
                        <p className="text-black text-lg">The logistics and transportation industry is rapidly evolving. Digital solutions are no longer a luxury but a necessity.</p>
                    </div>

                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side Content */}
                            <div data-aos="fade-down">
                                <ul className='m-0 p-0 flex flex-col gap-4'>
                                    <li>
                                        <strong className='mr-2'>Industry Expertise: </strong> <span>    Our team understands the unique challenges faced by the *logistics and automotive sectors*. Whether it’s optimizing supply chain management or enhancing vehicle fleet operations, we deliver innovative digital solutions that make a real difference.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Comprehensive Digital Services: </strong> <span>   From custom software development to data analytics, IoT integration, and AI-powered automation, we offer a full suite of digital tools to help your business stay ahead of the curve.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Proven Results: </strong> <span>Our solutions are designed to improve efficiency, reduce costs, and maximize ROI. Join the many businesses that trust SaturnX Digital Solution Company for their logistics and automotive digital needs.  </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side Image */}
                            <div data-aos="fade-top">
                                <img
                                    src="/whyLogistics.jpg"
                                    alt="Healthcare Software"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Right Side Image */}
                            <div data-aos="fade-top">
                                <img
                                    src="/constructionWebsite.jpg"
                                    alt="Healthcare Software"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            {/* Left Side Content */}
                            <div data-aos="fade-down">
                                <ul className='m-0 p-0 flex flex-col gap-4'>
                                    <li>
                                        <strong className='mr-2'>Mobile App Development: </strong> <span>  - Develop user-friendly apps for drivers, customers, and managers to ensure smooth communication. </span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Cloud-Based Solution: </strong> <span> - Leverage secure cloud storage for real-time data access and collaboration.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>IoT Integration: </strong> <span>  - Use IoT devices to monitor vehicle health, optimize fuel consumption, and track cargo in real-time.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Custom Software Developmen: </strong> <span>  - Build scalable platforms for fleet management, route optimization, and inventory tracking.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">Our Digital Solutions for the Logistics Industry</h4>
                    </div>
                </div>
                <div className="bg-gray-50 py-12 px-6 lg:px-16 font-poppins">
                    <div className="container mx-auto max-w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "/supply-chain-management.png",
                                title: "Supply Chain Optimization",
                                description:
                                    "Minimize delays and maximize efficiency with real-time tracking, predictive analytics, and automated workflows.",
                            },
                            {
                                icon: "/fleet-management.png",
                                title: "Fleet Management Systems",
                                description:
                                    "Gain better control of your fleet with GPS integration, predictive maintenance alerts, and performance tracking.",
                            },
                            {
                                icon: "/supplier-alt.png",
                                title: "Warehouse Automation",
                                description:
                                    "Enhance inventory accuracy and streamline operations with advanced warehouse management systems (WMS).",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start space-y-4"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-12 h-12 object-contain"
                                />
                                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <LogisticsDigitalTransformation />
            <DataCentric />
            <LogisticsAccordion />
        </>
    );
}

export default Logistics;
