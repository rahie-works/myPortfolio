import React from "react";
import { Raleway } from "next/font/google";
import { MainProjects } from "./ProjectsData";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const raleway = Raleway({ subsets: ["latin"] });

const ProjectHeadingContainer = () => {
  return (
    <div
      className={`w-full h-1/2 text-8xl mt-32 text-white flex flex-col font-bold ${raleway.className} animate-fade-up animate-ease-in items-center`}
    >
      <span>Recent Projects &</span>
      <span className="text-blue-500">WIP</span>
    </div>
  );
};

const ProjectsInfoContainer = () => {
  return (
    <div className="w-full h-full items-center flex flex-col justify-center mb-10 animate-fade-up animate-ease-in">
      <div className="w-3/4 h-full flex justify-evenly">
        {MainProjects.map((eachproject, index) => (
          <div
            className={`w-1/3 h-full p-2 flex flex-col rounded-xl shadow-md transition-all duration-500 text-white text-center cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-gray-900 text-3xl ${raleway.className}}`}
            onClick={() => window.open(eachproject.repo, "_blank")}
          >
            <video
              src={eachproject.video}
              autoPlay
              loop
              muted
              className="w-full object-cover rounded-xl animate-fade-up animate-ease-in"
            />
            {eachproject.name}
            <p className="text-sm text-justify mt-4 animate-fade-up animate-ease-in">
              {eachproject.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="w-1/2 h-full mt-5 flex text-white justify-center items-center cursor-pointer">
        <p
          onClick={() =>
            window.open("https://github.com/rahie-works", "_blank")
          }
        >
          Find my archived projects
        </p>
        <LiaExternalLinkAltSolid className="ml-3 text-xl" />
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <section
      className={`h-full w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      <ProjectHeadingContainer />
      <ProjectsInfoContainer />
    </section>
  );
}
