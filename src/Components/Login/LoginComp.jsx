import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './login.css';
import axios from 'axios';

export const LoginComp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [user_password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Used for navigation

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/login', { username, user_password });
      
      if (response.status === 200) {
        // Redirect to /admin/home if login is successful
        navigate('/admin/home');
      }
    } catch (error) {
      // Handle login failure and display error message
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid credentials. Please try again.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-heading">Login to Your Blog</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="user_password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="button-group">
            <Link to="/" className="button back-home">Back to Home</Link>
            <button type="submit" className="button login">Login</button>
          </div>
        </form>
        <p className="admin-note">Only admins should have access.</p>
      </div>
    </div>
  );
};

export default LoginComp;
