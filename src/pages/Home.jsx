// Import React and Link component for client-side navigation
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Home component for the landing page
const Home = () => {
  return (
    // Wrapper div for the entire home page
    <div className="home-page">

      {/* Hero Section: Contains welcome message and primary CTA */}
      <section className="hero-section">
        <h1 className="page-title">Welcome to EduPlatform</h1>
        <p className="page-subtitle">Your learning journey starts here.</p>
        
        {/* Link button navigates to the Courses page */}
        <Link to="/courses" className="btn explore-btn">Explore Courses</Link>
      </section>

      {/* About Section: Explains the platform’s value proposition */}
      <section className="about-section">
        <h2>Why Choose EduPlatform?</h2>
        <p>
          EduPlatform is your gateway to modern, flexible, and career-focused learning. 
          Whether you're looking to upskill, reskill, or simply explore new knowledge areas,
          we have a variety of courses led by industry experts.
        </p>

        {/* List of key features/benefits */}
        <ul className="features-list">
          <li>Learn at your own pace, anytime, anywhere</li>
          <li>Expert instructors with real-world experience</li>
          <li>Interactive lessons and downloadable resources</li>
          <li>Lifetime access to enrolled courses</li>
        </ul>
      </section>

      {/* Highlights Section: Summarizes what the platform offers with navigation links */}
      <section className="highlights-section">
        <h2>What We Offer</h2>

        {/* Container for highlight cards */}
        <div className="cards-container">

          {/* Card 1: Courses */}
          <div className="card">
            <h4>Courses</h4>
            <p>Wide range of topics including technology, business, design, and more.</p>
            <Link to="/courses" className="btn">View Courses</Link>
          </div>

          {/* Card 2: Instructors */}
          <div className="card">
            <h4>Instructors</h4>
            <p>Meet our passionate educators and industry leaders.</p>
            <Link to="/instructors" className="btn">Meet Instructors</Link>
          </div>

          {/* Card 3: Support */}
          <div className="card">
            <h4>Support</h4>
            <p>Have questions? We’re here to help every step of the way.</p>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section: Displays student feedback */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>

        {/* Student testimonial 1 */}
        <blockquote>
          “EduPlatform transformed my career! The courses are easy to follow and the instructors are top-notch.”<br />
          — Sarah M., Software Developer
        </blockquote>

        {/* Student testimonial 2 */}
        <blockquote>
          “As a beginner, I appreciated the structure and pace. I now feel confident in my skills.”<br />
          — James K., UI/UX Designer
        </blockquote>
      </section>
    </div>
  );
};

// Export the Home component for use in the router
export default Home;
