import { useEffect, useRef, useState } from "react";

export function CustomCursor({ disabled }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) {
      return undefined;
    }

    let frame = 0;

    const update = () => {
      setTrail((current) => ({
        x: current.x + (cursorRef.current.x - current.x) * 0.18,
        y: current.y + (cursorRef.current.y - current.y) * 0.18,
      }));
      frame = window.requestAnimationFrame(update);
    };

    const handleMove = (event) => {
      const next = { x: event.clientX, y: event.clientY };
      cursorRef.current = next;
      setCursor(next);
    };

    window.addEventListener("pointermove", handleMove);
    frame = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.cancelAnimationFrame(frame);
    };
  }, [disabled]);

  if (disabled) {
    return null;
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div
        className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/40 mix-blend-screen"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-2xl mix-blend-screen transition-transform duration-150"
        style={{ left: trail.x, top: trail.y }}
      />
    </div>
  );
}
