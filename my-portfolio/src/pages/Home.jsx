import React from 'react';
import './Home.css';
import { motion } from "framer-motion";


const Home = () => {
  return (
    < motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4"
    >
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm a Web Developer with a passion for building modern, 
        responsive, and user-friendly websites. I specialize in React.js, 
        JavaScript, and front-end development, ensuring every project is visually 
        appealing and highly functional. Whether it's a sleek portfolio, 
        a dynamic web app, or an e-commerce platform, I focus on writing clean, 
        efficient code to deliver top-notch performance. 
        Let’s build something amazing together!.</p>
    </div>
    </motion.section>
  );
};

export default Home;