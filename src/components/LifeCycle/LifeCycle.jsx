import React from 'react';

function LifeCycle() {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-poppins">
            <div className="container mx-auto max-w-[1140px] text-center">
                <div className="flex justify-center items-center mb-4">
                    <span className="text-black  md:text-xl font-bold text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
                        Our Software Agency’s Development Cycle
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-indigo-600 ml-3 w-6 h-6 hidden sm:block"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </span>
                </div>
                <p className="text-gray-800 lg:text-lg text-md  leading-tight mb-12">
                    We are a custom software solution development provider, which means that our development cycle will also be tailored to your project and needs. You can order end-to-end full-cycle software development, or you can pick the services you need.
                </p>
                <div className="flex justify-center">
                    <img
                        src="/solution-lifecycle.svg"
                        alt="Solution Lifecycle"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default LifeCycle;
