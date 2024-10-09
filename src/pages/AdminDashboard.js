import React from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Admin Dashboard</h1>
      </header>

      <section className="statistics-section">
        <div className="stat-box">
          <h2>1200+</h2>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-box">
          <h2>75+</h2>
          <p>Courses Available</p>
        </div>
        <div className="stat-box">
          <h2>50+</h2>
          <p>Instructors</p>
        </div>
      </section>

      <section className="management-section">
        <div className="management-box">
          <h3>Manage Students</h3>
          <button>View Students</button>
          <button>Add Student</button>
        </div>
        <div className="management-box">
          <h3>Manage Courses</h3>
          <button>View Courses</button>
          <button>Add Course</button>
        </div>
        <div className="management-box">
          <h3>Manage Instructors</h3>
          <button>View Instructors</button>
          <button>Add Instructor</button>
        </div>
      </section>

      <footer>
        <p>© 2024 Student Course Management System. Admin Dashboard</p>
      </footer>
    </div>
  );
}

export default AdminDashboard;
