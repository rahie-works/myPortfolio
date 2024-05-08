import HomePageBackground from "./HomePageBackground";
import HomePageContents from "./HomePageContents";
import HomePageScrollAction from "./HomePageScrollAction";

export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <HomePageBackground />
      <HomePageContents />
      <HomePageScrollAction />
    </div>
  );
}
