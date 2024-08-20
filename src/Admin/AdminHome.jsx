import React from 'react'
import Navbar from './Components/Navbar/Navbar'
//import NewBlog from './Components/NewBlog/NewBlog'
//import NewProject from './Components/NewProject/NewProject'
import ListBlog from './Components/ListBlog/ListBlog'
import ListProjects from './Components/ListProjects/ListProjects'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Subscribe from './Components/Subscriptions/Subscribe'


export const AdminHome = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <h1>Welcome <span>Eng.</span> MBAME MBAME</h1>
      <ListBlog />
      <ListProjects />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  )
}

export default AdminHome