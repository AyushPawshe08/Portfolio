import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="relative">
      {/* Pink background behind the rounded top */}
      <div className="absolute top-0 left-0 w-full h-[150px] bg-[#FFF7ED] z-0"></div>

      {/* Main Contact Section */}
      <div className="bg-black text-white rounded-t-[5rem] py-8 px-8 md:px-28 h-[700px] relative z-10">
        {/* Heading */}
        <p className="mt-16 text-3xl text-center sm:text-start sm:text-6xl">
          Let's{' '}
          <span className="font-dancingscript text-5xl sm:text-7xl text-pink-300">
            connect!
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 mt-10">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-auto flex items-center gap-2 bg-gray-300 text-black px-6 py-3 rounded-full text-lg shadow hover:scale-105 transition">
              <FaGithub /> GitHub
            </button>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-auto flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-300 text-white px-6 py-3 rounded-full text-lg shadow hover:scale-105 transition">
              <FaLinkedin /> LinkedIn
            </button>
          </a>

          <a href="mailto:your@email.com" className="w-full md:w-auto">
            <button className="w-full md:w-auto flex items-center gap-2 bg-green-400 text-black px-6 py-3 rounded-full text-lg shadow hover:scale-105 transition">
              <MdEmail /> Email
            </button>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-auto flex items-center gap-2 bg-gradient-to-r from-sky-400 to-sky-300 text-black px-6 py-3 rounded-full text-lg shadow hover:scale-105 transition">
              <FaTwitter /> Twitter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

