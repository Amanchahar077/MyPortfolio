import { useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeader } from "../components/ui/SectionHeader";

export function AboutSection({ data }) {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    setTiltStyle({
      transform: `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg)`,
      background:
        "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.12), transparent 30%)",
      "--mx": `${((event.clientX - rect.left) / rect.width) * 100}%`,
      "--my": `${((event.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="rounded-[36px] p-6 sm:p-8">
          <p className="max-w-3xl text-base leading-8 text-white/68">{data.supporting}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="font-display text-3xl text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-white/55">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4">
            {data.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-display text-xl text-white">{highlight.title}</h3>
                <p className="mt-2 leading-7 text-white/65">{highlight.body}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard
          className="group relative overflow-hidden rounded-[36px] p-5 sm:p-6"
          onPointerMove={handleMove}
          onPointerLeave={() => setTiltStyle({})}
          style={tiltStyle}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.14),transparent_35%)] opacity-80 transition duration-500 group-hover:opacity-100" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10">
            <img src={data.photo} alt="Aman Chahar" className="h-full min-h-[460px] w-full object-cover" />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
