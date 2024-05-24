import React from "react";

const TABS = ["Home", "Career", "Projects", "About"];

export default function NavigationTabs(props: any) {
  const pageRef = React.useRef<HTMLDivElement>(null);

  const tabClicked = (e: any) => {
    if (pageRef.current) {
      pageRef.current.querySelectorAll("div").forEach((element) => {
        if (element.innerHTML === e.target.innerHTML) {
          element.classList.add("underline");
        } else {
          element.classList.remove("underline");
        }
      });
      props.tab(e.target.innerHTML);
    }
  };
  return (
    <div
      ref={pageRef}
      onClick={(e) => tabClicked(e)}
      className="flex flex-row justify-around w-1/2 sm:w-1/3 h-1/6 text-white text-2xl sm:text-2xl font-subtitles"
    >
      {TABS.map((eachTab, index) => {
        return (
          <div key={index} className={eachTab === "Home" ? "underline" : ""}>
            {eachTab}
          </div>
        );
      })}
    </div>
  );
}
