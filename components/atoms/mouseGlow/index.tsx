import { useMousePosition } from "@/hooks/useMousePosition";

const MouseGlow = () => {
  const { x, y, ref } = useMousePosition();
  return (
    <div
      ref={ref}
      className="inset-0 lg:fixed pointer-events-none transition-all duration-300 z-30"
      style={{
        background: `radial-gradient(500px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default MouseGlow;
