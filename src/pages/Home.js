import React, { useEffect, useState } from 'react';
import './Home.css';
import studentImage from '../assets/student.png'; 
import courseImage from '../assets/courses.png';   
import SkillCategories from '../pages/SkillCategories';

function Home() {
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    const animateCount = (target, setCount) => {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 50); 
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target); 
          clearInterval(interval); 
        } else {
          setCount(Math.floor(start)); 
        }
      }, 50);
    };

    animateCount(1200, setStudentCount); 
    animateCount(75, setCourseCount);
  }, []);

  return (
    <div>
      <header>
        <h2>Welcome to the Student Course Management System</h2>
        <p>Your one-stop platform to manage student courses and academic progress efficiently.</p>
      </header>

      {/* Counter Section (Now placed below images) */}
      <section className="counter-section">
          <div className="counter-box">
            <h3 className="counter-number">{studentCount}+</h3>
            <p>Students Enrolled</p>
            <p>Over 1200 students have enrolled and successfully completed the courses.</p>
            <p></p>
          </div>
          <div className="counter-box">
            <h3 className="counter-number">{courseCount}+</h3>
            <p>Courses Available</p>
          </div>
        </section>
        <SkillCategories />
         {/* Trending Now Section */}
         <section className="trending-section">
          <h2>Trending Now</h2>
          <div className="trending-categories">
            <div className="category">
              <h3>Web Development</h3>
              <p>13.3M+ learners</p>
            </div>
            <div className="category">
              <h3>JavaScript</h3>
              <p>17.7M+ learners</p>
            </div>
            <div className="category">
              <h3>React JS</h3>
              <p>7M+ learners</p>
            </div>
            <div className="category">
              <h3>Java</h3>
              <p>15.5M+ learners</p>
            </div>
            <div className="category">
              <h3>CSS</h3>
              <p>9M+ learners</p>
            </div>
          </div>
        </section>
      
      <div className="content">
        <section className="image-section">
          <div className="image-box">
            <img src={studentImage} alt="Students" className="image" />
            <h3>For Students</h3>
            <p>Track your academic progress and manage your courses easily.</p>
          </div>
          
          <div className="image-box">
            <img src={courseImage} alt="Courses" className="image" />
            <h3>For Instructors</h3>
            <p>Create, manage, and oversee course details with ease.</p>
          </div>
        </section>

        
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Student Course Management System</p>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
