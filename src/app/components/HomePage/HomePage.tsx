import { Raleway } from "next/font/google";
import { HomePageProfileContainer } from "./HomePageProfileConatiner";

const raleway = Raleway({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <section
      className={`relative h-auto md:h-screen w-full items-center flex bg-black ${raleway.className} justify-center`}
    >
      <HomePageProfileContainer />
    </section>
  );
}
