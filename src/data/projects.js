export const PLACEHOLDER_DETAIL = "Placeholder — add verified details here.";

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web Development" },
  { id: "int", label: "Integrations" },
];

export const projects = [
  {
    slug: "setu",
    title: "SETU Partner App",
    categories: ["mobile", "int"],
    preview: "phone",
    tone: "a",
    tag: "Featured · Professional project",
    label: "Professional project",
    summary: "Healthcare technology · React Native",
    tags: ["React Native", "Redux Toolkit", "BLE", "QR scanning", "Payments"],
    links: [{ label: "View details", to: "/projects/setu" }],
    description:
      "A healthcare technology mobile app built with React Native at eHealth Tech Systems. Shown at a high level only: no confidential company, patient or proprietary details.",
    features: [
      "Healthcare booking workflows",
      "Patient and laboratory-related interfaces",
      "Payment integration",
      "BLE-enabled medical device integrations",
      "QR scanning and third-party SDK integration",
      "API-driven application functionality",
    ],
    role: "Software Developer at eHealth Tech Systems. Add your specific responsibilities.",
    stack: ["React Native", "Redux Toolkit", "BLE", "QR scanning", "Payments"],
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    categories: ["web"],
    preview: "bar",
    tone: "b",
    tag: "Personal project",
    label: "Personal project",
    summary: "Responsive developer portfolio",
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: [
      { label: "View details", to: "/projects/portfolio" },
      { label: "Source code (add link)", href: "#" },
    ],
    description: "This site: a responsive, single-page developer portfolio.",
    features: [
      "Responsive layouts",
      "Project filters and case studies",
      "Contact form with validation",
    ],
    role: "Design and development.",
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    slug: "django",
    title: "Python & Django Web App",
    categories: ["web"],
    preview: "bar",
    tone: "c",
    tag: "Personal project",
    label: "Personal project",
    summary: "Full stack web application",
    tags: ["Python", "Django", "HTML5"],
    links: [
      { label: "View details", to: "/projects/django" },
      { label: "Source code (add link)", href: "#" },
    ],
    description: "Placeholder — add the project description.",
    features: null,
    role: PLACEHOLDER_DETAIL,
    stack: ["Python", "Django", "HTML5"],
  },
  {
    slug: "integration",
    title: "Hardware & API Integration",
    categories: ["int", "mobile"],
    preview: "phone",
    tone: "a",
    tag: "Concept · placeholder",
    label: "Concept · placeholder",
    summary: "Placeholder — add a real integration project",
    tags: ["BLE", "REST APIs", "SDKs"],
    links: [{ label: "View details", to: "/projects/integration" }],
    description: "Placeholder — add a real hardware or API integration project.",
    features: null,
    role: PLACEHOLDER_DETAIL,
    stack: ["BLE", "REST APIs", "SDKs"],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug) {
  return projects.filter((project) => project.slug !== slug);
}
