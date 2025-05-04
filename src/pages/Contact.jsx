import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">Have any questions? We'd love to hear from you. Reach out using the form below or through our contact details.</p>

      <div className="contact-container">
        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="your@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>

          <button type="submit" className="btn">Send Message</button>
        </form>

        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <p><strong>Address:</strong> 123 Edu Street, Nairobi, Kenya</p>
          <p><strong>Phone:</strong> +254 700 123 456</p>
          <p><strong>Email:</strong> support@eduplatform.com</p>
          <p>We typically respond within 24–48 hours.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
