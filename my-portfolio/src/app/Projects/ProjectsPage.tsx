import React, { useState, useEffect } from "react";
import { Raleway } from "next/font/google";
import { ProjectData } from "./ProjectsData";
import { FaArrowRight } from "react-icons/fa6";

const raleway = Raleway({ subsets: ["latin"] });

const ProjectHeadingContainer = () => {
  return (
    <div
      className={`w-full h-1/2 text-8xl mt-32 text-white flex flex-col font-bold ${raleway.className} animate-fade-up animate-ease-in items-center`}
    >
      <span>Recent Projects &</span>
      <span className="text-blue-500">Achievements</span>
    </div>
  );
};

// const ProjectTiles = (props: any) => {
//   return (
//     <div
//       className="w-full h-full rounded-md pb-30 animate-fade-up animate-ease-in justify-center overflow-hidden group"
//       key={props.index}
//     >
//       <img
//         alt={props.eachProject.name}
//         src={props.eachProject.images[0]}
//         style={{ width: "100%", height: "100%" }}
//         className="rounded-md group-hover:scale-110 transition-all duration-300"
//       />
//       <div className="absolute w-full text-2xl bottom-0 bg-black flex justify-center text-white group-hover:text-lg transition-all duration-300">
//         <p>{props.eachProject.name}</p>
//       </div>
//     </div>
//   );
// };

const ProjectsInfoContainer = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const [selectedProject, setSelectedProject] = useState(0);

  const switchProjectInfo = (index: number) => {
    setSelectedProject(index);
  };

  const changeImage = () => {
    console.log("==imageIndex", imageIndex);
    if (imageIndex < ProjectData[selectedProject].images.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };
  console.log("==imageIndex", ProjectData[selectedProject].video);
  return (
    <div className="w-3/4 h-full items-center flex justify-left mb-10">
      <div className="w-full h-full flex flex-col justify-center">
        {ProjectData.map((eachProject, index) => (
          // <ProjectTiles eachProject={eachProject} index={index} />
          <div
            className="w-full h-full pt-5 flex flex-col items-left justify-evenly cursor-pointer"
            onClick={() => switchProjectInfo(index)}
          >
            <div
              key={index}
              className={`text-white text-3xl transition-all duration-500 ${
                selectedProject === index
                  ? `underline-active text-blue-500`
                  : ``
              }`}
            >
              {eachProject.name}
            </div>
            <span
              className={`left-0 h-[2px] bg-white transition-all duration-500 ${
                selectedProject === index ? "w-3/4" : "w-0"
              }`}
            ></span>
          </div>
        ))}
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full h-2/3 flex justify-center animate-fade-up animate-ease-in">
          {ProjectData[selectedProject].video ? (
            <video
              src={ProjectData[selectedProject].video}
              autoPlay
              loop
              muted
              className="w-full object-cover rounded-xl animate-fade-up animate-ease-in"
            />
          ) : (
            <>
              <img
                alt={ProjectData[selectedProject].name}
                src={ProjectData[selectedProject].images[imageIndex]}
                className="object-cover rounded-xl animate-fade-up animate-ease-in"
              />
              <FaArrowRight
                className="h-full text-white text-xl cursor-pointer"
                onClick={changeImage}
              />
            </>
          )}
        </div>
        <p className="left-0 pt-5 w-full h-1/3 text-white items-center text-md animate-fade-up animate-ease-in">
          {ProjectData[selectedProject].desc}
        </p>
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
