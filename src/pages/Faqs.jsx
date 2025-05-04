import React, { useState } from 'react';

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

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <h1 className="page-title">Frequently Asked Questions</h1>
      <p className="page-subtitle">Find answers to the most common questions here.</p>

      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
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

export default Faqs;
