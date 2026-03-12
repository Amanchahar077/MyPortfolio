import { motion } from "framer-motion";

export function SectionLines({ variant = "default" }) {
  const configs = {
    default: [
      { top: "24%", left: "4%", width: "42%", delay: 0, opacity: 0.75 },
      { top: "78%", left: "18%", width: "36%", delay: 0.8, opacity: 0.5 },
    ],
    compact: [
      { top: "20%", left: "8%", width: "34%", delay: 0, opacity: 0.68 },
      { top: "72%", left: "28%", width: "24%", delay: 0.7, opacity: 0.45 },
    ],
    wide: [
      { top: "18%", left: "6%", width: "48%", delay: 0, opacity: 0.78 },
      { top: "82%", left: "14%", width: "44%", delay: 1, opacity: 0.55 },
    ],
  };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {configs[variant].map((line, index) => (
        <motion.div
          key={`${variant}-${index}`}
          className="absolute h-px bg-gradient-to-r from-brand/90 via-white/35 to-transparent"
          style={{ top: line.top, left: line.left, width: line.width, opacity: line.opacity }}
          animate={{
            opacity: [line.opacity * 0.55, line.opacity, line.opacity * 0.55],
            scaleX: [0.92, 1, 0.94],
            x: [0, 18, -10, 0],
          }}
          transition={{
            duration: 8 + index * 1.5,
            delay: line.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
