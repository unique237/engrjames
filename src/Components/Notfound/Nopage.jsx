import React from 'react';
import { Link } from 'react-router-dom';
import './nopage.css'; // Import the CSS file

const Nopage = () => {
    return (
        <div className="nopage-container">
            <h1 className="nopage-heading">404 PAGE NOT FOUND</h1>
            <h2 className="nopage-subheading">
                Go back to <Link to="/" className="nopage-link">Home</Link>
            </h2>
        </div>
    );
}

export default Nopage;
