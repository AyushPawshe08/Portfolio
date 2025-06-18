import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      name: "Chatify",
      description: "A realtime Chatapp built using Socket.IO",
      tech: ["React", "Tailwind", "Socket.IO"],
      link: "https://github.com/AyushPawshe08/RealTime-Chatapp",
      live: "https://realtime-chat-app-01ps.onrender.com/"
    },
     {
      name: "AI Summarizer Chrome Extension",
      description:
        "Summarizes any webpage into brief, detailed, or bullet point formats directly in the browser.",
      tech: [
        "JavaScript",
        "Chrome Extension",
        "Manifest V3",
        "AI API (Gemini)",
      ],
      link: "https://github.com/AyushPawshe08/AI-Summarizer-Chrome-Extension",
      live: "",
    },
    {
      name: "BudgetTracker",
      description: "A Budget Tracker to track your expenses",
      tech: ["React", "Tailwind"],
      link: "https://github.com/AyushPawshe08/Budget-Tracker",
      live: ""
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDropdown = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className='bg-[#fff7ed] h-full p-6'>
      <h1 className='text-5xl sm:text-8xl flex items-center font-semibold gap-4 mb-8'>
        <motion.div
        className='text-gradient-to-r text-amber-100 '
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // slow rotation
        >
          <IoIosSettings className='hidden md:block' />
        </motion.div>
        My Projects
      </h1>

      <div className='grid gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-[#fff7ed] hover:bg-[#ffedd5] p-4  transition-colors duration-300'
          >
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => toggleDropdown(index)}
            >
              <h2 className='text-2xl font-semibold'>{project.name}</h2>
            </div>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className='overflow-hidden mt-4'
                >
                  <p className='text-gray-700 mb-2'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    {project.tech.map((techItem, i) => (
                      <span key={i} className='bg-pink-200 px-2 py-1 rounded text-sm'>
                        {techItem}
                      </span>
                    ))}
                  </div>
                  <div className='flex items-center gap-4'>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex gap-2 items-center text-green-600 font-medium'
                      >
                        <FaArrowUpRightFromSquare />
                        Live Site
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-blue-600 flex items-center gap-2 font-medium'
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
