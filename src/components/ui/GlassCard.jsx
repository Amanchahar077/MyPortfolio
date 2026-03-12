import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { subtleHover, subtleTap } from "./motion";

export function GlassCard({ className, children, interactive = false, ...props }) {
  return (
    <motion.div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur-xl",
        className
      )}
      whileHover={interactive ? subtleHover : undefined}
      whileTap={interactive ? subtleTap : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
