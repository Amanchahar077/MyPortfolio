import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, Target, User, Link2, Github, Linkedin, Mail, Phone } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";
import { SectionHeader } from "../components/ui/SectionHeader";

export function AboutSection({ data, contact }) {
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

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <GlassCard
          className="group relative overflow-hidden rounded-[32px] p-6 transition duration-300 will-change-transform hover:-translate-y-3 hover:scale-[1.3] hover:shadow-[0_20px_50px_rgba(255,122,24,0.12)] sm:p-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealSoft}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(86,164,255,0.14),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_18%,rgba(255,122,24,0.1),transparent_46%),radial-gradient(circle_at_70%_80%,rgba(86,164,255,0.1),transparent_50%)]" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-brand-soft">
                <User className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl text-white">Who I Am</h3>
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/45">{data.leadCard.institution}</p>
            <p className="mt-4 text-[0.98rem] leading-7 text-white/70">{data.leadCard.statement}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.leadCard.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard
          className="group relative overflow-hidden rounded-[32px] p-6 transition duration-300 will-change-transform hover:-translate-y-3 hover:scale-[1.3] hover:shadow-[0_20px_50px_rgba(86,164,255,0.12)] sm:p-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealSoft}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(86,164,255,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(255,122,24,0.1),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(86,164,255,0.1),transparent_50%),radial-gradient(circle_at_80%_75%,rgba(255,122,24,0.1),transparent_52%)]" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-brand-soft">
                <Rocket className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl text-white">My Mission</h3>
            </div>
            <p className="mt-4 text-[0.98rem] leading-7 text-white/70">{data.copy}</p>
            <p className="mt-4 text-sm text-white/55">{data.supporting}</p>
          </div>
        </GlassCard>

        <GlassCard
          className="group relative overflow-hidden rounded-[32px] p-6 transition duration-300 will-change-transform hover:-translate-y-3 hover:scale-[1.3] hover:shadow-[0_20px_50px_rgba(255,122,24,0.12)] sm:p-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealSoft}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,122,24,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(86,164,255,0.12),transparent_36%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_35%_15%,rgba(255,122,24,0.1),transparent_52%),radial-gradient(circle_at_75%_78%,rgba(86,164,255,0.1),transparent_55%)]" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-brand-soft">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl text-white">My Approach</h3>
            </div>
            <div className="mt-4 grid gap-3">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={`${highlight.title}-${index}`}
                  className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3"
                  variants={revealSoft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <h4 className="text-sm font-semibold text-white">{highlight.title}</h4>
                  <p className="mt-1 text-sm text-white/60">{highlight.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard
          className="group relative overflow-hidden rounded-[32px] p-6 transition duration-300 will-change-transform hover:-translate-y-3 hover:scale-[1.3] hover:shadow-[0_20px_50px_rgba(86,164,255,0.12)] sm:p-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealSoft}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(86,164,255,0.16),transparent_42%),radial-gradient(circle_at_top_left,rgba(255,122,24,0.12),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_70%,rgba(86,164,255,0.1),transparent_52%),radial-gradient(circle_at_70%_20%,rgba(255,122,24,0.1),transparent_52%)]" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-brand-soft">
                <Link2 className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl text-white">Connect With Me</h3>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {contact?.cards?.map((card) => {
                const icon =
                  card.label === "GitHub" ? (
                    <Github className="h-4 w-4" />
                  ) : card.label === "LinkedIn" ? (
                    <Linkedin className="h-4 w-4" />
                  ) : card.label === "Email" ? (
                    <Mail className="h-4 w-4" />
                  ) : (
                    <Phone className="h-4 w-4" />
                  );

                return (
                  <a
                    key={card.label}
                    href={card.href}
                    className="group flex min-h-[92px] items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.05] px-5 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-white/20"
                    {...(card.href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-brand-soft">
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-white">{card.label}</div>
                      <div className="mt-1 text-sm text-white/55 break-all">
                        {card.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
