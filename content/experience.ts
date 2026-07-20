export interface ExperienceItem {
  id: string;
  type: "agency" | "freelance";
  role: string;
  duration: string;
  workType: string;
  companyType: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const experienceContent = {
  eyebrow: "Experience",
  title: "Where I have worked",
  description:
    "My journey building Shopify experiences across agencies and freelance collaborations.",
  totalYears: "2+",
  items: [
    {
      id: "agency",
      type: "agency" as const,
      role: "Shopify Developer",
      duration: "1.3 Years",
      workType: "Agency",
      companyType: "Agency",
      description:
        "Worked with agencies to deliver custom Shopify solutions for diverse clients across fashion, lifestyle, and B2B industries. Collaborated with design and strategy teams to translate business requirements into performant eCommerce experiences.",
      responsibilities: [
        "Theme customization",
        "Liquid development",
        "Store maintenance",
        "Performance optimization",
        "Client communication",
        "Third-party integrations",
        "Payment gateway integration",
        "SEO implementation",
      ],
      achievements: [
        "Delivered 10+ production-ready Shopify storefronts",
        "Improved store performance scores by 30% on average",
        "Built reusable component libraries for faster project onboarding",
      ],
      technologies: [
        "Shopify",
        "Liquid",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      id: "freelance",
      type: "freelance" as const,
      role: "Shopify Developer",
      duration: "7+ Months",
      workType: "Freelance",
      companyType: "Freelance",
      description:
        "Providing end-to-end Shopify development services for D2C brands and startups. Managing complete project lifecycles from initial consultation through design implementation, development, and post-launch support.",
      responsibilities: [
        "End-to-end Shopify store development",
        "Figma to Shopify",
        "Theme customization",
        "App integrations",
        "Store optimization",
        "Google Merchant Center",
        "Meta Pixel",
        "Search Console",
        "SEO",
      ],
      achievements: [
        "Launched 5+ client stores from concept to production",
        "Reduced page load times by 40% through optimization",
        "Established long-term client relationships through quality delivery",
      ],
      technologies: [
        "Shopify",
        "Liquid",
        "JavaScript",
        "Figma",
        "SEO",
        "Google Merchant Center",
        "Meta Pixel",
        "Search Console",
      ],
    },
  ],
};
