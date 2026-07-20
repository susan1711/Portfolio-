export interface Project {
  id: string;
  slug: string;
  featured: boolean;
  name: string;
  website: string | null;
  industry: string;
  role: string;
  duration: string;
  teamSize: string;
  overview: string;
  clientGoal: string;
  responsibilities: string[];
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  results: string[];
  learning: string;
  publiclyAvailable: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: "project-001",
    slug: "ilyzly",
    featured: true,
    name: "Ilyzly",
    website: "https://ilyzly.com",
    industry: "Retail Apparel and Fashion",
    role: "Shopify Developer",
    duration: "Client project",
    teamSize: "Agency collaboration",
    overview:
      "A Shopify storefront for a Chennai-based fashion brand focused on making product discovery, collection browsing, and purchasing feel clear across mobile and desktop.",
    clientGoal:
      "Create a reliable eCommerce experience that supports a growing fashion catalog, communicates the brand clearly, and helps customers move from product discovery to checkout with less friction.",
    responsibilities: [
      "Implemented responsive Shopify theme sections for product, collection, and content-led pages.",
      "Customized Liquid templates and storefront styling to match brand and merchandising needs.",
      "Configured storefront flows around navigation, product discovery, cart behavior, and checkout readiness.",
      "Supported app and platform integrations required for a production Shopify store.",
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML",
      "CSS",
      "Theme Customization",
      "Responsive Development",
    ],
    features: [
      "Responsive collection and product browsing",
      "Custom Shopify theme sections",
      "Brand-aligned storefront pages",
      "Cart and checkout flow support",
      "Mobile-first shopping experience",
    ],
    challenge:
      "The storefront needed to support a fashion catalog with frequent product updates while keeping the buying journey simple for customers browsing from different devices.",
    solution:
      "Built reusable Shopify sections and refined key storefront templates so merchandising content, product details, and customer actions stay clear without requiring layout changes for routine updates.",
    results: [
      "Delivered a production-ready Shopify storefront experience for a public fashion brand.",
      "Improved content maintainability through reusable theme sections and structured storefront areas.",
      "Created a responsive shopping experience aligned with the brand's retail presence.",
    ],
    learning:
      "The project strengthened my approach to balancing brand presentation with practical Shopify maintainability, especially when a store needs to keep changing after launch.",
    publiclyAvailable: true,
    image: "/projects/ilyzly/hero.webp",
  },
  {
    id: "project-002",
    slug: "velzaara",
    featured: false,
    name: "Fashion Storefront",
    website: null,
    industry: "Fashion eCommerce",
    role: "Shopify Developer",
    duration: "Client project",
    teamSize: "Solo implementation",
    overview:
      "A private Shopify storefront build for a fashion catalog with reusable theme sections and responsive product discovery flows.",
    clientGoal:
      "Launch a polished online store that lets the client manage collections, product storytelling, and seasonal updates from Shopify.",
    responsibilities: [
      "Built editable Shopify sections for homepage, collection, and product content.",
      "Translated design direction into responsive storefront templates.",
      "Configured navigation, product display, and cart interactions.",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    features: [
      "Editable homepage sections",
      "Responsive product grid",
      "Collection-led navigation",
      "Product detail template customization",
    ],
    challenge:
      "The client needed a store that looked refined while remaining easy to update without developer involvement.",
    solution:
      "Created reusable theme sections and content controls so routine merchandising changes could happen directly inside Shopify.",
    results: [
      "Delivered a maintainable Shopify storefront for ongoing catalog updates.",
      "Reduced the need for layout changes when new products or campaigns are added.",
    ],
    learning:
      "This project reinforced the value of building Shopify sections around real merchant workflows instead of one-off page layouts.",
    publiclyAvailable: false,
    image: "/projects/velzaara/hero.webp",
  },
  {
    id: "project-003",
    slug: "seams-to-love",
    featured: false,
    name: "Lifestyle Shopify Store",
    website: null,
    industry: "Lifestyle eCommerce",
    role: "Shopify Developer",
    duration: "Client project",
    teamSize: "Agency collaboration",
    overview:
      "A Shopify customization project for a lifestyle brand, focused on improving content flexibility and storefront consistency.",
    clientGoal:
      "Refine the shopping experience and give the internal team better control over brand content and product merchandising.",
    responsibilities: [
      "Customized existing Shopify theme sections and templates.",
      "Improved responsive behavior across key storefront pages.",
      "Integrated app-driven content where it supported the buying experience.",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Shopify Apps"],
    features: [
      "Custom content sections",
      "Responsive layout refinements",
      "App integration support",
      "Collection and product page improvements",
    ],
    challenge:
      "Existing storefront areas were difficult to update consistently across campaigns and device sizes.",
    solution:
      "Refactored key theme areas into reusable, configurable sections with cleaner responsive rules.",
    results: [
      "Improved storefront consistency across mobile, tablet, and desktop views.",
      "Made content updates easier for non-technical store managers.",
    ],
    learning:
      "The work sharpened my ability to improve existing Shopify themes without disrupting live merchant workflows.",
    publiclyAvailable: false,
    image: "/projects/seams-to-love/hero.webp",
  },
  {
    id: "project-004",
    slug: "alankar-chennai",
    featured: false,
    name: "B2B Catalog Store",
    website: null,
    industry: "B2B Commerce",
    role: "Shopify Developer",
    duration: "Client project",
    teamSize: "Solo implementation",
    overview:
      "A Shopify catalog experience shaped around practical product browsing, inquiry-led decisions, and clear information hierarchy.",
    clientGoal:
      "Present products professionally online and make it easier for buyers to understand offerings before starting a conversation.",
    responsibilities: [
      "Structured product and collection templates around buyer-facing information.",
      "Built reusable sections for catalog, trust, and inquiry content.",
      "Improved responsive presentation for dense product information.",
    ],
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    features: [
      "Catalog-focused collection pages",
      "Structured product information",
      "Reusable inquiry sections",
      "Responsive content hierarchy",
    ],
    challenge:
      "The store needed to communicate detailed product information without making browsing feel heavy or cluttered.",
    solution:
      "Organized page sections around scannable buyer decisions, with clear grouping for product details, trust signals, and inquiry actions.",
    results: [
      "Created a clearer catalog browsing flow for B2B visitors.",
      "Gave the client reusable content areas for future product updates.",
    ],
    learning:
      "This project helped me think more carefully about Shopify stores where the primary conversion path is inquiry and trust, not only checkout.",
    publiclyAvailable: false,
    image: "/projects/alankar-chennai/hero.webp",
  },
  {
    id: "project-005",
    slug: "angelic-weaves",
    featured: false,
    name: "Figma to Shopify Theme",
    website: null,
    industry: "D2C eCommerce",
    role: "Shopify Developer",
    duration: "Client project",
    teamSize: "Agency collaboration",
    overview:
      "A design implementation project translating approved Figma layouts into editable Shopify theme sections.",
    clientGoal:
      "Bring a designed storefront experience into Shopify while preserving visual quality and keeping the store manageable after handoff.",
    responsibilities: [
      "Converted Figma layouts into responsive Shopify theme sections.",
      "Matched spacing, typography, and interaction details across breakpoints.",
      "Prepared editable settings for recurring content patterns.",
    ],
    technologies: ["Figma", "Shopify", "Liquid", "JavaScript", "CSS"],
    features: [
      "Figma-matched responsive sections",
      "Theme editor controls",
      "Reusable content blocks",
      "Mobile layout refinements",
    ],
    challenge:
      "The implementation needed to stay close to the design while still behaving like a practical Shopify theme.",
    solution:
      "Mapped the design into reusable section patterns and Shopify settings so the final build stayed editable instead of becoming static markup.",
    results: [
      "Delivered design-faithful Shopify sections ready for merchant editing.",
      "Maintained visual consistency across common device sizes.",
    ],
    learning:
      "The project reinforced how important it is to translate design systems into Shopify editing systems, not just pixel layouts.",
    publiclyAvailable: false,
    image: "/projects/angelic-weaves/hero.webp",
  },
  {
    id: "project-006",
    slug: "enzymatic-enviro",
    featured: false,
    name: "Store Optimization",
    website: null,
    industry: "Shopify Operations",
    role: "Shopify Developer",
    duration: "Client project",
    teamSize: "Solo implementation",
    overview:
      "A Shopify maintenance and optimization project focused on theme cleanup, storefront usability, and integration support.",
    clientGoal:
      "Improve the reliability and day-to-day usability of an existing Shopify store without rebuilding the storefront from scratch.",
    responsibilities: [
      "Reviewed theme structure and simplified fragile storefront areas.",
      "Adjusted responsive issues across priority templates.",
      "Supported third-party app configuration and storefront compatibility.",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Shopify Apps"],
    features: [
      "Theme cleanup",
      "Responsive issue fixes",
      "App integration support",
      "Storefront usability refinements",
    ],
    challenge:
      "The existing store had accumulated small layout and integration issues that made routine updates harder than necessary.",
    solution:
      "Focused on targeted fixes, cleaner theme patterns, and practical integration adjustments that improved maintainability without a full redesign.",
    results: [
      "Improved storefront stability across key customer paths.",
      "Made the theme easier to maintain for future updates.",
    ],
    learning:
      "This work strengthened my habit of solving Shopify issues with focused, low-risk changes that respect the existing store.",
    publiclyAvailable: false,
    image: "/projects/enzymatic-enviro/hero.webp",
  },
];
