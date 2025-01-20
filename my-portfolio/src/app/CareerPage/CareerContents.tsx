import { ExperienceData } from "./ExperienceData";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

import React from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { getLogo } from "../utils/GetLogoUtil";

const raleway = Raleway({ subsets: ["latin"] });

const ExperienceNumber: Record<string, number> = {
  expYears: 4,
  projects: 8,
  clients: 15,
};

const DateStringBlocks = (props: any) => {
  return (
    <div
      className={`w-1/7 ${raleway.className} text-xs md:text-sm text-white md:pt-5 flex flex-col items-center animate-fade-up animate-ease-in `}
    >
      {props.data.endDate ? (
        <p>{props.data.endDate}</p>
      ) : (
        <div className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></div>
      )}
      <div className="w-[1px] md:w-[2px] bg-white flex-grow "></div>
      <p className="mr-3">{props.data.startDate}</p>
    </div>
  );
};

const ExperienceBlock = (props: any) => {
  return (
    <motion.div
      className="w-full h-full flex justify-center z-10 mb-10 md:mb-0"
      initial="hidden"
      whileInView="visible"
      key={props?.index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
      }}
    >
      <DateStringBlocks data={props.data} />
      <div className="w-3/4 md:w-2/3 h-full md:p-10 rounded-4xl flex flex-col md:flex-row animate-fade-up animate-ease-in">
        <div className={`w-full pb-5 md:pb-0 md:w-1/3`}>
          <div
            className={`w-full md:pb-5 ${raleway.className} text-3xl text-white `}
          >
            <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {props.data.title}
            </p>
          </div>
          <div
            className={`w-full ${raleway.className} text-xl text-white flex`}
          >
            <p>@ {props.data.company}</p>
            <LiaExternalLinkAltSolid
              className="ml-10 cursor-pointer w-6 h-6 text-blue-500"
              title={`Click to check ${props.data.company}`}
              onClick={() => window.open(props.data.companyUrl, "_blank")}
            />
          </div>

          <p className="text-white mt-4 md:mt-8 text-sm">TECH USED</p>
          <div className="w-1/2 h-[2px] justify-left bg-white mt-1"></div>
          <div className="w-full h-1/3 grid grid-cols-5 md:grid-cols-3 gap-4 justify-center items-center md:mt-2 p-2 md:p-4">
            {props?.data?.tech.map((eachTech: string, index: number) =>
              getLogo({ logoName: eachTech, key: index })
            )}
          </div>
        </div>
        <div className={`w-full md:w-2/3 py-5 md:pb-0 overflow-y-scroll`}>
          <div
            className={`w-full md:px-10 ${raleway.className} md:text-lg text-white`}
          >
            <p>{props.data.brief}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceLargeData = () => {
  const LargeDataTitleStyle =
    "text-7xl md:text-8xl font-bold pb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";
  const LargeDataSubTitleStyle = "text-xs md:text-xl md:font-bold";

  return (
    <div
      className={`w-full h-3/5 md:w-1/2 md:h-4/5 pt-10 md:pt-0 ${raleway.className} flex justify-center items-center animate-fade-up animate-ease-in`}
    >
      <div
        className={`w-1/3 h-full text-white flex flex-col justify-center items-center`}
      >
        <div className={LargeDataTitleStyle}>+{ExperienceNumber.expYears}</div>
        <div className={LargeDataSubTitleStyle}>Years of Experience</div>
      </div>
      <div
        className={`w-1/3 h-full text-9xl text-white flex flex-col justify-center items-center`}
      >
        <div className={LargeDataTitleStyle}>+{ExperienceNumber.projects}</div>
        <div className={LargeDataSubTitleStyle}>Projects Completed</div>
      </div>
      <div
        className={`w-1/3 h-full text-white flex flex-col justify-center items-center`}
      >
        <div className={LargeDataTitleStyle}>+{ExperienceNumber.clients}</div>
        <div className={LargeDataSubTitleStyle}>Satisfied Clients</div>
      </div>
    </div>
  );
};

export default function CareerContents() {
  return (
    <section className="relative h-screen w-full items-center flex flex-col bg-black">
      <ExperienceLargeData />
      <div className="h-full w-full overflow-y-scroll md:space-y-20 flex flex-col items-center mb-20">
        {ExperienceData.map((each, index) => (
          <ExperienceBlock data={each} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}
