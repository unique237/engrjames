import React, { useState } from 'react';
import './footer.css';
import { FaTwitter, FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const [subscription, setSubscription] = useState({
    email: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSubscription({ email: e.target.value });
    setError(''); // Clear error message when user starts typing
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(subscription.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await axios.post("http://localhost:8800/subscriber", subscription);
      setMessage('Subscription successful!');
      setTimeout(() => {
        setMessage('');
        setSubscription({ email: '' }); // Clear the input field
        navigate("/"); // Optionally navigate to another route
      }, 2000);
    } catch (err) {
      console.log(err);
      setError('Subscription failed. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <h2>About Us</h2>
          <p>
            I am dedicated to providing high-quality software engineering
            solutions. My goal is to exceed client expectations with my innovative
            approaches and expertise.
          </p>
          <h2>Languages</h2>
          <p>
            English and French
          </p>
        </div>
        <div className="footerColumn">
          <h2>Skills</h2>
          <ul className="footerList">
            <li><i className="icon">&bull;</i> Front-end Development</li>
            <li><i className="icon">&bull;</i> Back-end Development</li>
            <li><i className="icon">&bull;</i> Database Management</li>
            <li><i className="icon">&bull;</i> Cloud Computing</li>
            <li><i className="icon">&bull;</i> DevOps</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h2>Soft Skills</h2>
          <ul className="footerList">
            <li><i className="icon">&bull;</i> Communication</li>
            <li><i className="icon">&bull;</i> Teamwork</li>
            <li><i className="icon">&bull;</i> Problem Solving</li>
            <li><i className="icon">&bull;</i> Time Management</li>
            <li><i className="icon">&bull;</i> Adaptability</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h2>Stay In Touch</h2>
          <div className="subscribeForm">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={subscription.email}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleClick}>Subscribe</button>
          </div>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          <div className="socialIcons">
            <a href="https://github.com/unique237/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://x.com/unique_237" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/james-martin-mbame-mbame-3aa03a226/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            
          </div>
          <p><FaPhoneAlt />. (+237) 621 116 032 / 697 720 509</p>
          <p><TfiEmail />. martin44line@gmail.com</p>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2024 Engr. James. All rights <Link to='/login'>reserved.</Link></p>
      </div>
    </footer>
  );
}

export default Footer;
