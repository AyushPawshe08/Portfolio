import React from "react";
import Pressedbtn from "./Pressedbtn";
import { FaArrowRight } from "react-icons/fa";

const ProjectContainer = ({
  title,
  description,
  technologies = [],
  buttonText = "Learn More",
  repo,
}) => {
  const handleClick = () => {
    if (repo) {
      window.open(repo, "_blank");
    }
  };

  return (
    <div className="flex flex-col justify-between border-2 border-blue-700 bg-blue-50 rounded-xl m-6 p-8 shadow-md max-w-2xl h-full">
      <div>
        <h1 className="text-2xl font-bold text-blue-900 mb-4">{title}</h1>
        <p className="text-blue-800 mb-4">{description}</p>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className="border border-blue-700 bg-blue-100 text-blue-900 px-2 py-1 rounded-sm text-sm font-medium"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Learn More Button opens GitHub repo */}
      <div className="mt-auto self-end">
        <Pressedbtn onClick={handleClick}>
          {buttonText} <FaArrowRight />
        </Pressedbtn>
      </div>
    </div>
  );
};

export default ProjectContainer;
