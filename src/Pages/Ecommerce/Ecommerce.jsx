import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ecommerce() {
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
          <source src="/Ecommerce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          data-aos="fade-in"
        >
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
              Empower Your E-Commerce Business
            </h1>
            <p
              className="text-lg md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Cutting-edge e-commerce solutions to scale your online business and enhance customer experience.
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
                Comprehensive E-Commerce Development Services
              </h4>
              <p className="text-lg mb-4">
                We provide end-to-end e-commerce solutions, including storefront design, payment gateway integration, inventory management systems, and seamless user experiences that drive sales.
              </p>
              <p className="text-lg">
                Our team specializes in creating scalable, secure, and user-friendly e-commerce platforms tailored to meet your unique business needs and grow your brand online.
              </p>
            </div>

            {/* Right Side Image */}
            <div data-aos="fade-left">
              <img
                src="/EcommerceAbout.jpg"
                alt="E-commerce Solutions"
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
            Why Partner With Us?
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center bg-white p-8 shadow-lg rounded-md"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-4">Custom Storefront Design</h3>
              <p>
                We design visually appealing and highly functional e-commerce stores that reflect your brand identity and captivate your audience.
              </p>
            </div>
            <div
              className="text-center bg-white p-8 shadow-lg rounded-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold mb-4">Seamless Integrations</h3>
              <p>
                From payment gateways to third-party APIs, we ensure all integrations are seamless, secure, and optimized for your business operations.
              </p>
            </div>
            <div
              className="text-center bg-white p-8 shadow-lg rounded-md"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
              <p>
                Leverage powerful analytics tools to understand customer behavior, optimize your sales funnel, and boost conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
