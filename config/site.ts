export const siteConfig = {
  name: "Sudharsan Portfolio",
  title: "Sudharsan | Shopify Developer",
  description:
    "A modern, data-driven portfolio showcasing Shopify development experience, case studies, and technical expertise.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en",
};

export type SiteConfig = typeof siteConfig;
