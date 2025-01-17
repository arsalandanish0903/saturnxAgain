import React from "react";
import Button from "../../components/Buttons/Button";
import { FaUsers, FaChartLine, FaCogs, FaRocket, FaLifeRing, FaCommentDots } from 'react-icons/fa'
import { FaRobot, FaComments, FaCamera, FaStar, } from 'react-icons/fa'
import ContactUs from "../ContactUs/ContactUs";
function AiMl() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/AiMlBanner.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">
                            AI/ML Services at SaturnX Digital Solution Company
                        </h2>
                        <p className="text-md sm:text-lg mb-4">
                            Unlock the Power of Artificial Intelligence and Machine Learning.
                            At SaturnX, we provide cutting-edge AI/ML solutions tailored to drive growth, optimize operations, and deliver outstanding results for your business.
                        </p>
                        <Button
                            mainButton="Contact Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose SaturnX Section */}
            <section className="bg-gray-200 py-16 px-6 lg:px-0 font-poppins relative">
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">
                        Why Choose SaturnX for AI/ML Services?
                    </h4>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <ul className="space-y-4 text-gray-700">
                                <li><strong>Customized Solutions:</strong> Tailored AI/ML models to meet your business goals.</li>
                                <li><strong>Expert Team:</strong> Experienced professionals in data analytics and predictive modeling.</li>
                                <li><strong>Cutting-Edge Tools:</strong> Leverage frameworks like TensorFlow, PyTorch, and Scikit-learn.</li>
                                <li><strong>Scalability and Efficiency:</strong> Solutions that grow with your business needs.</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/whychooseusAiML.jpg"
                                alt="Why Choose Us"
                                className="max-w-sm lg:max-w-md rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 relative px-6 lg:px-0 bg-white font-poppins w-full">
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">
                        Our AI/ML Services
                    </h4>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI-Powered Automation",
                                desc: "Streamline operations with AI tools.",
                                icon: <FaRobot className="text-[#1476F2]" size={32} />
                            },
                            {
                                title: "Predictive Analytics",
                                desc: "Forecast trends and optimize decisions.",
                                icon: <FaChartLine className="text-[#1476F2]" size={32} />
                            },
                            {
                                title: "NLP",
                                desc: "Chatbots and text analytics to improve interactions.",
                                icon: <FaComments className="text-[#1476F2]" size={32} />
                            },
                            {
                                title: "Computer Vision",
                                desc: "Image recognition for security and healthcare.",
                                icon: <FaCamera className="text-[#1476F2]" size={32} />
                            },
                            {
                                title: "Recommendation Systems",
                                desc: "Personalized content recommendations.",
                                icon: <FaStar className="text-[#1476F2]" size={32} />
                            },
                            {
                                title: "Custom AI/ML Development",
                                desc: "Tailored applications for unique needs.",
                                icon: <FaCogs className="text-[#1476F2]" size={32} />
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-gray-200 py-16 px-6 lg:px-0 relative w-full">
                {/* How AI/ML Can Transform Your Business Section */}
                <section className="container mx-auto max-w-[1140px]">
                    <div className="max-w-7xl mx-auto px-4">
                        <h4 className="text-xl lg:text-4xl font-bold text-center mb-12">How AI/ML Can Transform Your Business</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Feature 1 */}
                            <div className="p-6 bg-white shadow rounded-lg text-center">
                                <img
                                    src="/boostProductivity.jpg"
                                    alt="Boost Productivity"
                                    className="w-full object-cover h-36 rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
                                <p className="text-gray-600">
                                    Automate repetitive tasks and allow your team to focus on strategic goals.
                                </p>
                            </div>
                            {/* Feature 2 */}
                            <div className="p-6 bg-white shadow rounded-lg text-center">
                                <img
                                    src="/designMaking.jpg"
                                    alt="Improve Decision-Making"
                                    className="w-full object-cover h-36 rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Improve Decision-Making</h3>
                                <p className="text-gray-600">
                                    Utilize AI insights for smarter, faster business decisions.
                                </p>
                            </div>
                            {/* Feature 3 */}
                            <div className="p-6 bg-white shadow rounded-lg text-center">
                                <img
                                    src="/customerExperience.jpg"
                                    alt="Enhance Customer Experience"
                                    className="w-full object-cover h-36 rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Enhance Customer Experience</h3>
                                <p className="text-gray-600">
                                    Deliver personalized solutions to meet customer expectations.
                                </p>
                            </div>
                            {/* Feature 4 */}
                            <div className="p-6 bg-white shadow rounded-lg text-center">
                                <img
                                    src="/increaseRevenue.jpg"
                                    alt="Increase Revenue"
                                    className="w-full object-cover h-36 rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Increase Revenue</h3>
                                <p className="text-gray-600">
                                    Drive sales growth through targeted marketing and operational efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Our Process Section */}
            <section className="py-16 bg-white px-6 lg:px-0 w-full relative">
                <div className="max-w-[1140px] container mx-auto ">
                    <h4 className="text-xl lg:text-4xl font-bold text-center mb-12">Our Process</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="p-6 bg-white text-gray-800 shadow rounded-lg text-center border-2">
                            <FaUsers className="mx-auto mb-4 text-4xl text-[#1476F2]" />
                            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                            <p>Understand your business challenges and goals.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="p-6 bg-white text-gray-800 shadow rounded-lg text-center border-2">
                            <FaChartLine className="mx-auto mb-4 text-4xl text-[#1476F2]" />
                            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                            <p>Assess your existing data and identify gaps.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="p-6 bg-white text-gray-800 shadow rounded-lg text-center border-2">
                            <FaCogs className="mx-auto mb-4 text-4xl text-[#1476F2]" />
                            <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
                            <p>Develop a tailored AI/ML strategy.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="p-6 bg-white text-gray-800 shadow rounded-lg text-center border-2">
                            <FaRocket className="mx-auto mb-4 text-4xl text-[#1476F2]" />
                            <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                            <p>Deploy the solution seamlessly into your operations.</p>
                        </div>
                        {/* Step 5 */}
                        <div className="p-6 bg-white text-gray-800 shadow rounded-lg text-center border-2">
                            <FaLifeRing className="mx-auto mb-4 text-4xl text-[#1476F2]" />
                            <h3 className="text-xl font-semibold mb-2">Support and Maintenance</h3>
                            <p>Ensure continuous optimization and scalability.</p>
                        </div>
                        {/* Step 6 */}
                        <div className="p-6 bg-white text-gray-800 shadow rounded-lg text-center border-2">
                            <FaCommentDots className="mx-auto mb-4 text-4xl text-[#1476F2]" />
                            <h3 className="text-xl font-semibold mb-2">Review and Feedback</h3>
                            <p>Collect feedback and improve the solution based on user input.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs />
        </>
    );
}

export default AiMl;
