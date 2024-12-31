import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurClients.css';

const OurClients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sample client data
  const clients = [
    { id: 1, name: 'Brand 1', image: '/Indian_Railway_Logo.png' },
    { id: 2, name: 'Brand 2', image: '/msme.png' },
    { id: 3, name: 'Brand 3', image: '/mgiri.png' },
    { id: 4, name: 'Brand 4', image: '/udyami.jpg' },
    { id: 5, name: 'Brand 5', image: '/ruralhaat.png' },
    { id: 6, name: 'Brand 6', image: '/prodigykids.png' },
    { id: 7, name: 'Brand 7', image: '/shrikrupa__1_-removebg-preview.png' },
    { id: 8, name: 'Brand 8', image: '/myartbucket.jpg' },
    { id: 9, name: 'Brand 9', image: '/beinghealthy.png' },
    { id: 10, name: 'Brand 10', image: '/doeat.png' },
    { id: 11, name: 'Brand 11', image: '/shubhjiwan.png' },
    { id: 12, name: 'Brand 12', image: '/maxrelief.png' },
    { id: 13, name: 'Brand 13', image: '/mds.png' },
    { id: 14, name: 'Brand 14', image: '/shreeradhemangalam.png' },
    { id: 15, name: 'Brand 15', image: '/hirankers.png' },
    { id: 16, name: 'Brand 16', image: '/samruddhibank.jpg' },
    { id: 17, name: 'Brand 17', image: '/maabhawani.png' },
    { id: 18, name: 'Brand 18', image: '/shubhads.png' },
    { id: 19, name: 'Brand 19', image: '/sketches.png' },
    { id: 20, name: 'Brand 20', image: '/logo18.png' },
    { id: 21, name: 'Brand 21', image: '/logo19.png' },
    { id: 22, name: 'Brand 22', image: '/logo22.png' },
    { id: 23, name: 'Brand 23', image: '/logo23.png' },
    { id: 24, name: 'Brand 24', image: '/logo24.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const logosPerPage = 12;

  const handleNext = () => {
    if (currentIndex + logosPerPage < clients.length) {
      setCurrentIndex(currentIndex + logosPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - logosPerPage >= 0) {
      setCurrentIndex(currentIndex - logosPerPage);
    }
  };

  const visibleClients = clients.slice(currentIndex, currentIndex + logosPerPage);

  return (
    <section className="bg-gray-200 py-12 px-6 font-poppins">
      <div className="container mx-auto max-w-[1140px] text-center">
        <h4 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-6">Our Clients</h4>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Trusted by industry-leading companies around the globe.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleClients.map((client) => (
            <div
              key={client.id}
              data-aos="zoom-in"
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-20 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <hr className="border-2 h-1 bg-[#0B5FC4] border-[#0B5FC4]  w-12 cursor-pointer" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + logosPerPage >= clients.length}
          >
            <hr className="border-2 h-1 bg-[#0B5FC4] border-[#0B5FC4]  w-12 cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
