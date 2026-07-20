import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { projectDetails, getProjectDetail } from "@/content/project-details";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectNavigation } from "@/components/project/project-navigation";
import { ProjectOverview } from "@/components/project/project-overview";
import { ProjectResults } from "@/components/project/project-results";
import { ProjectTechStack } from "@/components/project/project-tech-stack";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectDetails.findIndex((p) => p.slug === slug);
  const previous = currentIndex > 0 ? projectDetails[currentIndex - 1] : null;
  const next =
    currentIndex < projectDetails.length - 1
      ? projectDetails[currentIndex + 1]
      : null;

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-16 w-full items-center border-b border-border/70 bg-background/80 backdrop-blur-lg">
        <Container size="content">
          <Link
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            href="/#projects"
          >
            &larr; Back to Home
          </Link>
        </Container>
      </nav>

      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectTechStack project={project} />
      <ProjectGallery project={project} />
      <ProjectResults project={project} />

      <footer>
        <ProjectNavigation previous={previous} next={next} />
      </footer>
    </>
  );
}
