import { projects } from "@/content/projects";

export interface ProjectDetail {
  slug: string;
  name: string;
  category: string;
  role: string;
  duration: string;
  website: string | null;
  status: "Live" | "Private" | "Archived";
  availability: string;
  overview: string;
  clientGoal: string;
  responsibilities: string[];
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  results: {
    launchStatus: string | null;
    performanceImprovements: string | null;
    uxImprovements: string | null;
    businessOutcome: string | null;
  };
  learning: string;
  gallery: { src: string; alt: string }[];
}

function toAvailability(publiclyAvailable: boolean): string {
  return publiclyAvailable ? "Public" : "Private";
}

function toStatus(publiclyAvailable: boolean): "Live" | "Private" | "Archived" {
  return publiclyAvailable ? "Live" : "Private";
}

export const projectDetails: ProjectDetail[] = projects.map((p) => ({
  slug: p.slug,
  name: p.name,
  category: p.industry,
  role: p.role,
  duration: p.duration,
  website: p.website,
  status: toStatus(p.publiclyAvailable),
  availability: toAvailability(p.publiclyAvailable),
  overview: p.overview,
  clientGoal: p.clientGoal,
  responsibilities: p.responsibilities,
  technologies: p.technologies,
  features: p.features,
  challenge: p.challenge,
  solution: p.solution,
  results: {
    launchStatus: p.publiclyAvailable ? "Live and accessible to users" : null,
    performanceImprovements: null,
    uxImprovements: null,
    businessOutcome: null,
  },
  learning: p.learning,
  gallery: [],
}));

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug);
}
