"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";

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

type ProjectTechStackProps = {
  project: ProjectDetail;
};

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section aria-labelledby="tech-stack-heading" className="py-16 sm:py-20 lg:py-24">
      <Container size="content">
        <div className="mx-auto max-w-3xl">
          <MotionBlock>
            <Typography as="h2" id="tech-stack-heading" variant="label">
              Tech Stack
            </Typography>
            <Typography as="h3" className="mt-3" variant="heading">
              Technologies Used
            </Typography>
          </MotionBlock>

          <MotionBlock
            className="mt-8 flex flex-wrap gap-3"
            delay={0.06}
          >
            {project.technologies.map((tech) => (
              <span
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md dark:shadow-none"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </MotionBlock>
        </div>
      </Container>
    </section>
  );
}
