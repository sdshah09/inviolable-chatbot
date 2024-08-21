import React, { useState } from 'react';
import Chatbot from './Chatbot';
import georgiaLogo from './assets/Georgia_state_flag.png'; // Update path to Georgia logo
import floridaLogo from './assets/Florida_state_flag.png'; // Update path to Florida logo
import logo from './assets/image.png';
import './App.css';

const georgiaResponses = {
  "hello": "Howdy, Georgia here!",
  "what is your name": "I'm the Georgia chatbot!",
  "how are you": "I'm doing great, just like Georgia weather!",
  "bye": "See you later, y'all!"
};

const floridaResponses = {
  "hello": "Hello from sunny Florida!",
  "what is your name": "I'm the Florida chatbot!",
  "how are you": "Feeling hot and sunny, just like Florida!",
  "bye": "Goodbye, enjoy the sunshine!"
};

const locations = [
  { name: 'Georgia', logo: georgiaLogo, responses: georgiaResponses },
  { name: 'Florida', logo: floridaLogo, responses: floridaResponses }
];

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
      setSelectedLocation(location);
  };

  return (
      <div className="App">
          <div className={`card ${selectedLocation ? 'expanded' : ''}`}>
              {!selectedLocation ? (
                  <div className="location-list">
                      <img src={logo} alt={`Company Logo`} className="location-logo" />
                      <h2>Inviolable ChatBot</h2>
                      <h3>Select Location</h3>
                      <ul>
                          {locations.map((location) => (
                              <li 
                                  key={location.name} 
                                  onClick={() => handleLocationClick(location)}
                                  className="location-item"
                              >
                                  {location.name}
                              </li>
                          ))}
                      </ul>
                  </div>
              ) : (
                  <div className="chatbot-container">
                      <div className="location-info">
                          <h2>{selectedLocation.name}</h2>
                          <img src={selectedLocation.logo} alt={`${selectedLocation.name} Logo`} className="location-logo" />
                          <button onClick={() => setSelectedLocation(null)} className="back-button">Back</button>
                      </div>
                      <Chatbot 
                          locationName={selectedLocation.name} 
                          locationLogo={selectedLocation.logo} 
                          responses={selectedLocation.responses} 
                      />
                  </div>
              )}
          </div>
      </div>
  );
}

export default App;