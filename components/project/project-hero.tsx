"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

type ProjectHeroProps = {
  project: ProjectDetail;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section aria-label={`${project.name} case study hero`} className="relative overflow-hidden border-b border-border/70 bg-secondary/30 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <div aria-hidden="true" className="glow-dot -left-40 -top-40 size-80 opacity-40 dark:opacity-30" />
      <div aria-hidden="true" className="glow-dot -bottom-40 -right-40 size-80 opacity-30 dark:opacity-20" />
      <Container size="content">
        <div className="mx-auto max-w-3xl">
          <MotionBlock>
            <Badge variant="default">{project.category}</Badge>
          </MotionBlock>

          <MotionBlock delay={0.06}>
            <Typography as="h1" className="mt-6" variant="hero">
              {project.name}
            </Typography>
          </MotionBlock>

          <MotionBlock
            className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
            delay={0.1}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                Role
              </span>
              <p className="mt-1">{project.role}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                Duration
              </span>
              <p className="mt-1">{project.duration}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                Status
              </span>
              <p className="mt-1">
                <Badge
                  variant={project.status === "Live" ? "success" : "warning"}
                >
                  {project.status}
                </Badge>
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                Availability
              </span>
              <p className="mt-1">{project.availability}</p>
            </div>
          </MotionBlock>

          <MotionBlock className="mt-8 flex flex-wrap gap-3" delay={0.14}>
            {project.website ? (
              <Button asChild size="lg">
                <a href={project.website} rel="noreferrer" target="_blank">
                  Visit Website
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            ) : null}
          </MotionBlock>
        </div>
      </Container>
    </section>
  );
}
