import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaBars, FaRegLightbulb, FaDesktop, FaCheckCircle, FaServer } from "react-icons/fa"; // Import React Icons
import Button from "../Buttons/Button";
import { FaRocket, FaPaintBrush, FaBug, FaCogs } from 'react-icons/fa'; // Import icons
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { FaHardHat, FaBrain, FaHeartbeat, FaTooth, FaShieldAlt, FaShoppingCart } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";




const MegaMenu = () => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null)
    const industriesMenuImages = [
        "/constructionNavbar.jpg",
        "/healthcareNavbar.jpg",
        "/logistics.jpg",
        "/automotive.jpg",
        "/ecommerceNavabr.webp"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % industriesMenuImages.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [industriesMenuImages.length]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const industriesAccordionNavabr = [
        {
            title: "Construction",
            description: "Our company delivers customized software solutions for construction management, project tracking, and cost estimation.",
        },
        {
            title: "Health Care",
            description: "We specialize in building healthcare management systems, patient portals, and telemedicine platforms.",
        },
        {
            title: "Logistics & Transportation",
            description: "Optimize your logistics and transportation operations with our advanced solutions. From real-time tracking to efficient route planning and seamless fleet management, we provide tools to enhance delivery precision and operational efficiency. ",
        },
        {
            title: "Automotive",
            description: "Revolutionize your automotive operations with our innovative software solutions. From inventory management and vehicle diagnostics to customer relationship tools and streamlined service scheduling",
        },
        {
            title: "Travel & Hospitality",
            description: "Our services are designed to provide seamless experiences, combining comfort and convenience at every step of the journey."
        },
        {
            title: "Edutech",
            description:
                "Our platform empowers learners with innovative tools and interactive content for effective knowledge acquisition."
        },
        {
            title: "Retail & E-commerce",
            description: "Boost your retail business with our e-commerce platforms, inventory management, and customer engagement tools.",
        },
    ];
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    const navigate = useNavigate()
    return (
        <nav className={`bg-gray-200 text-gray-800 z-50  lg:p-4 font-poppins transition-all duration-300 ease-in-out  ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}>
            <div className="container mx-auto max-w-[1140px]">
                {/* Mobile Navbar */}
                <div
                    className={`bg-gray-200 text-gray-800 p-4 font-poppins transition-all duration-300 ease-in-out lg:hidden flex items-center justify-between relative ${isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-md w-full' : 'w-full'
                        } overflow-hidden`}
                >
                    <NavLink to="/" className="cursor-pointer">
                        <img src="/SaturnXDigitalLogo_Transparent.png" alt="logo" className="w-20 max-w-full" />
                    </NavLink>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
                        {mobileMenuOpen ? <IoMdClose className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu (Visible only on mobile) */}
                {mobileMenuOpen && (
                    <div className={`bg-gray-200 text-gray-800  p-4 font-poppins transition-all duration-300 ease-in-out lg:hidden ${isSticky ? 'fixed top-0 left-0 right-0 z-40 mt-24 shadow-md' : ''}`}>
                        <div className="flex flex-col space-y-4 mt-4">
                            <NavLink to='/' className="text-lg" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                            <NavLink to='/about' className="text-lg" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                            {/* Services with Submenu */}
                            <div className="relative">
                                <button
                                    className="text-lg flex items-center"
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                >
                                    Services
                                    <span className="ml-2">{servicesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                                </button>
                                {servicesOpen && (
                                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                                        <NavLink to='/mobile-app-development' className="text-base" onClick={() => setMobileMenuOpen(false)}>Mobile App Development</NavLink>
                                        <NavLink to='/enterprise-software-development' className="text-base" onClick={() => setMobileMenuOpen(false)}>Enterprise Software Development</NavLink>
                                        <NavLink to='/dedicated-team-development' className="text-base" onClick={() => setMobileMenuOpen(false)}>Dedicated Development Team</NavLink>
                                        <NavLink to='/software-development-services-of-any-type-and-complexity' className="text-base" onClick={() => setMobileMenuOpen(false)}>All Services</NavLink>
                                    </div>
                                )}
                            </div>
                            {/* Industries with Mega Menu */}
                            <div className="relative">
                                <button
                                    className="text-lg flex items-center"
                                    onClick={() => setIndustriesOpen(!industriesOpen)}
                                >
                                    Industries
                                    <span className="ml-2">{industriesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                                </button>
                                {industriesOpen && (
                                    <div className="p-4 rounded-lg mt-2">
                                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                                            <Link to="/digital-solutions-for-construction" className="text-base" onClick={() => setMobileMenuOpen(false)}>Construction</Link>
                                            <Link to="/digital-solutions-for-healthcare" className="text-base" onClick={() => setMobileMenuOpen(false)}>Health Care</Link>
                                            <Link to="/digital-solutions-for-logistics-and-transportation" className="text-base" onClick={() => setMobileMenuOpen(false)}>Logistics & Transportation</Link>
                                            <Link to="/digital-solutions-for-automotive" className="text-base" onClick={() => setMobileMenuOpen(false)}>Automotive</Link>
                                            <Link to="/digital-solutions-for-ecommerce" className="text-base" onClick={() => setMobileMenuOpen(false)}>E-commerce</Link>
                                            <Link to="/digital-solutions-for-travel-and-hospitality" className="text-base" onClick={() => setMobileMenuOpen(false)}>Travel & Hospitality</Link>
                                            <Link to="/digital-solutions-for-edutech" className="text-base" onClick={() => setMobileMenuOpen(false)}>Edutech</Link>
                                            <Link to="/software-development-services-of-any-type-and-complexity" className="text-base" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <NavLink to='/careers' className="text-lg" onClick={() => setMobileMenuOpen(false)}>Careers</NavLink>
                            <NavLink to='contactus' className="text-lg" onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>
                        </div>
                    </div>
                )}

                {/* Desktop Navbar */}
                <div className="hidden lg:flex justify-between items-center space-x-8">
                    <div>
                        <NavLink to="/">
                            <img
                                src="/SaturnXDigitalLogo_Transparent.png"
                                alt="SaturnX Logo"
                                className={`${isSticky ? "w-20" : "w-24"}`}
                            />
                        </NavLink>
                    </div>
                    <div className="flex gap-16">

                        <div className="relative">
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-white bg-[#0B5FC4] px-4 py-1 rounded-md' : 'hover:bg-[#0B5FC4] hover:text-white px-4 py-1 rounded-md'}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </div>

                        <div className="relative">
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-white bg-[#0B5FC4] px-4 py-1 rounded-md' : 'hover:bg-[#0B5FC4] hover:text-white px-4 py-1 rounded-md'}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </NavLink>
                        </div>

                        {/* Services Dropdown */}
                        <div
                            className="z-50 transition duration-300"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <NavLink to='/software-development-services-of-any-type-and-complexity' className="text-lg flex items-center"
                                onClick={() => setMobileMenuOpen(false) || setServicesOpen(false)}
                            >
                                Services <FaChevronDown className="w-5 h-5 ml-2" />
                            </NavLink>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bg-gray-200 text-black w-full -z-10 -mt-1 pt-12 pb-4 px-8 left-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                >
                                    {/* Card 1 */}
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src="/colleagues-working-project-discussing-details.jpg"
                                            alt="Service 1"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Enterprise Software Development</h4>
                                        <p className="mt-2 text-sm">Leverage our expertise in full life-cycle application design, integration, and management.</p>
                                        <Button mainButton='Read More'
                                            className="changeColor"
                                            btnPath={(navigate) => navigate("/enterprise-software-development")}
                                            setServicesOpen={setServicesOpen}
                                        />
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src="/representations-user-experience-interface-design.jpg"
                                            alt="Service 2"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Mobile App Development</h4>
                                        <p className="mt-2 text-sm">Go mobile-first with superior digital products, enabling seamless user experiences across all devices.</p>
                                        <Button mainButton='Read More'
                                            className="changeColor"
                                            btnPath={(navigate) => navigate("/mobile-app-development")}
                                            setServicesOpen={setServicesOpen}
                                        />
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src="/collabrative1.jpg"
                                            alt="Service 3"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Dedicated Development Team</h4>
                                        <p className="mt-2 text-sm">Scale your delivery capacity and build products faster with the help of our top qualified engineers.</p>
                                        <Button mainButton='Read More'
                                            className="changeColor"
                                            btnPath={(navigate) => navigate("/dedicated-team-development")}
                                            setServicesOpen={setServicesOpen}

                                        />
                                    </div>

                                    <div className="relative flex items-center">
                                        <ul className="m-0 p-0">
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaRocket className="mr-2 text-[#0B5FC4]" size={20} />
                                                <Link to="/digitaltransformation/software-development"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    Digital Transformation
                                                </Link>
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaPaintBrush className="mr-2 text-[#0B5FC4]" size={20} />
                                                <Link to="/uiux-digital-solutions-provider"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    UI / UX Design
                                                </Link>
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <AiOutlineSound className="mr-2 text-[#0B5FC4]" size={20} />
                                                <Link to="/digital-marketing-services"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    Digital Marketing
                                                </Link>
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaBug className="mr-2 text-[#0B5FC4]" size={20} />
                                                <Link to="/software-qa-and-testing"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    QA & Testing
                                                </Link>
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaCogs className="mr-2 text-[#0B5FC4]" size={20} />
                                                <Link to="/devops-services"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    DevOps
                                                </Link>
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaBrain className="mr-2 text-[#0B5FC4]" size={20} />
                                                <Link to="/ai-ml-services"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    AI /ML
                                                </Link>
                                            </li>
                                            <li>
                                                <Button mainButton='All Services'
                                                    className="changeColor"
                                                    btnPath={(navigate) => navigate("/software-development-services-of-any-type-and-complexity")}
                                                    setServicesOpen={setServicesOpen}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Industries Dropdown */}
                        <div
                            className="z-50"
                            onMouseEnter={() => setIndustriesOpen(true)}
                            onMouseLeave={() => setIndustriesOpen(false)}
                        >
                            <a href="#" className="text-lg flex items-center">
                                Industries <FaChevronDown className="w-5 h-5 ml-2" />
                            </a>
                            {industriesOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bg-gray-200 text-black -z-10 -mt-1 pt-12 pb-4 px-8 w-full  left-0 grid items-center justify-center grid-cols-3 gap-4 p-4"
                                >
                                    {/* Left Image Column */}
                                    <div className="col-span-1">
                                        <img
                                            src={industriesMenuImages[currentIndex]}
                                            alt="Industry Slider"
                                            className="w-[400px] rounded-md h-[300px] object-cover"
                                        />
                                    </div>

                                    {/* Right Columns */}
                                    <div className="col-span-2 grid grid-cols-2 gap-4 py-4">
                                        {/* Column 1 */}
                                        <div>
                                            <h3 className="font-bold text-xl mb-4">Industries</h3>
                                            <ul className="m-0 p-0 flex flex-col gap-8">
                                                <li className="flex items-center gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 57 56" fill="none" className="text-[#164DA5]">
                                                        <g clip-path="url(#clip0_3450_11336)">
                                                            <circle cx="28.25" cy="28" r="27.35" stroke="currentColor" stroke-width="1.3"></circle>
                                                            <path d="M22.65 34.7479V39.1509C22.65 39.9769 22.16 40.7329 21.404 41.0689L17.75 42.6999" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M33.8496 34.7479V39.1509C33.8496 39.9769 34.3396 40.7329 35.0956 41.0689L38.7496 42.6999" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M35.9498 24.5V30.8C35.9498 33.6 31.7498 37.1 29.6498 37.1H28.2498H26.8498C24.7498 37.1 20.5498 33.6 20.5498 30.8V24.5" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M26.1504 14.7V10.5H30.3504V14.7" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M30.35 11.9H31.05C33.85 11.9 37.35 15.372 37.35 18.9V21L38.75 21.7V24.5H28.25H17.75V21.7L19.15 21V18.9C19.15 15.372 22.65 11.9 25.45 11.9H26.15" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M19.1504 20.9999H20.5504" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M35.9502 20.9999H37.3502" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3450_11336">
                                                                <rect width="56" height="56" fill="currentColor" transform="translate(0.25)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <Link to='/digital-solutions-for-construction' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Construction</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 57 56" fill="none" className="text-[#164DA5]">
                                                        <g clip-path="url(#clip0_3450_11330)">
                                                            <circle cx="28.75" cy="28" r="27.35" stroke="currentColor" stroke-width="1.3"></circle>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7497 45.5L15.3258 30.386C12.9082 27.7763 12.3097 23.789 13.8401 20.4886V20.4886C14.9816 18.0239 17.1511 16.302 19.6708 15.8607C22.1905 15.4195 24.7531 16.3127 26.5579 18.2614L28.7497 20.6274L30.9415 18.2614C32.7468 16.3128 35.3097 15.4195 37.8297 15.8608C40.3498 16.302 42.5198 18.0239 43.6619 20.4886V20.4886C45.19 23.7898 44.5905 27.7761 42.1736 30.386L28.7497 45.5Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M7.75 34.2794H20.9212C21.4019 34.2794 21.8146 33.9374 21.9038 33.465L24.0971 21.8536C24.3079 20.7375 25.9208 20.7812 26.0709 21.9071L28.0142 36.4816C28.1616 37.587 29.7342 37.658 29.9807 36.5705L31.2747 30.8614C31.5102 29.8229 32.9898 29.8229 33.2253 30.8614L33.8234 33.5005C33.9267 33.956 34.3316 34.2794 34.7987 34.2794H49.75" stroke="currentColor" stroke-width="1.3"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3450_11330">
                                                                <rect width="56" height="56" fill="currentColor" transform="translate(0.75)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <Link to='/digital-solutions-for-healthcare' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Health Care</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <svg width="40" height="40" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#164DA5]">
                                                        <rect x="1.4" y="0.65" width="54.7" height="54.7" rx="27.35" stroke="currentColor" stroke-width="1.3"></rect>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5833 41.9023C27.2707 41.9023 26.9586 41.8533 26.6611 41.7541L16.7438 38.4484C15.5515 38.0506 14.75 36.9387 14.75 35.6811V34.9612C14.75 33.7041 15.5515 32.5923 16.7438 32.1945L23.899 29.8098L24.2677 30.9164L17.1131 33.3011C16.3973 33.5396 15.9167 34.207 15.9167 34.9612V35.6811C15.9167 36.4353 16.3973 37.1026 17.1131 37.3412L27.0297 40.647C27.3862 40.766 27.7793 40.766 28.1369 40.647L39.803 36.7579C40.5193 36.5193 41 35.8526 41 35.0977V34.3779C41 33.6236 40.5193 32.9563 39.803 32.7177L32.6513 30.3336L33.02 29.2271L40.1723 31.6111C41.3652 32.009 42.1667 33.1208 42.1667 34.3779V35.0977C42.1667 36.3554 41.3652 37.4672 40.1723 37.8651L28.5062 41.7541C28.2081 41.8533 27.896 41.9023 27.5833 41.9023ZM27.5833 37.9463C27.5209 37.9463 27.4591 37.9364 27.399 37.9166L18.649 34.9999C18.4104 34.9206 18.25 34.6977 18.25 34.4463C18.25 34.1949 18.4104 33.9726 18.649 33.8927L25.649 31.5594L26.0177 32.6666L20.6778 34.4463L27.5833 36.7481L36.2388 33.863L30.8984 32.0832L31.2671 30.9761L38.2677 33.3094C38.5063 33.3893 38.6667 33.6116 38.6667 33.863C38.6667 34.1144 38.5063 34.3372 38.2677 34.4166L27.7677 37.9166C27.7076 37.9364 27.6458 37.9463 27.5833 37.9463Z" fill="currentColor" stroke="currentColor" stroke-width="0.3"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.167 15.1667C24.9738 15.1667 22.3757 17.7648 22.3757 20.958C22.3739 22.4892 22.6265 23.4109 23.3767 24.6114C24.0562 25.6982 26.9986 29.9938 28.167 31.696C29.3354 29.9938 32.2783 25.6982 32.9573 24.6114C33.7081 23.4109 33.9607 22.4893 33.9583 20.9586C33.9583 17.7648 31.3607 15.1667 28.167 15.1667ZM28.167 33.7546L27.6863 33.0563C27.5055 32.7938 23.2495 26.6087 22.3873 25.2297C21.3992 23.6489 21.2072 22.4659 21.209 20.9568C21.209 17.1214 24.3304 14 28.167 14C32.0036 14 35.125 17.1214 35.125 20.958C35.1273 22.4659 34.9354 23.6495 33.9461 25.2297C33.0851 26.6087 28.8285 32.7938 28.6477 33.0563L28.167 33.7546ZM28.1707 19.2796C29.1653 19.2796 29.916 20.031 29.9172 21.0273C29.9178 21.5126 29.7416 21.9571 29.4202 22.2786C29.0976 22.6017 28.6566 22.7796 28.1777 22.7796H28.1567C27.6778 22.7796 27.2362 22.6017 26.9136 22.2786C26.5928 21.9571 26.416 21.5126 26.4172 21.0273C26.4183 20.031 27.1691 19.2796 28.1707 19.2796ZM28.1777 23.9463C28.9687 23.9463 29.7025 23.6465 30.2462 23.1028C30.7875 22.5603 31.085 21.8224 31.0838 21.0255C31.0815 19.3922 29.8017 18.113 28.1631 18.113C26.5321 18.113 25.2528 19.3922 25.2505 21.0255C25.2493 21.823 25.5468 22.5609 26.0882 23.1028C26.6313 23.647 27.3657 23.9463 28.1672 23.9463H28.1777Z" fill="currentColor" stroke="currentColor" stroke-width="0.3"></path>
                                                    </svg>
                                                    <Link to='/digital-solutions-for-logistics-and-transportation' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Logistics & Transportation</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <svg width="40" height="40" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#164DA5]">
                                                        <g clip-path="url(#clip0_3450_11352)">
                                                            <circle cx="28.25" cy="28" r="27.35" stroke="currentColor" stroke-width="1.3"></circle>
                                                            <path d="M15.4171 37.45V40.475C15.4171 40.6532 15.3542 40.8047 15.2283 40.9297C15.1024 41.0544 14.9496 41.1167 14.77 41.1167C14.5903 41.1167 14.4393 41.0544 14.3171 40.9297C14.1949 40.8047 14.1338 40.6532 14.1338 40.475V27.825C14.1338 27.6723 14.1414 27.5195 14.1567 27.3667C14.172 27.2139 14.2067 27.0576 14.2607 26.8978L17.2963 18.3834C17.4763 17.8401 17.8027 17.3987 18.2757 17.0593C18.7484 16.7198 19.2775 16.55 19.863 16.55H36.638C37.2234 16.55 37.7525 16.7198 38.2252 17.0593C38.6982 17.3987 39.0247 17.8401 39.2046 18.3834L42.2402 26.8978C42.2942 27.0576 42.3289 27.2139 42.3442 27.3667C42.3595 27.5195 42.3671 27.6723 42.3671 27.825V40.475C42.3671 40.6532 42.3042 40.8047 42.1783 40.9297C42.0524 41.0544 41.8996 41.1167 41.72 41.1167C41.5403 41.1167 41.3893 41.0544 41.2671 40.9297C41.1449 40.8047 41.0838 40.6532 41.0838 40.475V37.45H15.4171ZM15.9671 26.0834H40.5338L37.9671 18.7959C37.8449 18.4903 37.6616 18.2535 37.4171 18.0855C37.1727 17.9174 36.8824 17.8334 36.5463 17.8334H19.9546C19.6185 17.8334 19.3282 17.9174 19.0838 18.0855C18.8393 18.2535 18.656 18.4903 18.5338 18.7959L15.9671 26.0834ZM19.8281 33.6C20.3402 33.6 20.772 33.4207 21.1234 33.062C21.4748 32.7036 21.6505 32.2681 21.6505 31.7557C21.6505 31.2436 21.4711 30.8119 21.1124 30.4605C20.754 30.1091 20.3185 29.9334 19.8061 29.9334C19.294 29.9334 18.8623 30.1127 18.5109 30.4715C18.1595 30.8299 17.9838 31.2653 17.9838 31.7777C17.9838 32.2898 18.1631 32.7216 18.5219 33.073C18.8803 33.4244 19.3157 33.6 19.8281 33.6ZM36.6948 33.6C37.2069 33.6 37.6387 33.4207 37.99 33.062C38.3414 32.7036 38.5171 32.2681 38.5171 31.7557C38.5171 31.2436 38.3378 30.8119 37.979 30.4605C37.6206 30.1091 37.1852 29.9334 36.6728 29.9334C36.1607 29.9334 35.7289 30.1127 35.3775 30.4715C35.0261 30.8299 34.8505 31.2653 34.8505 31.7777C34.8505 32.2898 35.0298 32.7216 35.3885 33.073C35.747 33.4244 36.1824 33.6 36.6948 33.6ZM15.4171 36.1667H41.0838V27.3667H15.4171V36.1667Z" fill="currentColor"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3450_11352">
                                                                <rect width="56" height="56" fill="currentColor" transform="translate(0.25)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <Link to='/digital-solutions-for-automotive' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Automotive</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 57 56" fill="none" className="text-[#164DA5]">
                                                        <g clip-path="url(#clip0_3450_11358)">
                                                            <circle cx="28.75" cy="28" r="27.35" stroke="currentColor" stroke-width="1.3"></circle>
                                                            <path d="M28.2363 26.3162V29.5238C28.2363 30.7657 28.9982 31.8095 29.7601 32.5714C30.522 33.3333 34.3316 37.1428 34.3316 37.1428L35.8554 44" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M27.4746 44L31.5127 34.3162" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M28.9677 31.6343L24.4268 44" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M31.6647 12C30.1942 12 28.998 13.1962 28.998 14.6667V15.4286C28.998 16.899 30.1942 18.0952 31.6647 18.0952C33.1352 18.0952 34.3314 16.899 34.3314 15.4286V14.6667C34.3314 13.1962 33.1428 12 31.6647 12Z" stroke="currentColor" stroke-miterlimit="10"></path>
                                                            <path d="M33.5703 25.5466L38.1417 29.5238" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M38.9342 44L37.3952 35.619L33.5704 30.2857V22.6666C33.5704 21.3562 32.6561 20.8381 31.2847 20.3809C30.2485 20.0304 28.3514 20.1447 27.8104 21.0209C27.2695 21.8971 25.1895 26.4762 25.1895 26.4762V30.8038" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M25.1888 30.8038L22.2402 35.9162" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.9507 44V43.3372L22.2402 35.9086L18.6745 33.8514C18.3087 33.6381 17.844 33.7676 17.6306 34.1333L14.103 40.2362C13.8897 40.6019 14.0192 41.0667 14.3849 41.28L17.9507 43.3372" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3450_11358">
                                                                <rect width="56" height="56" fill="currentColor" transform="translate(0.75)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <Link to='/digital-solutions-for-travel-and-hospitality' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Travel & Hospitality</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 57 56" fill="none" className="text-[#164DA5]">
                                                        <g clip-path="url(#clip0_3450_11371)">
                                                            <circle cx="28.25" cy="28" r="27.35" stroke="currentColor" stroke-width="1.3"></circle>
                                                            <path d="M25.5654 21.6957V15H42.0002V36.3044H25.5654V28.3913" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M23.1304 35.0869V26.5652H28C29.8383 26.5652 31.0435 24.873 31.0435 23.5217C30.0939 23.5217 19.9896 23.5217 18.8696 23.5217C15.9783 23.5217 14 24.4409 14 27.1739V32.6522C14 33.9548 15.1322 35.0869 16.4348 35.0869" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M23.1299 27.174V41.7826" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M20.0869 33.8695V41.7825" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M17.0439 27.174V41.7826" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M20.3915 21.6957C21.9193 21.6957 23.1306 20.7035 23.1306 19.2609V17.4348C23.1306 15.9922 21.9193 15 20.3915 15C18.8636 15 17.6523 15.9922 17.6523 17.4348V19.2609C17.6523 20.6974 18.8636 21.6957 20.3915 21.6957Z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M34.0869 35.6957V41.1739" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                            <path d="M29.7832 40.6078L34.0867 36.3043L38.3902 40.6078" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3450_11371">
                                                                <rect width="56" height="56" fill="currentColor" transform="translate(0.25)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <Link to='/digital-solutions-for-edutech' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Edutech</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <svg
                                                        width="40"
                                                        height="40"
                                                        viewBox="0 0 57 56"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-[#164DA5]"
                                                    >
                                                        <g clipPath="url(#clip0_cart_svg)">
                                                            <circle
                                                                cx="28.25"
                                                                cy="28"
                                                                r="27.35"
                                                                stroke="currentColor"
                                                                strokeWidth="1.3"
                                                            ></circle>
                                                            <path
                                                                d="M18 16H42L39.5 26H20.5L18 16ZM20.5 28H39.5C40.3284 28 41 28.6716 41 29.5C41 30.3284 40.3284 31 39.5 31H20.5C19.6716 31 19 30.3284 19 29.5C19 28.6716 19.6716 28 20.5 28ZM23 37C24.1046 37 25 36.1046 25 35C25 33.8954 24.1046 33 23 33C21.8954 33 21 33.8954 21 35C21 36.1046 21.8954 37 23 37ZM35 37C36.1046 37 37 36.1046 37 35C37 33.8954 36.1046 33 35 33C33.8954 33 33 33.8954 33 35C33 36.1046 33.8954 37 35 37Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_cart_svg">
                                                                <rect
                                                                    width="56"
                                                                    height="56"
                                                                    fill="currentColor"
                                                                    transform="translate(0.25)"
                                                                ></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <Link to='/digital-solutions-for-ecommerce' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Retail & E-commerce</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Column 2 */}
                                        <div>
                                            <ul className="space-y-4">
                                                {industriesAccordionNavabr.map((service, index) => {
                                                    return (
                                                        <li key={index} className="border-2 border-[#0B5FC4] rounded-md">
                                                            <button
                                                                onClick={() => toggleAccordion(index)}
                                                                className="flex justify-between items-center w-full hover:border-none p-4 font-semibold text-left text-black hover:bg-[#0B5FC4] hover:text-white focus:outline-none group"
                                                            >
                                                                {service.title}
                                                                <span className="text-black group-hover:text-[#fff]">
                                                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                                                </span>
                                                            </button>
                                                            {openIndex === index && (
                                                                <div className="p-4 text-black">
                                                                    {service.description}
                                                                </div>
                                                            )}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>


                        <div className="relative">
                            <NavLink
                                to='/cutting-edge-technologies'
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-white bg-[#0B5FC4] px-4 py-1 rounded-md' : 'hover:bg-[#0B5FC4] hover:text-white px-4 py-1 rounded-md'}`
                                }
                            >
                                Technology
                            </NavLink>
                        </div>

                        <div className="relative">
                            <NavLink
                                to='/contactus'
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-white bg-[#0B5FC4] px-4 py-1 rounded-md' : 'hover:bg-[#0B5FC4] hover:text-white px-4 py-1 rounded-md'}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MegaMenu;
