import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Resume = () => {
  return (
    <div className="resume">
      {/*<h1>My Resume</h1>*/}

      {/* Objective Section */}
      <motion.section
        className="resume-section card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Objective</h2>
        <div className="resume-item">
          <p>
            Highly motivated and detail-oriented Computer Science graduate seeking an entry-level position to utilize my technical skills and passion for problem-solving in a dynamic organization. Eager to contribute to innovative projects and grow as a software developer.
          </p>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="resume-section card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Computer Science & Engineering</h3>
          <p>CSMSS,Chh.Shahu Collage Of Engineering Chh.SambhajiNagar,Maharashtra,India</p>
          <p>Graduated: july 2023</p>
          <p>GPA: 8.56/10</p>
        </div>
        <div className="resume-item">
          <h3> Diploma</h3>
          <p>Government Polytechnic ,Hingoli,Mahatrashtra,India</p>
          <p>Graduated: Sept 2020</p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="resume-section card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Skills</h2>
        <div className="resume-item">
          <ul>
            <li>Programming Languages: JavaScript,Java</li>
            <li>Web Development: React, HTML, CSS, </li>
            <li>Databases: MongoDB, MySQL</li>
            <li>Tools: Git, VS Code, </li>
            <li>Other: Problem Solving, Team Collaboration.</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="resume-section card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Projects</h2>
        <div className="resume-item">
          <h3>Portfolio Website</h3>
          <p>Built a personal portfolio website using React and Vite.</p>
          <p>Features: Responsive design, dynamic routing, and CSS animations.</p>
        </div>
        <div className="resume-item">
          <h3>E-Commerce Platform</h3>
          <p>Developed a full-stack e-commerce platform using MERN stack.</p>
          <p>Features: User authentication, product search, and payment integration.</p>
        </div>
        <div className="resume-item">
          <h3>Weather App</h3>
          <p>Created a Weather app using ReactJs.</p>
          <p>Display the live Weather.</p>
        </div>
      </motion.section>

     {/* Certifications Section */}
      <motion.section
        className="resume-section card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Certifications</h2>
        <div className="resume-item">
          <ul>
            <li>Certified React Developer - Example Certification Body</li>
            <li>Python for Everybody - University of Example (Coursera)</li>
            <li>Google Cloud Fundamentals</li>
          </ul>
        </div>
      </motion.section>

      
 {/* Hobbies Section */}
      <motion.section
        className="resume-section card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Hobbies</h2>
        <div className="resume-item">
          <ul>
            <li>Solving coding challenges on platforms like LeetCode and HackerRank.</li>
            <li>Reading books on technology and personal development.</li>
            <li>Playing chess and participating in local tournaments.</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default Resume;