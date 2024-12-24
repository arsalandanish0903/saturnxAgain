import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPen, FaMobileAlt, FaCog } from 'react-icons/fa';
import './OurServices.css'

const OurServices = () => {
    return (
        <section class="min-h-screen bg-gray-200 text-center py-20 px-8 xl:px-0 flex flex-col justify-center font-poppins">
            <span class="text-black text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">what we're offering <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-indigo-600 ml-3 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </span>
            <h1 class="text-black text-4xl md:text-5xl xl:text-6xl font-semibold max-w-4xl mx-auto mb-16 leading-snug">Services Built Specifically for your Business</h1>
            <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div class="card bg-[#010522] p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pr-52">
                        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">uI/uX <br /> creative design</h2>
                        <p class="text-gray-400">We create user-centered UI/UX designs that are intuitive, visually appealing, and enhance overall user experience.</p>
                    </div>


                    <div class="icon"></div>
                </div>
                <div class="card bg-[#010522] p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pl-48">
                        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">Mobile App Development</h2>
                        <p class="text-gray-400">Assets with normal experience of 7 years and tech ability across the spaces of local iOS, Android, cross stage, and hybrid apps.</p>
                    </div>
                </div>
                <div class="card bg-[#010522] p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pr-44">
                        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">strategy & <br />digital marketing</h2>
                        <p class="text-gray-400">We offer tailored digital marketing strategies to help businesses grow their online presence, drive traffic, and convert leads into customers.</p>
                    </div>

                </div>
                <div class="card bg-[#010522] p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pl-48">
                        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">effective<br /> business growth</h2>
                        <p class="text-gray-400">We help businesses grow by implementing strategic solutions that drive results and increase profitability.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurServices;
