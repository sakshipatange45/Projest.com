import React from "react";
import { motion } from "framer-motion";
import './Hero.css';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-20"
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">I build amazing web applications.</p>
    </motion.section>
  );
};

export default Hero;