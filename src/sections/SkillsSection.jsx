import {
  Blocks,
  Braces,
  Database,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";
import { SectionLines } from "../components/ui/SectionLines";
import { SectionHeader } from "../components/ui/SectionHeader";

const iconMap = {
  braces: Braces,
  layers: Blocks,
  server: Shield,
  database: Database,
  wrench: Wrench,
  spark: Sparkles,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.06,
      duration: 0.38,
      ease: "easeOut",
    },
  }),
};

export function SkillsSection({ data, isMobile }) {
  const handleMove = (event) => {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    event.currentTarget.style.setProperty("--glow-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section id="skills" className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <SectionLines variant="compact" />
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.groups.map((group, index) => {
          const Icon = iconMap[group.icon] ?? Braces;

          return (
            <GlassCard
              key={group.title}
              className="group relative min-h-[232px] overflow-hidden rounded-[32px] border-white/10 bg-[linear-gradient(180deg,rgba(34,32,37,0.94),rgba(26,27,33,0.92))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-7"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={index}
              variants={cardVariants}
              onPointerMove={handleMove}
              onPointerLeave={(event) => {
                event.currentTarget.style.removeProperty("--glow-x");
                event.currentTarget.style.removeProperty("--glow-y");
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-100 transition duration-300"
                style={{
                  background:
                    "radial-gradient(circle at 22% 16%, rgba(255,122,24,0.09), transparent 28%), radial-gradient(circle at 85% 100%, rgba(86,164,255,0.08), transparent 32%), radial-gradient(circle at var(--glow-x,50%) var(--glow-y,50%), rgba(255,255,255,0.05), transparent 22%)",
                }}
              />
              <div className="pointer-events-none absolute inset-[1px] rounded-[31px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012)_24%,rgba(255,255,255,0.008))]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />

              <motion.div
                className="relative flex h-full flex-col"
                variants={revealSoft}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,122,24,0.12),rgba(255,255,255,0.03))] text-brand-soft shadow-[0_12px_28px_rgba(255,122,24,0.12)]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <div className="flex min-w-[84px] flex-col items-end">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#7782a7]">
                      {group.items.length} items
                    </span>
                    <span className="mt-2 h-px w-16 bg-gradient-to-r from-brand/80 to-transparent" />
                  </div>
                </div>

                <h3 className="mt-7 font-display text-[1.95rem] font-semibold tracking-tight text-white">
                  {group.title}
                </h3>

                <div className="mt-5 h-px bg-gradient-to-r from-white/10 via-white/6 to-transparent" />

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item, chipIndex) => (
                    <motion.span
                      key={item}
                      className="inline-flex items-center rounded-full border-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.12 + chipIndex * 0.04, duration: 0.26 }}
                      whileHover={{
                        y: -2,
                        scale: 1.04,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
