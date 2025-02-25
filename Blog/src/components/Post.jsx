// src/components/Post.js
import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const Post = ({ post }) => {
  return (
    <div className="post-card">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-date">
        <FaCalendar />
        <span>{new Date(post.createdAt?.toDate()).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Post;