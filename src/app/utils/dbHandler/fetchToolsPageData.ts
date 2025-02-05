import React from "react";
import axios from "axios";

// constants
import {TOOLSPAGE_DATA_URL } from "@/app/constants/dataBaseRoutes";
import {TOOLSPAGE_DB_IDS } from "@/app/constants/enums";

// types
import { HeadingTitleType, ToolsType, WhatsBrewingType } from "@/app/types/toolStore";

export const fetchToolsPageData = async ({
    setData,
    setIsLoading,
}: {
    setData: React.Dispatch<React.SetStateAction<{ 
        majorToolsData: ToolsType | null; 
        supportToolsData: ToolsType | null; 
        toolsDividerTitle: HeadingTitleType | null;
        toolsPageHeadings: HeadingTitleType | null;
        whatsBrewingContent: WhatsBrewingType | null;
    }>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    try {
        const response = await axios.get(TOOLSPAGE_DATA_URL);
        setData({
            majorToolsData:
              response.data.find(
                (item: ToolsType) => item.id === TOOLSPAGE_DB_IDS.MAJORTOOLS_CONTAINER_ID
              ) || null,
              supportToolsData:
              response.data.find(
                (item: ToolsType) => item.id === TOOLSPAGE_DB_IDS.MINORTOOLS_CONTAINER_ID
              ) || null,
              toolsDividerTitle:
              response.data.find(
                (item: HeadingTitleType) => item.id === TOOLSPAGE_DB_IDS.TOOLSINFO_DIVIDER_ID
              ) || null,
              toolsPageHeadings:
              response.data.find(
                (item: HeadingTitleType) => item.id === TOOLSPAGE_DB_IDS.TOOLSPAGE_HEADING_CONTENTS_ID
              ) || null,
              whatsBrewingContent:
              response.data.find(
                (item: WhatsBrewingType) => item.id === TOOLSPAGE_DB_IDS.WHATS_BREWING_CONTAINER
              ) || null,
          });

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        setIsLoading(false);
    }
}