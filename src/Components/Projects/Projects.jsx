import React from 'react';

import './projects.css';
import ecertificates from '../../Assets/images/ecertificates.png';
import youth from '../../Assets/images/youth.png';
import myresume from '../../Assets/images/myresume.png';
import jammy from '../../Assets/images/jammy.png';
import food from '../../Assets/images/food.jpg';
import birth1 from '../../Assets/images/birth1.jpg';
import { FaDatabase, FaCode, FaServer, FaJava, FaJs, FaPython } from 'react-icons/fa';

const projectData = [
  { id: 1, title: 'e-Certificates', image: ecertificates, description: 'Conception and Implementation of an e-Platform to Facilitate the Acess to Official Certificates: Case of certificates of Non-Conviction in Cameroon.', tech: [<FaJs key="js1" />, <FaDatabase key="db1" />], link: 'google.com' },
  { id: 2, title: 'Youth Initiative', image: youth, description: 'Digitalization of the Birth Certificate Process in Cameroon in vue of Securing Identity.', tech: [<FaPython key="py2" />, <FaServer key="srv2" />], link: 'google.com' },
  { id: 3, title: 'MyResume', image: myresume, description: 'e-Platform for job seekers to create Pro Resumé files and increase their chances of getting hired.', tech: [<FaJava key="java3" />, <FaDatabase key="db3" />], link: 'google.com' },
  { id: 4, title: 'Jammy Youtube Downloader', image: jammy, description: 'Small add free YouTube video downloader built with python. Download it Now!', tech: [<FaPython key="py6" />], link: 'google.com' },
  { id: 5, title: 'X-PRESS TABLE', image: food, description: 'QR-code based restaurant ordering and serving system. The perculiarity eith X-PRESS TABLEis that, the platform is intended to have over a 1000 restaurants registered.', tech: [<FaPython key="py5" />, <FaJs key="js1" />, <FaCode key="code5" />, <FaServer key="srv2" />], link: 'google.com' },
  { id: 6, title: 'BirthRight', image: birth1, description: 'Sub project of the Youth Initiative. Implementation of the e-Platform that will ease the communication between maternities and their respective Civil Status registration centres.', tech: [<FaJava key="java6" />, <FaPython key="py6" />, <FaDatabase key="db6" />, <FaJs key="js1" />], link: 'google.com' },
];

export const Projects = () => {

 /* const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchAllProjects = async () => {
    try {
      const res = await axios.get('http://localhost:8800/list/projects')
      console.log(res.data);
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  fetchAllProjects();
}, []);*/
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
            <button className="viewProjectButton"><a href={project.link}>View Project</a></button>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Projects;
