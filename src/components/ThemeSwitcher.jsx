import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme} style={{
      padding: '0.5rem 1rem',
      backgroundColor: darkMode ? '#edf2f7' : '#2d3748',
      color: darkMode ? '#2d3748' : '#ffffff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;
