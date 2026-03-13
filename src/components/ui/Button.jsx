import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { subtleHover, subtleTap } from "./motion";

const variants = {
  primary:
    "border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] text-white shadow-[0_20px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.16)] hover:border-transparent hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.1))]",
  secondary:
    "border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.17),rgba(255,255,255,0.07))] text-white shadow-[0_20px_50px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-transparent hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.23),rgba(255,255,255,0.1))]",
  ghost:
    "border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.06))] text-white/92 shadow-[0_18px_44px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-transparent hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.21),rgba(255,255,255,0.09))] hover:text-white",
};

export function Button({
  as = "a",
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external = false,
  ...props
}) {
  const Component = as;
  const MotionComponent = Component === "button" ? motion.button : motion.a;
  const componentProps =
    Component === "button"
      ? { type: "button", onClick }
      : { href, onClick };
  const content = (
    <>
      <span>{children}</span>
      {external ? <ArrowUpRight className="h-4 w-4" /> : null}
    </>
  );

  return (
    <MotionComponent
      {...componentProps}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur-xl transition duration-150",
        variants[variant],
        className
      )}
      whileHover={{
        ...subtleHover,
        scale: 1.04,
        y: -2,
      }}
      whileTap={subtleTap}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}
