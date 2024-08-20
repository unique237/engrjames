import React, { useEffect, useState } from 'react';
import './listprojects.css';
import { Link } from 'react-router-dom'
import  axios  from 'axios'

/*
const projects = [
  {
    title: 'Project Title 1',
    description: 'This is a short description of the project.'
  },
  {
    title: 'Project Title 2',
    description: 'This is a short description of the project.'
  },
  {
    title: 'Project Title 3',
    description: 'This is a short description of the project.'
  },
  {
    title: 'Project Title 4',
    description: 'This is a short description of the project.'
  },
  {
    title: 'Project Title 5',
    description: 'This is a short description of the project.'
  }
];
*/
export const ListProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect (()=>{
    const fetchAllProjects = async () => {
      try{
        const res = await axios.get('http://localhost:8800/list/projects')
        setProjects(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllProjects();
  }, []);

  const handleDelete = async (id) =>{
    try{
      await axios.delete("http://localhost:8800/delete/project/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
/*
    const handleDelete = async (id) =>{
      try{
          await axios.delete("http://localhost:8800/delete/project/"+id)
          setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
      }catch(err){
          console.log(err);
      }
  }*/
  

  return (
    <div className="list-projects-container">
      <h2>My <span>Projects</span></h2>
      {projects.map( (project) => (
        <div className="list-project-card" key={project.project_id}>
          <div className="card-content">
            <h3>{project.title}</h3>
            <p className="description">{project.project_description}</p>
          </div>
          <button className="delete-button" onClick={()=>handleDelete(project.project_id)}>Delete</button>
          <button className='update-button'><Link to={`/admin/update/project/${project.project_id}`}>Update</Link></button>
        </div>
      ))}
    </div>
  );
};

export default ListProjects;
