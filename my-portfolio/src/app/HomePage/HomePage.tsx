import { Raleway } from "next/font/google";
import ContentsBackground from "../NavigationStack/ContentsBackground";

const raleway = Raleway({ subsets: ["latin"] });

// export default function HomePageContents() {
//   return (
//     <section className="relative h-screen w-ful bg-black">
//       {/* <ContentsBackground background={"/night_sky.mp4"} /> */}
//       <div className="relative h-full w-full items-center flex flex-col justify-center">
//         <h3
//           className={`text-2xl text-white animate-fade animate-ease-in mb-6 ${raleway.className}`}
//         >
//           Hi, welcome to my Portfolio.
//         </h3>
//         <div className="flex flex-col lg:flex lg:flex-row md:items-center justify-center items-center">
//           <h3
//             className={`text-md sm:text-2xl text-white animate-fade-up animate-ease-in mr-5 ${raleway.className}`}
//           >
//             I am{" "}
//           </h3>
//           <h1 className="text-4xl sm:text-8xl text-white animate-fade-up animate-ease-in font-name">
//             Raheesh Muhamed
//           </h1>
//         </div>
//         <div className="justify-center items-center mt-20">
//           <h2
//             className={`text-lg sm:text-2xl text-white animate-fade-up animate-ease-in ${raleway.className}`}
//           >
//             a curious and passionate Software Engineer who slays bugs between
//             letters and catches waves by sunset..!{" "}
//           </h2>
//         </div>
//         <div className="justify-center items-center pt-80">
//           <h2
//             className={`text-lg sm:text-2xl text-white animate-fade-up animate-ease-in ${raleway.className}`}
//           >
//             - Do you know?
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// }

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
