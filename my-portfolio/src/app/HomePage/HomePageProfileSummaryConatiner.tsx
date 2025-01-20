import { Raleway } from "next/font/google";
import { CompanyList } from "./HomePageConstants";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

const HomePageSummaryHeading = () => {
  return (
    <>
      <div className="w-full h-full text-3xl md:text-5xl text-white font-bold flex flex-col mt-20 md:mt-0 px-5 md:px-0 md:ml-20 items-center">
        <span
          className={`h-1/2 ${raleway.className} animate-fade-up animate-ease-in`}
        >
          {`< Building Solutions`},
        </span>
        <span className="h-full animate-fade-up animate-ease-in bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {`Crafting the Future />`}
        </span>
      </div>
      <div
        className={`${raleway.className} p-5 md:p-0 animate-fade-up flex flex-col animate-ease-in w-full text-lg text-white flex justify-center md:ml-20`}
      >
        <p className="pb-5">
          Passionate about developing robust, scalable, and user-focused
          applications. I specialize in turning complex problems into elegant,
          efficient, and innovative solutions through clean code and creative
          engineering.{" "}
        </p>
        <p className="pt-5">
          Driven by a deep curiosity to constantly improve and innovate, I am
          committed to creating high-quality software that delivers real value.
          I believe in the power of collaboration, continuous learning, and the
          importance of writing code that is not only functional but also
          maintainable and scalable.
        </p>
      </div>
    </>
  );
};

const HomePageSummaryLinkContainer = () => {
  return (
    <div className="w-full h-full flex md:ml-20 animate-fade-up animate-ease-in justify-center md:justify-start items-center">
      <button className="bg-blue-700 text-white text-md p-3 mr-10 rounded-lg cursor-pointer">
        Lets Connect
      </button>
      <button className="text-white text-md p-2 rounded-lg flex items-center border-4 border-blue-500 cursor-pointer">
        <p className="pr-3">My works</p>
        <FaArrowRight />
      </button>
    </div>
  );
};

const HomePageCompanyPortfolio = () => {
  return (
    <div className="w-full h-full flex flex-col md:items-left animate-fade-up animate-ease-in ml-5 md:ml-20 overflow-hidden">
      <p className="text-white text-md mt-5 mb-2">
        Trusted by businesses from every corner of the globe, near and far.
      </p>
      <div className="w-full flex h-20 md:h-64 gap-20 animate-marquee whitespace-nowrap">
        {CompanyList.map((eachCompany, index) => (
          <Image
            alt={eachCompany}
            key={index}
            className="w-full h-1/2 filter grayscale"
            src={eachCompany}
            width={100}
            height={100}
          />
        ))}
        {CompanyList.map((eachCompany, index) => (
          <Image
            alt={eachCompany}
            key={index}
            className="w-full h-1/2 filter grayscale"
            src={eachCompany}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export const HomePageProfileSummaryContainer = () => {
  return (
    <div className="w-full h-1/2 md:w-2/3 md:h-full flex flex-col bg-gradient-to-b from-gray-900 to-transparent md:bg-none rounded-lg">
      <HomePageSummaryHeading />
      <HomePageSummaryLinkContainer />
      <HomePageCompanyPortfolio />
    </div>
  );
};
