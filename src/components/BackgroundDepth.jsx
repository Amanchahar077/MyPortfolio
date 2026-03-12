import { useEffect, useState } from "react";

export function BackgroundDepth({ disabled }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) {
      return undefined;
    }

    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      setPosition({ x, y });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [disabled]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="absolute left-[-10%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,122,24,0.28),transparent_64%)] blur-3xl transition-transform duration-500"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div
        className="absolute bottom-[-16%] right-[-12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(86,164,255,0.18),transparent_62%)] blur-3xl transition-transform duration-700"
        style={{ transform: `translate3d(${-position.x}px, ${-position.y}px, 0)` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_38%)]" />
    </div>
  );
}
