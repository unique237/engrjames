// src/components/Main.jsx
import React from 'react';
import './main.css';
import me1 from '../../Assets/images/me1.jpg';
import { FaDownload } from "react-icons/fa6";
//import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div className="main" style={{ backgroundImage: `url(${me1})` }}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome</h1>
        <h2>My name is MBAME MBAME Martin James, Software Engineer and Data Analyst.</h2>
        <p>Discover my work, skills, and projects.</p>
        <a href="#index.html" className="viewProjectButton">My Resumé <FaDownload /></a>
      </div>
    </div>
  );
}

export default Main;
