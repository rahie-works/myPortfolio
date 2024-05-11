"use client";

import React from "react";

export const THEMES = {
  LIGHT: {
    icon: "partly_cloudy_night",
    style: {
      color: "white",
      cursor: "pointer",
    },
  },
  DARK: {
    icon: "wb_sunny",
    style: {
      color: "#F19E39",
      cursor: "pointer",
    },
  },
};

export default function HomePageNavigation({
  themeSetter,
}: {
  themeSetter: Function;
}) {
  const [theme, setTheme] = React.useState(THEMES.DARK);

  const clicked = () => {
    if (theme.icon === "partly_cloudy_night") {
      setTheme(THEMES.DARK);
      themeSetter(THEMES.DARK);
    } else {
      setTheme(THEMES.LIGHT);
      themeSetter(THEMES.LIGHT);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row absolute top-0 left-1/2 transform -translate-x-1/2 justify-between items-center bg-gradient-to-b from-gray-900 to-white-500 w-full h-1/6 pl-10 sm:pl-20 animate-fade animate-ease-in">
        <div className="flex flex-row justify-around w-1/2 sm:w-1/3 h-1/6">
          <h2 className="text-md sm:text-xl text-white font-subtitles">
            About
          </h2>
          <h2 className="text-md sm:text-xl text-white font-subtitles">
            Contact
          </h2>
        </div>
        <div className="flex flex-row justify-around w-1/3 h-1/6">
          <span
            className="material-symbols-outlined"
            style={theme.style}
            onClick={clicked}
          >
            {theme.icon}
          </span>
        </div>
      </div>
    </div>
  );
}
