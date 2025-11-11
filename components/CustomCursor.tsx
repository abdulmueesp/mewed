"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const move = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hide = () => setIsVisible(false);
    const show = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]
      transition-transform duration-150 ease-out
      ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: `translate(${position.x - 1}px, ${position.y - 8}px)`,
        border: "2px solid rgba(59,130,246,0.8)", // blue border
        boxShadow: "0 0 8px rgba(59,130,246,0.3)", // subtle glow
       
      }}
    ></div>
  );
}
