import React from "react";
import { motion } from "framer-motion";
import './About.css';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4"
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        Hi, I'm a passionate web developer with expertise in React.js, JavaScript, and modern web technologies. I love building user-friendly and scalable applications that solve real-world problems.
      </p>
      <p className="mt-4 text-lg">
        When I'm not coding, I enjoy reading tech blogs, contributing to open-source projects, and exploring new tools and frameworks.
      </p>
    </motion.section>
  );
};

export default About;