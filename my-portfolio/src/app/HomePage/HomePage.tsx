"use client";
import React from "react";
import HomePageBackground from "./HomePageBackground";
import HomePageContents from "./HomePageContents";
import HomePageNavigation, { THEMES } from "./HomePageNavigation";
import HomePageScrollAction from "./HomePageScrollAction";
import { Theme } from "./types";

export default function HomePage() {
  const [theme, setTheme] = React.useState(true);

  const updateTheme = (theme: Theme) => {
    setTheme(theme.icon === THEMES.DARK.icon);
  };
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <HomePageBackground theme={theme} />
      <HomePageNavigation themeSetter={updateTheme} />
      <HomePageContents />
      <HomePageScrollAction />
    </div>
  );
}
