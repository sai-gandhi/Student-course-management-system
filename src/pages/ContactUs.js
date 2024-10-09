// src/pages/Contact.js
import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us. We're here to help!</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li>Email: support@scmsystem.com</li>
          <li>Phone: +1 123-456-7890</li>
          <li>Office Address: 123, EduTech Avenue, Knowledge City, SC 12345</li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions (FAQ)</h3>
        <ul>
          <li>How do I register for a course?</li>
          <p>To register, log in to your account and go to the "Courses" section.</p>

          
        </ul>
      </div>
      
      <footer className="contact-footer">
        <p>© 2024 Student Course Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
