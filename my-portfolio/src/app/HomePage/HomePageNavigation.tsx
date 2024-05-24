"use client";

import React from "react";
import NavigationTabs from "../NavigationStack/NavigationTabs";

export default function HomePageNavigation(props: any) {
  const selectedtab = (tab: string) => {
    props.tab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-center items-center h-1/6 animate-fade animate-ease-in">
        <NavigationTabs tab={selectedtab} />
      </div>
    </div>
  );
}
