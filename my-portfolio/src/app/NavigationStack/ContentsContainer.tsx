"use-client";
import React from "react";
import HomePageContents from "../HomePage/HomePage";
import CareerContents from "../CareerPage/CareerContents";
import ProjectsPages from "../Projects/ProjectsPage";
import ToolsPage from "@/app/Tools/ToolsPage";
import BlogPage from "../Blog/BlogPage";
import NavigationTabs from "./NavigationTabs";
import ConnectPage from "../ConnectPage/ConnectPage";

export default function ContentsContainer() {
  const [contentPage, setContentPage] = React.useState(<HomePageContents />);

  const selectedTab = (tab: string) => {
    switch (tab) {
      case "Career":
        setContentPage(<CareerContents />);
        return;
      case "Works":
        setContentPage(<ProjectsPages />);
        return;
      case "Tools":
        setContentPage(<ToolsPage />);
        return;
      case "Blog":
        setContentPage(<BlogPage />);
        return;
      case "Connect":
        setContentPage(<ConnectPage />);
        return;
      default:
        setContentPage(<HomePageContents />);
        return;
    }
  };

  return (
    <div className="absolute w-full h-full">
      <div className="flex w-full absolute z-50 top-10 left-1/2 transform -translate-x-1/2 justify-center items-center animate-fade animate-ease-in">
        <NavigationTabs tab={selectedTab} />
      </div>
      {contentPage}
    </div>
  );
}
