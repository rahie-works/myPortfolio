import { HomePageProfileSummaryContainer } from "./HomePageProfileSummaryConatiner";
import { HomePageProfileInfoContainer } from "./HomePageProfileInfoContainer";

export const HomePageProfileContainer = () => {
  return (
    <div className="relative w-full h-full md:w-2/3 md:h-2/3 mt-5 animate-fade-up animate-ease-in flex flex-col md:flex-row justify-center items-center">
      <HomePageProfileInfoContainer />
      <HomePageProfileSummaryContainer />
    </div>
  );
};
