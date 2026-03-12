import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "./data/portfolio";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { AboutSection } from "./sections/AboutSection";
import { ClosingSection } from "./sections/ClosingSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ResumeSection } from "./sections/ResumeSection";
import { SkillsSection } from "./sections/SkillsSection";
import { BackgroundDepth } from "./components/BackgroundDepth";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { IntroLoader } from "./components/IntroLoader";
import { Navbar } from "./components/Navbar";
import { ProjectModal } from "./components/ProjectModal";
import { ResumePreviewModal } from "./components/ResumePreviewModal";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const rootRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [showIntro, setShowIntro] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const hasVisited = window.localStorage.getItem("aman-chahar-intro-seen");
    if (!hasVisited && !reducedMotion) {
      setShowIntro(true);
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (!rootRef.current || showIntro || reducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.from("[data-main-content]", {
        opacity: 0,
        y: 18,
        duration: 0.9,
        ease: "power3.out",
      });

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
    const ids = ["about", "skills", "projects", "experience", "resume", "contact"];
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
    window.localStorage.setItem("aman-chahar-intro-seen", "true");
    setShowIntro(false);
  };

  const sectionProps = useMemo(() => ({ reducedMotion, isMobile }), [isMobile, reducedMotion]);

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      <BackgroundDepth disabled={isMobile || reducedMotion} />
      <CustomCursor disabled={isMobile || reducedMotion} />
      <IntroLoader visible={showIntro} onComplete={handleIntroComplete} />

      <div
        data-main-content
        className={`relative z-10 transition-opacity duration-700 ${showIntro ? "pointer-events-none opacity-0" : "opacity-100"}`}
      >
        <Navbar
          items={portfolioData.navItems}
          activeSection={activeSection}
          brandName={portfolioData.identity.name.toUpperCase()}
        />
        <main>
          <div data-reveal>
            <HeroSection data={portfolioData.identity} {...sectionProps} />
          </div>
          <div data-reveal>
            <AboutSection data={portfolioData.about} />
          </div>
          <div data-reveal>
            <SkillsSection data={portfolioData.skills} isMobile={isMobile} />
          </div>
          <div data-reveal>
            <ProjectsSection data={portfolioData.projects} onOpenProject={setSelectedProject} />
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
