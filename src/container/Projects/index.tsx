import React from "react";
import MainLayout from "../../layout/MainLayout";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";

import sheFightsBack from "../../assets/images/sheFightsBack.png";
import safetyNet from "../../assets/images/techtogetherDevPostSubmission.png";
import aaaiSubmission from "../../assets/images/AAAILogo.jpeg";
import everlead from "../../assets/images/everlead.png";

import RESUME from "../../assets/resume/resume.json";

const ProjectPictureMapper = {
  "shefightsback": sheFightsBack,
  "SafetyNet": safetyNet,
  "AAAI Research Submission": aaaiSubmission,
  "Everlead": everlead
}

const Projects = () => {
  return (
    <MainLayout selectedKey={window.location.pathname}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        {RESUME.projects.map((project) => (
          <div key={project.name} className="w-full p-4">
            <div className="bg-card border-input border-2 rounded-lg shadow-lg overflow-hidden">
              <img
                src={ProjectPictureMapper[project.name]}
                alt={project.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-center mb-4">{project.name}</h3>
                <div className="flex justify-center">
                  <a
                    href={project.url}
                    target="_blank"
                    className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-blue-600 transition-colors"
                  >
                    {project.url.includes(".pdf") ? 
                      <span className="flex flex-row gap-2 items-center"><AiFillFile />Document</span> : 
                      <span className="flex flex-row gap-2 items-center"><AiFillGithub />Source Code</span>}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};
export default Projects;
