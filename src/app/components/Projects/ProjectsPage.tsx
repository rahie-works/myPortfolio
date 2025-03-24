"use client";
import React, {useState, useEffect} from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";

// icons
import { CgSpinner } from "react-icons/cg";

// types
import { ProjectDataType } from "@/app/types/projectData";
import { ExternalLinks } from "@/app/types/homePageContentTypes";

// utils
import { fetchProjectPageData } from "@/app/utils/dbHandler/fetchProjectPageData";
import { fetchExternalLinks } from "@/app/utils/dbHandler/fetchExternalLinks";


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
}:{
  mainProjects: ProjectDataType[] | null;
}) => {
  return (
    <div className="w-full h-full items-center flex flex-col justify-center py-20 animate-fade-up animate-ease-in">
      <div className="w-full md:w-3/4 h-auto my-16 flex flex-col md:grid grid-cols-2 gap-4 justify-center items-center">
        {mainProjects?.map((eachproject, index) => (
          <div
            key={index}
            className={`w-3/4 md:w-full h-full mb-20 md:mb-0 
              md:p-5 py-5 flex flex-col rounded-xl shadow-md transition-all 
              duration-500 text-white text-center cursor-pointer justify-center items-center
              hover:scale-105 hover:shadow-lg hover:bg-gray-900 text-3xl ${raleway.className}}`}
            onClick={() => window.open(eachproject.repo, "_blank")}
          >
            {eachproject.video ? <video
              src={eachproject.video}
              autoPlay
              loop
              muted
              className="w-full object-cover rounded-xl animate-fade-up animate-ease-in"
            /> : 
            <Image 
              alt="project_image" 
              src={eachproject.image ? eachproject.image : ""} 
              width={650} 
              height={500}
              objectFit="contain"
              />
            }
            <h2 className="text-2xl py-5">{eachproject.name}</h2>
            <p className="text-sm text-justify mt-4 md:mt-0 py-5 px-3 animate-fade-up animate-ease-in">
              {eachproject.desc}
            </p>
          </div>
        ))}
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

  const [isLoading, setIsLoading] = useState(true)

  const [githubLink, setGithubLink] = useState<{externalLinks: ExternalLinks | null}>({
    externalLinks: null,
  })

  useEffect(() => {
    fetchProjectPageData({
      setData,
      setIsLoading
    })
    fetchExternalLinks({
      setData: setGithubLink,
      setIsLoading: () => {},
    })
  },[])

  return (
    <section
      className={`h-2/3 w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      {(isLoading || !data?.majorProjectsData) ?
        <div className="flex bg-black h-screen w-full items-center justify-center">
          <CgSpinner className="ml-2 animate-spin text-6xl text-white" />
        </div> :
        <>
          <ProjectHeadingContainer title={data.projectTitles} />
          <ProjectsInfoContainer mainProjects={data.majorProjectsData}/>
        </>
      }
    </section>
  );
}
