import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ListProjects from './Components/ListProjects/ListProjects'

export const Projects = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <ListProjects />
      <Footer />
    </>
  )
}

export default Projects