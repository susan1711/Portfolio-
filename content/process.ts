export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const processContent = {
  eyebrow: "My Development Process",
  title: "How I work from idea to launch",
  description:
    "A structured approach to building Shopify experiences that are reliable, scalable, and built to perform.",
  steps: [
    {
      id: "research",
      title: "Research & Understanding",
      description:
        "Dig into the brand, audience, and business goals to define what success looks like before writing any code.",
    },
    {
      id: "planning",
      title: "Planning & Strategy",
      description:
        "Map out the architecture, theme structure, integrations, and timeline to ensure a smooth build process.",
    },
    {
      id: "design",
      title: "Design Alignment",
      description:
        "Translate design files into structured Shopify sections while preserving visual fidelity and merchant editability.",
    },
    {
      id: "development",
      title: "Development",
      description:
        "Build custom Liquid templates, app integrations, and storefront features with clean, maintainable code.",
    },
    {
      id: "testing",
      title: "Test & Optimization",
      description:
        "Test across devices, optimize for performance, and validate every flow before launch.",
    },
    {
      id: "launch",
      title: "Launch",
      description:
        "Deploy the store, configure DNS, verify checkout, and ensure everything runs smoothly in production.",
    },
    {
      id: "support",
      title: "Support & Growth",
      description:
        "Provide post-launch support, monitor performance, and iterate based on real user behavior and business needs.",
    },
  ],
};