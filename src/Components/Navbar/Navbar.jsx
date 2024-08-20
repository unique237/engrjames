import React, { useState } from 'react'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Engr<span> . James</span>
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-links" >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" >
              Contact Me
            </Link>
          </li>

          
          
          
          
        </ul>
      </div>
    </nav>
  );
};


export default Navbar