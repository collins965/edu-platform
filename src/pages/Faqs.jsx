// Import React and useState hook for managing component state
import React, { useState } from 'react';

// Array of FAQ objects, each containing a question and its corresponding answer
const faqsData = [
  {
    question: "What is EduPlatform?",
    answer: "EduPlatform is an online learning platform offering high-quality courses in tech, business, and design, delivered by industry experts.",
  },
  {
    question: "Are the courses self-paced?",
    answer: "Yes, most courses are self-paced. However, some programs include live sessions or deadlines for assignments.",
  },
  {
    question: "Will I get a certificate after completing a course?",
    answer: "Yes, upon successful completion of a course, you will receive a digital certificate which you can add to your resume or LinkedIn profile.",
  },
  {
    question: "Do I need prior experience to start a course?",
    answer: "Not necessarily. We offer beginner, intermediate, and advanced-level courses, so you can start at your current skill level.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach out to our support team via the Contact page, or email us directly at support@eduplatform.com.",
  }
];

// Define the Faqs component
const Faqs = () => {
  // State to keep track of which FAQ item is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the visibility of a selected FAQ answer
  const toggleFAQ = (index) => {
    // Collapse if already open, otherwise open the selected one
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // Main container for the FAQ page
    <div className="faqs-page">
      {/* Title and subtitle of the page */}
      <h1 className="page-title">Frequently Asked Questions</h1>
      <p className="page-subtitle">Find answers to the most common questions here.</p>

      {/* Loop through FAQ data and render each question-answer pair */}
      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            {/* Clickable question button to toggle answer visibility */}
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>

            {/* Conditionally render the answer if this question is active */}
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Faqs component for use in the application
export default Faqs;
