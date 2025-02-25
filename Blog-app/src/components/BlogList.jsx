import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = ({ posts }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;