"use client";
import React from "react";
import CareerPage from "./CareerPage/CareerPage";
import HomePage from "./HomePage/HomePage";
import { Theme } from "./HomePage/types";
import { THEMES } from "./HomePage/HomePageNavigation";

export default function Home() {
  const [theme, setTheme] = React.useState(true);

  const updateTheme = (theme: Theme) => {
    setTheme(theme.icon === THEMES.DARK.icon);
  };

  return (
    <>
      <HomePage setGlobalTheme={updateTheme} />
      <CareerPage theme={theme} />
    </>
  );
}
