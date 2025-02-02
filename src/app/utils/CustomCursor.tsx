"use client";

import React, { useEffect, useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setTimeout(() => {
        setDelayedPosition({ x: event.clientX, y: event.clientY });
      }, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        className="cursor-none pointer-events-none transition-transform duration-300 ease-out"
      >
        <TbPointFilled size={16} color="gray" />
      </div>
      <div
        style={{
          position: "absolute",
          top: `${delayedPosition.y}px`,
          left: `${delayedPosition.x}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        className=" pointer-events-none transition-transform duration-300 ease-out"
      >
        <FaRegCircle size={20} color="white" />
      </div>
    </>
  );
};

export default CustomCursor;
