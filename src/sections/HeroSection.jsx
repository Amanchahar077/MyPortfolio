import { motion } from "framer-motion";
import { Github, Linkedin, Mouse } from "lucide-react";
import { useEffect, useState } from "react";
import { ThreeBackground } from "../components/ThreeBackground";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export function HeroSection({ data, reducedMotion, isMobile }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState(data.heroRoles[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!data.heroRoles.length) return undefined;
    if (reducedMotion) {
      setTypedRole(data.heroRoles[roleIndex] ?? "");
      return undefined;
    }

    const currentRole = data.heroRoles[roleIndex] ?? "";
    const isFullyTyped = typedRole === currentRole;
    const nextText = isDeleting
      ? currentRole.slice(0, Math.max(typedRole.length - 1, 0))
      : currentRole.slice(0, typedRole.length + 1);

    const timeout = window.setTimeout(
      () => {
        setTypedRole(nextText);

        if (!isDeleting && nextText === currentRole) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && nextText === "") {
          setIsDeleting(false);
          setRoleIndex((current) => (current + 1) % data.heroRoles.length);
        }
      },
      isFullyTyped ? 1600 : isDeleting ? 70 : 120
    );

    return () => window.clearTimeout(timeout);
  }, [data.heroRoles, isDeleting, reducedMotion, roleIndex, typedRole]);

  return (
    <section id="hero" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,122,24,0.24),transparent_30%),radial-gradient(circle_at_72%_22%,rgba(86,164,255,0.14),transparent_24%),radial-gradient(circle_at_58%_38%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(4,6,12,0.12),rgba(4,6,12,0.58))]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-32">
        <div className="relative">
          <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute left-28 top-40 h-24 w-24 rounded-full bg-sky-400/15 blur-3xl" />
          <motion.div
            className="relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={revealUp}
          >
            <motion.div
              className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-soft"
              variants={revealSoft}
            >
              {data.theme}
            </motion.div>
            <motion.h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl" variants={revealUp}>
              {data.name}
            </motion.h1>
            <motion.div className="mt-5 min-h-[40px] text-xl font-medium text-white/80 sm:text-2xl" variants={revealUp}>
              <span className="text-brand-soft">{typedRole}</span>
              <span className="ml-1 inline-block h-[1.2em] w-[4px] translate-y-[0.08em] rounded-full bg-brand-soft align-middle" />
            </motion.div>
            <motion.p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg" variants={revealUp}>
              {data.summary}
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" variants={revealUp}>
              {data.heroButtons.map((button) => {
                const Icon = iconMap[button.label];
                return (
                  <Button
                    key={button.label}
                    href={button.href}
                    variant={button.variant}
                    external={button.external}
                    className="min-w-[160px]"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                    {button.label}
                  </Button>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.a
            href="#about"
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/65 transition hover:text-white"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={revealSoft}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Mouse className="h-4 w-4" />
            </span>
            Scroll down
          </motion.a>
        </div>

        <div className="relative">
          <GlassCard
            className="relative overflow-hidden rounded-[36px] p-6 sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={revealSoft}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(86,164,255,0.14),transparent_28%)]" />
            {!reducedMotion ? (
              <ThreeBackground className="absolute inset-0 opacity-55" />
            ) : null}
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-brand-soft">
                {data.heroSideCard.title}
              </div>
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{data.heroSideCard.focusTitle}</p>
                <p className="mt-4 text-lg leading-8 text-white/80">{data.heroSideCard.focus}</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {data.heroSideCard.capabilities.map((capability) => (
                  <div key={capability.label} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.25em] text-brand-soft">{capability.label}</p>
                    <p className="mt-3 text-white/75">{capability.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
