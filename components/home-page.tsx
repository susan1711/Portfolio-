import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { DevelopmentProcess } from "@/components/development-process";
import { Experience } from "@/components/experience";
import { FeaturedProjectsCarousel } from "@/components/featured-projects-carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Preloader } from "@/components/preloader";
import { WhatIDo } from "@/components/what-i-do";
import { WhyHireMe } from "@/components/why-hire-me";
import { Skills } from "@/components/skills";
import { projects } from "@/content/projects";

export function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Preloader />
      <Navigation />
      <Hero />
      <About />
      <WhatIDo />
      <FeaturedProjectsCarousel projects={featuredProjects} />
      <DevelopmentProcess />
      <Experience />
      <Skills />
      <WhyHireMe />
      <Contact />
      <Footer />
    </>
  );
}
