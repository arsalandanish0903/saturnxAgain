import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Construction() {
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
          <source src="/constructionvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          data-aos="fade-in"
        >
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
              Construction Software Development
            </h1>
            <p
              className="text-lg md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Innovative solutions tailored for the construction industry to optimize your workflow.
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
                Our Expertise in Construction Software Development
              </h4>
              <p className="text-lg mb-4">
                We specialize in developing custom software solutions for the construction industry. Our services include project management tools, resource allocation systems, and real-time analytics to enhance your operations.
              </p>
              <p className="text-lg">
                With a team of experienced developers and industry experts, we ensure that our solutions are robust, scalable, and tailored to your unique business needs.
              </p>
            </div>

            {/* Right Side Image */}
            <div data-aos="fade-left">
              <img
                src="/constructionAbout.jpg"
                alt="Construction Software"
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
            <h3 className="text-xl font-bold mb-4">Customized Solutions</h3>
            <p>
              We design and develop software tailored specifically to your construction business requirements, ensuring a perfect fit for your operations.
            </p>
          </div>
          <div
            className="text-center bg-white p-8 shadow-lg rounded-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-4">Advanced Technology</h3>
            <p>
              Our team leverages the latest technology trends to build robust and future-ready solutions that keep you ahead of the competition.
            </p>
          </div>
          <div
            className="text-center bg-white p-8 shadow-lg rounded-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
            <p>
              We provide continuous support and updates to ensure the software remains efficient and meets your evolving needs.
            </p>
          </div>
        </div>
      </div>
      </div>
      


    </div>
  );
}

export default Construction;
