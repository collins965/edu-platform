import React from 'react';

const Instructors = () => {
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
    <div className="instructors-page">
      <h1 className="page-title">Meet Our Instructors</h1>
      <p className="page-subtitle">Learn from industry leaders who are passionate about teaching and transforming careers.</p>

      <div className="instructors-grid">
        {instructors.map((instructor, index) => (
          <div className="instructor-card" key={index}>
            <h4>{instructor.name}</h4>
            <p className="title">{instructor.title}</p>
            <p className="bio">{instructor.bio}</p>
            <p className="specialty"><strong>Specialty:</strong> {instructor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
