export default function HomePageContents() {
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 sm:px-0">
      <h3 className="text-2xl text-gray-900 animate-fade animate-ease-in mb-6 font-subtitles">
        Hi, welcome to my Portfolio.
      </h3>
      <div className="flex flex-col lg:flex lg:flex-row md:items-center justify-center items-center">
        <h3 className="text-md sm:text-2xl text-gray-900 animate-fade-up animate-ease-in mr-5 font-subtitles">
          Introducing{" "}
        </h3>
        <h1 className="text-4xl sm:text-8xl text-gray-900 animate-fade-up animate-ease-in font-name">
          Raheesh Muhamed
        </h1>
      </div>
      <div className="justify-center items-center mt-20">
        <h2 className="text-xl sm:text-2xl text-gray-900 animate-fade-up animate-ease-in font-subtitles">
          Software Engineer since 2021, who slays bugs by day and catches waves
          by sunset..!{" "}
        </h2>
      </div>
    </div>
  );
}
