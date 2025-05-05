// Import React to define and use the functional component
import React from 'react';

// Define the Contact functional component
const Contact = () => {
  return (
    // Main container for the contact page
    <div className="contact-page">
      {/* Page title */}
      <h1 className="page-title">Contact Us</h1>

      {/* Subtitle or introduction for the contact section */}
      <p className="page-subtitle">
        Have any questions? We'd love to hear from you. Reach out using the form below or through our contact details.
      </p>

      {/* Container holding both the contact form and the contact information */}
      <div className="contact-container">
        {/* Contact form for users to send messages */}
        <form className="contact-form">
          {/* Input field for user's full name */}
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          {/* Input field for user's email address */}
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="your@example.com" required />

          {/* Textarea for user's message */}
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>

          {/* Submit button */}
          <button type="submit" className="btn">Send Message</button>
        </form>

        {/* Static contact information for users who prefer reaching out directly */}
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

// Export the Contact component so it can be used in routing or other components
export default Contact;
