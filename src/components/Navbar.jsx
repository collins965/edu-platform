import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">EduPlatform</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faqs">FAQ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
