import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Insurance() {
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
        <img
          src="/insurancebanner.jpg"
          alt="Insurance Software Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          data-aos="fade-in"
        >
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
              Insurance Software Development
            </h1>
            <p
              className="text-lg md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Empowering insurance companies with innovative and tailored software solutions.
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
                Transforming the Insurance Industry with Technology
              </h4>
              <p className="text-lg mb-4">
                We deliver cutting-edge software solutions designed for the unique challenges of the insurance industry. From policy management systems to claims automation, our tools enhance efficiency and improve customer satisfaction.
              </p>
              <p className="text-lg">
                Our team leverages industry expertise and advanced technologies to create scalable, secure, and user-friendly software tailored to your business needs.
              </p>
            </div>

            {/* Right Side Image */}
            <div data-aos="fade-left">
              <img
                src="/insuranceAbout.jpg"
                alt="Insurance Software"
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
            <h3 className="text-xl font-bold mb-4">Tailored Solutions</h3>
            <p>
              Our software is customized to address the specific needs of insurance providers, ensuring maximum efficiency and client satisfaction.
            </p>
          </div>
          <div
            className="text-center bg-white p-8 shadow-lg rounded-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-4">Innovative Technology</h3>
            <p>
              Leverage AI and data analytics to streamline claims processing, risk assessment, and policy management.
            </p>
          </div>
          <div
            className="text-center bg-white p-8 shadow-lg rounded-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold mb-4">Reliable Support</h3>
            <p>
              We provide ongoing support and maintenance to ensure your systems are always up-to-date and performing optimally.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Insurance;
