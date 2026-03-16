export const portfolioData = {
  identity: {
    name: "Aman Chahar",
    theme: "Full-Stack Portfolio",
    summary:
      "Computer Science student building premium web platforms, scalable fullstack systems, and AI-native softwares with a product mindset.",
    heroRoles: [
      "Full Stack Developer",
      "Tech Enthusiast",
      "Web/App Builder",
      "Java Programmer"
    ],
    heroButtons: [
      { label: "View Projects", href: "#projects", variant: "primary" },
      { label: "Download Resume", href: "#resume", variant: "secondary" },
      {
        label: "GitHub",
        href: "https://github.com/Amanchahar077",
        variant: "ghost",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aman-chahar077/",
        variant: "ghost",
        external: true,
      },
    ],
    heroSideCard: {
      title: "Available for internships and product roles",
      focusTitle: "Current Focus",
      focus:
        "Scalable fullstack systems, web/app product workflows, and polished frontend execution.",
      capabilities: [
        {
          label: "MERN",
          value: "Product-grade development",
        },
        {
          label: "FULLSTACK",
          value: "Intelligent systems design",
        },
      ],
    },
  },
  navItems: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    eyebrow: "About",
    title: "Engineering software that feels both intelligent and refined.",
    copy:
      "Computer Science (Full-Stack) student at Lovely Professional University focused on building scalable systems, Intelligent AI integrated applications, and modern web/app platforms.",
    leadCard: {
      institution: "Lovely Professional University",
      meta: "B.Tech CSE (Full-Stack)  •  Building Full-stack and AI-integrated products",
      statement:
        "Focused on shipping scalable web platforms, stronger backend systems, and polished user experiences that feel credible from the first interaction.",
      badges: ["MERN", "Java", "System Design", "React", "Node.js", "MongoDB"],
    },
    supporting:
      "I work at the intersection of product design, system architecture, with a preference for software that ships cleanly and scales responsibly.",
    chips: [
      "distributed systems",
      "AI-driven applications",
      "SaaS platforms",
      "developer tooling",
    ],
    stats: [
      { value: "12+", label: "Projects Built" },
      { value: "18+", label: "Technologies Used" },
      { value: "2", label: "Internships Completed" },
    ],
    highlights: [
      {
        title: "AI-integrated products",
        body: "Designing software that feels intelligent, not just automated.",
      },
      {
        title: "Production-minded systems",
        body: "Building platforms with safer rollout patterns and sharp execution.",
      },
      {
        title: "Recruiter-ready polish",
        body: "Shipping interfaces that communicate credibility in the first few seconds.",
      },
    ],
    photo: "/images/tej-praval.png",
  },
  skills: {
    eyebrow: "Skills",
    title:
      "A modern stack across product interfaces, APIs, data, and systems design.",
    copy:
      "Each tool is presented with the same emphasis: capability matters, but execution quality matters more.",
    groups: [
      { title: "Languages", items: ["C++", "TypeScript", "JavaScript","Java" , "Python", "C"] },
      { title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind"] },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware"],
      },
      { title: "Database", items: ["MongoDB", "MySQL"] },
      { title: "Tools", items: ["Git", "Postman", "MongoDB Compass", "Figma"] },
      {
        title: "Concepts",
        items: ["RBAC", "API Security", "Policy Versioning", "DSA"],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title:
      "Selected builds with stronger product framing, technical depth, and execution clarity.",
    copy:
      "Instead of just listing stacks, these projects explain the problem, the role, the impact, and the technical decisions that mattered.",
    items: [
      {
        id: "startupmatch",
        title: "StartupMatch",
        subtitle: "AI Co-Founder Finder",
        category: "Flagship SaaS",
        accent: "orange",
        github: "https://github.com/Tejpraval/groupprojectstartupmatch",
        demo: "https://groupprojectstartupmatch.vercel.app/",
        stats: ["AI scoring", "Live chat", "Admin analytics"],
        summary:
          "A founder-matching platform designed to help early-stage builders discover aligned collaborators with stronger intent and better fit signals.",
        problem:
          "Early-stage founders often struggle to identify collaborators who match both capability and execution style. Generic directories rarely provide useful quality signals.",
        role:
          "Led product framing, full-stack execution, experience polish, and feature shaping around matching, communication, and admin oversight.",
        impact:
          "Turned a vague networking problem into a guided product journey with smarter discovery, better collaborator context, and direct communication paths.",
        standoutDecision:
          "Used AI-assisted scoring and layered profile context to make matches feel actionable rather than purely social.",
        architecture: [
          "React client with focused onboarding and profile flows",
          "Node and Express APIs for profile, recommendation, and chat orchestration",
          "MongoDB-backed data model for users, signals, and match metadata",
          "Admin analytics surface for platform visibility and moderation support",
        ],
        technicalDecisions: [
          "Balanced recommendation signal clarity with fast onboarding",
          "Kept chat and scoring flows separate to simplify backend evolution",
          "Framed analytics as an operator tool instead of a passive dashboard",
        ],
        metrics: ["AI scoring", "Live chat", "Admin analytics"],
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "AI workflows"],
      },
      {
        id: "governance",
        title: "Governance Control Plane",
        subtitle: "Multi-Tenant Policy Lifecycle Engine",
        category: "Backend / Systems",
        accent: "cyan",
        github: "https://github.com/Tejpraval/tms",
        demo: "",
        stats: ["Simulation", "Approval flow", "Rollback"],
        summary:
          "A backend-first system for managing policy changes with safer rollout controls, tenant-aware governance, and auditable approval patterns.",
        problem:
          "Governance workflows often fail because policy changes are hard to validate before release and risky to unwind after deployment.",
        role:
          "Designed the systems framing, policy lifecycle flow, and API structure with an emphasis on simulation, approval, and rollback safety.",
        impact:
          "Created a more production-minded governance model that treats configuration changes like controlled releases instead of raw admin edits.",
        standoutDecision:
          "Positioned policy changes as versioned artifacts with simulation and rollback built into the lifecycle.",
        architecture: [
          "Tenant-scoped policy model with version history",
          "Approval pipeline for gated transitions",
          "Simulation stage to inspect downstream effects before release",
          "Rollback path for safer incident handling",
        ],
        technicalDecisions: [
          "Separated policy drafting from activation state",
          "Made rollback a first-class workflow instead of an afterthought",
          "Kept lifecycle states explicit for better operational reasoning",
        ],
        metrics: ["Simulation", "Approval flow", "Rollback"],
        techStack: ["Node.js", "Express.js", "MongoDB", "RBAC", "API Security"],
      },
      {
        id: "sentiment",
        title: "Sentiment Analysis of Social Media Comments",
        subtitle: "Coca-Cola Comment Classification",
        category: "Applied AI",
        accent: "violet",
        github:
          "https://github.com/Tejpraval/Sentiment_Analysis_of_Social_Media_Comments",
        demo: "",
        stats: ["88.88% accuracy", "TensorFlow", "Scikit-learn"],
        summary:
          "Applied machine learning workflow for classifying social media sentiment around branded content.",
        problem:
          "Brand comment streams contain noisy sentiment patterns that are difficult to classify manually at scale.",
        role:
          "Handled preprocessing, model experimentation, evaluation, and result framing for a supervised sentiment pipeline.",
        impact:
          "Produced an interpretable classification workflow with strong benchmark accuracy for the selected dataset.",
        standoutDecision:
          "Focused on disciplined preprocessing and comparative experimentation rather than chasing unnecessary model complexity.",
        architecture: [
          "Text preprocessing and dataset normalization",
          "Supervised training pipeline for sentiment labels",
          "Evaluation layer for accuracy comparison and result review",
        ],
        technicalDecisions: [
          "Used structured preprocessing to reduce label noise",
          "Compared classical and deep learning-oriented approaches",
          "Optimized for explainable results within project scope",
        ],
        metrics: ["88.88% accuracy"],
        techStack: ["Python", "TensorFlow", "Scikit-learn"],
      },
      {
        id: "flag-quiz",
        title: "Flag Challenge Quiz",
        subtitle: "Interactive Geography Quiz Game",
        category: "Frontend Product",
        accent: "emerald",
        github: "https://github.com/Tejpraval/Falgquiz",
        demo: "https://tejflagquiz.ccbp.tech/",
        stats: ["10-second timer", "Theme toggle", "Responsive gameplay"],
        summary:
          "A polished quiz experience focused on responsive pacing, interaction clarity, and approachable game mechanics.",
        problem:
          "Casual quiz products often feel flat or repetitive without time pressure and feedback loops that keep play engaging.",
        role:
          "Built the interface, gameplay flow, responsive behavior, and feature polish around timing, theming, and user feedback.",
        impact:
          "Delivered a more energetic browser-based geography game with clear progression and strong mobile support.",
        standoutDecision:
          "Used fast visual feedback and timer pressure to create momentum without making the experience feel stressful.",
        architecture: [
          "Responsive frontend state-driven quiz flow",
          "Timed interaction loop with scoring",
          "Theme-aware UI layer for presentation control",
        ],
        technicalDecisions: [
          "Kept game logic simple and deterministic",
          "Used responsive layout behavior from the start",
          "Prioritized interaction rhythm and visual clarity",
        ],
        metrics: ["10-second timer", "Theme toggle", "Responsive gameplay"],
        techStack: ["React", "JavaScript", "CSS"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title:
      "Hands-on exposure across applied AI experimentation and frontend delivery.",
    copy:
      "A compact timeline of internships that shaped both technical breadth and execution discipline.",
    items: [
      {
        role: "Java Intern",
        company: "ElevateLabs",
        dates: "Sep 25, 2025 - Nov 25, 2025",
        description:
          "Applied object-oriented design principles and implemented reusable utility classes to enhance code maintainability and boost system performance by 25%.",
        certificate:
          "https://drive.google.com/drive/folders/1eP99LshVhQbavb_81fN-8z0sMsI_Df5G",
      },
      {
        role: "Placement Coordinator",
        company: "Department of career services LPU",
        dates: "Dec 20, 2023 - Present",
        description:
          "Assisted the Department of career services as student placement coordinator. ",
        certificate:
          "https://drive.google.com/drive/folders/1BLNxY-JlUh4p5pw-RR6QJimX1iVVOMpO",
      },
    ],
  },
  resume: {
    eyebrow: "Resume",
    title: "Download Resume",
    copy:
      "A polished, recruiter-ready CV presented as an interactive artifact rather than a plain file link.",
    file: "/resume/Tej_Praval_Resume.pdf",
    cardTitle: "Aman's Resume",
    description:
      "Premium PDF CV with full-stack and product engineering experience.",
    pills: ["PDF"],
  },
  contact: {
    eyebrow: "Contact",
    title:
      "Open to ambitious products, internships, and serious engineering conversations.",
    copy:
      "Reach out through the channel that fits best. Every card is interactive and ready to launch the right destination.",
    cards: [
      {
        label: "Email",
        value: "amanchahar828@gmail.com",
        href: "mailto:amanchahar828@gmail.com",
      },
      {
        label: "Phone",
        value: "+91 9302971271",
        href: "tel:+919302971271",
      },
      {
        label: "LinkedIn",
        value: "Aman Chahar",
        href: "https://www.linkedin.com/in/aman-chahar077/",
      },
      {
        label: "GitHub",
        value: "Amanchahar077",
        href: "https://github.com/Amanchahar077",
      },
    ],
    panel: {
      title: "Why This Portfolio Exists",
      subtitle: "To make technical range visible before the first interview.",
      bullets: [
        "Hands-on across backend systems, frontend delivery, and applied AI workflows",
        "Experience building products with realtime, SaaS, governance, and NLP use cases",
        "Strong bias toward shipping polished interfaces with technical depth underneath",
      ],
    },
  },
  closing: {
    chip: "Closing Note",
    title:
      "Built to signal taste, clarity, and technical depth before the first conversation.",
    copy:
      "This portfolio reflects how I like to build: with product thinking, engineering range, and execution quality carried through the details.",
    buttons: [
      { label: "Start a Conversation", href: "#contact", variant: "primary" },
      { label: "View Resume", href: "#resume", variant: "secondary" },
    ],
    pillars: [
      "Open to internships, product roles, and serious startup opportunities",
      "Comfortable contributing across UI polish, backend architecture, and AI-driven features",
      "Best fit for teams that value execution quality, curiosity, and thoughtful systems design",
    ],
  },
};
