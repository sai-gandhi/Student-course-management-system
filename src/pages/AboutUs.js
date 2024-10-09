import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Header section */}
      <div className="announcement-banner">
        <p>Check out our latest company news!</p>
      </div>

      <div className="hero-section">
        <h2>Skills are the key to unlocking potential</h2>
        <p>Whether you want to learn a new skill, train your teams, or share what you know with the world, you're in the right place. As a leader in online learning, we’re here to help you achieve your goals and transform your life.</p>
      </div>

      {/* Existing About content */}
      <h2>About Student Course Management System</h2>
      <p>
        The Student Course Management System (SCMS) is a comprehensive platform that streamlines the course registration process for students while providing administrators with tools to manage course listings and student registrations efficiently. This web application helps students select courses, build schedules, and resolve conflicts, ensuring a seamless experience for both students and faculty.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to make the academic experience smoother by automating the course registration process, minimizing scheduling conflicts, and providing a user-friendly interface that caters to students' and administrators' needs.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Easy course selection and scheduling</li>
        <li>Real-time conflict resolution for course timings</li>
        <li>Admin panel to manage course listings and student registrations</li>
        <li>Customizable schedules based on student preferences</li>
        <li>Detailed reports for administrators and faculty</li>
      </ul>

      <h3>Why Choose SCMS?</h3>
      <p>
        SCMS offers a robust solution to the challenges faced by educational institutions in managing course registrations. Our system provides:
      </p>
      <ul>
        <li>Intuitive and user-friendly design for students and staff</li>
        <li>Efficient management of course offerings and student data</li>
        <li>Real-time updates and notifications</li>
        <li>Secure and scalable architecture</li>
      </ul>

      <footer className="about-footer">
        <p>© 2024 Student Course Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
