import HomePageNavigation from "./HomePageNavigation";
import "./styles.css";

export default function HomePageBackground({ theme }: { theme: boolean }) {
  return (
    <video
      className={
        theme
          ? "absolute inset-0 w-full h-full object-cover video-gray"
          : "absolute inset-0 w-full h-full object-cover"
      }
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/night_sky.mp4" type="video/mp4" />
    </video>
  );
}
