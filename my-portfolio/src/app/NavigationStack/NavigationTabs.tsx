import React, { act, useState } from "react";
import { Raleway } from "next/font/google";
import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";
import { TbBriefcase2, TbBriefcase2Filled } from "react-icons/tb";
import { FaRegFolderOpen, FaRegFolder } from "react-icons/fa6";
import { MdOutlineChat, MdMarkUnreadChatAlt } from "react-icons/md";
import { AiOutlineCode, AiFillCode } from "react-icons/ai";
import { MdMailOutline, MdMail } from "react-icons/md";

const raleway = Raleway({ subsets: ["latin"] });
const TABS = ["Home", "Career", "Projects", "Tools", "Connect"];

export default function NavigationTabs(props: any) {
  const [activeTab, setActiveTab] = useState("Home");
  const pageRef = React.useRef<HTMLDivElement>(null);

  const tabClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    const selectedTab = event.currentTarget.id;
    setActiveTab(selectedTab);
    props.tab(selectedTab);
  };

  const getIcon = (tab: string) => {
    switch (tab) {
      case "Home":
        return activeTab === "Home" ? (
          <BiSolidHomeAlt2 className="text-blue-500" />
        ) : (
          <BiHomeAlt2 />
        );
      case "Career":
        return activeTab === "Career" ? (
          <TbBriefcase2Filled className="text-blue-500" />
        ) : (
          <TbBriefcase2 />
        );
      case "Projects":
        return activeTab === "Projects" ? (
          <FaRegFolderOpen className="text-blue-500" />
        ) : (
          <FaRegFolder />
        );
      case "Tools":
        return activeTab === "Tools" ? (
          <AiFillCode className="text-blue-500" />
        ) : (
          <AiOutlineCode />
        );
      case "Blog":
        return activeTab === "Blog" ? (
          <MdMarkUnreadChatAlt className="text-blue-500" />
        ) : (
          <MdOutlineChat />
        );
      case "Connect":
        return activeTab === "Connect" ? (
          <MdMail className="text-blue-500" />
        ) : (
          <MdMailOutline />
        );
    }
  };

  return (
    <div
      ref={pageRef}
      className={`absolute flex flex-row justify-around w-1/2 sm:w-1/3 h-1/6 text-white text-2xl sm:text-2xl ${raleway.className}`}
    >
      {TABS.map((eachTab, index) => {
        return (
          <div
            onClick={(event) => tabClicked(event)}
            id={eachTab}
            key={index}
            className="cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center">
              {getIcon(eachTab)}
              <p className="text-sm">{eachTab}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
