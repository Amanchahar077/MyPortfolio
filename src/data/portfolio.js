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
    { label: "Certificates", href: "#certificates" },
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
      {
        title: "Languages",
        icon: "braces",
        items: ["C++", "TypeScript", "JavaScript", "Python", "C"],
      },
      {
        title: "Frontend",
        icon: "layers",
        items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
      },
      {
        title: "Backend",
        icon: "server",
        items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware"],
      },
      {
        title: "Database",
        icon: "database",
        items: ["MongoDB", "PostgreSQL"],
      },
      {
        title: "Tools",
        icon: "wrench",
        items: ["Git", "Postman", "MongoDB Compass", "Figma", "Docker"],
      },
      {
        title: "Concepts",
        icon: "spark",
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
        id: "interviewiq",
        title: "InterviewIQ",
        subtitle: "AI-Powered Interview Practice And Evaluation Platform",
        category: "Full-Stack Product",
        accent: "orange",
        github: "https://github.com/Amanchahar077/InterviewIQ",
        demo: "",
        stats: ["Resume upload", "Credit access", "Performance reports"],
        summary:
          "A full-stack AI interview platform where users upload resumes and receive personalized technical and HR interview questions with guided practice workflows.",
        problem:
          "Interview preparation is often generic and fragmented, making it difficult for candidates to practice role-relevant questions, track progress, and receive structured feedback.",
        role:
          "Built the product end to end across frontend experience, backend APIs, authentication, monetization flow, and report-oriented interview tracking.",
        impact:
          "Converted a static preparation process into an interactive AI-driven interview workflow with personalization, secure access, and measurable progress visibility.",
        standoutDecision:
          "Used a credit-based usage system with integrated payments to align platform monetization with actual interview-practice consumption.",
        architecture: [
          "MERN stack application with modular APIs for interviews, history, and user workflows",
          "Firebase authentication layer for secure Google sign-in and session handling",
          "Razorpay payment integration for credit purchase and controlled platform usage",
          "Interview history and reporting components for tracking practice outcomes over time",
        ],
        technicalDecisions: [
          "Implemented resume-based personalization to generate more relevant interview prompts",
          "Added secure authentication with Firebase to streamline sign-in and protect routes",
          "Designed credit accounting to gate premium usage in a predictable way",
          "Built responsive UI interactions with smooth transitions and structured feedback views",
        ],
        metrics: ["Resume upload", "Credit-based access", "Interview history", "Performance reports"],
        techStack: ["MongoDB", "Express.js", "React", "Node.js", "Firebase", "Razorpay"],
      },
      {
        id: "smartagro",
        title: "SmartAgro",
        subtitle: "AI Powered Crop Monitoring System",
        category: "Applied AI / AgriTech",
        accent: "cyan",
        github: "https://github.com/Amanchahar077/SMART-AGRO",
        demo: "",
        stats: ["Disease detection", "Pest prediction", "Smart irrigation"],
        summary:
          "An AI-powered agriculture platform built on the MERN stack that helps farmers and agri teams make data-driven decisions using crop analysis, soil insights, weather intelligence, and predictive recommendations.",
        problem:
          "Farm decisions are often made with delayed or fragmented information, which increases crop risk, slows intervention, and limits precision in disease response, irrigation planning, and nutrient management.",
        role:
          "Built the full-stack product architecture, responsive frontend workflows, secure backend APIs, and AI-integrated analysis modules for disease detection, pest risk prediction, and actionable reporting.",
        impact:
          "Transformed scattered farm observations into one unified decision system with real-time health insights, weather-aware planning, and downloadable analysis reports for consistent monitoring.",
        standoutDecision:
          "Combined AI recommendations with weather and geolocation context so irrigation and crop-health actions are tailored to field conditions rather than generic thresholds.",
        architecture: [
          "React frontend with dashboard-driven workflows for crop, soil, and report visibility",
          "Node.js and Express.js backend with modular REST APIs for AI analysis and history management",
          "MongoDB and Mongoose data layer for users, AI outputs, and structured report records",
          "Integrated Gemini AI, weather APIs, and geolocation services for predictive and region-aware recommendations",
        ],
        technicalDecisions: [
          "Implemented image-based plant disease detection with fast inference-oriented API responses",
          "Added pest risk prediction and soil health scoring with nutrient deficiency signal handling",
          "Built weather intelligence support with live conditions and 7-day forecasting",
          "Enabled report export workflows for analysis outputs in portable formats",
        ],
        metrics: ["Crop monitoring", "Soil insights", "Weather forecasting", "Exportable reports"],
        techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Framer Motion", "Gemini AI", "JWT"],
      },
      {
        id: "ai-fact-checker",
        title: "AI Fact Checker",
        subtitle: "Evidence-Based Claim Verification System",
        category: "Applied AI",
        accent: "violet",
        github: "https://github.com/Amanchahar077/ai_fact_checker",
        demo: "https://ai-fact-checker-zq8j.onrender.com/",
        stats: ["BART MNLI", "NLTK pipeline", "Live verdicts"],
        summary:
          "An AI-driven fact-checking system that classifies claims and returns evidence-based verification results through a responsive web experience.",
        problem:
          "Online claims spread quickly, but users rarely have a fast and accessible way to test a statement, understand model confidence, and review supporting evidence in one place.",
        role:
          "Built the project end to end, covering NLP preprocessing, Hugging Face model integration, fallback verification logic, and the user-facing interface for entering claims and reading verdicts.",
        impact:
          "Created a practical fact-checking workflow that turns raw user input into structured verification output with confidence signals, supporting evidence, and a smoother user experience during inference.",
        standoutDecision:
          "Added fallback mechanisms such as local heuristics and knowledge-base matching so the product remains more reliable even when upstream API calls fail or return weak responses.",
        architecture: [
          "Python backend flow for claim processing, classification, and evidence-oriented response formatting",
          "Hugging Face BART MNLI integration for natural language inference based claim verification",
          "NLTK preprocessing pipeline for cleaner text normalization and stronger input handling",
          "Responsive HTML, CSS, JavaScript, and Bootstrap interface for real-time verdict and evidence display",
        ],
        technicalDecisions: [
          "Used BART MNLI to classify claims and support explainable verification output",
          "Integrated NLTK preprocessing to improve text quality before model evaluation",
          "Built fallback logic with heuristics and knowledge-base matching for API failure scenarios",
          "Designed the frontend to surface verdicts, confidence scores, and supporting evidence clearly",
        ],
        metrics: ["Evidence-based verification", "Confidence scores", "Fallback reliability", "Responsive UI"],
        techStack: ["Python", "HTML", "CSS", "JavaScript", "Bootstrap", "Hugging Face", "NLTK"],
      },
      {
        id: "billify",
        title: "Billify",
        subtitle: "Billing And Invoicing Workspace For Small Teams",
        category: "Full-Stack Product",
        accent: "emerald",
        github: "https://github.com/Amanchahar077/billify",
        demo: "",
        stats: ["Invoice preview", "JWT auth", "CSV export"],
        summary:
          "A full-stack billing workspace designed for small teams, with customer management, reusable product catalogs, invoice creation, and print-ready previews in one operational flow.",
        problem:
          "Small teams often manage billing across scattered spreadsheets, ad hoc records, and repetitive invoice workflows, which makes customer tracking, catalog reuse, and invoice generation slower and more error-prone.",
        role:
          "Built the product as an end-to-end full-stack system, shaping the React and Vite frontend, modular Express APIs, authentication flow, MongoDB data modeling, and reporting-oriented billing workflows.",
        impact:
          "Turned a fragmented billing process into a structured workspace that supports day-to-day invoicing, faster customer lookup, reusable product data, and lightweight reporting for operational visibility.",
        standoutDecision:
          "Treated billing as an operational workspace instead of a single invoice form, which made customer records, catalog reuse, secure sessions, reporting, and print-ready invoice generation feel like one connected product.",
        architecture: [
          "React and Vite frontend for billing, customer, and invoice management flows",
          "Express API with modular route structure for auth, customers, catalog, invoices, and reports",
          "MongoDB and Mongoose models for persistent customer, product, session, and billing data",
          "Invoice preview workflow optimized for print-ready output and repeatable internal use",
        ],
        technicalDecisions: [
          "Implemented secure authentication and session handling with bcryptjs and JWT",
          "Used reusable product catalog records to reduce repeated invoice entry work",
          "Added monthly revenue summaries and CSV export using json2csv for reporting needs",
          "Optimized customer lookup and dashboard workflows for faster everyday team operations",
        ],
        metrics: ["Customer management", "Revenue summary", "CSV export", "Print-ready invoices"],
        techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs"],
      },
    ],
  },
  certificates: {
    eyebrow: "Certifications",
    title: "Certificates that back technical curiosity and continuous learning.",
    copy:
      "Focused training and project credentials across AI workflows, product experimentation, and security-oriented analysis.",
    moreButton: {
      label: "More Certificates",
      href: "https://drive.google.com/drive/folders/1wqnJjWPMUHgCUL18rn7VnZqxyyAQzWEZ",
    },
    items: [
      {
        id: "cert-1",
        issuer: "Oracle University",
        title: "OCI 2025 Certified Generative AI Professional",
        description:
          "Oracle Certified Professional recognition for Oracle Cloud Infrastructure 2025 Generative AI expertise.",
        tags: ["Oracle", "Generative AI", "Cloud"],
        href: "https://drive.google.com/drive/folders/1yHiCiihpXLWOWXPG8E6oyLhNkMgfBR9I",
        month: "Oct 2025",
        accent: "orange",
      },
      {
        id: "cert-2",
        issuer: "CipherSchools",
        title: "Git and GitHub Training Certificate",
        description:
          "Certificate of completion for Git and GitHub training awarded by CipherSchools.",
        tags: ["Git", "GitHub", "Version Control"],
        href: "https://drive.google.com/drive/folders/1FeqvlD6kQkl_0JjVBBxaPhGjCKnq-KEu",
        month: "Jul 2025",
        accent: "cyan",
      },
      {
        id: "cert-3",
        issuer: "Lovely Professional University",
        title: "Java Programming (72 Hours) Certificate",
        description:
          "Certificate of completion for a 72-hour Java Programming course on the iamneo platform.",
        tags: ["Java", "Programming", "LPU"],
        href: "https://drive.google.com/drive/folders/1nefltCobHrqVBh0znqUsjdU3N7Recg0F",
        month: "May 2025",
        accent: "amber",
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
    file: "/resume/AmanChaharCV.pdf",
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
