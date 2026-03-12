import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";
import { SectionHeader } from "../components/ui/SectionHeader";

export function SkillsSection({ data, isMobile }) {
  const [glow, setGlow] = useState({ x: "50%", y: "50%" });
  const constellationNodes = [
    { label: "APIs", top: "18%", left: "66%" },
    { label: "AI", top: "31%", left: "28%" },
    { label: "Systems", top: "55%", left: "70%" },
    { label: "Frontend", top: "77%", left: "40%" },
    { label: "Security", top: "90%", left: "73%" },
  ];

  const handleMove = (event) => {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setGlow({
      x: `${((event.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((event.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.42fr]">
        <GlassCard
          className="relative overflow-hidden rounded-[36px] p-6 sm:p-8"
          onPointerMove={handleMove}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-80 transition duration-300"
            style={{
              background: `radial-gradient(circle at ${glow.x} ${glow.y}, rgba(255,122,24,0.16), transparent 26%), radial-gradient(circle at 85% 15%, rgba(86,164,255,0.12), transparent 18%)`,
            }}
          />
          <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {data.groups.map((group) => (
              <motion.div
                key={group.title}
                className="rounded-[28px] border border-white/10 bg-black/20 p-5"
                variants={revealSoft}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.18)" }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">{group.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
        <GlassCard
          className="hidden rounded-[36px] p-5 lg:block xl:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealSoft}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-soft">Skill Constellation</p>
          <div className="relative mt-5 min-h-[500px] overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(2,6,14,0.88),rgba(4,8,16,0.78))] px-5 py-6">
            {constellationNodes.map((node) => (
              <div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: node.top, left: node.left }}
              >
                <div className="relative">
                  <span className="absolute inset-0 animate-pulseSoft rounded-full bg-brand/20 blur-xl" />
                  <span className="relative inline-flex whitespace-nowrap rounded-full border border-brand/30 bg-[linear-gradient(180deg,rgba(255,122,24,0.16),rgba(255,122,24,0.08))] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-white shadow-[0_12px_30px_rgba(255,122,24,0.12)]">
                    {node.label}
                  </span>
                </div>
              </div>
            ))}
            <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M29 31 L58 18 L60 54 L36 75 L73 89"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
