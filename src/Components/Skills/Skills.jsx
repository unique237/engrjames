import React from 'react';
import './skills.css';
import { FaCode, FaDatabase, FaServer, FaTools, FaUserFriends, FaProjectDiagram, FaBrain, FaLanguage, FaLightbulb, FaBusinessTime } from 'react-icons/fa';

export const Skills = () => {
  return (
    <div className="skillsSection">
      <h1 className="skillsHeading">My <span>Skills</span></h1>
      <div className="skillsContainer">
        <div className="skillsCategory">
          <h2>Technical Skills</h2>
          <ul>
            <li><FaCode /> Programming Languages: JavaScript, Python, Java</li>
            <li><FaDatabase /> Databases: MySQL, MongoDB, PostgreSQL</li>
            <li><FaServer /> Backend Development: Node.js, Express.js, Django</li>
            <li><FaTools /> Tools & Technologies: Git, Docker, Kubernetes</li>
          </ul>
        </div>
        <div className="skillsCategory">
          <h2>Soft Skills</h2>
          <ul>
            <li><FaUserFriends /> Leadership, Teamwork & Collaboration</li>
            <li><FaProjectDiagram /> Project Management</li>
            <li><FaBrain /> Problem Solving</li>
            <li><FaLanguage /> Communication</li>
            <li><FaBusinessTime />Time Management</li>
          </ul>
        </div>
        <div className="skillsCategory">
          <h2>Other Skills</h2>
          <ul>
            <li><FaLightbulb /> Creative Thinking</li>
            <li><FaLanguage /> Multilingual: English, French</li>
            <li><FaTools /> Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
