"use client";
import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";
import { TbBriefcase2, TbBriefcase2Filled } from "react-icons/tb";
import { FaRegFolderOpen, FaRegFolder } from "react-icons/fa6";
import { AiOutlineCode, AiFillCode } from "react-icons/ai";
import { MdMailOutline, MdMail } from "react-icons/md";

// constants
import {
  CAREER_PAGE,
  CONNECT_PAGE,
  HOME_PAGE,
  TOOLS_PAGE,
  WORKS_PAGE,
} from "@/app/constants/router";
import { PAGES } from "@/app/constants/enums";

const raleway = Raleway({ subsets: ["latin"] });

const TABS = [
  {
    label: PAGES.HOME,
    path: HOME_PAGE,
    icon: <BiHomeAlt2 className="text-white" />,
    activeIcon: <BiSolidHomeAlt2 className="text-blue-500" />,
  },
  {
    label: PAGES.CAREER,
    path: CAREER_PAGE,
    icon: <TbBriefcase2 className="text-white" />,
    activeIcon: <TbBriefcase2Filled className="text-blue-500" />,
  },
  {
    label: PAGES.WORKS,
    path: WORKS_PAGE,
    icon: <FaRegFolder className="text-white" />,
    activeIcon: <FaRegFolderOpen className="text-blue-500" />,
  },
  {
    label: PAGES.TOOLS,
    path: TOOLS_PAGE,
    icon: <AiOutlineCode className="text-white" />,
    activeIcon: <AiFillCode className="text-blue-500" />,
  },
  {
    label: PAGES.CONNECT,
    path: CONNECT_PAGE,
    icon: <MdMailOutline className="text-white" />,
    activeIcon: <MdMail className="text-blue-500" />,
  },
];

export default function NavigationTabs() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <div className="absolute w-screen h-full">
      <div className="flex w-full absolute z-50 top-10 left-1/2 transform -translate-x-1/2 justify-center items-center animate-fade animate-ease-in">
        <div
          className={`absolute flex flex-row justify-around w-full h-1/3 md:w-1/3 md:h-1/6  text-white text-2xl sm:text-2xl ${raleway.className}`}
        >
          {TABS.map((eachTab, index) => {
            return (
              <Link
                key={index}
                href={eachTab.path}
                prefetch={true}
                onClick={() => setActiveTab(eachTab.path)}
                className="cursor-pointer"
              >
                <div className="flex flex-col justify-center items-center">
                  {activeTab === eachTab.path
                    ? eachTab.activeIcon
                    : eachTab.icon}
                  <p className="text-sm">{eachTab.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
        {/* <div className="flex flex-row w-full h-full text-md justify-end items-center mx-10">
          <button className="p-3 text-white rounded-lg border-[2px] 
            border-white hover:bg-white hover:text-black transform-all duration-500">Get My Resume</button>
        </div> */}
      </div>
    </div>
  );
}
