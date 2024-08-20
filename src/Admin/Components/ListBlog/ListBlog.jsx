import React, { useEffect, useState } from 'react';
import './listblog.css';
import { Link } from 'react-router-dom';
import  axios  from 'axios'
import { format } from 'date-fns';
/*
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
*/
export const ListBlog = () => {

  const [articles, setArticles] = useState([]);

  useEffect (()=>{
    const fetchAllArticles = async () => {
      try{
        const res = await axios.get('http://localhost:8800/list/articles')
        setArticles(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllArticles();
  }, []);

  const handleDelete = async (id) =>{
    try{
      await axios.delete("http://localhost:8800/delete/article/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="list-blog-container">
      <h2>List of Articles on My<span>Blog</span></h2>
      {articles.map((article) => (
        <div className="list-blog-card" key={article.article_id} >
          <div className="card-content">
            <h3>{article.title}</h3>
            <p className="date">Date: {format(new Date(article.publish_date), 'dd-MM-yyyy')}</p>
            <p className="description">{article.short_description}</p>
          </div>
          <button className="delete-button" onClick={()=>handleDelete(article.article_id)}>Delete</button>
          <button className='update-button'><Link to={`/admin/update/article/${article.article_id}`}>Update</Link></button>
        </div>
      ))}
    </div>
  );
};

export default ListBlog;
