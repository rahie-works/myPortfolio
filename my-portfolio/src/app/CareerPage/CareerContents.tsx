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
      className={`w-1/7 ${raleway.className} text-sm text-white pt-5 flex flex-col items-center animate-fade-up animate-ease-in `}
    >
      {props.data.endDate ? (
        <p>{props.data.endDate}</p>
      ) : (
        <div className="w-4 h-4 bg-transparent border-2 border-white rounded-full "></div>
      )}
      <div className="w-[2px] bg-white flex-grow "></div>
      <p>{props.data.startDate}</p>
    </div>
  );
};

const ExperienceBlock = (props: any) => {
  return (
    <motion.div
      className="w-full h-full flex justify-center z-10"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 3 } },
      }}
    >
      <DateStringBlocks data={props.data} />
      <div
        key={props.key}
        className="w-2/3 h-full p-10 rounded-4xl flex flex-row animate-fade-up animate-ease-in"
      >
        <div className={`w-1/3`}>
          <div
            className={`w-full pb-5 ${raleway.className} text-3xl text-white `}
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

          <p className="text-white mt-8 text-sm">TECH USED</p>
          <div className="w-1/2 h-[2px] justify-left bg-white mt-1"></div>
          <div className="w-full h-1/3 grid grid-cols-3 gap-2 justify-center items-center mt-2 p-4">
            {props.data.tech.map((eachTech: string) =>
              getLogo({ logoName: eachTech })
            )}
          </div>
        </div>
        <div className={`w-2/3`}>
          <div
            className={`w-full pb-5 ${raleway.className} text-lg text-white`}
          >
            <p>{props.data.brief}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceLargeData = () => {
  return (
    <div
      className={`w-1/2 h-4/5 ${raleway.className} flex justify-center animate-fade-up animate-ease-in`}
    >
      <div
        className={`w-1/3 h-full text-9xl text-white flex flex-col justify-center items-center`}
      >
        <div
          className={`text-8xl font-bold pb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
        >
          +{ExperienceNumber.expYears}
        </div>
        <div className={`text-xl font-bold`}>Years of Experience</div>
      </div>
      <div
        className={`w-1/3 h-full p-10 text-9xl text-white flex flex-col justify-center items-center`}
      >
        <div
          className={`text-8xl font-bold pb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
        >
          +{ExperienceNumber.projects}
        </div>
        <div className={`text-xl font-bold`}>Projects Completed</div>
      </div>
      <div
        className={`w-1/3 h-full p-10 text-9xl text-white flex flex-col justify-center items-center`}
      >
        <div
          className={`text-8xl font-bold pb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
        >
          +{ExperienceNumber.clients}
        </div>
        <div className={`text-xl font-bold`}>Satisfied Clients</div>
      </div>
    </div>
  );
};

export default function CareerContents() {
  return (
    <section className="relative h-screen w-full items-center flex flex-col bg-black">
      <ExperienceLargeData />
      <div className="h-full w-full overflow-y-scroll space-y-20 flex flex-col items-center mb-20">
        {ExperienceData.map((each, key) => (
          <ExperienceBlock data={each} key={key} />
        ))}
      </div>
    </section>
  );
}
