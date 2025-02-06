"use client";
import React, {useState, useEffect} from "react";
import { Raleway } from "next/font/google";

// constants
import { GITHUB_URL } from "@/app/constants/router";

// icons
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { CgSpinner } from "react-icons/cg";

// types
import { ProjectDataType } from "@/app/types/projectData";

// utils
import { fetchProjectPageData } from "@/app/utils/dbHandler/fetchProjectPageData";


const raleway = Raleway({ subsets: ["latin"] });

const ProjectHeadingContainer = ({title}:{title: string[] | null}) => {
  return (
    <div
      className={`w-full h-1/4 text-5xl md:text-8xl mt-32 text-white flex font-bold ${raleway.className} animate-fade-up animate-ease-in justify-center items-center`}
    >
      <span>{title?.[0]}</span>
      <span className="text-blue-500 ml-5">{title?.[1]}</span>
    </div>
  );
};

const ProjectsInfoContainer = ({
  mainProjects,
  archivedText
}:{
  mainProjects: ProjectDataType[] | null;
  archivedText: string | null
}) => {
  return (
    <div className="w-full h-full items-center flex flex-col justify-center pt-20 md:pt-0 animate-fade-up animate-ease-in">
      <div className="w-full md:w-3/4 h-full flex flex-col md:flex-row md:justify-evenly items-center">
        {mainProjects?.map((eachproject, index) => (
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
          onClick={() => window.open(GITHUB_URL, "_blank")}
          className="hover:underline hover:scale-105 transition-all duration:300"
        >
          {archivedText}
        </p>
        <LiaExternalLinkAltSolid className="md:ml-3 text-2xl  md:text-xl" />
      </div>
    </div>
  );
};

export default function ProjectsPage() {

  const [data, setData] = useState<{
    majorProjectsData: ProjectDataType[] | null; 
    projectTitles: Array<string> | null; 
    archivedText: string | null;
  }>({
    majorProjectsData: null,
    projectTitles: null,
    archivedText: null,
  })

  useEffect(() => {
    fetchProjectPageData({
      setData,
      setIsLoading
    })
  },[])

  const [isLoading, setIsLoading] = useState(true)


  if(isLoading || !data?.majorProjectsData) {
    return <CgSpinner className="ml-2 animate-spin text-6xl text-black" />;
  }

  return (
    <section
      className={`h-auto md:h-screen w-full items-center flex flex-col bg-black ${raleway.className}`}
    >
      <ProjectHeadingContainer title={data.projectTitles} />
      <ProjectsInfoContainer mainProjects={data.majorProjectsData} archivedText={data.archivedText}/>
    </section>
  );
}
