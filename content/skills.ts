export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillsContent = {
  eyebrow: "Skills & Technologies",
  title: "Tools I work with daily",
  description:
    "Technologies and tools I use to build modern Shopify experiences.",
  categories: [
    {
      id: "shopify",
      name: "Shopify",
      skills: [
        "Liquid",
        "Theme Development",
        "Sections",
        "App Extensions",
        "Metaobjects",
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      id: "tools-apis",
      name: "Tools & APIs",
      skills: [
        "Git",
        "GitHub",
        "REST APIs",
        "GraphQL (basic)",
      ],
    },
    {
      id: "seo-marketing",
      name: "SEO & Marketing",
      skills: [
        "SEO",
        "Google Search Console",
        "Google Merchant Center",
        "Meta Pixel",
      ],
    },
    {
      id: "ai-performance",
      name: "AI & Performance",
      skills: [
        "Performance Optimization",
        "AI Coding Agents",
        "Prompt Engineering",
      ],
    },
    {
      id: "design",
      name: "Design & UI",
      skills: [
        "UI/UX",
        "Responsive Design",
        "Figma",
        "WordPress",
      ],
    },
  ],
};
