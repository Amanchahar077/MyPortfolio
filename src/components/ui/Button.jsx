import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";

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
    <Component
      {...componentProps}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300",
        variants[variant],
        className
      )}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    >
      {content}
    </Component>
  );
}
