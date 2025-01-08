import React from 'react';
import { FaReact, FaNodeJs, FaAngular, FaDatabase, FaDocker } from 'react-icons/fa'; // Example icons

function DataCentric() {
  // Array of card data
  const cards = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#fff"
        >
          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
        </svg>
      ),
      title: 'Big Data Analytics',
    },
    { id: 5, icon:(
        <svg fill="#fff" width="40px" height="40px" viewBox="0 0 64 64" id="Layer_1_1_" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        
        <g>
        
        <path d="M63,1H1v48h8v14h46V49h8V1z M61,3v6H3V3H61z M53,61H11V19h42V61z M55,47V17H9v30H3V11h58v36H55z"/>
        
        <rect height="2" width="2" x="5" y="5"/>
        
        <rect height="2" width="2" x="9" y="5"/>
        
        <rect height="2" width="2" x="13" y="5"/>
        
        <path d="M33,21H13v14h20V21z M31,33H15V23h16V33z"/>
        
        <path d="M19,49h-6v10h6V49z M17,57h-2v-6h2V57z"/>
        
        <path d="M21,59h6V41h-6V59z M23,43h2v14h-2V43z"/>
        
        <path d="M29,59h6v-8h-6V59z M31,53h2v4h-2V53z"/>
        
        <path d="M37,59h6V37h-6V59z M39,39h2v18h-2V39z"/>
        
        <path d="M45,59h6V45h-6V59z M47,47h2v10h-2V47z"/>
        
        <rect height="2" width="16" x="35" y="21"/>
        
        <rect height="2" width="12" x="39" y="25"/>
        
        <rect height="2" width="2" x="35" y="25"/>
        
        <rect height="2" width="16" x="35" y="29"/>
        
        <rect height="2" width="2" x="49" y="33"/>
        
        <rect height="2" width="12" x="35" y="33"/>
        
        </g>
        
        </svg>), title: 'Custom Reporting Software Development' },
    {
      id: 2,
      icon: (
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M17.306 11.252a5.294 5.294 0 1 0-10.588 0 5.237 5.237 0 0 0 .584 2.37A5.28 5.28 0 0 0 8.836 23.958"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M3.582 21.563a7 7 0 1 0 11.322 6.783V28"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M8.431 42.329A6.216 6.216 0 0 1 5.108 36.825a6.15 6.15 0 0 1 .686-2.783"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M19 16a5 5 0 0 1-5 5"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <g>
            <polyline
              points="19 16.01 30.5 16.01 32.521 13.99"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <polyline
              points="25.5 20.01 31.5 20.01 33.521 17.99 39 17.99"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <polyline
              points="24.917 31.99 30.5 31.99 32.521 34.01"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <polyline
              points="24.917 27.99 31.5 27.99 33.521 30.01 39 30.01"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              d="M39 38.01H31.521l-1.521-2.021-4.959.00011v6.05209a5 5 0 0 1-10 0"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
          <path
            d="M17.042 4.134a4.053 4.053 0 0 1 8 .918V12.01l4.459.00013L31.521 9.99H39"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <line
            x1="36"
            x2="25.042"
            y1="24"
            y2="24"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <circle cx="11" cy="20" r="1" fill="#fff" />
          <circle cx="11.792" cy="43.5" r="1" fill="#fff" />
          <circle cx="41.479" cy="10" r="2" stroke="#fff" strokeWidth="2" />
          <circle cx="41.479" cy="18" r="2" stroke="#fff" strokeWidth="2" />
          <circle cx="41.479" cy="30" r="2" stroke="#fff" strokeWidth="2" />
          <circle cx="41.479" cy="38" r="2" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
      title: 'Artificial Intelligence / Machine Learning',
    },    
    { id: 3, icon: (
        <svg fill="#fff" width="40px" height="40px" viewBox="0 0 64 64" id="Layer_1_1_" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
        <path d="M63,47.776v-7.553l-3.729-0.955c-0.292-0.945-0.669-1.858-1.125-2.725l1.96-3.309l-5.34-5.341l-3.31,1.961   c-0.866-0.457-1.779-0.834-2.724-1.126L47.776,25h-7.553l-0.955,3.729c-0.945,0.292-1.858,0.669-2.724,1.126l-3.31-1.961L33,28.13   V25h-3c-0.843,0-1.653-0.358-2.221-0.983c-0.576-0.633-0.847-1.454-0.765-2.314C27.159,20.188,28.546,19,30.172,19H33v-9   c0-1.654-1.346-3-3-3h-8V6.172c0-2.646-1.982-4.907-4.512-5.148c-1.408-0.138-2.811,0.33-3.851,1.276C12.597,3.245,12,4.595,12,6v1   H4c-1.654,0-3,1.346-3,3v9h2.828c1.626,0,3.013,1.188,3.158,2.702c0.082,0.86-0.189,1.682-0.765,2.314C5.653,24.642,4.843,25,4,25   H1v9c0,1.654,1.346,3,3,3h10v-2.828c0-1.626,1.187-3.014,2.702-3.158c0.862-0.073,1.683,0.19,2.315,0.766   C19.642,32.347,20,33.156,20,34v3h9.641c-0.356,0.731-0.67,1.485-0.912,2.269L25,40.224v7.553l3.729,0.955   c0.292,0.945,0.669,1.858,1.125,2.725l-1.96,3.309l5.34,5.341l3.31-1.961c0.866,0.457,1.779,0.834,2.724,1.126L40.224,63h7.553   l0.955-3.729c0.945-0.292,1.858-0.669,2.724-1.126l3.31,1.961l5.34-5.341l-1.96-3.309c0.457-0.866,0.833-1.779,1.125-2.725   L63,47.776z M20.363,30.3c-1.04-0.946-2.446-1.417-3.851-1.276C13.982,29.265,12,31.526,12,34.172V35H4c-0.551,0-1-0.448-1-1v-7h1   c1.406,0,2.754-0.597,3.701-1.638c0.945-1.04,1.411-2.443,1.276-3.85C8.735,18.982,6.474,17,3.828,17H3v-7c0-0.552,0.449-1,1-1h10   V6c0-0.844,0.358-1.653,0.983-2.221c0.633-0.575,1.452-0.842,2.315-0.766C18.813,3.158,20,4.546,20,6.172V9h10c0.551,0,1,0.448,1,1   v7h-0.828c-2.646,0-4.907,1.982-5.149,4.513c-0.134,1.406,0.331,2.81,1.276,3.85C27.246,26.403,28.594,27,30,27h1v3.13   l-3.105,3.105L28.94,35H22v-1C22,32.595,21.403,31.245,20.363,30.3z M57.655,47.08l-0.152,0.564   c-0.316,1.174-0.779,2.294-1.376,3.329l-0.292,0.507l1.758,2.968l-3.145,3.146l-2.968-1.759l-0.506,0.292   c-1.036,0.597-2.157,1.06-3.331,1.376l-0.564,0.152L46.224,61h-4.447l-0.856-3.345l-0.564-0.152   c-1.174-0.316-2.294-0.779-3.331-1.376l-0.506-0.292l-2.968,1.759l-3.145-3.146l1.758-2.968l-0.292-0.507   c-0.597-1.035-1.06-2.155-1.376-3.329l-0.152-0.564L27,46.224v-4.447l3.345-0.856l0.152-0.564c0.316-1.174,0.779-2.294,1.376-3.329   l0.292-0.507l-1.758-2.968l3.145-3.146l2.968,1.759l0.506-0.292c1.036-0.597,2.157-1.06,3.331-1.376l0.564-0.152L41.776,27h4.447   l0.856,3.345l0.564,0.152c1.174,0.316,2.294,0.779,3.331,1.376l0.506,0.292l2.968-1.759l3.145,3.146l-1.758,2.968l0.292,0.507   c0.597,1.035,1.06,2.155,1.376,3.329l0.152,0.564L61,41.776v4.447L57.655,47.08z"/>
        <path d="M44,36c-4.411,0-8,3.589-8,8s3.589,8,8,8c1.74,0,3.4-0.557,4.8-1.61l-1.202-1.598C46.547,49.582,45.303,50,44,50   c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6c0,1.303-0.417,2.547-1.208,3.599l1.599,1.201C51.443,47.399,52,45.74,52,44   C52,39.589,48.411,36,44,36z"/>
        <path d="M44,32c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S50.617,32,44,32z M44,54c-5.514,0-10-4.486-10-10   s4.486-10,10-10s10,4.486,10,10S49.514,54,44,54z"/>
        <rect height="2" width="2" x="52" y="7"/>
        <rect height="2" width="2" x="52" y="11"/>
        <rect height="2" width="2" x="54" y="9"/>
        <rect height="2" width="2" x="50" y="9"/>
        <rect height="2" width="2" x="42" y="15"/>
        <rect height="2" width="2" x="42" y="19"/>
        <rect height="2" width="2" x="44" y="17"/>
        <rect height="2" width="2" x="40" y="17"/>
        <rect height="2" width="2" x="56" y="19"/>
        <rect height="2" width="2" x="56" y="23"/>
        <rect height="2" width="2" x="58" y="21"/>
        <rect height="2" width="2" x="54" y="21"/>
        <rect height="2" width="2" x="37" y="3"/>
        <rect height="2" width="2" x="37" y="7"/>
        <rect height="2" width="2" x="39" y="5"/>
        <rect height="2" width="2" x="35" y="5"/>
        <rect height="2" width="2" x="18" y="47"/>
        
        <rect height="2" width="2" x="18" y="51"/>
        
        <rect height="2" width="2" x="20" y="49"/>
        
        <rect height="2" width="2" x="16" y="49"/>
        
        <rect height="2" width="2" x="8" y="41"/>
        
        <rect height="2" width="2" x="8" y="45"/>
        
        <rect height="2" width="2" x="10" y="43"/>
        
        <rect height="2" width="2" x="6" y="43"/>
        
        </g>
        
        </svg>), title: 'Custom Logistics Software Solutions' },
    { 
        id: 4, 
        icon: (
          <svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                {`.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
              </style>
            </defs>
            <g id="dashboard">
              <line className="cls-1" x1="3" x2="29" y1="29" y2="29"/>
              <line className="cls-1" x1="3" x2="3" y1="3" y2="29"/>
              <line className="cls-1" x1="16" x2="16" y1="7" y2="25"/>
              <line className="cls-1" x1="22" x2="22" y1="11" y2="25"/>
              <line className="cls-1" x1="10" x2="10" y1="16" y2="25"/>
            </g>
          </svg>
        ), 
        title: 'KPI Dashboards' 
      }
      
  ];
  

  return (
    <div
      className="relative bg-cover bg-center text-white font-poppins"
      style={{
        backgroundImage: `url('/datacentralic.jpg')`, 
        backgroundAttachment: 'fixed',
        // Replace with your background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-0 py-16">
        {/* Left Section: Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img src="/transportation-case-2-removebg-preview.png" alt="Image" className="w-full h-auto object-cover" />
          </div>

          {/* Right Content Section */}
          <div className="lg:w-1/2">
            <h4 className="text-3xl font-bold mb-6 text-center lg:text-left uppercase">
            Data-Centric Logistics & Supply Chain
            </h4>
            <p className="text-lg mb-8 text-center lg:text-left">
            Data is a key element of a supply chain system. Use automotive and logistics software solutions with Big Data and Machine Learning to gather information from sensors. Then, view it on a single dashboard to gain competitive insights. Need more reliable data on your operations? Introduce user-friendly reporting software for the manufacturing line or warehousing.
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cards.map((card) => (
                <div key={card.id} className="flex items-center gap-2">
                  <p className=''>{card.icon}</p>
                  <h4 className="text-md text-gray-300">{card.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCentric;
