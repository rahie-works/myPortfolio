import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Raleway } from "next/font/google";

// constants
import { CompanyList } from "../../constants/homepage";
import { CONNECT_PAGE, WORKS_PAGE } from "@/app/constants/router";

// icons
import { FaArrowRight } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import { SummaryInfoType } from "@/app/types/homePageContentTypes";

const raleway = Raleway({ subsets: ["latin"] });

const HomePageSummaryHeading = ({
  heading,
  intro,
}: {
  heading: string[];
  intro: string[];
}) => {
  return (
    <>
      <div className="w-full h-full text-3xl md:text-5xl text-white font-bold flex flex-col mt-20 md:mt-0 px-5 md:px-0 md:ml-20 items-center">
        <span
          className={`h-1/2 ${raleway.className} animate-fade-up animate-ease-in`}
        >
          {heading?.[0]},
        </span>
        <span className="h-full animate-fade-up animate-ease-in bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {heading?.[1]}
        </span>
      </div>
      <div
        className={`${raleway.className} p-5 md:p-0 animate-fade-up flex flex-col animate-ease-in w-full text-lg text-white flex justify-center md:ml-20`}
      >
        <p className="pb-5">{intro?.[0]}</p>
        <p className="pt-5">{intro?.[1]}</p>
      </div>
    </>
  );
};

const HomePageSummaryLinkContainer = ({ links }: { links: string[] }) => {
  const router = useRouter();
  const [isLoadingWork, setIsLoadingWork] = useState(false);
  const [isLoadingConnect, setIsLoadingConnect] = useState(false);

  const goToLetsConnect = () => {
    setIsLoadingConnect(true);
    router.push(CONNECT_PAGE);
  };
  const goToLetsMyWorks = () => {
    setIsLoadingWork(true);
    router.push(WORKS_PAGE);
  };
  return (
    <div className="w-full h-full flex md:ml-20 animate-fade-up animate-ease-in justify-center md:justify-start items-center">
      <button
        onClick={goToLetsConnect}
        className="w-auto bg-blue-700 text-white text-md p-3 mr-10 rounded-lg cursor-pointer flex items-center"
      >
        {links?.[0]}{" "}
        {isLoadingConnect && (
          <CgSpinner className="ml-2 animate-spin text-xl" />
        )}
      </button>
      <button
        onClick={goToLetsMyWorks}
        className="text-white text-md p-2 rounded-lg flex items-center border-4 border-blue-500 cursor-pointer"
      >
        <p className="pr-3">{links?.[1]}</p>
        {isLoadingWork ? (
          <CgSpinner className="ml-2 animate-spin text-xl" />
        ) : (
          <FaArrowRight />
        )}
      </button>
    </div>
  );
};

const HomePageCompanyPortfolio = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-full flex flex-col md:items-left animate-fade-up animate-ease-in ml-5 md:ml-20 overflow-hidden">
      <p className="text-white text-md mt-5 mb-5">{title}</p>
      <div className="w-full flex h-20 md:h-64 gap-10 md:gap-20 animate-marquee whitespace-nowrap">
        {CompanyList.map((eachCompany, index) => (
          <Image
            alt={eachCompany}
            key={index}
            className={`${eachCompany === "/logos/walletifai.png" ? "w-1/3 h-1/3" : "w-1/2 h-1/2"} filter grayscale`}
            src={eachCompany}
            width={100}
            height={100}
          />
        ))}
        {CompanyList.map((eachCompany, index) => (
          <Image
            alt={eachCompany}
            key={index}
            className={`${eachCompany === "/logos/walletifai.png" ? "w-1/3 h-1/3" : "w-1/2 h-1/2"} filter grayscale`}
            src={eachCompany}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export const HomePageProfileSummaryContainer = ({
  summaryInfo,
}: {
  summaryInfo: SummaryInfoType;
}) => {
  const { portfolioTitle, summaryHeading, summaryIntro, summaryLinks } =
    summaryInfo;
  return (
    <div className="w-full h-1/2 md:w-2/3 md:h-full flex flex-col bg-gradient-to-b from-gray-900 to-transparent md:bg-none rounded-lg">
      <HomePageSummaryHeading heading={summaryHeading} intro={summaryIntro} />
      <HomePageSummaryLinkContainer links={summaryLinks} />
      <HomePageCompanyPortfolio title={portfolioTitle} />
    </div>
  );
};
