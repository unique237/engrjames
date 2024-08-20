import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import MyProjects from './Pages/MyProjects'
import MySkills from './Pages/MySkills'
import Contactme from './Pages/Contactme'
import Notfound from './Pages/Notfound'
import MyBlog from './Pages/MyBlog'
import Login from './Pages/Login'
import SingleBlog from './Pages/SingleBlog'
//import PrivateRoutes from './Admin/PrivateRoutes'


import AdminHome from './Admin/AdminHome'
import Projects from './Admin/Projects'
import Articles from './Admin/Articles'
import BlogPosts from './Admin/BlogPosts'
import ProjectsPost from './Admin/ProjectsPost'
import ArticleUpdate from './Admin/ArticleUpdate'
import ProUpdate from './Admin/ProUpdate'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/*========= <Route iindex element={<Home />} /> ====================*/}
          <Route path='/about' element={<Aboutme />} />
          <Route path='/skills' element={<MySkills />} />
          <Route path='/projects' element={<MyProjects />} />
          <Route path='/blog' element={<MyBlog />} />
          <Route path='/contact' element={<Contactme />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/more/:id' element={<SingleBlog />} />

          {/******** Admin Routs ************/}
          <Route path='/admin/home' element={<AdminHome />} />

          <Route path='/admin/articles' element={<Articles />} />
          <Route path='/admin/projects' element={<Projects />} />
          <Route path='/admin/blog/post' element={<BlogPosts />} />
          <Route path='/admin/projects/post' element={<ProjectsPost />} />
          <Route path='/admin/update/article/:article_id' element={<ArticleUpdate />} />
          <Route path='/admin/update/project/:project_id' element={<ProUpdate />} />

          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App