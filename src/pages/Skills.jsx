import React from 'react'

const Skills = () => {
  const skills = [
    "React", "Nextjs", "JavaScript", "TypeScript", "MongoDB",
    "TailwindCSS", "Node.js", "Express.js", "Java", "Python",
    "MySQL", "PostgreSQL"
  ];

  return (
    <div className="flex pt-8 space-x-4 flex-wrap bg-amber-100 ">
      <h1 className='text-4xl mx-12'>Technologies and Tools I work with</h1>
      <ul className="flex flex-wrap bg-green-300 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className=" text-black p-4 "
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
