import React from "react";
import { motion } from "framer-motion";
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce platform with product listings, cart, and checkout.",
      link: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A Trello-like app for managing tasks and projects.",
      link: "https://example.com",
    },
    {
      title: "Weather App",
      description: "A real-time weather app using OpenWeatherMap API.",
      link: "https://example.com",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4"
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-lg">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;