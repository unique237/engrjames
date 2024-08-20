import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/Main/Main'
import Featured from '../Components/Featured/Featured'
import ShortBlog from '../Components/Blog/ShortBlog'
import ShortProjects from '../Components/Projects/ShortProjects'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Featured />
      <ShortProjects />
      {<ShortBlog />}
      <Footer />
    </div>
  )
}

export default Home