import { HomePageProfileSummaryContainer } from "./HomePageProfileSummaryConatiner";
import { HomePageProfileInfoContainer } from "./HomePageProfileInfoContainer";

export const HomePageProfileContainer = () => {
  return (
    <div className="relative w-2/3 h-2/3 mt-5 animate-fade-up animate-ease-in flex justify-center items-center">
      <HomePageProfileInfoContainer />
      <HomePageProfileSummaryContainer />
    </div>
  );
};
