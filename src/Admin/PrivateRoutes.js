import React from 'react'
import './Private.css'
import { Routes, Route } from 'react-router-dom'
import AdminHome from './AdminHome'
import Projects from './Projects'
import Articles from './Articles'
import BlogPosts from './BlogPosts'
import ProjectsPost from './ProjectsPost'
import ArticleUpdate from './ArticleUpdate'
import ProUpdate from './ProUpdate'

export const PrivateRoutes = () => {
  return (
    <>
        
            <Routes>
                <Route path='/' element={<AdminHome />}/>
                <Route path='/admin/articles' element={<Articles />}/>
                <Route path='/admin/projects' element={<Projects />}/>
                <Route path='/admin/blog/post' element={<BlogPosts />}/>
                <Route path='/admin/prjects/post' element={<ProjectsPost />}/>
                <Route path='/admin/update/article' element={<ArticleUpdate />}/>
                <Route path='/admin/update/project' element={<ProUpdate />}/>
            </Routes>

        
    </>
  )
}

export default PrivateRoutes