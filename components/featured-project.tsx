"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/content/projects";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

type FeaturedProjectProps = {
  project?: Project;
};

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

export function FeaturedProject({ project }: FeaturedProjectProps) {
  if (!project) {
    return null;
  }

  const stats = [
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Team", value: project.teamSize },
    { label: "Availability", value: project.publiclyAvailable ? "Public" : "Private" },
  ];

  return (
    <Section
      aria-labelledby="featured-project-heading"
      className="border-y border-border/70 bg-secondary/45"
      id="projects"
      spacing="spacious"
    >
      <Container size="content">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <MotionBlock>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Featured project
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <h2
                  className="font-heading text-5xl font-semibold leading-none tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl"
                  id="featured-project-heading"
                >
                  {project.name}
                </h2>
                <Badge className="mt-1" variant="default">{project.industry}</Badge>
              </div>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
                {project.overview}
              </p>
            </MotionBlock>

            <MotionBlock className="group mt-8 overflow-hidden rounded-3xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg" delay={0.08}>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  alt={`${project.name} project preview`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  height={900}
                  src={project.image}
                  width={1200}
                />
              </div>
            </MotionBlock>

            <MotionBlock className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.16}>
              {project.website ? (
                <Button asChild size="lg">
                  <a href={project.website} rel="noreferrer" target="_blank">
                    Visit Website
                    <ExternalLink aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
              <Button asChild size="lg" variant="secondary">
                <Link href={`/projects/${project.slug}`}>
                  Detailed Case Study
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </MotionBlock>
          </div>

          <div className="space-y-8">
            <MotionBlock className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
              {stats.map((stat) => (
                <div className="min-h-32 bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" key={stat.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</p>
                  <p className="mt-3 font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </MotionBlock>

            <MotionBlock className="rounded-3xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md sm:p-8" delay={0.08}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Client goal
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{project.clientGoal}</p>
            </MotionBlock>

            <MotionBlock className="grid gap-6 xl:grid-cols-2" delay={0.12}>
              <ProjectList title="Responsibilities" items={project.responsibilities} />
              <ProjectList title="Features" items={project.features} />
            </MotionBlock>

            <MotionBlock className="rounded-3xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md sm:p-8" delay={0.16}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Technologies
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology} variant="secondary">
                    {technology}
                  </Badge>
                ))}
              </div>
            </MotionBlock>

            <MotionBlock className="grid gap-6" delay={0.2}>
              <ProjectNarrative title="Challenge" content={project.challenge} />
              <ProjectNarrative title="Solution" content={project.solution} />
              <ProjectList title="Results" items={project.results} />
              <ProjectNarrative title="Learning" content={project.learning} />
            </MotionBlock>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {title}
      </h3>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectNarrative({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
        {content}
      </p>
    </div>
  );
}
