import React from 'react';


const About = () => {
  return (
    <div className='rounded-t-[100px]  bg-[#F5F4ED]' >
      {/* Text Section */}
      <div className="  ">
        <h1 className="flex items-center text-6xl mx-12 font-bold mb-12 text-purple-700 ">About Me</h1>
        <p className="text-3xl pb-8 mx-8 leading-relaxed text-black">
          Hi, my name is <span className=" bg-blue-300">Ayush Pawshe</span>, a fourth-year Artificial Intelligence and Data Science student at <span className='bg-yellow-200'>Mumbai University</span>. 
          I am a passionate full-stack developer who loves exploring different tech stacks. I have hands-on experience with <span className="text-blue-500 font-medium">React, Node.js, Express, and MongoDB</span>.
          Recently, I’ve developed a strong interest in <span className="font-medium">Data Science</span> and <span className="font-medium">Machine Learning</span>.I thrive on projects that solve specific problems perfectly, focusing on impact over flexibility.
        </p>
      </div>

      {/* Image Section */}
      {/* <div className="relative w-64 h-64 group transition-transform duration-300 hover:scale-95">
        <img
          src="/images/ayush2.jpg"
          alt="Ayush Pawshe"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-600 rounded-br-xl"></div>
      </div> */}
    </div>
  );
};

export default About;
