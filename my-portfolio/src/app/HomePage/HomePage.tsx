import { Raleway } from "next/font/google";
import { HomePageProfileContainer } from "./HomePageProfileConatiner";

const raleway = Raleway({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <section
      className={`relative h-full w-full items-center flex flex-col bg-black ${raleway.className} justify-center`}
    >
      <HomePageProfileContainer />
    </section>
  );
}
