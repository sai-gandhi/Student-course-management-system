// src/pages/Register.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import './Register.css'; // Create this file for styling

function Register() {
  return (
    <div className="register-container">
      <h2>Register Form</h2>
      <form>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <input type="text" placeholder="Enter your contact number" />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input type="password" placeholder="Re-enter your password" />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
      <p>Already registered? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
