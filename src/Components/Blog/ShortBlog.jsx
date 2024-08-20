// src/components/ShortBlog.jsx
import React from 'react';
import './shortblog.css';
//import EngrJames from '../../Assets/images/EngrJames.jpg'
import {SlCalender } from "react-icons/sl"
import ai from '../../Assets/images/ai-1.jpg';
import img5 from '../../Assets/images/img5.jpg';
//import myresume from '../../Assets/images/myresume.png';
import resume from '../../Assets/images/resume.png';
import { Link } from 'react-router-dom';
//import  axios  from 'axios'
//import { format } from 'date-fns';
//import { FaDatabase, FaServer, FaJava, FaJs, FaPython } from 'react-icons/fa';

export const ShortBlog = () => {
  const projectData = [
    { id: 1, title: 'Be a Pro with a Pro Resumé', hype: "Understanding Your Resumé", image: resume, date: '21/06/2024', description: 'Elevate your job search with a professional resume that showcases your skills, experience, and achievements. Click to find out why a well-crafted resume is crucial for landing your dream job.', content: 'Your resumé is your personal marketing tool. It’s not a life story, but a targeted document highlighting your qualifications for a specific job. Focus on achievements and skills relevant to the desired role. A well-crafted resumé is concise, clear, and professional.', link: 'google.com', title2: "Building a Strong Resumé", content2: "Structure your resumé with essential sections: header, summary or objective, experience, skills, education, projects (if applicable), awards, and honors. Use strong action verbs, quantify achievements with numbers, and tailor your resumé to each job application. Prioritize skills directly related to the job description and maintain a clean, professional design.", title3: "Boosting Your Resumé’s Impact", content3: "Incorporate keywords from the job description to improve your chances with applicant tracking systems. Build a strong online presence with LinkedIn and consider a personal website. Proofread meticulously and seek feedback from trusted sources. Remember, your resumé is a living document, so update it regularly to reflect your latest accomplishments." },
    { id: 2, title: 'Best Practices', hype: "Best Practices in IT", image: img5, date: '11/02/2024', description: "Effective IT management is crucial for business success. Prioritize robust security measures to protect sensitive data from cyber threats. Implement efficient IT service management frameworks like ITIL to streamline operations and improve service delivery. Foster a culture of innovation by staying updated on emerging technologies and exploring opportunities for digital transformation.", link: 'google.com', content: 'Your resumé is your personal marketing tool. It’s not a life story, but a targeted document highlighting your qualifications for a specific job. Focus on achievements and skills relevant to the desired role. A well-crafted resumé is concise, clear, and professional.', title2: "Optimizing IT Infrastructure", content2: "Regularly assess and upgrade hardware and software to maintain optimal performance and reliability. Adopt cloud computing for scalability, cost-efficiency, and flexibility. Implement robust data backup and disaster recovery plans to safeguard critical information. Prioritize user experience by providing accessible and user-friendly IT solutions.", title3: "Aligning IT with Business Goals", content3: "Establish clear communication channels between IT and business departments to ensure alignment. Use data analytics to measure IT performance and identify areas for improvement. Cultivate a strong IT team through training, development, and employee satisfaction initiatives. Prioritize continuous improvement by evaluating and adapting IT strategies to meet evolving business needs." },
    {
      id: 3, title: 'Artificial Inetlligence', image: ai, date: '21/12/2024', description: 'Discover how Artificial Intelligence is revolutionizing industries by automating tasks, enhancing decision-making, and enabling new innovations. Click to explore its transformative impact on our world.', content: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed" +
        "   to think and learn like humans. It encompasses a wide range of technologies, from machine learning and natural language processing to computer vision and robotics. AI systems are capable of analyzing vast amounts of data, recognizing patterns, and making decisions or predictions with minimal human intervention.", link: 'google.com', title2: "", content2: "AI has the potential to revolutionize various industries, including healthcare, finance, transportation, and customer service. However, its development also raises ethical concerns about job displacement, privacy, and autonomous weapons. Striking a balance between technological advancement and responsible AI development is crucial for the future.", title3: "", content3: "AI's impact on society is rapidly evolving, and its potential benefits and challenges will continue to shape the world in the years to come."
    }
    
    
  ];

  //const [articles, setArticles] = useState([]);

  /*useEffect (()=>{
    const fetchAllArticles = async () => {
      try{
        const res = await axios.get('http://localhost:8800/list/articles')
        console.log(res.data);
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllArticles();
  }, []);*/


  

  return (
    <div className="projectsSection">
      <h1 className="projectsHeading">Latest on <span>MyBlog</span></h1>
      <div className="projectsContainer">
        {projectData.map((project) => (
          <div key={project.id} className="projectCard">
            <img src={project.image} alt="" className="projectImage" />
            <div className="projectContent">
              <h2>{project.title}</h2>
              <p className="date"><SlCalender/>.  {project.date}</p>
              <p>{project.description}</p>
              
              <button className="viewProjectButton"><Link to={`/more/${project.id}`} className="viewProjectButton">Read More</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShortBlog;
