import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <div className="flex space-x-4">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;