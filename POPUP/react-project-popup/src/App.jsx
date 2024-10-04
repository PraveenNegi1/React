import React, { useState } from 'react';
import './App.css';  


function App() {
 
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <h1>React Pop-up Example</h1>
      <button onClick={openPopup} style={{ border: '2px solid blue', padding: '10px', cursor: 'pointer' }}>Show Pop-up</button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Pop-up Title</h2>
            <p>This is a simple pop-up in React!</p>
            <button onClick={closePopup} 
            style={{ border: '2px solid green', padding: '10px', cursor: 'pointer' }}>
              Close
              </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
