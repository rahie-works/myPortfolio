"use client";
import Image from "next/image";
import React from "react";
import CareerCard, { CareerCardType } from "./CareerCard";
import { CAREERS } from "./CareerJourneyConstants";

const CAREER_THEME = {
  dark: {
    backgroundColor: "black",
  },
  apply: {
    backgroundColor: "#005792",
  },
  walletifai: {
    backgroundColor: "#1f36fa",
  },
};

export default function CareerPage({ theme }: { theme: boolean }) {
  return (
    <div className="w-full h-auto">
      {/* {CAREERS.map((eachCard: CareerCardType) => {
        return (
          <CareerCard
            background={eachCard.background}
            company={eachCard.company}
            style={eachCard.style}
            source={eachCard.source}
            alt={eachCard.alt}
            startYear={eachCard.startYear}
            endYear={eachCard.endYear}
            title={eachCard.title}
          />
        );
      })} */}
      <h1 className="text-lg sm:text-7xl font-subtitles text-grey-500 text-center items-center p-10 underline">
        My Career Journey
      </h1>
      <div
        className="w-full text-white mt-20"
        style={{ backgroundColor: "white" }}
      >
        <div
          className="w-full text-white sticky top-0 items-center justify-center"
          style={{ backgroundColor: "white" }}
        >
          <div className="w-full flex flex-col items-center justify-center p-5">
            <h1 className="text-lg sm:text-4xl font-subtitles text-black">
              {CAREERS[0].title} since 2022
            </h1>
            <Image
              src={CAREERS[0].source}
              alt={CAREERS[0].alt}
              width={CAREERS[0].style.width}
              height={CAREERS[0].style.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
