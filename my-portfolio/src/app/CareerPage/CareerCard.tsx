"use client";
import Image from "next/image";
import { APPLY_RESP } from "./CareerJourneyConstants";
import React from "react";
type CareerStyleType = {
  backgroundColor: string;
  width: number;
  height: number;
};

export type CareerCardType = {
  background: string;
  company: string;
  title: string;
  style: CareerStyleType;
  source: string;
  alt: string;
  startYear: number;
  endYear: number | null;
};
export default function CareerCard({
  background,
  style,
  source,
  alt,
  startYear,
  endYear,
  title,
}: CareerCardType) {
  const divRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when the element is in view
          entry.target.classList.add("animate-fade-down");
          entry.target.classList.add("animate-ease-linear");
        } else {
          // Remove animation class when the element is not in view
          entry.target.classList.remove("animate-fade-down");
          entry.target.classList.remove("animate-ease-linear");
        }
      });
    });

    // Start observing the div when the component mounts
    if (divRef.current) {
      observer.observe(divRef.current);
    }

    // Clean up observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="w-full text-white"
      style={{ backgroundColor: style.backgroundColor }}
      ref={divRef}
    >
      <div
        className="w-full text-white sticky top-0 items-center justify-center"
        style={{ backgroundColor: style.backgroundColor }}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src={source}
            alt={alt}
            width={style.width}
            height={style.height}
          />
          <h1 className="text-lg sm:text-5xl font-name">{title}</h1>
        </div>
      </div>
      {/* <div className="text-8xl w-full h-auto bg-red text-center font-subtitles">
        {APPLY_RESP.map((eachDesc) => {
          return <h2 className="text-sm">{eachDesc}</h2>;
        })}
      </div> */}
    </div>
  );
}
