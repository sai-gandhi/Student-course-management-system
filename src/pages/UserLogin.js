
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import config from '../config';

function UserLogin()   {
  return (
    <div className="register-container">
      <h2>User Login Form</h2>
      <form>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input type="text" placeholder="Enter your user name" />
        </div>
        
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input type="password" placeholder="Enter your password" />
        </div>
        
        <button type="submit" className="register-btn">Login</button>
      </form>
      <p>If you are not registered, <Link to="/register">Register</Link></p>
    </div>
  );
}



export default UserLogin;