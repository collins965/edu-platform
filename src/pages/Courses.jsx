import React from 'react';

const Courses = () => {
  const courseList = [
    {
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, and React to build responsive websites from scratch.',
      duration: '12 Weeks',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'Data Science with Python',
      description: 'Master data analysis, visualization, and machine learning using Python and libraries like Pandas and Scikit-Learn.',
      duration: '10 Weeks',
      level: 'Intermediate',
    },
    {
      title: 'UI/UX Design Fundamentals',
      description: 'Understand design principles, wireframing, and prototyping using Figma and Adobe XD.',
      duration: '8 Weeks',
      level: 'Beginner',
    },
    {
      title: 'Digital Marketing Essentials',
      description: 'Explore SEO, social media strategy, email marketing, and analytics to grow brands online.',
      duration: '6 Weeks',
      level: 'All Levels',
    },
    {
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps using Flutter and Dart in this practical course.',
      duration: '10 Weeks',
      level: 'Intermediate',
    },
  ];

  return (
    <div className="courses-page">
      <h1 className="page-title">Our Courses</h1>
      <p className="page-subtitle">Explore our wide range of curated programs to elevate your skills and career.</p>

      <div className="courses-grid">
        {courseList.map((course, index) => (
          <div className="card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Level:</strong> {course.level}</p>
            <button className="btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
