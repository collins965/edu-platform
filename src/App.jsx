// Import React core library
import React from 'react';

// Import routing tools from React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import reusable components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

// Import individual page components
import Home from './pages/Home';
import Courses from './pages/Courses';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';

// Import global CSS styles
import './App.css';

// Define the main App component
const App = () => {
  return (
    // Wrap the entire app in a Router to enable client-side navigation
    <Router>
      <div className="app-container">

        {/* Render the navigation bar at the top of every page */}
        <Navbar />

        {/* Optional theme switcher for light/dark mode toggle */}
        <div className="theme-switcher-container">
          <ThemeSwitcher />
        </div>

        {/* Main section for routing between pages */}
        <main className="main-content">
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<Home />} />                {/* Home page */}
            <Route path="/courses" element={<Courses />} />      {/* Courses listing */}
            <Route path="/instructors" element={<Instructors />} />  {/* Instructor profiles */}
            <Route path="/contact" element={<Contact />} />      {/* Contact form/info */}
            <Route path="/faqs" element={<Faqs />} />            {/* Frequently Asked Questions */}
          </Routes>
        </main>

        {/* Render the footer at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
};

// Export the App component for rendering in main.jsx
export default App;
