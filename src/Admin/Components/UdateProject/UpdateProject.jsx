import React, {useState, useEffect } from 'react'
import './update.css'
import  axios  from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

export const UpdateProject = () => {
  const [project, setProject] = useState({
    title: '',
    project_description: '',
    project_image: null,
    tech: '',
    link: ''
  });

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

  const navigate = useNavigate()
  const location = useLocation()

  const project_id = location.pathname.split("/")[4]

  console.log(location.pathname.split("/")[2])

  const handleChange = (e) =>{
    setProject(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/update/project/"+ project_id, project)
      navigate("/admin/home")
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="new-project-container">
      <div className="new-project-card">
        <h2>Update Project</h2>
        <form>
          <div className="form-group">
            <label htmlFor="project-name">Project Title</label>
            <input type="text" id="project-name" name="title"  onChange={handleChange} placeholder={projects.title} value={projects.title}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="project_description" placeholder="Enter project description" onChange={handleChange} value={project.project_description}></textarea>
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
            <button type="submit" onClick={handleClick}>Update</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );

  
}

export default UpdateProject