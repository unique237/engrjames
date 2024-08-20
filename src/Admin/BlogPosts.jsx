import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import NewBlog from './Components/NewBlog/NewBlog'

export const BlogPosts = () => {
  return (
    <>
      <Navbar />
      <NewBlog />
      <Footer />
    </>
  )
}

export default BlogPosts