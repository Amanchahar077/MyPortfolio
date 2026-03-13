import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";
import { SectionLines } from "../components/ui/SectionLines";
import { SectionHeader } from "../components/ui/SectionHeader";

const accentMap = {
  orange: "from-brand/30 via-brand/10 to-transparent",
  cyan: "from-sky-400/25 via-cyan-400/10 to-transparent",
  violet: "from-fuchsia-400/25 via-violet-400/10 to-transparent",
  emerald: "from-emerald-400/25 via-emerald-300/10 to-transparent",
};

export function ProjectsSection({ data, onOpenProject }) {
  const featured = data.items.slice(0, 2);
  const secondary = data.items.slice(2);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <SectionLines variant="wide" />
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />
      <div className="mt-12 grid gap-6">
        <div className="grid gap-6 xl:grid-cols-2">
          {featured.map((project) => (
            <GlassCard
              key={project.id}
              className="group relative overflow-hidden rounded-[36px] p-6 sm:p-8"
              interactive
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={revealSoft}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accentMap[project.accent]}`} />
              <div className="relative">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">{project.category}</p>
                  <h3 className="mt-3 font-display text-3xl text-white">{project.title}</h3>
                  <p className="mt-2 text-lg text-white/55">{project.subtitle}</p>
                </div>
                <p className="mt-6 max-w-xl leading-8 text-white/68">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span key={stat} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                      {stat}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button as="button" onClick={() => onOpenProject(project)} variant="primary">
                    Open Case Study
                  </Button>
                  <ProjectLink href={project.github} icon={Github} label="GitHub" />
                  {project.demo ? <ProjectLink href={project.demo} icon={ExternalLink} label="Demo" /> : null}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {secondary.map((project) => (
            <GlassCard
              key={project.id}
              className="rounded-[32px] p-6"
              interactive
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={revealUp}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">{project.category}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
              <p className="mt-2 text-white/58">{project.subtitle}</p>
              <p className="mt-5 leading-7 text-white/68">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stats.map((stat) => (
                  <span key={stat} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    {stat}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button as="button" onClick={() => onOpenProject(project)} variant="secondary">
                  Open Case Study
                </Button>
                <ProjectLink href={project.github} icon={Github} label="GitHub" />
                {project.demo ? <ProjectLink href={project.demo} icon={ExternalLink} label="Demo" /> : null}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLink({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-4 py-3 text-sm font-semibold text-white/88 shadow-[0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition duration-150 hover:border-white/24 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.07))] hover:text-white"
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.94, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <Icon className="h-4 w-4" />
      {label}
    </motion.a>
  );
}
