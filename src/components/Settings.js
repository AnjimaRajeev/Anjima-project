import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState('light'); // Default theme
  const [selectedColor, setSelectedColor] = useState('#3498db'); // Default color
  const navigate = useNavigate();

  const handleSave = () => {
    // Save settings logic (mock)
    navigate('/index');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div>
        <h3>Select Theme:</h3>
        <div className="theme-options">
          <button
            className={selectedTheme === 'light' ? 'active' : ''}
            onClick={() => setSelectedTheme('light')}
          >
            Light
          </button>
          <button
            className={selectedTheme === 'dark' ? 'active' : ''}
            onClick={() => setSelectedTheme('dark')}
          >
            Dark
          </button>
          {/* Add more theme options as needed */}
        </div>
      </div>
      <div>
        <h3>Select Color:</h3>
        <div className="color-options">
          <button
            style={{ backgroundColor: '#3498db' }}
            className={selectedColor === '#3498db' ? 'active' : ''}
            onClick={() => setSelectedColor('#3498db')}
          />
          <button
            style={{ backgroundColor: '#e74c3c' }}
            className={selectedColor === '#e74c3c' ? 'active' : ''}
            onClick={() => setSelectedColor('#e74c3c')}
          />
          <button
            style={{ backgroundColor: '#2ecc71' }}
            className={selectedColor === '#2ecc71' ? 'active' : ''}
            onClick={() => setSelectedColor('#2ecc71')}
          />
          {/* Add more color options as needed */}
        </div>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;
