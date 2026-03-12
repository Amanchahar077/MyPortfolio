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
        className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-soft"
        variants={revealUp}
      >
        {eyebrow}
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
