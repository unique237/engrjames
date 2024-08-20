import React from 'react'
import './about.css'
//import { FaCode, FaDatabase, FaServer, FaTools, FaUserFriends, FaProjectDiagram, FaBrain, FaLanguage, FaLightbulb, FaBusinessTime } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="skillsSection">
      <h1 className="skillsHeading">Personal <span>Info</span></h1>
      <div className="skillsContainer">
        <div className="skillsCategory">
          <h2>Early life</h2>
          <ul>
            <li>Birth: Born on the 21st of June 2002 in the small village of Nkolbang.</li>
            <li> Childhood: Raised in the City of Mbalmayo, Centre, Cameroon.</li>
            <li>Siblings: Grew up in a large African family with many brothers and sisters</li>
          </ul>
        </div>
        <div className="skillsCategory">
          <h2>Academic Background</h2>
          <ul>
            <li>Petit Boursier: FSLC</li>
            <li>GBHS Mbalmayo: GCE O/L Sc and GCE A/L Sc.</li>
            <li>African Insititute of Computer Sciences: Bachelor's Degree in Software Engineering and Engineerin Diploma.</li>
            
          </ul>
        </div>
        <div className="skillsCategory">
          <h2>Professional Experience</h2>
          <ul>
            <li>Internship at the National Centre for the development of Computer Services: 2022/2023</li>
            <li>Free Lancer at the Regional Treasury of Yaounde I</li>
            <li>Free Lancer at the Ministry of Finance</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About