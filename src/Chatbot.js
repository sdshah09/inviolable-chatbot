import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ locationName, locationLogo, responses }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim() !== "") {
            const userMessage = { sender: 'user', text: input };
            setMessages([...messages, userMessage]);

            const botResponse = responses[input.toLowerCase()] || "Sorry, I don't understand that.";
            const botMessage = { sender: 'bot', text: botResponse };

            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, botMessage]);
            }, 500); // Simulate bot response delay

            setInput('');
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                <div className="chatbot-header">
                    <img src={locationLogo} alt={`${locationName} Logo`} className="chatbot-logo" />
                    <h1 className="chatbot-name">{`${locationName} Bot`}</h1>
                </div>
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="input-area">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
