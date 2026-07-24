"use client";

import type { ReactNode } from "react";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/content/projects";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

function MotionBlock({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 18 };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={initial}
      transition={{ ...transition, delay: shouldReduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

type FeaturedProjectsCarouselProps = {
  projects?: Project[];
};

export function FeaturedProjectsCarousel({ projects }: FeaturedProjectsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  if (!projects || projects.length === 0) {
    return null;
  }

  const activeProject = projects[activeIndex];
  const total = projects.length;

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <Section
      aria-labelledby="featured-projects-heading"
      className="border-y border-border/70 bg-secondary/45"
      id="projects"
      spacing="spacious"
    >
      <Container size="content">
        <MotionBlock>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Featured projects
          </p>
          <h2
            className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            id="featured-projects-heading"
          >
            Selected work
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A selection of Shopify stores and digital experiences I have built from the ground up.
          </p>
        </MotionBlock>

        <div className="mt-16 lg:mt-20">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden bg-muted lg:aspect-[16/9]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      animate={{ opacity: 1 }}
                      className="size-full"
                      exit={{ opacity: 0 }}
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      key={activeProject.slug}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        alt={`${activeProject.name} project preview`}
                        className="size-full object-cover"
                        height={900}
                        src={activeProject.image}
                        width={1600}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6 pt-16 sm:p-8 sm:pt-24">
                  <Badge variant="default">{activeProject.industry}</Badge>
                  <h3 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                    {activeProject.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {activeProject.overview}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  aria-label="Previous project"
                  className="size-10 rounded-xl"
                  onClick={goPrev}
                  size="icon"
                  variant="secondary"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </Button>
                <Button
                  aria-label="Next project"
                  className="size-10 rounded-xl"
                  onClick={goNext}
                  size="icon"
                  variant="secondary"
                >
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
              </div>

              <div aria-label="Project indicators" className="flex gap-2" role="tablist">
                {projects.map((project, index) => (
                  <button
                    aria-label={`View ${project.name}`}
                    aria-selected={index === activeIndex}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-border hover:bg-muted-foreground/30"
                    }`}
                    key={project.id}
                    onClick={() => goTo(index)}
                    role="tab"
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>

          <MotionBlock className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.16}>
            {activeProject.website ? (
              <Button asChild size="lg">
                <a href={activeProject.website} rel="noreferrer" target="_blank">
                  Visit Website
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            ) : null}
            <Button asChild size="lg" variant="secondary">
              <Link href={`/projects/${activeProject.slug}`}>
                Detailed Case Study
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </MotionBlock>
        </div>
      </Container>
    </Section>
  );
}