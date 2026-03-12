import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";

export function ClosingSection({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:pb-28">
      <GlassCard
        className="relative overflow-hidden rounded-[40px] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.18),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(86,164,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-soft">
              {data.chip}
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {data.title}
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-white/68">{data.copy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {data.buttons.map((button) => (
                <Button key={button.label} href={button.href} variant={button.variant}>
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {data.pillars.map((pillar) => (
              <motion.div
                key={pillar}
                className="rounded-[28px] border border-white/10 bg-black/20 p-5 text-white/72"
                variants={revealSoft}
                whileHover={{ x: 6, borderColor: "rgba(255,255,255,0.18)" }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                {pillar}
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
