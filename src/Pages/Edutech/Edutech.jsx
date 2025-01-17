import React from 'react'
import Button from '../../components/Buttons/Button'
import EdutechMainFeature from '../../components/EdutechMainFeature/EdutechMainFeature'
import CuttingEdgeTechnology from '../../components/CuttingEdgeTechnology/CuttingEdgeTechnology'
import { FaUserGraduate, FaMoneyBillWave, FaGlobe, FaChartLine } from 'react-icons/fa';

function Edutech() {
    const ourCustomeElearining = [
        {
            title: 'Corporate Training Modules',
            description: 'Elevate your team’s potential with our custom-built corporate training modules. At SaturnX Digital, we focus on crafting solutions that specifically boost workforce development and enhance skills, ensuring your team is always at the top of its game.',
        },
        {
            title: 'Mobile Learning',
            description: 'Adapt to the dynamic world of mobile learning with SaturnX Digital. Our mobile eLearning development services are all about making learning convenient, accessible, and, most importantly, engaging, no matter where you are.',
        },
        {
            title: 'Knowledge Base Management',
            description: 'Efficiently manage and share essential information with our Knowledge Base Management system. SaturnX Digital is dedicated to providing streamlined, easy-to-use solutions for organizing and accessing critical knowledge, simplifying your information workflow.',
        },
        {
            title: 'Learning Management System (LMS)',
            description: 'Experience the full power of eLearning with an LMS that is as scalable, flexible, and intuitive as your business is. An LMS developed with SaturnX Digital is the ideal solution to efficiently administer and monitor your digital learning suite.',
        },
        {
            title: 'eLearning Portals',
            description: 'Serving both the academic and business world, SaturnX Digital focuses on the development of engaging and interactive eLearning environments with the aim to make education not just informative but also captivating and immersive.',
        },
        {
            title: 'Customer Training',
            description: 'When intricate and complex products meet customers, clear-cut training is essential for understanding and satisfaction. SaturnX Digital collaborates with your business to build customer training platforms that ensure that knowledge is always just a click away.',
        },
    ]
    return (
        <>
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/edutech.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white  sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">Transforming Education: Digital Solutions for EduTech Industries | SaturnX Digital IT Company </h2>
                        <p className="text-md sm:text-lg mb-4">
                            SaturnX Digital Solutions offers cutting-edge IT services for EduTech industries. As a leading digital provider, we empower educational platforms with innovative technologies to enhance learning experiences.
                        </p>
                        <Button
                            mainButton="Discuss Your Learning Needs"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className="relative w-full py-16 px-6 lg:px-0 font-poppins bg-gray-200">
                <div className="container mx-auto max-w-[1140px]">
                    <div className="my-2 w-full flex flex-col items-center justify-center text-center">
                        <h4 className="text-xl lg:text-4xl mb-8 font-bold max-w-4xl">
                            Why Choose SaturnX as Your Digital Provider for EduTech Industries?
                        </h4>
                        <p className='text-black max-w-4xl'>The EduTech sector demands cutting-edge solutions that simplify learning, enhance accessibility, and deliver measurable results. At SaturnX Digital Solutions, we:
                        </p>
                    </div>
                    <div className="mt-6 space-y-8">
                        {/* Section 1 */}
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h5 className="text-xl font-semibold mb-4">1. Revolutionizing EduTech with SaturnX Digital IT Company</h5>
                            <p className="text-gray-700 leading-relaxed">
                                We understand the challenges faced by <span className="italic">edutech industries</span> and provide a full suite of digital services, including:
                            </p>
                            <ul className="list-disc list-inside mt-3 text-gray-700">
                                <li>Custom software development for online learning platforms.</li>
                                <li>Mobile application development for interactive learning.</li>
                                <li>AI and ML solutions to personalize educational experiences.</li>
                            </ul>
                        </div>
                        {/* Section 2 */}
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h5 className="text-xl font-semibold mb-4">2. Innovative Technology at Your Fingertips</h5>
                            <p className="text-gray-700 leading-relaxed">
                                As a premier <span className="italic">digital provider</span>, we use advanced technologies to help edutech companies modernize and scale their operations. From cloud-based solutions to robust data analytics, we ensure you stay ahead of the competition.
                            </p>
                        </div>
                        {/* Section 3 */}
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h5 className="text-xl font-semibold mb-4">3. Scalable and Cost-Effective Services</h5>
                            <p className="text-gray-700 leading-relaxed">
                                At SaturnX Digital Solution Company, we focus on delivering scalable solutions that grow with your business. Our cost-effective approach makes digital transformation accessible for businesses of all sizes within the <span className="italic">edutech industries</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-16 font-poppins w-full px-6 lg:px-0 bg-gray-50">
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-center text-2xl lg:text-4xl font-bold text-gray-800 mb-8">
                        Services We Offer
                    </h4>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        {ourCustomeElearining.map((item, index) => (
                            <div
                                key={index}
                                className="relative p-6 bg-white  rounded-lg border border-[#F59E0D] hover:bg-blue-100 transition-all duration-300"
                            >
                                {/* <div className="absolute top-0 left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                                    {index + 1}
                                </div> */}
                                <div className="mt-8">
                                    <h5 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h5>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Benefits Section */}
            <section className="bg-gray-200 py-16 px-6 lg:px-0 relative w-full font-poppins">
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='text-center flex flex-col items-center'>
                        <h4 className="text-xl max-w-4xl lg:text-4xl font-bold  pb-2">
                            Key Features of Our EduTech Digital Solutions
                        </h4>
                    </div>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
                            <span className="text-[#1476F2] text-4xl">&#x1F4DA;</span>
                            <h4 className="text-lg font-semibold mt-4">Virtual Classroom Development</h4>
                            <p className="text-gray-700 text-center">
                                Engage students with seamless virtual classes supported by real-time interaction and collaboration tools.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                            <span className="text-[#1476F2] text-4xl">&#x1F3AE;</span>
                            <h4 className="text-lg font-semibold mt-4">Gamification in Education</h4>
                            <p className="text-gray-700 text-center">
                                Make learning fun and engaging with game-based learning modules.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                            <span className="text-[#1476F2] text-4xl">&#x1F4BB;</span>
                            <h4 className="text-lg font-semibold mt-4">Adaptive Learning Systems</h4>
                            <p className="text-gray-700 text-center">
                                Deliver personalized content using AI-driven learning algorithms.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                            <span className="text-[#1476F2] text-4xl">&#x2601;&#xFE0F;</span>
                            <h4 className="text-lg font-semibold mt-4">Cloud-Based Solutions</h4>
                            <p className="text-gray-700 text-center">
                                Secure, scalable, and accessible platforms hosted on reliable cloud services.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                            <span className="text-[#1476F2] text-4xl">&#x1F4C4;</span>
                            <h4 className="text-lg font-semibold mt-4">Content Management and Distribution</h4>
                            <p className="text-gray-700 text-center">
                                Easily manage and distribute digital educational content to students worldwide.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                            <span className="text-[#1476F2] text-4xl">&#x1F50E;</span>
                            <h4 className="text-lg font-semibold mt-4">Analytics and Reporting</h4>
                            <p className="text-gray-700 text-center">
                                Gain insights into learning patterns with detailed analytics and reporting tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 px-6 lg:px-0 relative w-full font-poppins">
                <div className='container mx-auto max-w-[1140px]'>
                <div className='text-center flex flex-col items-center'>
                        <h4 className="text-xl max-w-3xl lg:text-4xl font-bold  pb-2">
                        Benefits of Partnering with SaturnX Digital IT Company
                        </h4>
                        <p className="mt-4 text-gray-700 font-medium">As a dedicated digital provider for EduTech industries, we help you achieve:</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex items-center space-x-4">
                            <FaUserGraduate className="text-[#1476F2] text-4xl" />
                            <div>
                                <h4 className="text-lg font-semibold">Enhanced Student Engagement</h4>
                                <p className="text-gray-700">Our user-friendly interfaces and interactive tools boost student participation.</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex items-center space-x-4">
                            <FaMoneyBillWave className="text-[#1476F2] text-4xl" />
                            <div>
                                <h4 className="text-lg font-semibold">Cost Efficiency</h4>
                                <p className="text-gray-700">Reduce operational costs with streamlined, automated digital systems.</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex items-center space-x-4">
                            <FaGlobe className="text-[#1476F2] text-4xl" />
                            <div>
                                <h4 className="text-lg font-semibold">Global Reach</h4>
                                <p className="text-gray-700">Extend your platform’s accessibility to learners across the globe.</p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex items-center space-x-4">
                            <FaChartLine className="text-[#1476F2] text-4xl" />
                            <div>
                                <h4 className="text-lg font-semibold">Improved Learning Outcomes</h4>
                                <p className="text-gray-700">Leverage data-driven strategies to achieve better results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EdutechMainFeature />
            <div className="py-16 px-6 lg:px-0 font-poppin">
                <div className="container mx-auto max-w-[800px] text-center">
                    <h4 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                        Our Commitment to Excellence
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At <span className="text-black font-semibold">SaturnX Digital Solution Company</span>, we are committed to transforming the way
                        <span className="text-black"> edutech industries</span> operate in the digital space. By combining technology, creativity, and strategy, we deliver solutions that drive results and foster growth.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Whether you are a startup or an established name in the education sector, we are here to support your journey as your trusted
                        <span className="text-black font-semibold"> digital provider</span>.
                    </p>
                </div>
            </div>

            <CuttingEdgeTechnology />
        </>
    )
}

export default Edutech