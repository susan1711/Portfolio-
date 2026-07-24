"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Map, Palette, Code, TestTubes, Rocket, HeartHandshake } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { processContent, type ProcessStep } from "@/content/process";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

const processIcons: Record<string, ReactNode> = {
  research: <Search aria-hidden="true" className="size-5" />,
  planning: <Map aria-hidden="true" className="size-5" />,
  design: <Palette aria-hidden="true" className="size-5" />,
  development: <Code aria-hidden="true" className="size-5" />,
  testing: <TestTubes aria-hidden="true" className="size-5" />,
  launch: <Rocket aria-hidden="true" className="size-5" />,
  support: <HeartHandshake aria-hidden="true" className="size-5" />,
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

export function DevelopmentProcess() {
  return (
    <Section
      aria-labelledby="process-heading"
      className="border-y border-border/70 bg-secondary/45"
      id="process"
      spacing="spacious"
    >
      <Container size="content">
        <MotionBlock>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {processContent.eyebrow}
          </p>
          <h2
            className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            id="process-heading"
          >
            {processContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {processContent.description}
          </p>
        </MotionBlock>

        <div className="relative mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.375rem] top-0 hidden bg-gradient-to-b from-primary/40 via-border to-transparent lg:block"
            style={{ width: "1px" }}
          />

          <div className="space-y-10 lg:space-y-12">
            {processContent.steps.map((step: ProcessStep, index: number) => {
              const isLeft = index % 2 === 0;

              return (
                <div className="group relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8" key={step.id}>
                  <div className="hidden lg:flex lg:relative lg:z-10 lg:w-14 lg:shrink-0 lg:items-start lg:justify-center lg:pt-1">
                    <motion.div
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative flex size-7 items-center justify-center rounded-full border-2 border-border bg-background transition-colors duration-200 group-hover:border-primary/50 group-hover:bg-primary/5"
                      initial={{ scale: 0, opacity: 0 }}
                      transition={{
                        ...transition,
                        delay: 0.3 + index * 0.08,
                      }}
                    >
                      <span className="size-2.5 rounded-full bg-primary transition-transform duration-200 group-hover:scale-125" />
                    </motion.div>
                  </div>

                  <div className={`flex-1 lg:w-1/2 ${isLeft ? "lg:pr-8" : "lg:pl-8 lg:translate-y-0"}`}>
                    <MotionBlock delay={0.1 + index * 0.08}>
                      <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] dark:shadow-none dark:hover:border-primary/20 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary">
                            {processIcons[step.id]}
                          </div>
                          <div>
                            <h3 className="font-heading text-lg font-semibold tracking-[-0.03em] text-foreground">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </MotionBlock>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}