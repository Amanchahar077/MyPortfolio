import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { motion, useScroll, useSpring } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "./data/portfolio";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { AboutSection } from "./sections/AboutSection";
import { ClosingSection } from "./sections/ClosingSection";
import { CertificatesSection } from "./sections/CertificatesSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ResumeSection } from "./sections/ResumeSection";
import { SkillsSection } from "./sections/SkillsSection";
import { BackgroundDepth } from "./components/BackgroundDepth";
import { Footer } from "./components/Footer";
import { IntroLoader } from "./components/IntroLoader";
import { Navbar } from "./components/Navbar";
import { ProjectModal } from "./components/ProjectModal";
import { ResumePreviewModal } from "./components/ResumePreviewModal";

gsap.registerPlugin(ScrollTrigger);

function ScrollProgress({ hidden }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div className="absolute inset-0 bg-[rgba(255,122,24,0.12)]" />
      <motion.div
        aria-hidden
        className="h-full origin-left bg-[#ff7a18] shadow-[0_0_14px_rgba(255,122,24,0.28)]"
        style={{
          scaleX: hidden ? 0 : scaleX,
          transformOrigin: "0% 50%",
        }}
      />
    </div>
  );
}

function App() {
  const rootRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [showIntro, setShowIntro] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (!reducedMotion) {
      setShowIntro(true);
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (!rootRef.current || showIntro || reducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion, showIntro]);

  useEffect(() => {
    const ids = ["about", "skills", "projects", "certificates", "experience", "resume", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const sectionProps = useMemo(() => ({ reducedMotion, isMobile }), [isMobile, reducedMotion]);

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      <ScrollProgress hidden={showIntro} />
      <BackgroundDepth disabled={isMobile || reducedMotion} />
      <IntroLoader visible={showIntro} onComplete={handleIntroComplete} />
      <div className={`relative z-20 transition-opacity duration-700 ${showIntro ? "pointer-events-none opacity-0" : "opacity-100"}`}>
        <Navbar
          items={portfolioData.navItems}
          activeSection={activeSection}
          brandName={portfolioData.identity.name.toUpperCase()}
        />
      </div>

      <div
        data-main-content
        className={`relative z-10 transition-opacity duration-700 ${showIntro ? "pointer-events-none opacity-0" : "opacity-100"}`}
      >
        <main>
          <div data-reveal>
            <HeroSection data={portfolioData.identity} {...sectionProps} />
          </div>
          <div data-reveal>
            <AboutSection data={portfolioData.about} contact={portfolioData.contact} />
          </div>
          <div data-reveal>
            <SkillsSection data={portfolioData.skills} isMobile={isMobile} />
          </div>
          <div data-reveal>
            <ProjectsSection data={portfolioData.projects} onOpenProject={setSelectedProject} />
          </div>
          <div data-reveal>
            <CertificatesSection data={portfolioData.certificates} />
          </div>
          <div data-reveal>
            <ExperienceSection data={portfolioData.experience} />
          </div>
          <div data-reveal>
            <ResumeSection data={portfolioData.resume} onPreview={() => setShowResumePreview(true)} />
          </div>
          <div data-reveal>
            <ContactSection data={portfolioData.contact} />
          </div>
          <div data-reveal>
            <ClosingSection data={portfolioData.closing} />
          </div>
        </main>
        <Footer />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumePreviewModal
        open={showResumePreview}
        file={portfolioData.resume.file}
        onClose={() => setShowResumePreview(false)}
      />
    </div>
  );
}

export default App;
