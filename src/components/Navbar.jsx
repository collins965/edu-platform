// Import React for creating the component
import React from 'react';
// Import Link from react-router-dom to enable client-side routing
import { Link } from 'react-router-dom';

// Define the Navbar functional component
const Navbar = () => {
  return (
    // Semantic <nav> tag representing the navigation bar
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">EduPlatform</Link>
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        {/* Each <li> contains a <Link> for navigation to different routes */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faqs">FAQ</Link></li>
      </ul>
    </nav>
  );
};

// Export the Navbar component for use in other parts of the app
export default Navbar;
