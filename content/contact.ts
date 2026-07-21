export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export const contactContent = {
  eyebrow: "Let's Connect",
  heading: "Have a project in mind? Let's build something together.",
  description:
    "Whether you are looking for a Shopify developer for your agency, need help with a store, or simply want to connect—I would love to hear from you.",
  availability: "Available for select opportunities",
  email: "sudhanb1819@gmail.com",
  location: "Chennai, India",
  resume: {
    label: "Download Resume",
    href: "/resume.pdf",
    download: true,
  },
  primaryCta: {
    label: "Send a Message",
    href: "mailto:sudhanb1819@gmail.com",
  },
  secondaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/susan1711",
      ariaLabel: "Visit Sudharsan on GitHub",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sudharsan-bharathi-raja/",
      ariaLabel: "Visit Sudharsan on LinkedIn",
    },
    {
      label: "Email",
      href: "mailto:sudhanb1819@gmail.com",
      ariaLabel: "Send an email to Sudharsan",
    },
  ] satisfies SocialLink[],
} as const;
