import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Welcome to Saturnxa. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  // Define hardcoded responses
  const getBotResponse = (userInput) => {
    const responses = {
      hi: "Hi there! How can I assist you today?",
      hello: "Hello! How can I help you?",
      "any vacancy in your company":
        "Yes, we currently have openings. Please email your resume to hr@saturnxa.com.",
    };

    // Return a default response if no match is found
    return (
      responses[userInput.toLowerCase()] ||
      "I'm sorry, I didn't understand that. Could you please rephrase?"
    );
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Get bot response
    const botResponse = getBotResponse(input);
    setTimeout(() => {
      const botMessage = { sender: "bot", text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto border rounded-lg shadow-lg p-4 bg-white">
      {/* Message List */}
      <div className="flex-grow overflow-y-auto max-h-96 space-y-4 mb-4">
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
                  ? "bg-gray-200 text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
