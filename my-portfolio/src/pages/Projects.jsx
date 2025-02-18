import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Built a personal portfolio website using React and Vite.',
      technologies: ['React', 'Vite', 'CSS'],
      link: 'https://example.com',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Developed a full-stack e-commerce platform using MERN stack.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://example.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Created a task management app using React and Firebase.',
      technologies: ['React', 'Firebase', 'CSS'],
      link: 'https://example.com',
    },
    {
      id: 4,
      title: 'AI Chatbot',
      description: 'Designed and implemented an AI chatbot using Python and TensorFlow.',
      technologies: ['Python', 'TensorFlow', 'NLP'],
      link: 'https://example.com',
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p className="subtitle">This is where I showcase my projects.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              <strong>Technologies:</strong>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;