import React from "react";
import { Raleway } from "next/font/google";
import { MainProjects } from "./ProjectsData";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const raleway = Raleway({ subsets: ["latin"] });

const ProjectHeadingContainer = () => {
  return (
    <div
      className={`w-full h-1/4 text-5xl md:text-8xl mt-32 text-white flex font-bold ${raleway.className} animate-fade-up animate-ease-in justify-center items-center`}
    >
      <span>{"< My"}</span>
      <span className="text-blue-500 ml-5">{"Works />"}</span>
    </div>
  );
};

const ProjectsInfoContainer = () => {
  return (
    <div className="w-full h-full items-center flex flex-col justify-center pt-20 md:pt-0 animate-fade-up animate-ease-in">
      <div className="w-full md:w-3/4 h-full flex flex-col md:flex-row md:justify-evenly items-center">
        {MainProjects.map((eachproject, index) => (
          <div
            key={index}
            className={`w-3/4 md:w-1/3 h-full mb-20 md:mb-0 md:p-2 flex flex-col rounded-xl shadow-md transition-all duration-500 text-white text-center cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-gray-900 text-3xl ${raleway.className}}`}
            onClick={() => window.open(eachproject.repo, "_blank")}
          >
            <video
              src={eachproject.video}
              autoPlay
              loop
              muted
              className="w-full object-cover rounded-xl animate-fade-up animate-ease-in"
            />
            <h2 className="text-2xl py-5">{eachproject.name}</h2>
            <p className="text-sm text-justify mt-4 md:mt-0 py-5 animate-fade-up animate-ease-in">
              {eachproject.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 h-full md:mt-5 mb-10 md:mb-0 flex text-white justify-center items-center cursor-pointer">
        <p
          onClick={() =>
            window.open("https://github.com/rahie-works", "_blank")
          }
        >
          Find my archived projects
        </p>
        <LiaExternalLinkAltSolid className="md:ml-3 text-2xl  md:text-xl" />
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <section
      className={`h-auto md:h-full w-full items-center flex flex-col bg-black ${raleway.className}`}
    >
      <ProjectHeadingContainer />
      <ProjectsInfoContainer />
    </section>
  );
}
