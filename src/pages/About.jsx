import React from 'react';

const About = () => {
  return (
    <div className=' rounded-t-[100px] pt-8 bg-[#fdfcfb]'>
      <div className="">
        <h1 className="flex items-center text-6xl sm:text-8xl  mx-12 font-semibold mb-12 text-purple-700">
          About Me
        </h1>
        <p className="text-lg  sm:text-3xl pb-8 mx-10 leading-relaxed text-[#111827">
          Hi, I'm <span className="bg-green-300">Ayush Pawshe</span>, a fourth-year Artificial Intelligence and Data Science student at <span className='bg-yellow-200'>Mumbai University</span>. 
          I am a passionate full-stack developer who loves exploring different tech stacks. I have hands-on experience with <span className="text-blue-500 font-medium">React, Node.js, Express, and MongoDB</span>.
          Recently, I’ve developed a strong interest in <span className="font-medium">Data Science</span> and <span className="font-medium">Machine Learning</span>. I thrive on projects that solve specific problems perfectly, focusing on impact over flexibility.
        </p>
      </div>
    </div>
  );
};

export default About;

