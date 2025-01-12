import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const HomeHeadingContainer = () => {
  return (
    <div
      className={`relative w-1/2 h-full text-8xl text-white flex flex-col font-bold ${raleway.className} animate-fade-up animate-ease-in justify-center`}
    >
      <span className={`${raleway.className} animate-fade-up animate-ease-in`}>
        Welcome to my
      </span>
      <span className="text-blue-500 animate-fade-up animate-ease-in">
        Portfolio
      </span>
    </div>
  );
};

export default function HomePage() {
  return (
    <section
      className={`relative h-full w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      <HomeHeadingContainer />
    </section>
  );
}
