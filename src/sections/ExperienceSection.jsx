import { motion } from "framer-motion";
import { BriefcaseBusiness, FileBadge2 } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { revealUp, viewportOnce } from "../components/ui/motion";
import { SectionLines } from "../components/ui/SectionLines";
import { SectionHeader } from "../components/ui/SectionHeader";

export function ExperienceSection({ data }) {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <SectionLines variant="default" />
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />
      <div className="relative mt-12 grid gap-6">
        <div className="absolute left-[26px] top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-brand/40 via-white/10 to-transparent md:block" />
        {data.items.map((item) => (
          <GlassCard
            key={`${item.role}-${item.company}`}
            className="rounded-[32px] p-6 sm:p-8"
            interactive
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={revealUp}
          >
            <div className="grid gap-5 md:grid-cols-[56px_1fr_auto] md:items-start">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-brand-soft">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl text-white">{item.role}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-white/55">
                    {item.company}
                  </span>
                </div>
                <p className="mt-2 text-white/45">{item.dates}</p>
                <p className="mt-4 max-w-3xl leading-7 text-white/68">{item.description}</p>
              </div>
              <motion.a
                href={item.certificate}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-4 py-3 text-sm font-semibold text-white/88 shadow-[0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition duration-150 hover:border-white/24 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.07))] hover:text-white"
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.94, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <FileBadge2 className="h-4 w-4" />
                Certificate
              </motion.a>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
