import axios from "axios";

// types
import {
    ProfileInfoType,
    SummaryInfoType,
  } from "@/app/types/homePageContentTypes";

// constants
import { HOMEPAGE_DATA_URL } from "@/app/constants/dataBaseRoutes";
import { HOMEPAGE_DB_IDS } from "@/app/constants/enums";

export const fetchHomePageData = async ({
    setData,
    setIsLoading,
}:{
    setData: React.Dispatch<React.SetStateAction<{ profileInfo: ProfileInfoType | null; summaryData: SummaryInfoType | null }>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    try {
        const response = await axios.get(HOMEPAGE_DATA_URL);
        
        setData({
          profileInfo:
            response.data.find(
              (item: ProfileInfoType) => item.id === HOMEPAGE_DB_IDS.PROFILE_INFO_ID
            ) || null,
          summaryData:
            response.data.find(
              (item: SummaryInfoType) => item.id === HOMEPAGE_DB_IDS.SUMMARY_INFO_ID
            ) || null,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
}