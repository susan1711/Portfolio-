import { About } from "@/components/about";
import { FeaturedProject } from "@/components/featured-project";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { projects } from "@/content/projects";

export default function Home() {
  const featuredProject = projects.find((project) => project.featured);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <FeaturedProject project={featuredProject} />
    </>
  );
}
