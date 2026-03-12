import { useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeader } from "../components/ui/SectionHeader";

export function SkillsSection({ data, isMobile }) {
  const [glow, setGlow] = useState({ x: "50%", y: "50%" });

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
        <GlassCard className="relative overflow-hidden rounded-[36px] p-6 sm:p-8" onPointerMove={handleMove}>
          <div
            className="pointer-events-none absolute inset-0 opacity-80 transition duration-300"
            style={{
              background: `radial-gradient(circle at ${glow.x} ${glow.y}, rgba(255,122,24,0.16), transparent 26%), radial-gradient(circle at 85% 15%, rgba(86,164,255,0.12), transparent 18%)`,
            }}
          />
          <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {data.groups.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">{group.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="hidden rounded-[36px] p-6 lg:block">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-soft">Skill Constellation</p>
          <div className="relative mt-6 h-full min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
            {[
              { label: "APIs", top: "14%", left: "55%" },
              { label: "AI", top: "26%", left: "24%" },
              { label: "Systems", top: "48%", left: "58%" },
              { label: "Frontend", top: "68%", left: "30%" },
              { label: "Security", top: "80%", left: "66%" },
            ].map((node) => (
              <div key={node.label} className="absolute" style={{ top: node.top, left: node.left }}>
                <div className="relative">
                  <span className="absolute inset-0 animate-pulseSoft rounded-full bg-brand/20 blur-xl" />
                  <span className="relative inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-2 text-xs uppercase tracking-[0.25em] text-white">
                    {node.label}
                  </span>
                </div>
              </div>
            ))}
            <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M24 26 L55 14 L58 48 L30 68 L66 80" stroke="rgba(255,255,255,0.22)" fill="none" />
            </svg>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
