import { useEffect } from "react";
import { ThreeBackground } from "./ThreeBackground";

export function IntroLoader({ visible, onComplete }) {
  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onComplete();
      }
    };

    const timeout = window.setTimeout(onComplete, 3800);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid bg-[size:56px_56px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,24,0.16),transparent_45%)]" />
      <ThreeBackground className="absolute inset-0 opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative w-full max-w-4xl">
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] px-8 py-14 text-center backdrop-blur-xl">
            <div className="flex gap-3">
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  className="h-14 w-px origin-center animate-pulseSoft bg-gradient-to-b from-transparent via-brand-soft to-transparent"
                  style={{ animationDelay: `${line * 0.18}s` }}
                />
              ))}
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/45">
                AI & Full-Stack Portfolio
              </p>
              <h1 className="font-display text-5xl font-semibold tracking-[0.18em] text-white sm:text-7xl">
                Aman Chahar
              </h1>
            </div>
            <p className="text-sm text-white/55">Press ESC to skip</p>
          </div>
        </div>
      </div>
    </div>
  );
}
