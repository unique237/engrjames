import React, { useState } from 'react';
import './newproject.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NewProject = () => {

  const [project, setProject] = useState({
    title: '',
    project_description: '',
    project_image: null,
    tech: '',
    link: ''
  });

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setProject(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/insert/project", project)
      navigate("/admin/projects/post")
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className="new-project-container">
      <div className="new-project-card">
        <h2>New Project</h2>
        <form>
          <div className="form-group">
            <label htmlFor="project-name">Project Title</label>
            <input type="text" id="project-name" name="title" placeholder="Enter project name" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="project_description" placeholder="Enter project description" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type='file' id="description" name="project_image" placeholder="Select Image" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="tech1">Tech Icone</label>
            <input type="text" id="tech" name="tech" placeholder="Enter tech 1" onChange={handleChange}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="repository-link">Repository Link</label>
            <input type="url" id="repository-link" name="link" placeholder="Enter repository link" onChange={handleChange}/>
          </div>
          <div className="button-group">
            <button type="submit" onClick={handleClick}>Submit</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProject;
