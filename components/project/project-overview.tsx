"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import type { ProjectDetail } from "@/content/project-details";

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

type ProjectOverviewProps = {
  project: ProjectDetail;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section aria-labelledby="overview-heading" className="py-16 sm:py-20 lg:py-24">
      <Container size="content">
        <div className="mx-auto grid max-w-3xl gap-12 lg:gap-16">
          <MotionBlock>
            <Typography as="h2" className="sr-only" id="overview-heading" variant="sectionTitle">
              Overview
            </Typography>
            <Typography variant="lead">{project.overview}</Typography>
          </MotionBlock>

          <div className="grid gap-8 sm:grid-cols-2">
            <MotionBlock delay={0.06}>
              <SectionLabel>Client Goal</SectionLabel>
              <Typography className="mt-3" variant="body">
                {project.clientGoal}
              </Typography>
            </MotionBlock>

            <MotionBlock delay={0.1}>
              <SectionLabel>Responsibilities</SectionLabel>
              <ul className="mt-4 space-y-3">
                {project.responsibilities.map((item) => (
                  <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionBlock>
          </div>

          <MotionBlock delay={0.08}>
            <SectionLabel>Technologies</SectionLabel>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionBlock>

          <MotionBlock delay={0.12}>
            <SectionLabel>Features</SectionLabel>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground"
                  key={feature}
                >
                  <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </MotionBlock>

          <MotionBlock className="rounded-3xl border border-border bg-card p-6 sm:p-8" delay={0.14}>
            <SectionLabel>Challenge</SectionLabel>
            <Typography className="mt-3" variant="body">
              {project.challenge}
            </Typography>
          </MotionBlock>

          <MotionBlock className="rounded-3xl border border-border bg-card p-6 sm:p-8" delay={0.18}>
            <SectionLabel>Solution</SectionLabel>
            <Typography className="mt-3" variant="body">
              {project.solution}
            </Typography>
          </MotionBlock>

          <MotionBlock delay={0.2}>
            <SectionLabel>Key Learning</SectionLabel>
            <Typography className="mt-3" variant="body">
              {project.learning}
            </Typography>
          </MotionBlock>
        </div>
      </Container>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
      {children}
    </span>
  );
}
