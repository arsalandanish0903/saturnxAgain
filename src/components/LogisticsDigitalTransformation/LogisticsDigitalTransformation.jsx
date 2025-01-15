import React from 'react';

function LogisticsDigitalTransformation() {
  // Array of card data
  const cards = [
    { id: 1, img: '/supply-chain-management.png', title: 'Supply Chain Management Systems'},
    { id: 2, img: '/hands.png', title: 'Custom IoT Solutions' },
    { id: 3, img: '/blockchain.png', title: 'Blockchain & Smart Contracts'},
    { id: 4, img: '/supplier-alt.png', title: 'Smart Warehousing'},
    { id: 5, img: '/fleet-management.png', title: 'Real-Time Viechle Fleet Management' },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center  py-16 px-6 lg:px-0 font-poppins">
      {/* Left Side: Heading and Cards */}
      <div className="w-full lg:w-1/2 px-4 lg:px-16 mb-8 lg:mb-0">
        <h1 className="text-3xl font-bold mb-4">Digital Transformation of Your Supply Chain</h1>
        <p className="mb-4">
        Revolutionize your supply chain with scalable, technology-driven solutions. SaturnX offers supply chain management systems designed to streamline operations, reduce costs, and drive growth. Leverage Smart Contracts on blockchain and IoT sensors for automated delivery and real-time tracking. Optimize warehousing with IoT-powered logistics software to enhance inventory management, picking, and auditing. Empower your business with innovative solutions that transform efficiency and productivity.
        </p>

        <div className="space-y-4">
          {/* Map through cards array */}
          {cards.map((card) => (
            <div key={card.id} className="bg-white flex items-center gap-2 p-4 rounded-lg">
                <img src={card.img} alt={card.title} className="h-12 object-cover rounded-t-lg" />
              <h4 className="text-lg leading-snug text-gray-700">{card.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2 relative">
        <img src="/transportation-case-1.png" alt="Logistics Image" className="w-full h-full rounded-lg object-cover bg-contain" />
      </div>
    </div>
  );
}

export default LogisticsDigitalTransformation;
