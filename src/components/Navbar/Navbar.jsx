import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaBars, FaRegLightbulb, FaDesktop, FaCheckCircle, FaServer } from "react-icons/fa"; // Import React Icons
import Button from "../Buttons/Button";
import { FaRocket, FaPaintBrush, FaBug, FaCogs } from 'react-icons/fa'; // Import icons
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { FaHardHat, FaHeartbeat, FaTooth, FaShieldAlt, FaShoppingCart } from "react-icons/fa";



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
        "/dentalNavbar.jpg",
        "/insuranceNavbar.jpg",
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
            title: "Dental",
            description: "Streamline your dental practice with our tailor-made scheduling, billing, and patient record solutions.",
        },
        {
            title: "Insurance",
            description: "Our insurance software solutions include claim management systems, policy administration, and risk analysis tools.",
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
        <nav className={`bg-gray-200 text-gray-800  p-4 font-poppins transition-all duration-300 ease-in-out  ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}>
            <div className="container mx-auto max-w-[1140px]">
                {/* Mobile Navbar */}
                <div className="lg:hidden flex items-center justify-between">
                    <NavLink to='/' className="cursor-pointer">
                        <img src="/SaturnXDigitalLogo_Transparent.png" alt="" className="w-20" />
                    </NavLink>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <IoMdClose className="w-6 h-6 focus:outline-none" /> : <FaBars className="w-6 h-6 focus:outline-none" />}
                    </button>
                    {/* <span className="font-bold text-xl">SaturnX</span> */}
                </div>

                {/* Mobile Menu (Visible only on mobile) */}
                {mobileMenuOpen && (
                    <div className="lg:hidden">
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
                                    <span className="ml-2">{servicesOpen ? '▲' : '▼'}</span>
                                </button>
                                {servicesOpen && (
                                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                                        <NavLink to='/services' className="text-base" onClick={() => setMobileMenuOpen(false)}>Web Development</NavLink>
                                        <NavLink to='/services' className="text-base" onClick={() => setMobileMenuOpen(false)}>Mobile Development</NavLink>
                                        <NavLink to='/services' className="text-base" onClick={() => setMobileMenuOpen(false)}>UI/UX Design</NavLink>
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
                                    <span className="ml-2">{industriesOpen ? '▲' : '▼'}</span>
                                </button>
                                {industriesOpen && (
                                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg mt-2">
                                        <div>
                                            <Link to="/construction" className="text-sm block" onClick={() => setMobileMenuOpen(false)}>Construction</Link>
                                            <Link to="/healthcare" className="text-sm block" onClick={() => setMobileMenuOpen(false)}>Health Care</Link>
                                            <Link to="/dental" className="text-sm block" onClick={() => setMobileMenuOpen(false)}>Dental</Link>
                                            <Link to="/insurance" className="text-sm block" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
                                        </div>
                                        <div>
                                            
                                            <Link to="/ecommerce" className="text-sm block" onClick={() => setMobileMenuOpen(false)}>E-commerce</Link>
                                            <a href="#" className="text-sm block" onClick={() => setMobileMenuOpen(false)}>Supply Chain</a>
                                            <a href="#" className="text-sm block" onClick={() => setMobileMenuOpen(false)}>Customer Experience</a>
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
                                className={`${isSticky ? "w-20" : "w-28"}`}
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
                            <NavLink to='/services' className="text-lg flex items-center"
                            onClick={() => setMobileMenuOpen(false)}
                            >
                                Services <FaChevronDown className="w-5 h-5 ml-2" />
                            </NavLink>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bg-white text-black w-full mt-2 p-4 left-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                >
                                    {/* Card 1 */}
                                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                        <img
                                            src="/colleagues-working-project-discussing-details.jpg"
                                            alt="Service 1"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Enterprise Software Development</h4>
                                        <p className="mt-2 text-sm">Leverage our expertise in full life-cycle application design, integration, and management.</p>
                                        <Button mainButton='Read More' 
                                        className="changeColor"
                                        btnPath={(navigate) => navigate("/services")}
                                        />
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                        <img
                                            src="/representations-user-experience-interface-design.jpg"
                                            alt="Service 2"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Mobile App Development</h4>
                                        <p className="mt-2 text-sm">Go mobile-first with superior digital products, enabling seamless user experiences across all devices.</p>
                                        <Button mainButton='Read More' 
                                        className="changeColor"
                                        btnPath={(navigate) => navigate("/services")}
                                        />
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                        <img
                                            src="/collabrative1.jpg"
                                            alt="Service 3"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Dedicated Development Team</h4>
                                        <p className="mt-2 text-sm">Scale your delivery capacity and build products faster with the help of our top qualified engineers.</p>
                                        <Button mainButton='Read More'
                                        className="changeColor"
                                        btnPath={(navigate) => navigate("/services")}
                                        />
                                    </div>

                                    <div className="relative flex items-center">
                                        <ul className="m-0 p-0">
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaRocket className="mr-2 text-[#0B5FC4]" size={20} /> Digital Transformation
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaPaintBrush className="mr-2 text-[#0B5FC4]" size={20} /> UI / UX Design
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaBug className="mr-2 text-[#0B5FC4]" size={20} /> QA & Testing
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaCogs className="mr-2 text-[#0B5FC4]" size={20} /> DevOps
                                            </li>
                                            <li>
                                                <Button mainButton='All Services' 
                                                className="changeColor"
                                                btnPath={(navigate) => navigate("/services")}
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
                                    className="absolute bg-white text-white w-full mt-2 left-0 grid items-center justify-center grid-cols-3 gap-4 p-4"
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
                                            <h3 className="font-bold text-xl">Industries</h3>
                                            <ul className="m-0 p-0 flex flex-col gap-8">
                                                <li className="flex items-center gap-4">
                                                    <FaHardHat className="text-[#0B5FC4]" size={20}/>
                                                    <Link to='/construction' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Construction</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <FaHeartbeat className="text-[#0B5FC4]" size={20}/>
                                                    <Link to='/healthcare' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Health Care</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <FaTooth className="text-[#0B5FC4]" size={20}/>
                                                    <Link to='/dental' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Dental</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <FaShieldAlt className="text-[#0B5FC4]" size={20}/>
                                                    <Link to='/insurance' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Insurance</Link>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <FaShoppingCart className="text-[#0B5FC4]" size={20}/>
                                                    <Link to='/ecommerce' className="text-gray-800 hover:text-blue-600" onClick={() => setIndustriesOpen(false)}>Retail & E-commerce</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Column 2 */}
                                        <div>
                                            <ul className="space-y-4">
                                                {industriesAccordionNavabr.map((service, index) => {
                                                    return (
                                                        <li key={index} className="border-2 border-gray-200 rounded-md">
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
                                to='/careers'
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-white bg-[#0B5FC4] px-4 py-1 rounded-md' : 'hover:bg-[#0B5FC4] hover:text-white px-4 py-1 rounded-md'}`
                                }
                            >
                                Careers
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
