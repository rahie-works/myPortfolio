"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

// icons
import { ImPower } from "react-icons/im";
import { MdHandyman } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";

// utils
import { getLogo } from "../../utils/GetLogoUtil";
import { fetchToolsPageData } from "@/app/utils/dbHandler/fetchToolsPageData";

// types
import { CertificationsType, HeadingTitleType, ToolsType, WhatsBrewingType } from "@/app/types/toolStore";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const raleway = Raleway({ subsets: ["latin"] });

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ToolsHeadingContainer = ({title}:{title: HeadingTitleType | null}) => {
  return (
    <div
      className={`w-full h-full text-4xl md:text-8xl md:px-32 pt-40 pb-16 text-white flex font-bold ${raleway.className} animate-fade-up animate-ease-in items-center justify-center`}
    >
      <span className={`${raleway.className} animate-fade-up animate-ease-in`}>
        {title?.title[0]}
      </span>
      <span className="text-blue-500 animate-fade-up animate-ease-in">
      {title?.title[1]}
      </span>
    </div>
  );
};

const MajorToolsContainer = ({majorToolsContents}:{majorToolsContents : ToolsType | null}) => {
  return (
    <div className="w-full h-3/4">
      <div className="h-1/2 flex justify-center">
        <motion.div
          className={`w-full md:w-3/4 h-full 
          grid grid-cols-3 py-5 md:grid-cols-5 gap-4 justify-center md:py-4 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl p-3`}
          initial="hidden"
          animate="show"
          variants={container}
        >
          {majorToolsContents?.tech.map((eachTech, index) => (
            <motion.div
              key={index}
              className="rounded shadow-2xl flex flex-col justify-evenly items-center"
              variants={item}
            >
              {getLogo({
                logoName: eachTech,
                logoStyle: "md:mx-auto text-4xl md:text-6xl text-white",
                key: index,
              })}
              <p className="text-center text-white text-xs md:text-md md:font-bold">
                {eachTech}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div
        className={`w-full h-1/2 my-5 md:h-1/4 ${raleway.className} grid grid-cols-2 gap-4 md:flex justify-center items-center animate-fade-up animate-ease-in`}
      >
        {majorToolsContents?.expertise.map((eachExp, index) => (
          <div
            key={index}
            className={`w-auto md:w-full h-1/2 text-white flex md:flex-col justify-center items-center`}
          >
            <div
              className={`text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
            >
              {eachExp.value}
            </div>
            <div className={`text-sm md:text-lg md:font-bold ml-2 md:ml-0`}>
              {eachExp.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SupportToolsContainer = ({supportToolsData}:{supportToolsData: ToolsType | null}) => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className="w-full p-3 h-1/3 md:h-1/5 grid md:grid-cols-5 grid-cols-3 gap-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl"
    >
      {supportToolsData?.tech.map((eachTech, index) => (
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
            logoStyle: "mx-auto text-white text-4xl md:text-8xl",
            key: index,
          })}
          <p className="text-white text-black text-md">{eachTech}</p>
        </motion.div>
      ))}
    </div>
  );
};

const WhatsBrewingItems = ({certifications}:{certifications: CertificationsType[] | undefined}) => {
  const scrollRef = useRef(null);
  return (
    <motion.div
      className="grid grid-cols-2 gap-5 md:flex justify-evenly w-full h-1/2 md:h-auto p-2"
      initial="hidden"
      animate="show"
      variants={container}
      viewport={{ root: scrollRef, amount: 0.5 }}
    >
      {certifications?.map((eachCert, index) => (
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
          key={index}
          variants={item}
          viewport={{ once: true, amount: 0.5 }}
          className="rounded shadow-lg text-white py-4"
        >
          <motion.div
            animate={
              eachCert.status === "brewing"
                ? {
                    opacity: [0.2, 0.5, 1, 0.5, 0.2],
                  }
                : ""
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className={`${eachCert.status === "upcoming" && `opacity-25`}`}
          >
            <Image
              alt={eachCert.name}
              src={eachCert.logo}
              width={200}
              height={100}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const WhatsBrewing = ({whatsBrewingContent}:{whatsBrewingContent: WhatsBrewingType | null}) => {
  return (
    <div
      className={`w-full pt-10 md:pt-0 h-2/3 md:h-full text-white flex flex-col text-3xl md:text-8xl font-bold justify-center items-center ${raleway.className}`}
    >
      <div className="py-10">
        <span className=" animate-fade-up animate-ease-in">{whatsBrewingContent?.title[0]}</span>
        <span className="text-blue-500 animate-fade-up animate-ease-in">
          {whatsBrewingContent?.title[1]}
        </span>
      </div>
      <WhatsBrewingItems certifications={whatsBrewingContent?.certifications}/>
    </div>
  );
};

const ToolsInfoContainer = ({
  dividerTitle,
  majorToolsContents,
  supportToolsData,
  whatsBrewingContent
}:{
  dividerTitle: HeadingTitleType | null;
  majorToolsContents: ToolsType | null;
  supportToolsData: ToolsType | null;
  whatsBrewingContent: WhatsBrewingType | null;
}) => {
  return (
    <div className="w-3/4 h-full mb-10">
      <div className="w-full flex justify-center items-center my-10">
        <div
          style={{ animationDelay: "0.5s" }}
          className="flex-1 h-1 bg-white rounded"
        ></div>
        <ImPower className="text-white text-xl md:text-3xl md:ml-5 animate-fade-up animate-ease-in" />
        <p className="mx-2 md:mx-4 text-white text-lg whitespace-nowrap animate-fade-up animate-ease-in">
          {dividerTitle?.title[0]}
        </p>
        <ImPower className="text-white text-xl md:text-3xl md:mr-5 animate-fade-up animate-ease-in" />
        <div
          style={{ animationDelay: "0.5s" }}
          className="flex-1 h-1 bg-white rounded"
        ></div>
      </div>
      <MajorToolsContainer majorToolsContents={majorToolsContents}/>
      <div className="w-full flex justify-center items-center my-10">
        <div className="flex-1 h-1 bg-white rounded"></div>
        <MdHandyman className="text-white text-xl md:text-3xl md:ml-5 animate-fade-up animate-ease-in" />
        <p className="mx-2 md:mx-4 text-white text-lg whitespace-nowrap animate-fade-up animate-ease-in">
        {dividerTitle?.title[1]}
        </p>
        <MdHandyman className="text-white text-xl md:text-3xl md:mr-5 animate-fade-up animate-ease-in" />
        <div className="flex-1 h-1 bg-white rounded"></div>
      </div>
      <SupportToolsContainer supportToolsData={supportToolsData}/>
      <WhatsBrewing whatsBrewingContent={whatsBrewingContent}/>
    </div>
  );
};

export default function ToolsPage() {

  const [data, setData] = useState<{
    majorToolsData: ToolsType | null; 
    supportToolsData: ToolsType | null; 
    toolsDividerTitle: HeadingTitleType | null;
    toolsPageHeadings:  HeadingTitleType | null;
    whatsBrewingContent: WhatsBrewingType | null;
  }>({
    majorToolsData: null,
    supportToolsData: null,
    toolsDividerTitle: null,
    toolsPageHeadings: null,
    whatsBrewingContent: null,
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchToolsPageData({
      setData,
      setIsLoading,
    })
  },[])

  const checkDataCaptured = () => Object.values(data).some((value) => value === null)

  return (
    <section
      className={`relative h-screen w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      {(isLoading || checkDataCaptured()) ?
        <div className="flex bg-black h-screen w-full items-center justify-center">
          <CgSpinner className="ml-2 animate-spin text-6xl text-white" /> 
        </div> :
        <>
          <ToolsHeadingContainer title={data.toolsPageHeadings}/>
          <ToolsInfoContainer 
            dividerTitle={data.toolsDividerTitle}
            majorToolsContents={data.majorToolsData}
            supportToolsData={data.supportToolsData}
            whatsBrewingContent={data.whatsBrewingContent}
          />
        </>
      }
    </section>
  );
}
