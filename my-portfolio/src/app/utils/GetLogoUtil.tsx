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
  key,
}: {
  logoName: string;
  logoStyle?: string;
  key?: number;
}) => {
  const className = logoStyle || "text-white text-4xl cursor-pointer";
  const classNameNode = logoStyle || "text-white text-6xl cursor-pointer";
  if (logoName) {
    switch (logoName.toLocaleLowerCase()) {
      case "react-native":
      case "react":
        return <FaReact key={key} title={logoName} className={className} />;
      case "android":
        return (
          <IoLogoAndroid key={key} title={logoName} className={className} />
        );
      case "ios":
        return <FaApple key={key} title={logoName} className={className} />;
      case "contentful":
        return (
          <SiContentful key={key} title={logoName} className={className} />
        );
      case "javascript":
        return <FaJsSquare key={key} title={logoName} className={className} />;
      case "github":
        return <FaGithub key={key} title={logoName} className={className} />;
      case "swift":
        return <FaSwift key={key} title={logoName} className={className} />;
      case "python":
        return <FaPython key={key} title={logoName} className={className} />;
      case "aws":
        return <FaAws key={key} title={logoName} className={className} />;
      case "gitlab":
        return <FaGitlab key={key} title={logoName} className={className} />;
      case "REST":
        return <TbApi key={key} title={logoName} className={className} />;
      case "typescript":
        return (
          <SiTypescript key={key} title={logoName} className={className} />
        );
      case "nextjs":
        return (
          <RiNextjsFill key={key} title={logoName} className={className} />
        );
      case "sap":
        return <SiSap key={key} title={logoName} className={className} />;
      case "docker":
        return <FaDocker key={key} title={logoName} className={className} />;
      case "tailwind":
        return (
          <SiTailwindcss key={key} title={logoName} className={className} />
        );
      case "figma":
        return <FaFigma key={key} title={logoName} className={className} />;
      case "jira":
        return <SiJira key={key} title={logoName} className={className} />;
      case "node":
        return <FaNode key={key} title={logoName} className={classNameNode} />;
      case "java":
        return <FaJava key={key} title={logoName} className={className} />;
      case "c":
        return <SiC key={key} title={logoName} className={className} />;
      case "sql":
        return (
          <TbFileTypeSql key={key} title={logoName} className={className} />
        );
      case "firebase":
        return (
          <RiFirebaseFill key={key} title={logoName} className={className} />
        );
      case "css3":
        return <FaCss3 key={key} title={logoName} className={className} />;
      case "html5":
        return <FaHtml5 key={key} title={logoName} className={className} />;
    }
  }
};
