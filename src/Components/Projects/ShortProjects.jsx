import React from 'react'
import './shortprojects.css'
import ecertificates from '../../Assets/images/ecertificates.png';
import myresume from '../../Assets/images/myresume.png';
import youth from '../../Assets/images/youth.png';
//import { Link } from 'react-router-dom';
import { FaDatabase, FaServer, FaJava, FaJs, FaPython } from 'react-icons/fa';
//, FaCode

const projectData = [
  { id: 1, title: 'e-Certificates', image: ecertificates, description: 'Certificates of Non-Conviction (Criminal Records) in Cameroon, Bulletin No 3', tech: [<FaJs key="js1" />, <FaDatabase key="db1" />], link: 'www.google.com' },
  { id: 2, title: 'MyResume Pro', image: myresume, description: 'Produce your professional resume file in few clicks. Wide range of resume templates online just for you.', tech: [<FaPython key="py2" />, <FaServer key="srv2" />], link: 'www.google.com' },
  { id: 3, title: 'Youth Initiative', image: youth, description: 'Dilitalized system meant to secure identity at the grassroot in Cameroon', tech: [<FaJava key="java3" />, <FaDatabase key="db3" />], link: 'www.google.com' }
];

export const ShortProjects = () => {

  return (
    <div className="projectsSection">
      <h1 className="projectsHeading">My <span>Projects</span></h1>
      <div className="projectsContainer">
        {projectData.map(project => (
          <div key={project.id} className="projectCard">
            <img src={project.image} alt={project.title} className="projectImage" />
            <div className="projectContent">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="techIcons">
                {project.tech.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <button className="viewProjectButton">View Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShortProjects