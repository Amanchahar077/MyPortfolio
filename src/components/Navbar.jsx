import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";

export function Navbar({ items, activeSection, brandName = "AMAN CHAHAR" }) {
  const [open, setOpen] = useState(false);
  const primaryItems = items.filter((item) => item.href !== "#contact");

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex max-w-[112rem] items-center justify-between rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-5 py-3.5 shadow-[0_24px_80px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[22px] sm:px-7 lg:px-9">
        <div className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(5,10,20,0.94),rgba(3,7,16,0.88))]" />
        <a
          href="#hero"
          className="relative z-10 shrink-0 text-sm font-semibold uppercase tracking-[0.42em] text-white sm:text-[1.05rem]"
        >
          {brandName}
        </a>
        <div className="relative z-10 hidden items-center justify-center gap-2 lg:flex">
          {primaryItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full border border-transparent px-5 py-3 text-[1.05rem] font-small text-white/78 transition duration-300 hover:text-brand",
                activeSection === item.href.slice(1) &&
                  "bg-transparent text-white shadow-none backdrop-blur-0"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <motion.a
          href="#contact"
          className="relative z-10 hidden shrink-0 rounded-full border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] px-8 py-4 text-[1.05rem] font-semibold text-white shadow-[0_20px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur-xl transition duration-300 hover:border-white/30 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.1))] lg:inline-flex"
          whileHover={{
            scale: 1.06,
            y: -2,
            boxShadow: "0 26px 60px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.28)",
          }}
          whileTap={{ scale: 0.97, y: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
        >
          Contact
        </motion.a>
        <button
          type="button"
          className="relative z-10 inline-flex h-5 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        {open ? (
          <div className="absolute left-4 right-4 top-[calc(100%+12px)] rounded-[28px] border border-white/10 bg-[rgba(7,12,22,0.92)] p-3 shadow-glow backdrop-blur-xl lg:hidden">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
