import React from 'react';

const HexaContainer = () => {
  return (
    <div className="relative flex justify-center items-center p-10">
      {/* Center - Enterprise Core */}
      <div className="w-72 h-72 flex justify-center items-center group hover:scale-105 transform transition-all relative z-10">
        <svg className="hex-outer w-full h-full absolute" viewBox="0 0 232 203">
          <use xlinkHref="#hexagon"></use>
        </svg>
        <figure className="hex-media flex flex-col items-center justify-center relative z-10 text-center px-4">
          <h3 className="text-xl font-semibold text-gray-800">ENTERPRISE CORE</h3>
          <p className="text-gray-600 mt-2">
            We offer comprehensive tech expertise and enterprise IT support. Our software development services include strategy consulting, CX design, engineering, and lifecycle management of custom products, as well as system integration.
          </p>
        </figure>
      </div>

      {/* Hexagonal items arranged around the center */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="absolute top-[-80px] left-[-100px] w-64 h-64 flex justify-center items-center group hover:scale-105 transform transition-all">
          <svg className="hex-outer w-full h-full absolute" viewBox="0 0 232 203">
            <polygon points="230 100.5 172.5 201 57.5 201 0 100.5 57.5 0 172.5 0" className="fill-transparent stroke-[#AAC7ED]" />
          </svg>
          <figure className="hex-media flex flex-col items-center justify-center relative z-10">
            <img
              src="/assets/26350ef/img/home-offers/software-engineering.svg"
              alt="Software Engineering"
              className="w-20 h-20 mb-4"
            />
            <figcaption>
              <h3 className="text-center font-semibold text-lg text-gray-800 hover:text-blue-600">
                <a href="services/enterprise-software-development">
                  Software Engineering
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>

        <div className="absolute top-[-80px] right-[-100px] w-64 h-64 flex justify-center items-center group hover:scale-105 transform transition-all">
          <svg className="hex-outer w-full h-full absolute" viewBox="0 0 232 203">
            <polygon points="230 100.5 172.5 201 57.5 201 0 100.5 57.5 0 172.5 0" className="fill-transparent stroke-[#AAC7ED]" />
          </svg>
          <figure className="hex-media flex flex-col items-center justify-center relative z-10">
            <img
              src="/assets/26350ef/img/home-offers/dev-ops.svg"
              alt="DevOps"
              className="w-20 h-20 mb-4"
            />
            <figcaption>
              <h3 className="text-center font-semibold text-lg text-gray-800 hover:text-blue-600">
                <a href="services">
                  DevOps
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>

        <div className="absolute bottom-[-80px] left-[-100px] w-64 h-64 flex justify-center items-center group hover:scale-105 transform transition-all">
          <svg className="hex-outer w-full h-full absolute" viewBox="0 0 232 203">
            <polygon points="230 100.5 172.5 201 57.5 201 0 100.5 57.5 0 172.5 0" className="fill-transparent stroke-[#AAC7ED]" />
          </svg>
          <figure className="hex-media flex flex-col items-center justify-center relative z-10">
            <img
              src="/assets/26350ef/img/home-offers/page.svg"
              alt="UX"
              className="w-20 h-20 mb-4"
            />
            <figcaption>
              <h3 className="text-center font-semibold text-lg text-gray-800 hover:text-blue-600">
                <a href="/services/ui-ux-design-services">
                  UX
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>

        <div className="absolute bottom-[-80px] right-[-100px] w-64 h-64 flex justify-center items-center group hover:scale-105 transform transition-all">
          <svg className="hex-outer w-full h-full absolute" viewBox="0 0 232 203">
            <polygon points="230 100.5 172.5 201 57.5 201 0 100.5 57.5 0 172.5 0" className="fill-transparent stroke-[#AAC7ED]" />
          </svg>
          <figure className="hex-media flex flex-col items-center justify-center relative z-10">
            <img
              src="/assets/26350ef/img/home-offers/artificial-intelligence.svg"
              alt="AI"
              className="w-20 h-20 mb-4"
            />
            <figcaption>
              <h3 className="text-center font-semibold text-lg text-gray-800 hover:text-blue-600">
                <a href="https://ai.intellectsoft.net/">
                  AI
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>

        <div className="absolute top-[-80px] left-[-100px] w-64 h-64 flex justify-center items-center group hover:scale-105 transform transition-all">
          <svg className="hex-outer w-full h-full absolute" viewBox="0 0 232 203">
            <polygon points="230 100.5 172.5 201 57.5 201 0 100.5 57.5 0 172.5 0" className="fill-transparent stroke-[#AAC7ED]" />
          </svg>
          <figure className="hex-media flex flex-col items-center justify-center relative z-10">
            <img
              src="/assets/26350ef/img/home-offers/internet-of-things.svg"
              alt="IoT"
              className="w-20 h-20 mb-4"
            />
            <figcaption>
              <h3 className="text-center font-semibold text-lg text-gray-800 hover:text-blue-600">
                <a href="https://iot.intellectsoft.net/">
                  IoT
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HexaContainer;
