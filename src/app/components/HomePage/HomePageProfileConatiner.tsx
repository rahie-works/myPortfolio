"use client";

import { useEffect, useState } from "react";
import { HomePageProfileSummaryContainer } from "./HomePageProfileSummaryConatiner";
import { HomePageProfileInfoContainer } from "./HomePageProfileInfoContainer";
import axios from "axios";
import {
  ProfileInfoType,
  SummaryInfoType,
} from "@/app/types/homePageContentTypes";
import { HOMEPAGE_DATA_URL } from "@/app/constants/dataBaseRoutes";
import { HOMEPAGE_DB_IDS } from "@/app/constants/homepage";
import { CgSpinner } from "react-icons/cg";

export const HomePageProfileContainer = () => {
  const [data, setData] = useState({
    profileInfo: null,
    summaryData: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(HOMEPAGE_DATA_URL)
      .then((res) => {
        setData(() => ({
          profileInfo:
            res.data.find(
              (item: ProfileInfoType) =>
                item.id === HOMEPAGE_DB_IDS.PROFILE_INFO_ID
            ) || null,
          summaryData:
            res.data.find(
              (item: SummaryInfoType) =>
                item.id === HOMEPAGE_DB_IDS.SUMMARY_INFO_ID
            ) || null,
        }));
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !data.profileInfo || !data.summaryData) {
    return <CgSpinner className="ml-2 animate-spin text-6xl text-white" />;
  }

  return (
    <div className="relative w-full h-auto md:w-2/3 md:h-2/3 mt-5 animate-fade-up animate-ease-in flex flex-col md:flex-row justify-center items-center">
      <HomePageProfileInfoContainer profileInfo={data.profileInfo} />
      <HomePageProfileSummaryContainer summaryInfo={data.summaryData} />
    </div>
  );
};
