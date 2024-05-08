import "./styles.css";

export default function HomePageBackground() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover video-gray"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/beach_waves.mov" type="video/mp4" />
    </video>
  );
}
