import React from 'react';
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    "React", "Next.js", "JavaScript", "TypeScript", "MongoDB",
    "TailwindCSS", "Node.js", "Express.js", "Java", "Python",
    "MySQL", "PostgreSQL", "AWS", "GSAP", "Docker", "Firebase"
  ];

  return (
    <div className="bg-[#dbeafe]  overflow-hidden">
      <h1 className="text-xl sm:text-5xl mx-4 sm:mx-10 font-semibold py-4">
        Technologies and Tools I Work With
      </h1>

      <Marquee className='bg-green-300' direction="left" speed={80} gradient={false}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" text-[#1e293b	] font-semibold px-4 py-5 mx-2 rounded-full text-sm sm:text-base"
          >
            {skill}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
