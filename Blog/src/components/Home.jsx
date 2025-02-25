// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Post from './Post';


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsArray);
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <h1>Blog Posts</h1>
        <div className="post-grid">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;