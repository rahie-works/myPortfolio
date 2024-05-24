"use client";
import React from "react";
import HomePageNavigation from "./HomePageNavigation";
import ContentsPage from "../NavigationStack/ContentsPage";
import ContentsBackground from "../NavigationStack/ContentsBackground";

export default function HomePage() {
  const [backgroundVideo, setBackgroundVideo] =
    React.useState("/night_sky.mp4");
  const [tab, setTab] = React.useState("Home");

  const selectedTab = (tab: string) => {
    switch (tab) {
      case "About":
        setBackgroundVideo("");
        setTab("About");
        break;
      case "Career":
        setBackgroundVideo("/ocean_waves.mp4");
        setTab("Career");
        break;
      case "Projects":
        setBackgroundVideo("/ocean_waves.mp4");
        setTab("Projects");
        break;
      default:
        setBackgroundVideo("/night_sky.mp4");
        setTab("Home");
        break;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <ContentsBackground background={backgroundVideo} />
      <ContentsPage tab={tab} />
      <HomePageNavigation tab={selectedTab} />
    </div>
  );
}
