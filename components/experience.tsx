"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { experienceContent } from "@/content/experience";

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

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section aria-labelledby="experience-heading" id="experience" spacing="spacious">
      <Container size="content">
        <MotionBlock>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {experienceContent.eyebrow}
          </p>
          <h2
            className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            id="experience-heading"
          >
            {experienceContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {experienceContent.description}
          </p>
        </MotionBlock>

        <div className="relative mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.375rem] top-0 hidden bg-gradient-to-b from-primary/40 via-border to-transparent lg:block"
            style={{ width: "1px" }}
          />

          <div className="space-y-10 lg:space-y-16">
            {experienceContent.items.map((item, index) => (
              <div className="group relative flex flex-col gap-6 lg:flex-row lg:gap-8" key={item.id}>
                <div className="hidden lg:flex lg:relative lg:z-10 lg:w-14 lg:shrink-0 lg:items-start lg:justify-center lg:pt-1">
                  <motion.div
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative flex size-7 items-center justify-center rounded-full border-2 border-border bg-background transition-colors duration-200 group-hover:border-primary/50 group-hover:bg-primary/5"
                    initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
                    transition={{
                      ...transition,
                      delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1,
                    }}
                  >
                    <span className="size-2.5 rounded-full bg-primary transition-transform duration-200 group-hover:scale-125" />
                  </motion.div>
                </div>

                <div className="flex-1">
                  <MotionBlock delay={0.1 + index * 0.1}>
                    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] dark:shadow-none dark:hover:border-primary/20 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                      <div className="p-6 sm:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <Briefcase aria-hidden="true" className="size-4 text-primary" />
                              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-foreground">
                                {item.workType}
                              </span>
                            </div>
                            <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground">
                              {item.role}
                            </h3>
                          </div>
                          <p className="shrink-0 whitespace-nowrap rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
                            {item.duration}
                          </p>
                        </div>

                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                          {item.description}
                        </p>

                        <div className="mt-8 grid gap-8 sm:grid-cols-2">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                              Responsibilities
                            </h4>
                            <ul className="mt-4 space-y-3">
                              {item.responsibilities.map((responsibility) => (
                                <li
                                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                                  key={responsibility}
                                >
                                  <CheckCircle2
                                    aria-hidden="true"
                                    className="mt-0.5 size-4 shrink-0 text-primary"
                                  />
                                  <span>{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                              Achievements
                            </h4>
                            <ul className="mt-4 space-y-3">
                              {item.achievements.map((achievement) => (
                                <li
                                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                                  key={achievement}
                                >
                                  <CheckCircle2
                                    aria-hidden="true"
                                    className="mt-0.5 size-4 shrink-0 text-primary"
                                  />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {item.technologies.map((technology) => (
                            <Badge key={technology} variant="secondary">
                              {technology}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MotionBlock>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
