// src/components/CreatePost.js
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // State for image URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'posts'), {
      title,
      content,
      imageUrl, // Save the image URL to Firestore
      createdAt: new Date(),
    });
    navigate('/');
  };

  return (
    <div className="create-post">
      <div className="container">
        <h1>Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              required
            />
          </div>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL (optional)"
            />
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;