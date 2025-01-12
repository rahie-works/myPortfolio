import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { HomePageProfileSummaryContainer } from "./HomePageProfileSummaryConatiner";

const HomePageProfileInfoContainer = () => {
  return (
    <div className="w-1/4 h-full flex flex-col bg-gradient-to-b from-transparent to-gray-900 shadow-lg rounded-lg animate-fade-up animate-ease-in justify-center items-center">
      <img
        src="/me.png"
        className="rounded-xl"
        alt="profile_photo"
        style={{ width: "60%" }}
      />
      <p className="text-white text-2xl mt-5">Raheesh Muhamed</p>
      <div className="w-full h-1/2 flex flex-col items-center justify-around">
        <div className="text-white text-lg align-center flex flex-col items-center">
          <p className="text-white text-sm">Full Stack Software Engineer</p>
          <p className="text-sm">Ontario, CA</p>
        </div>
        <div className="w-full flex justify-center gap-5">
          <FaLinkedin className="text-blue-700 text-2xl" />
          <FaGithub className="text-white text-2xl" />
          <FaInstagram className="text-pink-700 text-2xl" />
          <FaStackOverflow className="text-red-500 text-2xl" />
        </div>
        <button className="border-2 border-blue-500 text-white text-xs p-2 rounded-lg cursor-pointer">
          Lets Connect
        </button>
      </div>
    </div>
  );
};

export const HomePageProfileContainer = () => {
  return (
    <div className="relative w-2/3 h-2/3 mt-10 animate-fade-up animate-ease-in flex justify-center items-center">
      <HomePageProfileInfoContainer />
      <HomePageProfileSummaryContainer />
    </div>
  );
};
