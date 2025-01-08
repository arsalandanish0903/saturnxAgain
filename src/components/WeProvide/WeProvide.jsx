import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

function WeProvide() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  const weProvideServices = [
    { img: '/startups.svg', title: "Startups", description: "We help startups build their MVPs and scale their businesses with custom software solutions." },
    { img: '/medium.svg', title: "Small & medium Businesses", description: "We provide small businesses with affordable and scalable software solutions to help them grow." },
    { img: '/enterprise.svg', title: "Enterprises", description: "We help enterprises optimize their operations and improve their customer experience with custom software solutions." },
  ];

  return (
    <div className="relative w-full py-16 px-6 lg:px-0 font-poppins bg-gray-200">
      <div className="container mx-auto max-w-[1140px]">
        <h4 className="text-black text-4xl font-semibold text-center mb-12 leading-snug">
          We Provide Full-service Software Development For
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weProvideServices.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img src={service.img} alt={service.title} className="w-20 h-20 mb-4" />
              <h4 className="text-lg font-bold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeProvide;
