import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Link to the App.css file for global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
