import { useRef } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
import { motion } from "framer-motion";
import { GiMuscleFat, GiMuscleUp } from "react-icons/gi";

import {
  MajorTools,
  MinorTools,
  WhatsBrewingItemsConstants,
} from "./ToolsStore";
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
      className={`w-full h-full text-8xl p-32 text-white flex font-bold ${raleway.className} animate-fade-up animate-ease-in items-center justify-center`}
    >
      <span className={`${raleway.className} animate-fade-up animate-ease-in`}>
        {"</My Tech"}
      </span>
      <span className="text-blue-500 animate-fade-up animate-ease-in">
        {"Stack/>"}
      </span>
    </div>
  );
};

const MajorToolsContainer = () => {
  return (
    <div className="w-full h-3/4">
      <div className="h-1/2 flex justify-center ">
        <motion.div
          className={`glass-effect flex w-3/4 h-full 
          grid grid-cols-5 gap-4 justify-center py-4 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500`}
          initial="hidden"
          animate="show"
          variants={container}
        >
          {MajorTools.tech.map((eachTech, index) => (
            <motion.div
              key={index}
              className="rounded shadow-2xl flex flex-col justify-evenly items-center"
              variants={item}
            >
              {getLogo({
                logoName: eachTech,
                logoStyle: "mx-auto text-6xl text-white",
                key: index,
              })}
              <p className="text-center text-white text-md font-bold">
                {eachTech}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div
        className={`w-full h-1/4 ${raleway.className} flex justify-evenly items-center animate-fade-up animate-ease-in`}
      >
        {MajorTools.expertise.map((eachExp, index) => (
          <div
            key={index}
            className={`w-auto h-1/2 text-7xl text-white flex flex-col justify-center items-center`}
          >
            <div
              className={`text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
            >
              {eachExp.value}
            </div>
            <div className={`text-lg font-bold`}>{eachExp.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SupportToolsContainer = () => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className="glass-effect w-full p-3 h-1/5 grid grid-cols-6 gap-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    >
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
          className={`rounded shadow-2xl text-white flex flex-col justify-evenly items-center
          `}
        >
          {getLogo({
            logoName: eachTech,
            logoStyle: "mx-auto text-white text-8xl",
            key: index,
          })}
          <p className="text-white text-black text-md">{eachTech}</p>
        </motion.div>
      ))}
    </div>
  );
};

const WhatsBrewingItems = () => {
  const scrollRef = useRef(null);
  return (
    <motion.div
      className="glass-effect flex justify-evenly w-full h-auto p-2"
      initial="hidden"
      animate="show"
      variants={container}
      viewport={{ root: scrollRef, amount: 0.5 }}
    >
      {WhatsBrewingItemsConstants.certifications.map((eachCert, index) => (
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
          key={index}
          variants={item}
          viewport={{ once: true, amount: 0.5 }}
          className={`rounded shadow-lg text-white py-4 ${
            index !== 0 && `filter grayscale`
          }`}
        >
          <Image alt={eachCert} src={eachCert} width={200} height={100} />
        </motion.div>
      ))}
    </motion.div>
  );
};

const WhatsBrewing = () => {
  return (
    <div
      className={`w-full h-1/2 text-white flex flex-col text-8xl font-bold justify-center items-center ${raleway.className}`}
    >
      <div className="py-10">
        <span className=" animate-fade-up animate-ease-in">{"</What's"}</span>
        <span className="text-blue-500 animate-fade-up animate-ease-in">
          {"Brewing/>"}
        </span>
      </div>
      <WhatsBrewingItems />
    </div>
  );
};

const ToolsInfoContainer = () => {
  return (
    <div className="w-3/4 h-full mb-10">
      <div className="w-full flex justify-center items-center my-5">
        <div
          style={{ animationDelay: "0.5s" }}
          className="flex-1 h-1 bg-white rounded"
        ></div>
        <GiMuscleUp className="text-white text-3xl ml-5 animate-fade-up animate-ease-in" />
        <p className="mx-4 text-white text-lg whitespace-nowrap animate-fade-up animate-ease-in">
          My Power Tools Stack
        </p>
        <GiMuscleUp className="text-white text-3xl mr-5 animate-fade-up animate-ease-in" />
        <div
          style={{ animationDelay: "0.5s" }}
          className="flex-1 h-1 bg-white rounded"
        ></div>
      </div>
      <MajorToolsContainer />
      <div className="w-full flex justify-center items-center mb-5">
        <div className="flex-1 h-1 bg-white rounded"></div>
        <GiMuscleFat className="text-white text-3xl ml-5 animate-fade-up animate-ease-in" />
        <p className="mx-4 text-white text-lg whitespace-nowrap animate-fade-up animate-ease-in">
          My other support stack
        </p>
        <GiMuscleFat className="text-white text-3xl mr-5 animate-fade-up animate-ease-in" />
        <div className="flex-1 h-1 bg-white rounded"></div>
      </div>
      <SupportToolsContainer />
      <WhatsBrewing />
    </div>
  );
};

export default function ToolsPage() {
  return (
    <section
      className={`h-full w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      <ToolsHeadingContainer />
      <ToolsInfoContainer />
    </section>
  );
}
