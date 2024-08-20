import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Contact = () => {

  const [contact, setContact] = useState({
    prefix: '',
    names: '',
    email: '',
    phone_prefix: '',
    phone_number: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate()

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }



  const handleClick = async e => {
    e.preventDefault()
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(contact.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await axios.post("http://localhost:8800/contact/me", contact);
      setMessage('Message sent successfully.!');
      setTimeout(() => {
        setMessage('');
        setContact({ email: '' }); // Clear the input field
        navigate("/"); // Optionally navigate to another route
      }, 3000);
    } catch (err) {
      console.log(err);
      setError('Subscription failed. Please try again.');
    }
  }

  return (
    <div className="contactSection">
      <h1 className="contactHeading">Contact <span>Me</span></h1>
      <form className="contactForm">
        <div className="formGroup">
          <label htmlFor="prefix">Prefix</label>
          <select id="prefix" name="prefix" onChange={handleChange} >
          <option value="Select">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Pr">Pr</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="name">Full Names</label>
          <input type="text" id="names" name="names" placeholder="Enter your name" onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label htmlFor="phonePrefix">Telephone Prefix</label>
          <input type="text" id="phonePrefix" name="phone_prefix" placeholder="e.g., +1" onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label htmlFor="phoneNumber">Telephone Number</label>
          <input type="text" id="phoneNumber" name="phone_number" placeholder="Enter your phone number" onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Enter the subject" onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submitButton" onClick={handleClick}>Submit</button>
        <button type="reset" className="clearButton">Clear</button>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
}

export default Contact;
