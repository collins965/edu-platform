// Import React and required hooks: useState for state management, useEffect for side effects
import React, { useEffect, useState } from 'react';

// Define the ThemeSwitcher functional component
const ThemeSwitcher = () => {
  // State to track whether dark mode is active
  const [darkMode, setDarkMode] = useState(false);

  // useEffect to apply or remove the 'dark' class on the <body> element when darkMode changes
  useEffect(() => {
    // Toggles the 'dark' class on the body based on the darkMode state
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Function to toggle the theme between dark and light modes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    // A styled button that toggles the theme on click
    <button
      onClick={toggleTheme}
      style={{
        padding: '0.5rem 1rem',                     // Button padding
        backgroundColor: darkMode ? '#edf2f7' : '#2d3748', // Light bg in dark mode, dark bg in light mode
        color: darkMode ? '#2d3748' : '#ffffff',    // Text color contrasting with background
        border: 'none',                             
        borderRadius: '6px',                       
        cursor: 'pointer'                           // Pointer cursor on hover
      }}
    >
      {/* Button label switches based on current theme */}
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

// Export the ThemeSwitcher component so it can be used in other parts of the app
export default ThemeSwitcher;
