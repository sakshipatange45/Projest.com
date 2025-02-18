import React from 'react';
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import './About.css';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4"
    >
      <h1>About Me</h1>
      <p>
        Hello! I’m Sakshi Patange, a dedicated Web Developer with a passion for crafting elegant, 
        user-friendly, and high-performing web applications. With a B.Tech in Computer Science & 
        Engineering, I specialize in React.js, JavaScript, and modern front-end technologies to 
        build seamless digital experiences.
        <br /><br />
        I love bringing ideas to life through clean code, intuitive design, and interactive functionality. 
        Whether it’s a simple landing page or a complex web application, I focus on creating solutions 
        that are efficient, scalable, and visually appealing.
        <br /><br />
        I’m always eager to explore new technologies and take on exciting projects. Let’s connect 
        and build something amazing together!
      </p>

      {/* Skills Icons */}
      <div className="skills-icons">
        <SiHtml5 className="icon html" title="HTML5" />
        <SiCss3 className="icon css" title="CSS3" />
        <SiJavascript className="icon js" title="JavaScript" />
        <SiReact className="icon react" title="React.js" />
      </div>
    </motion.section>
  );
};

export default About;
