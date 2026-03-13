import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { revealSoft, revealUp, viewportOnce } from "../components/ui/motion";
import { SectionLines } from "../components/ui/SectionLines";
import { SectionHeader } from "../components/ui/SectionHeader";

export function ResumeSection({ data, onPreview }) {
  const [progress, setProgress] = useState(0);
  const timer = useRef(null);

  useEffect(() => () => window.clearInterval(timer.current), []);

  const handleDownload = () => {
    window.clearInterval(timer.current);
    setProgress(0);

    timer.current = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(timer.current);
          const anchor = document.createElement("a");
          anchor.href = data.file;
          anchor.download = "Aman_Chahar_Resume.pdf";
          anchor.click();
          return 0;
        }
        return current + 10;
      });
    }, 65);
  };

  return (
    <section id="resume" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <SectionLines variant="compact" />
      <SectionHeader eyebrow={data.eyebrow} title={data.title} copy={data.copy} />
      <GlassCard
        className="relative mt-12 overflow-hidden rounded-[36px] p-6 sm:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(86,164,255,0.12),transparent_28%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              {data.pills.map((pill) => (
                <span key={pill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72">
                  {pill}
                </span>
              ))}
            </div>
            <h3 className="mt-6 font-display text-3xl text-white">{data.cardTitle}</h3>
            <p className="mt-4 max-w-2xl leading-8 text-white/68">{data.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="button" onClick={handleDownload}>
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button as="button" onClick={onPreview} variant="secondary">
                <Eye className="h-4 w-4" />
                Preview Resume
              </Button>
            </div>
          </div>
          <motion.div
            className="w-full max-w-sm rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
            variants={revealSoft}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            <div className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-soft">
              Download sequence
            </div>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/38">Transfer status</p>
                <p className="mt-2 text-lg font-medium text-white/80">Resume package</p>
              </div>
              <div className="text-right">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/35">Progress</p>
                <p className="mt-2 font-display text-3xl leading-none text-white">{progress}%</p>
              </div>
            </div>
            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-brand transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-white/48">
              {progress === 0 ? "Ready to download instantly." : "Preparing your resume download."}
            </p>
          </motion.div>
        </div>
      </GlassCard>
    </section>
  );
}
