import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { subtleHover, subtleTap } from "./motion";

const variants = {
  primary:
    "bg-brand text-white shadow-orange hover:bg-brand-soft hover:text-white",
  secondary:
    "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20",
  ghost:
    "bg-transparent text-white/80 ring-1 ring-white/10 hover:bg-white/5 hover:text-white",
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
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300",
        variants[variant],
        className
      )}
      whileHover={subtleHover}
      whileTap={subtleTap}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}
