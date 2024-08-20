import React, { useState } from 'react';
import './newblog.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NewBlog = () => {
  const [article, setArticle] = useState({
    title: '',
    short_description: '',
    article_link: null,
    body_one: '',
    heading_two: '',
    body_two: ''
  });

  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setArticle(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'image_one') {
      setImageOne(files[0]);
    } else if (name === 'image_two') {
      setImageTwo(files[0]);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', article.title);
    formData.append('short_description', article.short_description);
    formData.append('article_link', article.article_link);
    formData.append('body_one', article.body_one);
    formData.append('heading_two', article.heading_two);
    formData.append('body_two', article.body_two);
    if (imageOne) {
      formData.append('image_one', imageOne);
    }
    if (imageTwo) {
      formData.append('image_two', imageTwo);
    }

    try {
      await axios.post('http://localhost:8800/insert/article', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/admin/blog/post');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new-blog-container">
      <div className="new-blog-card">
        <h2>New Article</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Article Title</label>
            <input type="text" id="title" name="title" placeholder="Enter article title" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="short-description">Short Description</label>
            <textarea id="short-description" name="short_description" placeholder="Enter short description" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image1">Image 1</label>
            <input type="file" id="image1" name="image_one" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="image2">Image 2</label>
            <input type="file" id="image2" name="image_two" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input type="url" id="link" name="article_link" placeholder="Enter link" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="body1">Body 1</label>
            <textarea id="body1" name="body_one" placeholder="Enter first part of the body" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="heading2">Heading 2</label>
            <input type="text" id="heading2" name="heading_two" placeholder="Enter heading 2" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="body2">Body 2</label>
            <textarea id="body2" name="body_two" placeholder="Enter second part of the body" onChange={handleChange}></textarea>
          </div>
          <button type="submit" onClick={handleClick}>Submit</button>
          <button type="reset">Clear</button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
