import React from "react";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import Button from "../../components/Buttons/Button";

function ContactUs() {
  return (
    <div className="relative bg-gray-100 py-16 px-6 lg:px-20 overflow-hidden font-poppins">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="text-left z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            YOUR SUCCESS STORY STARTS HERE!
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            We’re ready to turn your vision into reality with these key services:
          </p>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p>
                <strong>Mobile App Development:</strong> Intuitive, user-friendly apps
                your customers will love.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p>
                <strong>Cutting-Edge Technology:</strong> Leverage AI, ML, and more to
                stay ahead of the competition.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p>
                <strong>Dedicated Team:</strong> Our experts seamlessly integrate with
                your team for fast, quality results.
              </p>
            </li>
          </ul>

        </div>

        {/* Right Side Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 relative z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <form className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-10 py-2 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <FaUser className="absolute top-9 left-3 text-[#0B5FC4]" />
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-10 py-2 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <FaEnvelope className="absolute top-9 left-3 text-[#0B5FC4]" />
            </div>
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-10 py-2 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
              <FaRegCommentDots className="absolute top-9 left-3 text-[#0B5FC4]" />
            </div>
            <Button 
            mainButton="Send Message"
            className="changeColor"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
