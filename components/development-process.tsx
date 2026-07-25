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

function StepCard({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] dark:shadow-none dark:hover:border-primary/20 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:p-8"
      initial={shouldReduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      transition={{
        ...transition,
        delay: shouldReduceMotion ? 0 : 0.15,
      }}
      variants={
        shouldReduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, x: index % 2 === 0 ? -24 : 24 },
              visible: { opacity: 1, x: 0 },
            }
      }
      viewport={{ once: true, margin: "-60px" }}
      whileInView={shouldReduceMotion ? undefined : "visible"}
    >
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
    </motion.div>
  );
}

function TimelineNode({ index }: { index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-10 flex size-7 items-center justify-center rounded-full border-2 border-border bg-background transition-colors duration-200"
      initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
      transition={{
        ...transition,
        delay: shouldReduceMotion ? 0 : 0.05,
      }}
      variants={
        shouldReduceMotion
          ? undefined
          : {
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }
      }
      viewport={{ once: true, margin: "-40px" }}
      whileInView={shouldReduceMotion ? undefined : "visible"}
    >
      <span
        className="size-2.5 rounded-full bg-primary"
        style={{
          transform: `translateX(${index % 2 === 0 ? "1px" : "-1px"})`,
        }}
      />
    </motion.div>
  );
}

function TimelineStep({
  step,
  index,
  isLeft,
}: {
  step: ProcessStep;
  index: number;
  isLeft: boolean;
}) {
  return (
    <div className={`group relative flex items-start ${index > 0 ? "mt-20" : ""}`} key={step.id}>
      <div className="w-1/2">
        {isLeft && (
          <div className="pr-14">
            <StepCard step={step} index={index} />
          </div>
        )}
      </div>

      <div className="flex w-0 shrink-0 justify-center">
        <TimelineNode index={index} />
      </div>

      <div className="w-1/2">
        {!isLeft && (
          <div className="pl-14">
            <StepCard step={step} index={index} />
          </div>
        )}
      </div>
    </div>
  );
}

function MobileTimelineStep({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  return (
    <div className="relative flex items-start gap-6" key={step.id}>
      <TimelineNode index={index} />
      <div className="flex-1">
        <StepCard step={step} index={index} />
      </div>
    </div>
  );
}

function SCurvePath() {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-1/2 top-0 hidden h-full w-12 -translate-x-1/2 lg:block"
      preserveAspectRatio="xMidYMax slice"
      viewBox="0 0 48 800"
    >
      <path
        d="M 24 0 Q 32 40, 24 80 T 32 200 T 16 320 T 32 440 T 16 560 T 32 680 T 24 800"
        fill="none"
        stroke="currentColor"
        strokeDasharray="4 6"
        strokeLinecap="round"
        className="text-border"
        style={{ strokeWidth: 2 }}
      />
    </svg>
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
        <div className="text-center">
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
        </div>

        {/* Mobile layout */}
        <div className="relative mt-16 space-y-10 lg:hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.375rem] top-0 bg-gradient-to-b from-primary/40 via-border to-transparent"
            style={{ width: "1px" }}
          />
          {processContent.steps.map((step: ProcessStep, index: number) => (
            <MobileTimelineStep key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Desktop layout */}
        <div className="relative mt-20 hidden lg:block">
          <SCurvePath />

          {processContent.steps.map((step: ProcessStep, index: number) => (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
