// src/components/Chatbot.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css';
import chatbotIcon from '../assets/chatbot-icon.png'; // Image for the chatbot button

function Chatbot() {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // State to track chatbot typing animation
  const [inputText, setInputText] = useState("");

  // Toggle chat window visibility
  const toggleChat = () => setChatVisible(!chatVisible);

  useEffect(() => {
    // Display initial messages when chat window opens
    if (chatVisible && messages.length === 0) {
      setMessages([
        { text: "Hii, I am here to assist you in agriculture. Ask Any Question.", sender: "bot" }
      ]);
    }
  }, [chatVisible, messages.length]);

  const handleInputChange = (e) => setInputText(e.target.value);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Show typing animation
    setIsTyping(true);

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC3_eBo1e6hL3QEnqQ1JWG95rzNsearDu8',
        {
          contents: [
            {
              parts: [
                { text: `${inputText}` }
              ]
            }
          ]
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Hide typing animation after receiving the bot's response
      setIsTyping(false);

      const botMessage = response.data.candidates[0].content.parts[0].text;
      const formattedMessage = botMessage
        .replace(/(\*\*.*?\*\*)/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br/>")
        .replace(/[*#]/g, ' ');

      setMessages((prev) => [...prev, { text: formattedMessage, sender: "bot" }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setIsTyping(false);
    }
  };

  // Handle sending message with Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
      {/* Chatbot Toggle Button with Image */}
      <button className="chatbot-toggle" onClick={toggleChat}>
        <img src={chatbotIcon} alt="Chatbot" />
      </button>

      {/* Chatbot Window */}
      {chatVisible && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <strong>LET US HELP YOU!</strong>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.sender}`}
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            ))}
            {/* Show typing animation if bot is typing */}
            {isTyping && (
              <div className="chatbot-message bot typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="chatbot-input">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // Submit on Enter
              placeholder="Ask me anything..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
