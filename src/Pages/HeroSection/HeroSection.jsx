import { motion } from "framer-motion";
import "./HeroSection.css";
import Button from "../../components/Buttons/Button";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen text-gray-800 overflow-hidden font-poppins">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="191518-890528350_small.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto max-w-[1140px] relative z-10 text-center space-y-6">
        {/* Heading */}
        <motion.h1
          className="text-2xl md:text-6xl lg:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Build Bespoke Software Solution for Your{" "}
          <span className="text-[#0B5FC4]">Business Growth</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-md md:text-xl lg:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          From innovative startups to Fortune 500 enterprises, businesses trust
          us to develop, test, upgrade, and scale their{" "}
          <span className="text-[#0B5FC4]">digital products</span>.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button mainButton="Book A Free Consultation"
          btnPath='/contactus'
          />
        </motion.a>
      </div>

      {/* Decorative Planet */}
      {/* <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-[#164DA5] rounded-full blur-3xl opacity-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      /> */}
    </div>
  );
};

export default HeroSection;
