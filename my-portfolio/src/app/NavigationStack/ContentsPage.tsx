"use-client";
import React, { ReactElement } from "react";
import AboutContent from "../AboutPage/AboutPage";
import HomePageContents from "../HomePage/HomePageContents";

export default function ContentsPage({ tab }: { tab: string }) {
  const [content, setContent] = React.useState<ReactElement>();

  const showContents = (tab: string) => {
    switch (tab) {
      case "Careers":
        return <AboutContent />;
      case "Project":
        return <AboutContent />;
      case "About":
        return <AboutContent />;
      default:
        return <HomePageContents />;
    }
  };

  React.useEffect(() => {
    setContent(showContents(tab));
  }, [tab]);

  return <div className="w-full">{content}</div>;
}
