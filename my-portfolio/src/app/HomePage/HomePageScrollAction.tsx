export default function HomePageScrollAction() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-center items-center bg-gradient-to-t from-gray-900 to-white-500 w-full">
        <h2 className="text-xl text-white font-subtitles pb-5">
          Let me show you around my career journey
        </h2>
        <span
          className="material-symbols-outlined items-end animate-bounce"
          style={{ color: "white", fontSize: 42 }}
        >
          expand_circle_down
        </span>
      </div>
    </div>
  );
}
