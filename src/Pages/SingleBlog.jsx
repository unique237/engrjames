import React from 'react'
import MoreBlog from '../Components/Blog/MoreBlog'
import Navbar from '../Components/Navbar/Navbar'
//import Featured from '../Components/Featured/Featured'
import Footer from '../Components/Footer/Footer'

export const SingleBlog = () => {
  return (
    <div>
      <Navbar />
      <br /><br /><br />
      <MoreBlog/>
      <Footer />
    </div>
  )
}

export default SingleBlog