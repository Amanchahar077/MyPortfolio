import { cn } from "../../utils/cn";

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
