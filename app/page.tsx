import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { FeaturedProject } from "@/components/featured-project";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Skills } from "@/components/skills";
import { projects } from "@/content/projects";

export default function Home() {
  const featuredProject = projects.find((project) => project.featured);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <FeaturedProject project={featuredProject} />
      <Experience />
      <Skills />
    </>
  );
}
