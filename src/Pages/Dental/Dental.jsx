import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Dental() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px] font-poppins">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/denatl.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          data-aos="fade-in"
        >
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
              Dental Software Development
            </h1>
            <p
              className="text-lg md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Revolutionizing dental practices with cutting-edge technology and customized solutions.
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto max-w-[1140px]'>
        {/* Service Section */}
        <div className="py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div data-aos="fade-right">
              <h4 className="text-3xl font-bold mb-6">
                Transforming Dental Practices with Innovative Software
              </h4>
              <p className="text-lg mb-4">
                We provide state-of-the-art software solutions to streamline operations in dental clinics. From appointment scheduling and patient management to billing and real-time reporting, our tools are designed to make dental practice more efficient.
              </p>
              <p className="text-lg">
                Our team combines deep industry knowledge with advanced technology to ensure a seamless experience for dentists and their staff while improving patient satisfaction.
              </p>
            </div>

            {/* Right Side Image */}
            <div data-aos="fade-left">
              <img
                src="/DentalAbout.jpg"
                alt="Dental Software"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4">
      <div className='container mx-auto max-w-[1140px]'>
        {/* Additional Information Section */}
        <h4
          className="text-3xl font-bold text-center mb-8"
          data-aos="zoom-in"
        >
          Why Choose Us?
        </h4>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="text-center bg-white p-8 shadow-lg rounded-md"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold mb-4">Patient-Centric Solutions</h3>
            <p>
              Our software is designed to enhance patient experience through efficient scheduling, automated reminders, and personalized communication.
            </p>
          </div>
          <div
            className="text-center bg-white p-8 shadow-lg rounded-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
            <p>
              Leverage data-driven insights to optimize clinic operations, monitor performance, and make informed decisions.
            </p>
          </div>
          <div
            className="text-center bg-white p-8 shadow-lg rounded-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold mb-4">Seamless Integration</h3>
            <p>
              Easily integrate with existing systems and tools, ensuring a hassle-free transition to digital solutions.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dental;
