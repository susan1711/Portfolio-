"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { skillsContent } from "@/content/skills";

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

export function Skills() {
  return (
    <Section aria-labelledby="skills-heading" id="skills" spacing="spacious">
      <Container size="content">
        <MotionBlock>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {skillsContent.eyebrow}
          </p>
          <h2
            className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            id="skills-heading"
          >
            {skillsContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {skillsContent.description}
          </p>
        </MotionBlock>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {skillsContent.categories.map((category, index) => (
            <MotionBlock
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] dark:shadow-none dark:hover:border-primary/30 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              delay={0.08 + index * 0.06}
              key={category.id}
            >
              <div className="relative">
                <h3 className="font-heading text-lg font-semibold tracking-[-0.03em] text-foreground">
                  {category.name}
                </h3>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge
                      className="transition-all duration-200 group-hover:border-primary/30 group-hover:bg-primary/5"
                      key={skill}
                      variant="secondary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute -right-20 -top-20 size-40 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-40 rounded-full bg-primary/5 blur-3xl" />
              </div>
            </MotionBlock>
          ))}
        </div>
      </Container>
    </Section>
  );
}
