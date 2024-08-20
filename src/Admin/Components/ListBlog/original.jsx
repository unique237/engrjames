import React, { useEffect, useState } from 'react';
import './listblog.css';
import { Link } from 'react-router-dom';
import  axios  from 'axios'

const articles = [
  {
    title: 'Article Title 1',
    description: 'This is a short description of the article.',
    date: '2024-08-03'
  },
  {
    title: 'Article Title 2',
    description: 'This is a short description of the article.',
    date: '2024-08-03'
  },
  {
    title: 'Article Title 3',
    description: 'This is a short description of the article.',
    date: '2024-08-03'
  }
];

export const ListBlog = () => {

  const [article, setArticle] = useState([])

  useEffect (()=>{
    const fetchAllArticles = async ()=>{
      try{
        const res = await axios.get('http://localhost:8800/list/articles')
        setArticle(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllArticles()
  },[])
  return (
    <div className="list-blog-container">
      <h2>List of Articles on My<span>Blog</span></h2>
      {articles.map((article, index) => (
        <div className="list-blog-card" key={index}>
          <div className="card-content">
            <h3>{article.title}</h3>
            <p className="date">Date: {article.date}</p>
            <p className="description">{article.description}</p>
          </div>
          <button className="delete-button">Delete</button>
          <button className='update-button'><Link to='/admin/update/article'>Update</Link></button>
        </div>
      ))}
    </div>
  );
};

export default ListBlog;
