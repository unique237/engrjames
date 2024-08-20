import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/admin/home" className="navbar-logo">
          Admin <span>: Pannel</span>
        </Link>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/admin/home" className="nav-links" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/blog/post" className="nav-links" >
              New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/projects/post" className="nav-links" >
              New Project
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/articles" className="nav-links" >
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/projects" className="nav-links">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
