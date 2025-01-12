import React from "react";
import "../HomePage/styles.css";
import Image from "next/image";

export default function ContentsBackground({
  background,
}: {
  background: string;
}) {
  return (
    <video
      className={"absolute inset-0 w-full h-full object-cover"}
      autoPlay
      muted
      loop
      playsInline
      key={background}
      style={{
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.3)",
        filter: "brightness(50%)",
      }}
    >
      <source src={background} type="video/mp4" />
    </video>
  );
}
