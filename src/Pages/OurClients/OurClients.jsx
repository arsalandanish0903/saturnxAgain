import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurClients.css'

const OurClients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sample client data
  const clients = [
    { id: 1, name: 'Brand 1', image: '/hirankers.png' },
    { id: 2, name: 'Brand 2', image: '/Indian_Railway_Logo.png' },
    { id: 3, name: 'Brand 3', image: '/maabhawani.png' },
    { id: 4, name: 'Brand 4', image: '/maxrelief.png' },
    { id: 5, name: 'Brand 5', image: '/mbhlogo.png' },
    { id: 6, name: 'Brand 6', image: '/msme.png' },
    { id: 6, name: 'Brand 6', image: '/mds.png' },
    { id: 6, name: 'Brand 6', image: '/mgiri.png' },
    { id: 6, name: 'Brand 6', image: '/myartbucket.jpg' },
    { id: 6, name: 'Brand 6', image: '/ruralhaat.png' },
    { id: 6, name: 'Brand 6', image: '/shreeradhemangalam.png' },
    { id: 6, name: 'Brand 6', image: '/udyami.jpg' },
  ];

  return (
    <section className="bg-gray-200 py-12 px-6 font-poppins">
      <div className="container mx-auto max-w-[1140px] text-center">
        <h4 className="text-4xl xl:text-5xl  font-bold text-gray-800 mb-6">Our Clients</h4>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Trusted by industry-leading companies around the globe.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
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
      </div>
    </section>
  );
};

export default OurClients;
