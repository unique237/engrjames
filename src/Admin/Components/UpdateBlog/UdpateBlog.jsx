import React, { useState } from 'react';
import './update.css';

const UpdateBlog = () => {
  const [articleId, setArticleId] = useState('');
  const [articleName, setArticleName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [link, setLink] = useState('');
  const [body1, setBody1] = useState('');
  const [heading2, setHeading2] = useState('');
  const [body2, setBody2] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log(`Searching for article with ID: ${articleId}`);
  };

  const handleUpdate = () => {
    // Implement update functionality here
    console.log('Updating article with the following details:', {
      articleId,
      articleName,
      shortDescription,
      image1,
      image2,
      link,
      body1,
      heading2,
      body2,
    });
  };

  const handleClear = () => {
    setArticleId('');
    setArticleName('');
    setShortDescription('');
    setImage1('');
    setImage2('');
    setLink('');
    setBody1('');
    setHeading2('');
    setBody2('');
  };

  return (
    <div className="update-blog-container">
      <h1>Update Article</h1>
      <div className="form-group">
        <label>Article ID</label>
        <div className="input-with-button">
          <input
            type="text"
            value={articleId}
            onChange={(e) => setArticleId(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="form-group">
        <label>Article Name</label>
        <input
          type="text"
          value={articleName}
          onChange={(e) => setArticleName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Short Description</label>
        <textarea
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Image 1</label>
        <input
          type="file"
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Image 2</label>
        <input
          type="file"
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Body 1</label>
        <textarea
          value={body1}
          onChange={(e) => setBody1(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Heading 2</label>
        <input
          type="text"
          value={heading2}
          onChange={(e) => setHeading2(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Body 2</label>
        <textarea
          value={body2}
          onChange={(e) => setBody2(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default UpdateBlog;
