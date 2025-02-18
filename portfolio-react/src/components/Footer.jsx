import React from "react";
import { motion } from "framer-motion";
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4 bg-gray-800 text-white text-center"
    >
      <div className="container mx-auto">
        <p className="text-lg">Connect with me:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Twitter
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;