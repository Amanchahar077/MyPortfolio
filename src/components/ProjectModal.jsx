import { ExternalLink, Github, X } from "lucide-react";

export function ProjectModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#0a0c11] p-6 shadow-glow sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-soft">{project.category}</p>
            <h3 id="project-modal-title" className="mt-2 font-display text-3xl text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-white/60">{project.subtitle}</p>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            onClick={onClose}
            aria-label="Close project case study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            <InfoBlock title="Problem" body={project.problem} />
            <InfoBlock title="Role" body={project.role} />
            <InfoBlock title="Impact" body={project.impact} />
            <InfoBlock title="Standout Decision" body={project.standoutDecision} />
            <ListBlock title="Architecture" items={project.architecture} />
            <ListBlock title="Technical Decisions" items={project.technicalDecisions} />
          </div>
          <div className="space-y-5">
            <ListBlock title="Metrics" items={project.metrics} />
            <ListBlock title="Tech Stack" items={project.techStack} />
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Links</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkPill href={project.github} icon={Github} label="GitHub" />
                {project.demo ? <LinkPill href={project.demo} icon={ExternalLink} label="Live Demo" /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, body }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{title}</p>
      <p className="mt-3 leading-7 text-white/72">{body}</p>
    </div>
  );
}

function ListBlock({ title, items }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{title}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function LinkPill({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
