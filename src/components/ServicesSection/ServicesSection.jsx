import React, { useState, useEffect } from 'react';
import { FaBrain, FaCode, FaCloud, FaDatabase, FaProjectDiagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        {
            id: 'tab1',
            icon: <FaBrain />,
            title: 'AI / ML Solutions',
            content: `Saturnx provides cutting-edge AI and ML solutions to revolutionize your business. Our expertise in artificial intelligence and machine learning helps businesses stay ahead of the curve by unlocking the power of data to drive growth, enhance decision-making, and streamline processes. We deliver innovative AI-driven solutions that empower organizations to increase operational efficiency, reduce costs, and stay competitive in today’s fast-paced market. Saturnx helps you future-proof your business, making it more adaptable, efficient, and capable of seizing new opportunities.`,
        },
        {
            id: 'tab2',
            icon: <FaCode />,
            title: 'Full Stack Development',
            content: `Saturnx offers robust full-stack development services to create scalable and efficient applications. ensuring that your applications are not only visually appealing but also highly functional and reliable.
Our experienced developers are committed to delivering applications that are not only technically sound but also aligned with your business objectives. By using the latest technologies and staying updated with industry trends, we ensure that your applications remain competitive in a dynamic digital landscape.`,
        },
        {
            id: 'tab3',
            icon: <FaCloud />,
            title: 'Cloud Solutions',
            content: `At Saturnx, we combine technical expertise with a deep understanding of business challenges to deliver cloud solutions that drive real results. We prioritize understanding your unique goals and provide customized strategies to ensure success in your cloud transformation journey.

We provide hybrid and multi-cloud architectures that offer flexibility and prevent vendor lock-in. This approach allows businesses to distribute workloads strategically across multiple cloud platforms for optimal performance and cost savings.`,
        },
        {
            id: 'tab4',
            icon: <FaDatabase />,
            title: 'Master Data Management',
            content: `Saturnx enables businesses to maintain data accuracy, consistency, and reliability through our comprehensive Master Data Management (MDM) services. We focus on consolidating and synchronizing your data across all platforms, ensuring a unified, trustworthy source of information that drives strategic decision-making and operational efficiency. 

Our team of experts collaborates closely with your stakeholders to design and implement solutions that align with your goals.`,
        },
        {
            id: 'tab5',
            icon: <FaProjectDiagram />,
            title: 'SDLC Services',
            content: `Saturnx offers end-to-end software development lifecycle (SDLC) services to streamline project execution. From planning and design to testing and deployment, we ensure quality delivery at every stage. Our agile methodologies guarantee timely delivery and adaptability to evolving requirements.
            At Saturnx, we aim to be your trusted partner in delivering innovative, reliable, and future-ready software solutions. Whether you’re building a new application from scratch or enhancing an existing one, our SDLC services ensure that your vision is brought to life seamlessly.`,
        },
    ];
    const navigate = useNavigate()

    return (
        <section className="bg-gray-200 py-12 relative">
            <div className="container mx-auto max-w-[1140px]">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 font-poppins">All Services</h1>
                    <hr className="w-24 mx-auto mt-2 border-t-2 border-gray-800" />
                </div>
                <div className="flex flex-wrap">
                    {/* Tab Links */}
                    <div className="w-full md:w-1/3 px-4">
                        <ul className="space-y-4">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.id}
                                    className={`flex gap-3 items-center p-4 rounded-lg cursor-pointer transition-all duration-300 shadow-sm
                                        ${activeTab === tab.id ? 'bg-[#010522] text-white' : 'bg-white hover:bg-[#0B5FC4] hover:text-white'}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    data-aos="fade-bottom"
                                    data-aos-delay="200"
                                >
                                    <div className="text-3xl">{tab.icon}</div>
                                    <a className="text-lg font-medium">{tab.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tab Content */}
                    <div className="w-full md:w-2/3 px-4 mt-2 lg:m-0">
                        {tabs.map(
                            (tab) =>
                                activeTab === tab.id && (
                                    <div
                                        key={tab.id}
                                        className="p-6 bg-white rounded-lg shadow-lg"
                                        data-aos="fade-top"
                                        data-aos-delay="300"
                                    >
                                        <h3 className="text-2xl font-bold text-gray-800">{tab.title}</h3>
                                        <hr className="w-16 border-t-2 border-gray-800 my-4" />
                                        <p className="text-gray-600 whitespace-pre-wrap">{tab.content}</p>
                                        <Button mainButton="Let's Talk"
                                            className='changeColor'
                                            btnPath={() => navigate("/contactus")}
                                        />
                                    </div>
                                )
                        )}
                    </div>
                </div>
                <div className='w-full text-center mt-8'>
                    <Button mainButton="Read More"
                        className={`changeColor`}
                        btnPath={() => navigate("/services")}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
