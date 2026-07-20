import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { FeaturedProject } from "@/components/featured-project";
import { Footer } from "@/components/footer";
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
      <Contact />
      <Footer />
    </>
  );
}
