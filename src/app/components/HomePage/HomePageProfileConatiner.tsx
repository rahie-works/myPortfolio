"use client";
import { useEffect, useState } from "react";

// components
import { HomePageProfileSummaryContainer } from "./HomePageProfileSummaryConatiner";
import { HomePageProfileInfoContainer } from "./HomePageProfileInfoContainer";

// types
import {
  ProfileInfoType,
  SummaryInfoType,
} from "@/app/types/homePageContentTypes";

// utils
import { fetchHomePageData } from "@/app/utils/dbHandler/fetchHomePageData";

// icons
import { CgSpinner } from "react-icons/cg";

export const HomePageProfileContainer = () => {
  const [data, setData] = useState<{ profileInfo: ProfileInfoType | null; summaryData: SummaryInfoType | null }>({
    profileInfo: null,
    summaryData: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHomePageData({setData, setIsLoading})
  }, []);

  if (isLoading || !data.profileInfo || !data.summaryData) {
    return <CgSpinner className="ml-2 animate-spin text-6xl text-white" />;
  }

  return (
    <div className="relative w-full h-auto md:w-2/3 md:h-2/3 mt-5 animate-fade-up animate-ease-in flex flex-col md:flex-row justify-center items-center">
      <HomePageProfileInfoContainer profileInfo={data.profileInfo} />
      <HomePageProfileSummaryContainer summaryInfo={data.summaryData} />
    </div>
  );
};
