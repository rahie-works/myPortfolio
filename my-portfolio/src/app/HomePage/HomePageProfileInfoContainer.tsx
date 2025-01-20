import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";

export const HomePageProfileInfoContainer = () => {
  const handleSocialClick = (link: string) => {
    switch (link) {
      case "LinkedIn":
        window.open(
          "https://www.linkedin.com/in/raheesh-k-muhamed-8b3580129/",
          "_blank"
        );
        break;
      case "Github":
        window.open("https://github.com/rahie-works", "_blank");
        break;
      case "Instagram":
        window.open("https://www.instagram.com/raheesh_k_muhamed/", "_blank");
        break;
      case "StackOverflow":
        window.open(
          "https://stackoverflow.com/users/17244811/raheesh-kattumunda-muhamed",
          "_blank"
        );
        break;
    }
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
        Raheesh Muhamed
      </p>
      <div className="w-full h-full md:h-1/2 flex flex-col items-center gap-10 md:gap-0 md:justify-around">
        <div className="text-white text-lg flex flex-col items-center gap-5 md:gap-0">
          <p className="text-white text-sm">Full Stack Software Engineer</p>
          <p className="text-sm">Ontario, CA</p>
        </div>
        <div className="w-full flex justify-center gap-16 md:gap-5">
          <FaLinkedin
            className="text-blue-700 text-3xl md:text-4xl"
            onClick={() => handleSocialClick("LinkedIn")}
          />
          <FaGithub className="text-white text-3xl md:text-4xl" />
          <FaInstagram className="text-pink-700 text-3xl md:text-4xl" />
          <FaStackOverflow className="text-red-500 text-3xl md:text-4xl" />
        </div>
        <button className="border-2 border-blue-500 text-white text-lg md:text-xs p-3 rounded-lg cursor-pointer">
          Lets Connect
        </button>
      </div>
    </div>
  );
};
