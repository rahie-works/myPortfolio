"use client";

import React from "react";
import NavigationTabs from "../NavigationStack/NavigationTabs";

export default function HomePageNavigation(props: any) {
  const selectedtab = (tab: string) => {
    props.tab(tab);
  };

  return (
    <div className="flex w-full absolute z-50 top-10 left-1/2 transform -translate-x-1/2 justify-center items-center animate-fade animate-ease-in">
      <NavigationTabs tab={selectedtab} />
    </div>
  );
}
