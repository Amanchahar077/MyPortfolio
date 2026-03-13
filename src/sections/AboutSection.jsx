import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";
import { SectionHeader } from "../components/ui/SectionHeader";

export function AboutSection({ data }) {
  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 11;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -11;
    event.currentTarget.style.transition = "transform 1100ms cubic-bezier(0.16, 1, 0.3, 1)";
    event.currentTarget.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale(1.04)`;
    event.currentTarget.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    event.currentTarget.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section id="about" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />
      <GlassCard
        className="group relative mx-auto mt-12 max-w-[58rem] overflow-hidden rounded-[28px] border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3.5 shadow-[0_20px_70px_rgba(0,0,0,0.32)] sm:p-4.5"
        onPointerEnter={(event) => {
          event.currentTarget.style.transition = "transform 1400ms cubic-bezier(0.16, 1, 0.3, 1)";
          event.currentTarget.style.transform = "perspective(1200px) scale(1.04)";
        }}
        onPointerMove={handleMove}
        onPointerLeave={(event) => {
          event.currentTarget.style.transition = "transform 1900ms cubic-bezier(0.16, 1, 0.3, 1)";
          event.currentTarget.style.transform = "";
          event.currentTarget.style.removeProperty("--mx");
          event.currentTarget.style.removeProperty("--my");
        }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <div
          className="absolute inset-0 opacity-90 transition duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mx,76%) var(--my,18%), rgba(255,255,255,0.12), transparent 20%), radial-gradient(circle at 16% 20%, rgba(255,122,24,0.18), transparent 24%), radial-gradient(circle at 84% 78%, rgba(86,164,255,0.12), transparent 22%), linear-gradient(135deg, rgba(18,10,8,0.22), rgba(4,10,24,0.06) 40%, rgba(4,10,24,0.22))",
          }}
        />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-14 bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-14 w-px bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-14 bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-14 w-px bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-px w-14 bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-14 w-px bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-14 bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-px bg-brand/55 shadow-[0_0_14px_rgba(255,122,24,0.18)]" />
        <div className="relative flex flex-col items-center text-center">
          <div className="flex w-full max-w-[46rem] flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/66 shadow-[0_10px_26px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.08)] sm:text-[0.68rem]">
              <Sparkles className="h-3 w-3 text-brand-soft" />
              Academic Base
            </div>
            <div className="mt-4 flex flex-col items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,122,24,0.24),rgba(255,122,24,0.08))] text-brand-soft shadow-[0_14px_34px_rgba(255,122,24,0.14)] sm:h-14 sm:w-14 sm:rounded-[20px]">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="text-center">
                <h3 className="font-display text-[1.4rem] font-semibold tracking-tight text-white sm:text-[1.75rem] lg:text-[1.95rem]">
                  {data.leadCard.institution}
                </h3>
                <p className="mt-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-white/45 sm:text-[0.74rem] sm:tracking-[0.22em]">
                  {data.leadCard.meta}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-[0.92rem] leading-7 text-white/72 sm:text-[1rem] lg:max-w-[42rem]">
              {data.leadCard.statement}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {data.leadCard.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-3 py-1.5 text-[0.78rem] text-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid w-full max-w-[46rem] gap-2.5 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="relative overflow-hidden rounded-[24px] border border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-4 backdrop-blur-[18px] shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                variants={revealSoft}
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,122,24,0.18),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(86,164,255,0.14),transparent_34%)] opacity-90" />
                <div className="absolute inset-[1px] rounded-[23px] bg-[linear-gradient(145deg,rgba(13,18,32,0.62),rgba(7,12,24,0.38))]" />
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute left-4 top-4 h-10 w-10 rounded-full bg-brand/10 blur-2xl" />
                <div className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-sky-400/10 blur-2xl" />
                <div className="relative">
                  <div className="font-display text-[2rem] leading-none text-white">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-white/58">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <GlassCard
          className="group relative overflow-hidden rounded-[36px] p-5 sm:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealSoft}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(86,164,255,0.1),transparent_26%)]" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10">
            <img src={data.photo} alt="Aman Chahar" className="h-full min-h-[420px] w-full object-cover" />
          </div>
        </GlassCard>

        <GlassCard
          className="rounded-[36px] p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <p className="max-w-3xl text-base leading-8 text-white/68">{data.supporting}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4">
            {data.highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                variants={revealSoft}
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <h3 className="font-display text-xl text-white">{highlight.title}</h3>
                <p className="mt-2 leading-7 text-white/65">{highlight.body}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
