import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThreeBackground } from "./ThreeBackground";

function TypewriterText({ as: Component = "span", text, className, startDelay = 0, speed = 18, cursor = false }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    let timeoutId;
    let intervalId;

    timeoutId = window.setTimeout(() => {
      let index = 0;
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [speed, startDelay, text]);

  return (
    <Component className={className}>
      {displayedText}
      {cursor ? (
        <motion.span
          className="ml-2 inline-block h-[1em] w-[7px] bg-brand/70 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        />
      ) : null}
    </Component>
  );
}

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
      <div className="absolute inset-0 bg-grid bg-[size:52px_52px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(255,122,24,0.14),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(86,164,255,0.1),transparent_20%),linear-gradient(180deg,rgba(2,6,16,0.72),rgba(1,3,10,0.97))]" />
      <div className="absolute inset-x-[12%] top-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-[12%] bottom-[18%] h-px bg-gradient-to-r from-transparent via-brand/14 to-transparent" />
      <ThreeBackground className="absolute inset-0 opacity-28" />

      <motion.div
        className="absolute left-[12%] top-[18%] h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_18px_rgba(255,122,24,0.5)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-[24%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(86,164,255,0.45)]"
        animate={{ opacity: [0.2, 0.85, 0.2], scale: [0.92, 1.08, 0.92] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-6 sm:px-6">
        <motion.div
          className="w-full max-w-3xl scale-[0.9]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(255,122,24,0.88),rgba(255,159,90,0.8))] text-base font-semibold text-black shadow-[0_10px_28px_rgba(255,122,24,0.22)] sm:h-11 sm:w-11 sm:text-lg">
                <TypewriterText text="A" startDelay={40} speed={80} />
              </div>
              <div>
                <TypewriterText
                  as="p"
                  className="font-mono text-[0.78rem] text-white/82 sm:text-[0.92rem]"
                  text="aman@portfolio:~$"
                  startDelay={80}
                  speed={18}
                />
                <TypewriterText
                  as="p"
                  className="mt-1 text-[0.56rem] uppercase tracking-[0.22em] text-white/38 sm:text-[0.62rem]"
                  text="launch sequence active"
                  startDelay={260}
                  speed={16}
                />
              </div>
            </div>
            <TypewriterText
              as="div"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.2em] text-white/48 sm:text-[0.62rem]"
              text="ESC to skip"
              startDelay={360}
              speed={18}
            />
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(6,10,22,0.78),rgba(3,6,16,0.68))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[18px] sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,122,24,0.08),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(86,164,255,0.06),transparent_22%)]" />
            <div className="relative">
              <TypewriterText
                as="p"
                className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-brand-soft/90 sm:text-[0.68rem]"
                text="Initialization Protocol"
                startDelay={480}
                speed={16}
              />
              <h1 className="mt-3 max-w-2xl font-display text-[1.8rem] font-semibold leading-[0.98] tracking-[0.03em] text-white sm:text-[2.6rem]">
                <TypewriterText text="Building a cleaner" startDelay={700} speed={22} />
                <TypewriterText
                  as="span"
                  className="block bg-[linear-gradient(90deg,#ff9f5a,#ffffff,#56a4ff)] bg-clip-text text-transparent"
                  text="product-first presence"
                  startDelay={1120}
                  speed={22}
                />
              </h1>

              <div className="mt-6 space-y-3 font-mono text-[0.74rem] sm:text-[0.9rem]">
                {[
                  "SYSTEM INITIALIZATION SEQUENCE",
                  "LOADING INTERFACE MODULES",
                  "MOUNTING FRONTEND SYSTEMS",
                ].map((line, index) => (
                  <motion.div
                    key={line}
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + index * 0.18, duration: 0.4 }}
                  >
                    <span className="text-brand">$</span>
                    <span className="text-white/55">&gt;</span>
                    <TypewriterText
                      className={index === 2 ? "text-white" : "text-white/58"}
                      text={line}
                      startDelay={1180 + index * 260}
                      speed={18}
                      cursor={index === 2}
                    />
                    {index === 2 ? null : <span className="text-white/36">...</span>}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58, duration: 0.42 }}
              >
                <div className="mb-2.5 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/55 sm:text-[0.72rem]">
                  <TypewriterText text="Progress" startDelay={1900} speed={20} />
                  <TypewriterText className="text-white/40" text="81%" startDelay={2040} speed={42} />
                </div>
                <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-[linear-gradient(90deg,#ff7a18,#ff9f5a,#56a4ff)] shadow-[0_0_18px_rgba(255,122,24,0.34)]"
                    initial={{ width: "0%" }}
                    animate={{ width: "81%" }}
                    transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="mt-6 grid grid-cols-3 gap-2.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.42 }}
              >
                {[
                  { label: "Modules", value: "42" },
                  { label: "Functions", value: "128" },
                  { label: "Version", value: "2.0.4" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-4"
                  >
                    <TypewriterText
                      as="p"
                      className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-white/42 sm:text-[0.58rem]"
                      text={item.label}
                      startDelay={2200}
                      speed={18}
                    />
                    <TypewriterText
                      as="p"
                      className="mt-2 font-mono text-sm text-white/86 sm:text-lg"
                      text={item.value}
                      startDelay={2340}
                      speed={46}
                    />
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-5 flex flex-wrap items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.84, duration: 0.42 }}
              >
                <TypewriterText
                  as="div"
                  className="rounded-full border border-brand/24 bg-brand/10 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.18em] text-brand-soft"
                  text="Premium portfolio boot"
                  startDelay={2480}
                  speed={16}
                />
                <TypewriterText
                  as="div"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.18em] text-white/45"
                  text="Frontend + backend + AI"
                  startDelay={2660}
                  speed={16}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
