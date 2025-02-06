import axios from "axios";

// types
import {ExternalLinks} from "@/app/types/homePageContentTypes";

// constants
import { HOMEPAGE_DATA_URL } from "@/app/constants/dataBaseRoutes";
import { HOMEPAGE_DB_IDS } from "@/app/constants/enums";

export const fetchExternalLinks = async ({
    setData,
    setIsLoading,
}:{
    setData: React.Dispatch<React.SetStateAction<{ externalLinks: ExternalLinks | null }>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    try {
        const response = await axios.get(HOMEPAGE_DATA_URL);
        setData({
            externalLinks:
            response.data.find(
              (item: ExternalLinks) => item.id === HOMEPAGE_DB_IDS.EXTERRNAL_LINKS_ID
            ) || null,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
}