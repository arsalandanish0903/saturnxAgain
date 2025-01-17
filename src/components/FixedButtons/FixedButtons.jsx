import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSuitcase } from "react-icons/fa";


const FixedButtons = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Welcome to SaturnX. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  // Define more comprehensive responses
  const getBotResponse = (userInput) => {
    const responses = {
      hi: "Hi there! How can I assist you today?",
      hello: "Hello! How can I help you?",
      "any vacancy in your company": "Yes, we currently have openings. Please email your resume to hr@saturnxa.com.",
      "what services do you offer":
        "We offer digital marketing, website development, and branding services tailored to your business needs.",
      "how can i contact you":
        "You can contact us via email at support@saturnxa.com or call us at 8788447944.",
      "where are you located": "We are located in Nagpur, Maharashtra, India.",
      thanks: "You're welcome! If you need further assistance, feel free to ask.",
    };

    return (
      responses[userInput.toLowerCase()] ||
      "Please Send us an email at saturnx@gmail.com or call us at 8788447944."
    );
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = getBotResponse(input);
    setTimeout(() => {
      const botMessage = { sender: "bot", text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);

    setInput("");
  };

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        {/* Fixed Buttons */}
      <div className="fixed right-4 bottom-0 lg:bottom-10 flex flex-col space-y-4 z-50">
        <Link
          to="#"
          onClick={() => window.open(`/Saturn X 1.pdf`, "target_blank")}
          className="flex items-center gap-2 bg-white text-black py-2 px-4 rounded-lg shadow-lg"
        >
          <img src="/briefcase-unscreen.gif" alt="" className="w-8 object-cover"/>
          Portfolio
        </Link>
        <button
          onClick={toggleChatbot}
          className="flex items-center gap-2 bg-white text-black py-2 px-4 rounded-lg shadow-lg"
        >
          <img src="/speech-bubble-unscreen.gif" alt="" className="w-8 object-cover"/>
          Enquiry
        </button>
      </div>

      {/* Chatbot */}
      {showChatbot && (
        <div className="fixed bottom-20 right-4 w-96 font-poppins bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center bg-[#0B5FC4] text-white p-3 rounded-t-lg">
            <div className="flex items-center gap-2">
              <img src="/SaturnXDigitalLogo_white.png" alt="" className="w-16"/>
            <h4 className="text-lg font-semibold">SaturnX Chatbot</h4>
            </div>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="p-4 max-h-96 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    msg.sender === "bot"
                      ? "bg-gray-100 text-gray-800 shadow-sm"
                      : "bg-[#0B5FC4] text-white shadow-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center p-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-[#0B5FC4] text-white rounded-lg  shadow-lg focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default FixedButtons;
