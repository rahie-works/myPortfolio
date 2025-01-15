import React from "react";
import {
  FaReact,
  FaApple,
  FaJsSquare,
  FaGithub,
  FaSwift,
  FaPython,
  FaAws,
  FaGitlab,
  FaDocker,
  FaFigma,
  FaJava,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { TbApi, TbFileTypeSql } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import {
  SiContentful,
  SiTypescript,
  SiSap,
  SiTailwindcss,
  SiJira,
  SiC,
} from "react-icons/si";
import { RiNextjsFill, RiFirebaseFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";

export const getLogo = ({
  logoName,
  logoStyle,
}: {
  logoName: string;
  logoStyle?: string;
}) => {
  const className = logoStyle || "text-white text-4xl cursor-pointer";
  const classNameNode = logoStyle || "text-white text-6xl cursor-pointer";
  switch (logoName.toLocaleLowerCase()) {
    case "react-native":
    case "react":
      return <FaReact title={logoName} className={className} />;
    case "android":
      return <IoLogoAndroid title={logoName} className={className} />;
    case "ios":
      return <FaApple title={logoName} className={className} />;
    case "contentful":
      return <SiContentful title={logoName} className={className} />;
    case "javascript":
      return <FaJsSquare title={logoName} className={className} />;
    case "github":
      return <FaGithub title={logoName} className={className} />;
    case "swift":
      return <FaSwift title={logoName} className={className} />;
    case "python":
      return <FaPython title={logoName} className={className} />;
    case "aws":
      return <FaAws title={logoName} className={className} />;
    case "gitlab":
      return <FaGitlab title={logoName} className={className} />;
    case "REST":
      return <TbApi title={logoName} className={className} />;
    case "typescript":
      return <SiTypescript title={logoName} className={className} />;
    case "nextjs":
      return <RiNextjsFill title={logoName} className={className} />;
    case "sap":
      return <SiSap title={logoName} className={className} />;
    case "docker":
      return <FaDocker title={logoName} className={className} />;
    case "tailwind":
      return <SiTailwindcss title={logoName} className={className} />;
    case "figma":
      return <FaFigma title={logoName} className={className} />;
    case "jira":
      return <SiJira title={logoName} className={className} />;
    case "node":
      return <FaNode title={logoName} className={classNameNode} />;
    case "java":
      return <FaJava title={logoName} className={className} />;
    case "c":
      return <SiC title={logoName} className={className} />;
    case "sql":
      return <TbFileTypeSql title={logoName} className={className} />;
    case "firebase":
      return <RiFirebaseFill title={logoName} className={className} />;
    case "css3":
      return <FaCss3 title={logoName} className={className} />;
    case "html5":
      return <FaHtml5 title={logoName} className={className} />;
  }
};
