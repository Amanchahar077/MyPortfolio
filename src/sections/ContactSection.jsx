import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeader } from "../components/ui/SectionHeader";

const icons = {
  Email: Mail,
  Phone,
  LinkedIn: Linkedin,
  GitHub: Github,
};

export function ContactSection({ data }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {data.cards.map((card) => {
            const Icon = icons[card.label];
            return (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="group"
              >
                <GlassCard className="h-full rounded-[30px] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-brand-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/42">{card.label}</p>
                  <p className="mt-3 text-lg text-white/82">{card.value}</p>
                </GlassCard>
              </a>
            );
          })}
        </div>
        <GlassCard className="rounded-[36px] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-soft">{data.panel.title}</p>
          <h3 className="mt-5 font-display text-3xl text-white">{data.panel.subtitle}</h3>
          <div className="mt-8 grid gap-3">
            {data.panel.bullets.map((bullet) => (
              <div key={bullet} className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-white/70">
                {bullet}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
