import { useRef } from "react";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
import { motion } from "framer-motion";

import { MajorTools, MinorTools } from "./ToolsStore";
import { getLogo } from "../utils/GetLogoUtil";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ToolsHeadingContainer = () => {
  return (
    <div
      className={`w-full h-2/3 text-8xl text-white flex font-bold ${raleway.className} animate-fade-up animate-ease-in items-center justify-center`}
    >
      <span className={`${raleway.className} animate-fade-up animate-ease-in`}>
        My Expertise &
      </span>
      <span className="text-blue-500 animate-fade-up animate-ease-in">
        Toolset
      </span>
    </div>
  );
};

const MajorToolsContainer = () => {
  return (
    <div className="w-full h-full mb-5">
      <motion.div
        className="w-full h-1/2 grid grid-cols-5 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {MajorTools.tech.map((eachTech, index) => (
          <motion.div
            key={index}
            className="h-full rounded shadow-lg flex flex-col justify-center bg-gradient-to-r from-green-400 to-blue-500"
            variants={item}
          >
            {getLogo({
              logoName: eachTech.tool,
              logoStyle: "mx-auto text-9xl text-black",
            })}
            <p className="text-center text-white text-xs mt-2">
              {eachTech.tool}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <div
        className={`w-full h-1/3 ${raleway.className} flex justify-center items-center animate-fade-up animate-ease-in`}
      >
        {MajorTools.expertise.map((eachExp, index) => (
          <div
            key={index}
            className={`w-1/3 h-full text-9xl text-white flex flex-col justify-center items-center`}
          >
            <div
              className={`text-8xl font-bold pb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
            >
              {eachExp.value}
            </div>
            <div className={`text-xl font-bold`}>{eachExp.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SupportToolsContainer = () => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} className="w-full h-1/2 grid grid-cols-6 gap-3">
      {MinorTools.tech.map((eachTech, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          key={index}
          viewport={{ root: scrollRef }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 2 } },
          }}
          className="h-1/2 bg-gradient-to-r from-green-400 to-blue-500 rounded shadow-lg text-white flex flex-col justify-center"
        >
          {getLogo({
            logoName: eachTech,
            logoStyle: "mx-auto text-black text-8xl",
          })}
          <p className="text-center text-md mt-5">{eachTech}</p>
        </motion.div>
      ))}
    </div>
  );
};

const ToolsInfoContainer = () => {
  return (
    <div className="w-3/4 h-full">
      <div className="w-full flex justify-center items-center my-5">
        <div
          style={{ animationDelay: "0.5s" }}
          className="flex-1 h-1 bg-white rounded"
        ></div>
        <p className="mx-4 text-white text-lg whitespace-nowrap animate-fade-up animate-ease-in">
          My Power Tools Stack
        </p>
        <div
          style={{ animationDelay: "0.5s" }}
          className="flex-1 h-1 bg-white rounded"
        ></div>
      </div>
      <MajorToolsContainer />
      <div className="w-full flex justify-center items-center my-5">
        <div className="flex-1 h-1 bg-white rounded"></div>
        <p className="mx-4 text-white text-lg whitespace-nowrap animate-fade-up animate-ease-in">
          My other support stack
        </p>
        <div className="flex-1 h-1 bg-white rounded"></div>
      </div>
      <SupportToolsContainer />
    </div>
  );
};

export default function ToolsPage() {
  return (
    <section
      className={`relative h-full w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      <ToolsHeadingContainer />
      <ToolsInfoContainer />
    </section>
  );
}
