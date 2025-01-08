import { motion } from 'framer-motion';
import Button from '../../components/Buttons/Button';
import AboutBanner from '../../components/AboutBanner/AboutBanner';

const About = () => {
  return (
    <>
    <div className="bg-gray-200 font-poppins py-16">
      <div className='container mx-auto max-w-[1140px]'>
        {/* Title Section */}
        <div className="text-center mb-4">
          <span className="text-black text-lg capitalize flex items-center justify-center">
            About Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-indigo-300 ml-3 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-black text-xl md:text-4xl xl:text-4xl font-semibold max-w-5xl mx-auto mb-16 leading-snug text-center"
        >
          We're a creative agency fueling your company's growth.
        </motion.h1>

        {/* Content Section */}
        <div className="bg-gray-200 py-12">
          <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12">
            {/* Left Side: Image */}
            <div className="flex flex-col items-center justify-center">
              <motion.img
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                src="/collabrative1.jpg" // Replace with your first image URL
                alt="Saturnx Image 1"
                className="mb-6 rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Right Side: Description */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-lg lg:text-lg text-gray-800 mb-8"
              >
                At <span className="font-bold text-[#0B5FC4]">SaturnX Digital</span>, we’re dedicated to empowering businesses to thrive in today’s dynamic digital landscape. Our expert team crafts innovative, data-driven marketing strategies designed to elevate your brand and amplify your online presence. By leveraging the latest technologies and cutting-edge insights, we deliver impactful solutions that drive growth, enhance customer engagement, and achieve measurable success. Let us take your business to the next level with precision, creativity, and results that speak for themselves.
              </motion.p>
              <motion.button
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className='text-left'
              >
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
