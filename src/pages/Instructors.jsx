// Import React to build the functional component
import React from 'react';

// Define the Instructors component
const Instructors = () => {
  // Array of instructor objects containing their details
  const instructors = [
    {
      name: 'Jane Mwende',
      title: 'Senior Web Developer',
      bio: 'Jane has over 10 years of experience building dynamic web applications using React, Node.js, and Tailwind CSS.',
      specialty: 'Full Stack Development',
    },
    {
      name: 'David Otieno',
      title: 'Data Scientist & AI Expert',
      bio: 'David specializes in machine learning, data analysis, and visualization with Python and has worked in fintech and healthtech sectors.',
      specialty: 'Data Science & AI',
    },
    {
      name: 'Linda Njeri',
      title: 'UI/UX Designer',
      bio: 'Linda brings a decade of hands-on experience designing intuitive and user-centered interfaces using Figma and Adobe XD.',
      specialty: 'UX/UI Design',
    },
    {
      name: 'Mark Kiprotich',
      title: 'Digital Marketing Strategist',
      bio: 'Mark has helped over 50 brands scale their digital presence using SEO, SEM, and analytics across Africa.',
      specialty: 'Digital Marketing',
    },
    {
      name: 'Grace Kamau',
      title: 'Mobile App Developer',
      bio: 'Grace specializes in Flutter and Dart, building cross-platform apps that scale seamlessly and perform smoothly.',
      specialty: 'Mobile Development',
    },
  ];

  return (
    // Main container for the Instructors page
    <div className="instructors-page">
      
      {/* Page title and subtitle */}
      <h1 className="page-title">Meet Our Instructors</h1>
      <p className="page-subtitle">
        Learn from industry leaders who are passionate about teaching and transforming careers.
      </p>

      {/* Grid layout to display instructor cards */}
      <div className="instructors-grid">
        {instructors.map((instructor, index) => (
          // Individual instructor card
          <div className="instructor-card" key={index}>
            <h4>{instructor.name}</h4> {/* Instructor name */}
            <p className="title">{instructor.title}</p> {/* Professional title */}
            <p className="bio">{instructor.bio}</p> {/* Short biography */}
            <p className="specialty">
              <strong>Specialty:</strong> {instructor.specialty} {/* Area of expertise */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the component for use in the app
export default Instructors;
