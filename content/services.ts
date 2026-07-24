export interface Service {
  id: string;
  title: string;
  description: string;
}

export const servicesContent = {
  eyebrow: "What I Do",
  title: "Services & Expertise",
  description:
    "End-to-end Shopify development services to help your brand build, grow, and scale online.",
  services: [
    {
      id: "digital-implementation",
      title: "Digital Implementation",
      description:
        "Transform Figma designs into pixel-perfect, responsive Shopify storefronts using modern Liquid and theme development best practices.",
    },
    {
      id: "shopify-development",
      title: "Shopify Development",
      description:
        "Custom theme development, section building, and store customization tailored to your brand's unique requirements.",
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      description:
        "Improve store speed, Core Web Vitals, and overall user experience through code optimization and best practices.",
    },
    {
      id: "integrations-apis",
      title: "Integrations & APIs",
      description:
        "Seamlessly connect third-party apps, payment gateways, and custom APIs to extend your store's capabilities.",
    },
    {
      id: "growth-marketing",
      title: "Growth & Marketing",
      description:
        "Set up Google Merchant Center, Meta Pixel, SEO foundations, and conversion-focused storefront optimizations.",
    },
    {
      id: "modern-workflow",
      title: "Modern Workflow",
      description:
        "Leverage AI-assisted development, version control, and modern tooling for efficient, maintainable project delivery.",
    },
  ],
};