import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaBars, FaRegLightbulb, FaDesktop, FaCheckCircle, FaServer } from "react-icons/fa"; // Import React Icons
import Button from "../Buttons/Button";
import { FaRocket, FaPaintBrush, FaBug, FaCogs } from 'react-icons/fa'; // Import icons
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


const MegaMenu = () => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const industriesMenuImages = [
        "/collabrative1.jpg",
        "/banner1.jpg",
        "/banner2.jpg",
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
                            <NavLink to='/' className="text-lg">Home</NavLink>
                            <NavLink to='/about' className="text-lg">About</NavLink>
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
                                        <NavLink to='/services' className="text-base">Web Development</NavLink>
                                        <NavLink to='/services' className="text-base">Mobile Development</NavLink>
                                        <NavLink to='/services' className="text-base">UI/UX Design</NavLink>
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
                                            <h4 className="font-semibold text-base mb-2">Technology</h4>
                                            <a href="#" className="text-sm block">AI & Machine Learning</a>
                                            <a href="#" className="text-sm block">Cloud Computing</a>
                                            <a href="#" className="text-sm block">IoT</a>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base mb-2">Retail</h4>
                                            <a href="#" className="text-sm block">E-commerce</a>
                                            <a href="#" className="text-sm block">Supply Chain</a>
                                            <a href="#" className="text-sm block">Customer Experience</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <NavLink to='/careers' className="text-lg">Careers</NavLink>
                            <NavLink to='contactus' className="text-lg">Contact Us</NavLink>
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
                            <NavLink to='/services' className="text-lg flex items-center">
                                Services <FaChevronDown className="w-5 h-5 ml-2" />
                            </NavLink>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bg-gray-400 text-white w-full mt-2 p-4 left-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                >
                                    {/* Card 1 */}
                                    <div className="bg-[#010522] p-4 rounded-lg shadow-md">
                                        <img
                                            src="/colleagues-working-project-discussing-details.jpg"
                                            alt="Service 1"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Enterprise Software Development</h4>
                                        <p className="mt-2 text-sm">Leverage our expertise in full life-cycle application design, integration, and management.</p>
                                        <Button mainButton='Read More' />
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-[#010522] p-4 rounded-lg shadow-md">
                                        <img
                                            src="/representations-user-experience-interface-design.jpg"
                                            alt="Service 2"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Mobile App Development</h4>
                                        <p className="mt-2 text-sm">Go mobile-first with superior digital products, enabling seamless user experiences across all devices.</p>
                                        <Button mainButton='Read More' />
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-[#010522] p-4 rounded-lg shadow-md">
                                        <img
                                            src="/collabrative1.jpg"
                                            alt="Service 3"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h4 className="font-bold text-xl mt-4">Dedicated Development Team</h4>
                                        <p className="mt-2 text-sm">Scale your delivery capacity and build products faster with the help of our top qualified engineers.</p>
                                        <Button mainButton='Read More' />
                                    </div>

                                    <div className="relative flex items-center">
                                        <ul className="m-0 p-0">
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaRocket className="mr-2 text-[#0B5FC4]" size={30} /> Digital Transformation
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaPaintBrush className="mr-2 text-[#0B5FC4]" size={30} /> UI / UX Design
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaBug className="mr-2 text-[#0B5FC4]" size={30} /> QA & Testing
                                            </li>
                                            <li className="my-4 text-gray-800 flex items-center">
                                                <FaCogs className="mr-2 text-[#0B5FC4]" size={30} /> DevOps
                                            </li>
                                            <li>
                                                <Button mainButton='All Services' />
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
                                    className="absolute bg-gray-700 text-white w-full mt-2 left-0 grid grid-cols-3 gap-4 p-4"
                                >
                                    {/* Left Image Column */}
                                    <div className="col-span-1">
                                        <img
                                            src={industriesMenuImages[currentIndex]}
                                            alt="Industry Slider"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Right Columns */}
                                    <div className="col-span-2 grid grid-cols-2 gap-4">
                                        {/* Column 1 */}
                                        <div>
                                            <h3 className="font-bold text-xl">Industries</h3>
                                            <p className="mt-2">
                                                Explore the industries we serve: finance, healthcare, retail, and more.
                                            </p>
                                        </div>

                                        {/* Column 2 */}
                                        <div>
                                            <h3 className="font-bold text-xl">Our Expertise</h3>
                                            <p className="mt-2">
                                                Leverage our deep industry knowledge and innovative solutions to grow your business.
                                            </p>
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
