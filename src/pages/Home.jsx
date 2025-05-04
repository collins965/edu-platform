import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1 className="page-title">Welcome to EduPlatform</h1>
        <p className="page-subtitle">Your learning journey starts here.</p>
        <Link to="/courses" className="btn explore-btn">Explore Courses</Link>
      </section>

      <section className="about-section">
        <h2>Why Choose EduPlatform?</h2>
        <p>
          EduPlatform is your gateway to modern, flexible, and career-focused learning. 
          Whether you're looking to upskill, reskill, or simply explore new knowledge areas,
          we have a variety of courses led by industry experts.
        </p>
        <ul className="features-list">
          <li>Learn at your own pace, anytime, anywhere</li>
          <li>Expert instructors with real-world experience</li>
          <li>Interactive lessons and downloadable resources</li>
          <li>Lifetime access to enrolled courses</li>
        </ul>
      </section>

      <section className="highlights-section">
        <h2>What We Offer</h2>
        <div className="cards-container">
          <div className="card">
            <h4>Courses</h4>
            <p1>Wide range of topics including technology, business, design, and more.</p1>
            <Link to="/courses" className="btn">View Courses</Link>
          </div>
          <div className="card">
            <h4>Instructors</h4>
            <p1>Meet our passionate educators and industry leaders.</p1>
            <Link to="/instructors" className="btn">Meet Instructors</Link>
          </div>
          <div className="card">
            <h4>Support</h4>
            <p1>Have questions? We’re here to help every step of the way.</p1>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <blockquote>
          “EduPlatform transformed my career! The courses are easy to follow and the instructors are top-notch.”<br />
          — Sarah M., Software Developer
        </blockquote>
        <blockquote>
          “As a beginner, I appreciated the structure and pace. I now feel confident in my skills.”<br />
          — James K., UI/UX Designer
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
