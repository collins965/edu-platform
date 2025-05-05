// Import the core React library
import React from 'react';

// Import the ReactDOM library to render the app into the DOM
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App';

// Import global styles
import './App.css'; // Link to the App.css file for global styles

// Create a root element to mount the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
