import Image from "next/image";
import { useRouter } from "next/navigation";

// icons
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";

// constants
import { CONNECT_PAGE } from "@/app/constants/router";

// utils
import { handleSocialClick } from "@/app/utils/useSocialNavigation";
import { ProfileInfoType } from "@/app/types/homePageContentTypes";

export const HomePageProfileInfoContainer = ({
  profileInfo,
}: {
  profileInfo: ProfileInfoType;
}) => {
  const router = useRouter();

  const goToLetsConnect = () => {
    router.push(CONNECT_PAGE);
  };

  return (
    <div className="w-full h-full pt-32 pb-10 md:pt-0 md:pb-0 md:w-1/4 md:h-full flex flex-col bg-gradient-to-b from-transparent to-gray-900 shadow-lg rounded-lg animate-fade-up animate-ease-in justify-center items-center">
      <Image
        src="/me.png"
        className="rounded-xl"
        alt="profile_photo"
        width={200}
        height={200}
      />
      <p className="text-white text-3xl md:text-2xl mt-5 mb-5">
        {profileInfo.name}
      </p>
      <div className="w-full h-full md:h-1/2 flex flex-col items-center gap-10 md:gap-0 md:justify-around">
        <div className="text-white text-lg flex flex-col items-center gap-5 md:gap-0">
          <p className="text-white text-sm">{profileInfo.title}</p>
          <p className="text-sm">{profileInfo.location}</p>
        </div>
        <div className="w-full flex justify-center gap-16 md:gap-5">
          <FaLinkedin
            className="text-blue-700 text-3xl md:text-4xl"
            onClick={() => handleSocialClick(profileInfo.socialLinks.linkedIn)}
          />
          <FaGithub
            onClick={() => handleSocialClick(profileInfo.socialLinks.github)}
            className="text-white text-3xl md:text-4xl"
          />
          <FaInstagram
            onClick={() => handleSocialClick(profileInfo.socialLinks.instagram)}
            className="text-pink-700 text-3xl md:text-4xl"
          />
          <FaStackOverflow
            onClick={() => handleSocialClick(profileInfo.socialLinks.stackoverflow)}
            className="text-red-500 text-3xl md:text-4xl"
          />
        </div>
        <button
          onClick={goToLetsConnect}
          className="border-2 border-blue-500 text-white text-lg md:text-xs p-3 rounded-lg cursor-pointer"
        >
          {profileInfo.buttonText}
        </button>
      </div>
    </div>
  );
};
