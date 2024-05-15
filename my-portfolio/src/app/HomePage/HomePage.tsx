"use client";
import React from "react";
import HomePageBackground from "./HomePageBackground";
import HomePageContents from "./HomePageContents";
import HomePageNavigation, { THEMES } from "./HomePageNavigation";
import HomePageScrollAction from "./HomePageScrollAction";
import { Theme } from "./types";

export default function HomePage({
  setGlobalTheme,
}: {
  setGlobalTheme: Function;
}) {
  const [theme, setTheme] = React.useState(true);
  const [showButton, setShowButton] = React.useState(true);

  const updateTheme = (theme: Theme) => {
    setGlobalTheme(theme);
    setTheme(theme.icon === THEMES.DARK.icon);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowButton(currentScrollPos === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <HomePageBackground theme={theme} />
      <HomePageNavigation themeSetter={updateTheme} />
      <HomePageContents />
      <HomePageScrollAction showButton={showButton} />
    </div>
  );
}
