import { motion } from "framer-motion";
import { ArrowUpRight, FileBadge2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, viewportOnce } from "../components/ui/motion";
import { SectionLines } from "../components/ui/SectionLines";
import { SectionHeader } from "../components/ui/SectionHeader";

const accentMap = {
  orange:
    "radial-gradient(circle at 18% 18%, rgba(255,122,24,0.24), transparent 28%), radial-gradient(circle at 82% 18%, rgba(255,214,102,0.14), transparent 26%), linear-gradient(180deg, rgba(250,245,236,0.98), rgba(218,202,175,0.96))",
  cyan:
    "radial-gradient(circle at 18% 18%, rgba(86,164,255,0.22), transparent 28%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.12), transparent 26%), linear-gradient(180deg, rgba(246,246,240,0.98), rgba(213,222,216,0.96))",
  amber:
    "radial-gradient(circle at 18% 18%, rgba(255,184,76,0.22), transparent 28%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.12), transparent 26%), linear-gradient(180deg, rgba(247,244,233,0.98), rgba(228,214,179,0.96))",
};

export function CertificatesSection({ data }) {
  return (
    <section id="certificates" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <SectionLines variant="compact" />
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {data.items.map((item) => (
          <GlassCard
            key={item.id}
            className="overflow-hidden rounded-[30px] p-0"
            interactive
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={revealSoft}
          >
            <div className="relative h-48 overflow-hidden border-b border-white/10 p-4">
              <div
                className="absolute inset-4 rounded-[22px] border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                style={{ background: accentMap[item.accent] ?? accentMap.orange }}
              />
              <div className="absolute left-7 top-7 inline-flex items-center gap-2 rounded-full border border-[#d8c9a2] bg-white/70 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#6f6241] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-brand" />
                {item.month}
              </div>
              <div className="absolute inset-x-8 bottom-10">
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#6d5e3c]">
                  Certificate
                </div>
                <div className="mt-2 text-xl font-semibold text-[#2e2418]">
                  {item.issuer}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-soft">
                  {item.issuer}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open certificate: ${item.title}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/58"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button href={data.moreButton.href} variant="secondary">
          <FileBadge2 className="h-4 w-4" />
          {data.moreButton.label}
        </Button>
      </div>
    </section>
  );
}
