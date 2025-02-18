import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaFire } from "react-icons/fa";

const skills = [
  { name: "React.js", level: 90, icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "HTML/CSS", level: 95, icon: <FaHtml5 className="text-orange-400 text-4xl" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-400 text-4xl" /> },
  { name: "Firebase", level: 75, icon: <FaFire className="text-red-400 text-4xl" /> },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-6 text-center bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 bg-opacity-80 shadow-lg rounded-xl p-6 border border-gray-700 flex flex-col items-center justify-center transition-transform transform hover:shadow-2xl"
          >
            <div className="p-4 bg-gray-700 rounded-full">{skill.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
            <p className="text-gray-400">Proficiency: {skill.level}%</p>
            <div className="w-full bg-gray-600 rounded-full h-2 mt-2 overflow-hidden">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;