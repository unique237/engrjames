// src/components/Featured.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './featured.css';
import me5 from '../../Assets/images/me5.jpg';

export const Featured = () => {
  return (
    <div className='featured container section'>
      <div className="secContainer">
        <span className="secTitle">
          <h1>About <span>Me</span></h1>
        </span>

        <div className="featuredContainer">
          <div className="singleContainer">
            <div className="imgDiv">
              <img src={me5} alt="Profile" />
            </div>
            <div className="featuredInfo">
              <span className="featuredTitle">Engr. MBAME MBAME Martin James</span>
              <p>
                Dedicated and skilled Software Engineer with a
                Bachelor’s degree in Software Engineering and an
                Engineering degree from the African Institute of
                Computer Sciences, Cameroon Office. Possesses a strong
                foundation in data analysis, programming, web development, and
                software design, coupled with hands-on experience in
                various technologies and frame works. Adept at
                problem-solving, team collaboration, and delivering
                high-quality software solutions. Highly adaptable and
                committed to continuous learning and professional
                growth.
              </p>
              <Link to="/about" className="viewProjectButton" >Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
