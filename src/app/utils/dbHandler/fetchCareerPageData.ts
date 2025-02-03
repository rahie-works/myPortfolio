import React from "react";
import axios from "axios";

// types
import { ExpDataType, ExperienceLargedataType } from "@/app/types/experienceDataType";
import { CAREERPAGE_DATA_URL } from "@/app/constants/dataBaseRoutes";
import { CAREER_DB_IDS } from "@/app/constants/enums";

export const fetchCareerPageData = async ({
    setData,
    setIsLoading,
}: {
    setData: React.Dispatch<React.SetStateAction<{ expLargeData: ExperienceLargedataType | null; expData: ExpDataType | null }>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    try {
        const response = await axios.get(CAREERPAGE_DATA_URL);
        setData({
            expLargeData:
              response.data.find(
                (item: ExperienceLargedataType) => item.id === CAREER_DB_IDS.EXP_LARGE_DATA_ID
              ) || null,
              expData:
              response.data.find(
                (item: ExpDataType) => item.id === CAREER_DB_IDS.EXP_DATA_ID
              ) || null,
          });

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        setIsLoading(false);
    }
}