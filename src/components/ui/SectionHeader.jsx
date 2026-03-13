import { motion } from "framer-motion";
import { revealUp, viewportOnce } from "./motion";

export function SectionHeader({ eyebrow, title, copy, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      className={`max-w-3xl ${alignment}`}
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div
        className="group relative mb-5 inline-flex overflow-hidden rounded-full border-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.38em] text-brand-soft shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        variants={revealUp}
        whileHover={{
          y: -2,
          scale: 1.015,
          boxShadow: "0 18px 42px rgba(0,0,0,0.24)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(255,122,24,0.22),transparent_38%),linear-gradient(90deg,rgba(255,122,24,0.08),transparent_42%,rgba(255,122,24,0.1))] opacity-90 transition duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-80" />
        <span className="relative z-10">{eyebrow}</span>
      </motion.div>
      <motion.h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl" variants={revealUp}>
        {title}
      </motion.h2>
      <motion.p className="mt-5 text-base leading-7 text-white/65 sm:text-lg" variants={revealUp}>
        {copy}
      </motion.p>
    </motion.div>
  );
}
