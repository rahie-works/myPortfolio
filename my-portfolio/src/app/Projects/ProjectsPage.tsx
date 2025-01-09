import { Raleway } from "next/font/google";
import { ProjectData } from "./ProjectsData";

const raleway = Raleway({ subsets: ["latin"] });

const ProjectHeadingContainer = () => {
  return (
    <div
      className={`relative w-1/2 h-full text-8xl text-white flex flex-col font-bold ${raleway.className} animate-fade-up animate-ease-in justify-center`}
    >
      <span className={`${raleway.className} animate-fade-up animate-ease-in`}>
        Recent Projects &
      </span>
      <span className="text-blue-500 animate-fade-up animate-ease-in">
        Achievements
      </span>
    </div>
  );
};

const ProjectTiles = (props: any) => {
  return (
    <div
      className="w-full h-full rounded-md pb-30 animate-fade-up animate-ease-in justify-center overflow-hidden group"
      key={props.index}
    >
      <img
        alt={props.eachProject.name}
        src={props.eachProject.images[0]}
        style={{ width: "100%", height: "100%" }}
        className="rounded-md group-hover:scale-110 transition-all duration-300"
      />
      <div className="absolute w-full text-2xl bottom-0 bg-black flex justify-center text-white group-hover:text-lg transition-all duration-300">
        <p>{props.eachProject.name}</p>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <section
      className={`relative h-full w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      <ProjectHeadingContainer />
      <div className="w-3/4 h-full grid grid-cols-3 gap-4 items-center pb-10">
        {ProjectData.map((eachProject, index) => (
          <ProjectTiles eachProject={eachProject} index={index} />
        ))}
      </div>
    </section>
  );
}
