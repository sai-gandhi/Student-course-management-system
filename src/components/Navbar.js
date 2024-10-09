import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure logo path is correct
import './Navbar.css'; // Assuming the CSS file exists and is properly configured
import config from '../config';
function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand Section with Logo and Title */}
      <div className="navbar-brand">
        <img src={logo} alt="EduTrack Logo" className="navbar-logo" />
        <h1 className="navbar-title">Student Course Management System</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>

        {/* Dropdown for Login */}
        <li className="dropdown">
          <a href="#!" className="dropdown-link">Login</a>
          <div className="dropdown-content">
            <Link to="/admin-login">Admin Login</Link>
            <Link to="/user-login">User Login</Link>
          </div>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
