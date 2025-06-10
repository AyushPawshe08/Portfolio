import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Download, DownloadIcon } from "lucide-react";

const Hero = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lotties/person.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <div className="flex text-center px-6 py-12">
      <div className=" mb-10 ">
        <h2 className="text-8xl font-dancingscript text-violet-600">hello</h2>
        <h1 className="text-3xl font-bold text-blue-700 mb-4">I'm <span className="font-dancingscript text-5xl">Ayush</span>,a fullstack developer and Ai enthusiast</h1>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          With hands-on experience in
          building web applications using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>.<br />
          I love working with <strong>TailwindCSS</strong> and focus on delivering great UI/UX designs.
        </p>

        <div className="flex gap-6 text-center text-2xl">
          <a href="/ayush_resume.pdf">
  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
    Resume
    <Download size={18} />
  </button>
</a>

          {/* <a href="https://github.com/AyushPawshe08" target="_blank" rel="noreferrer">
            <FaGithub className="text-gray-800 hover:text-black" title="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ayush-pawshe-aa3a74251/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-800" title="LinkedIn" />
          </a>
          <a href="https://x.com/Ayushp8888" target="_blank" rel="noreferrer">
            <FaTwitter className="text-blue-500 hover:text-blue-600" title="Twitter" />
          </a>
          <a href="mailto:pawshesayush83@gmail.com" target="_blank" rel="noreferrer">
            <SiGmail className="text-red-500 hover:text-red-600" title="Gmail" />
          </a> */}
        </div>
      </div>

    
    </div>
  );
};

export default Hero;
