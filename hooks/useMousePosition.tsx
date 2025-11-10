import { useEffect, useRef, useState } from "react";

export const useMousePosition = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    if (ref?.current) {
      const { left, top } = ref.current.getBoundingClientRect();
      setPosition({ x: e.clientX - left, y: e.clientY - top });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMove(e));

    return window.removeEventListener("mousemove", () => {});
  }, []);

  return {
    x: position.x,
    y: position.y,
    ref,
  };
};
