import React, { useState } from "react";
import { 
  FaCode, 
  FaMobileAlt, 
  FaGlobe, 
  FaUsers, 
  FaDatabase, 
  FaBug, 
  FaLightbulb, 
  FaTools, 
  FaCogs 
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "Leverage custom software development solutions tailored to your unique business needs, ensuring scalability, seamless software integration, and optimized business objectives.",
    icon: "/customeSoftware.svg",
    details: [
      "Custom Software Development",
      "Artificial Intelligence (AI) Development",
      "Bespoke Software Development",
      "Custom CRM Development",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Develop intuitive, feature-rich mobile apps with cutting-edge technologies, enhancing customer relationship management and delivering exceptional user experiences on all platforms.",
    icon: "/mobileApp.svg",
    details: [
        "Mobile App Development Services",
        "Android App Development Services",
        "iOS App Development",
    ],
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Create scalable, secure web development solutions built with a robust technology stack to meet your business objectives and elevate your online presence.",
    icon: "/webDevelopment.svg",
    details: [
        "Web Development Services",
        "Web Application Development"
    ],
  },
  {
    id: 4,
    title: "Dedicated Teams",
    description:
      "Partner with expert software developers and engineers through our software development outsourcing model, ensuring seamless collaboration and project efficiency.",
    icon: "/dedicatedTeam.svg",
    details: [
        "Dedicated Development Teams",
        "Outsourcing Software Development",
        "IT Staff Augmentation",
        "IT Staffing Services",
        "Team Extension Services"
    ],
  },
  {
    id: 5,
    title: "Data Engineering",
    description:
      "Transform complex data into actionable insights with robust data science frameworks, enhancing decision-making through advanced engineering services and scalable architectures.",
    icon: "/dataEngineering.svg",
    details: [
        "Data Visualization & Consulting Services",
        "Big Data and Analytics Services",
        "Business Intelligence (BI) Services",
        "Data Security Services"
    ],
  },
  {
    id: 6,
    title: "QA Testing",
    description:
      "Ensure flawless software features and reliability with comprehensive quality assurance throughout the software development lifecycle, aligned with your quality management system.",
    icon: "/qaTesting.svg",
    details: [
        "Quality Assurance and Software Testing Services",
    ],
  },
];

function MainService() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="relative bg-gray-200 py-16 w-full font-poppins">
      <div className="container mx-auto max-w-[1140px] px-4">
      <h1 class="text-black text-4xl md:text-4xl xl:text-4xl font-semibold text-center mb-4 leading-snug">Services And Solutions We Offer</h1>
        <p className="text-center text-gray-600 mb-8">
          Saturnx provides a wide range of software development services and solutions. We also design and implement software products for companies to propel their business forward.
        </p>

        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border rounded-lg overflow-hidden"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer bg-white "
                onClick={() => toggleAccordion(service.id)}
              >
                <div className="flex items-center space-x-3">
                  <img src={service.icon} alt="" />
                  <span className="font-medium">{service.title}</span>
                </div>
                <span className="text-xl text-gray-500">
                  {openId === service.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {openId === service.id && (
                <div
                  className="p-4 text-gray-700 bg-white transition-all duration-300"
                >
                  <p className="mb-4">{service.description}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainService;
