"use-client";
import React from "react";
import HomePageContents from "../HomePage/HomePage";
import CareerContents from "../CareerPage/CareerContents";
import HomePageNavigation from "../HomePage/HomePageNavigation";
import ProjectsPages from "../Projects/ProjectsPage";
import ToolsPage from "@/app/Tools/ToolsPage";
import BlogPage from "../Blog/BlogPage";
import AboutPage from "../AboutPage/AboutPage";

export default function ContentsPage() {
  const [contentPage, setContentPage] = React.useState(<HomePageContents />);

  const selectedTab = (tab: string) => {
    switch (tab) {
      case "Career":
        setContentPage(<CareerContents />);
        return;
      case "Projects":
        setContentPage(<ProjectsPages />);
        return;
      case "Tools":
        setContentPage(<ToolsPage />);
        return;
      case "Blog":
        setContentPage(<BlogPage />);
        return;
      case "About":
        setContentPage(<AboutPage />);
        return;
      default:
        setContentPage(<HomePageContents />);
        return;
    }
  };

  return (
    <div className="absolute w-full h-full">
      <HomePageNavigation tab={selectedTab} />
      {contentPage}
    </div>
  );
}
