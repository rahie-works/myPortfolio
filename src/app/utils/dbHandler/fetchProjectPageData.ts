import axios from "axios";

// types
import { ProjectDataType } from "@/app/types/projectData";

// constants
import { PROJECTPAGE_DATA_URL } from "@/app/constants/dataBaseRoutes";

export const fetchProjectPageData = async ({
    setData,
    setIsLoading,
}:{
    setData: React.Dispatch<React.SetStateAction<{
        majorProjectsData: ProjectDataType[] | null;
        projectTitles: Array<string> | null;
        archivedText: string | null; 
    }>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    try {
        const response = await axios.get(PROJECTPAGE_DATA_URL);
        setData({
            majorProjectsData: response.data[0]?.mainProjects,
            projectTitles: response.data[0]?.projectTitles,
            archivedText: response.data[0]?.archivedText
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
}