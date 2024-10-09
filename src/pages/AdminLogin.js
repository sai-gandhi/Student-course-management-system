import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate for routing

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation (you can replace this with real authentication logic)
    if (username === 'admin' && password === 'admin') {
      navigate('/AdminDashboard'); // Navigate to AdminDashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="register-container">
      <h2>Admin Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
