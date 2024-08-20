import React from 'react';
import './blog.css';
import {SlCalender } from "react-icons/sl"
import { Link } from 'react-router-dom';
//import axios from 'axios'
//import { format } from 'date-fns';


//import img1 from '../../Assets/images/img1.jpg';
//import img2 from '../../Assets/images/img2.jpg';
import img3 from '../../Assets/images/img3.jpg';
import resume from '../../Assets/images/resume.png';
import img5 from '../../Assets/images/img5.jpg';
import ai from '../../Assets/images/ai-1.jpg';
import ml from '../../Assets/images/ml.jpg';

export const Blog = () => {
  const projectData = [
    { id: 1, title: 'Be a Pro with a Pro Resumé', hype: "Understanding Your Resumé", image: resume, date: '21/06/2024', description: 'Elevate your job search with a professional resume that showcases your skills, experience, and achievements. Click to find out why a well-crafted resume is crucial for landing your dream job.', content: 'Your resumé is your personal marketing tool. It’s not a life story, but a targeted document highlighting your qualifications for a specific job. Focus on achievements and skills relevant to the desired role. A well-crafted resumé is concise, clear, and professional.', link: 'google.com', title2: "Building a Strong Resumé", content2: "Structure your resumé with essential sections: header, summary or objective, experience, skills, education, projects (if applicable), awards, and honors. Use strong action verbs, quantify achievements with numbers, and tailor your resumé to each job application. Prioritize skills directly related to the job description and maintain a clean, professional design.", title3: "Boosting Your Resumé’s Impact", content3: "Incorporate keywords from the job description to improve your chances with applicant tracking systems. Build a strong online presence with LinkedIn and consider a personal website. Proofread meticulously and seek feedback from trusted sources. Remember, your resumé is a living document, so update it regularly to reflect your latest accomplishments." },
    { id: 2, title: 'Best Practices', hype: "Best Practices in IT", image: img5, date: '11/02/2024', description: "Effective IT management is crucial for business success. Prioritize robust security measures to protect sensitive data from cyber threats. Implement efficient IT service management frameworks like ITIL to streamline operations and improve service delivery. Foster a culture of innovation by staying updated on emerging technologies and exploring opportunities for digital transformation.", link: 'google.com', content: 'Your resumé is your personal marketing tool. It’s not a life story, but a targeted document highlighting your qualifications for a specific job. Focus on achievements and skills relevant to the desired role. A well-crafted resumé is concise, clear, and professional.', title2: "Optimizing IT Infrastructure", content2: "Regularly assess and upgrade hardware and software to maintain optimal performance and reliability. Adopt cloud computing for scalability, cost-efficiency, and flexibility. Implement robust data backup and disaster recovery plans to safeguard critical information. Prioritize user experience by providing accessible and user-friendly IT solutions.", title3: "Aligning IT with Business Goals", content3: "Establish clear communication channels between IT and business departments to ensure alignment. Use data analytics to measure IT performance and identify areas for improvement. Cultivate a strong IT team through training, development, and employee satisfaction initiatives. Prioritize continuous improvement by evaluating and adapting IT strategies to meet evolving business needs." },
    {
      id: 3, title: 'Artificial Inetlligence', image: ai, date: '21/12/2024', description: 'Discover how Artificial Intelligence is revolutionizing industries by automating tasks, enhancing decision-making, and enabling new innovations. Click to explore its transformative impact on our world.', content: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed" +
        "   to think and learn like humans. It encompasses a wide range of technologies, from machine learning and natural language processing to computer vision and robotics. AI systems are capable of analyzing vast amounts of data, recognizing patterns, and making decisions or predictions with minimal human intervention.", link: 'google.com', title2: "", content2: "AI has the potential to revolutionize various industries, including healthcare, finance, transportation, and customer service. However, its development also raises ethical concerns about job displacement, privacy, and autonomous weapons. Striking a balance between technological advancement and responsible AI development is crucial for the future.", title3: "", content3: "AI's impact on society is rapidly evolving, and its potential benefits and challenges will continue to shape the world in the years to come."
    },
    { id: 4, title: 'Machine Learning', image: ml, date: '21/06/2024', description: "Machine Learning (ML) is a subset of Artificial Intelligence that focuses on enabling systems to learn and improve from experience without being explicitly programmed. It involves developing algorithms that can analyze data, identify patterns, and make predictions or decisions.", content: 'ML algorithms are trained on large datasets, allowing them to recognize patterns and make inferences. This process, known as training, involves feeding the algorithm with data and adjusting its parameters until it can accurately perform a specific task. Once trained, the model can be used to make predictions or decisions on new, unseen data.', link: 'google.com', title2: "", content2: "Common applications of machine learning include image and speech recognition, natural language processing, fraud detection, medical diagnosis, and recommendation systems. As technology advances, machine learning continues to drive innovation across various industries.", title3: "", content3: "" },
    {
      id: 5, title: 'Big Data', image: img3, date: '11/02/2024', description: 'Big Data is changing the game by providing insights through massive datasets. See how businesses and researchers leverage this powerful tool to drive decisions and innovation', link: 'google.com', title2: "", content2: "Big data refers to extremely large and complex datasets that traditional data processing applications struggle to manage."

        + "It's characterized by its volume (massive amounts of data), velocity (rapid data generation), and variety (diverse data types).", title3: "", content3: "This data comes from various sources, including social media, sensors, transactions, and more. Analyzing big data can uncover valuable insights, patterns, and trends that can inform decision-making across industries. However, it requires specialized tools and techniques to extract meaningful information. Key challenges in big data management include data storage, processing, analysis, and security. Organizations invest in advanced technologies and skilled personnel to harness the potential of big data and gain a competitive edge."
    },
    { id: 6, title: 'Cloud Computing', image: img3, date: '21/12/2024', description: 'Discover how Cloud Computing is revolutionizing IT with scalable resources, on-demand services, and global connectivity. Click to learn how it’s transforming business operations and innovation.', content: "Cloud computing is the on-demand delivery of IT resources over the internet with a pay-as-you-go pricing model."+

 +"Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider.", link: 'google.com', title2: "", content2: "This model offers several advantages, including scalability, cost-efficiency, flexibility, and accessibility. Businesses can easily scale their IT resources up or down to meet changing demands, reducing upfront costs and operational overhead. Additionally, cloud computing promotes collaboration and remote work by enabling access to data and applications from anywhere with an internet connection.", title3: "", content3: "Major cloud service providers offer a variety of services, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS),"

 +"catering to different business needs." },
    
  ];
  


//const [articles, setArticles] = useState([]);

/*useEffect(() => {
  const fetchAllArticles = async () => {
    try {
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
    <h1 className="projectsHeading"> My <span> Blog</span></h1>
    <div className="projectsContainer">
      {projectData.map(project => (
        <div key={project.id} className="projectCard">
          <img src={project.image} alt="" className="projectImage" />
          <div className="projectContent">
            <h2>{project.title}</h2>
            <p className="date"><SlCalender/>. {project.date}</p>
            <p >{project.description}</p>

            <button className="viewProjectButton"><Link to={`/more/${project.id}`} className="viewProjectButton">Read More</Link></button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Blog;
