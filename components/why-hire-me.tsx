"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  ArrowLeftRight,
  Code,
  Clock,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { whyHireMeContent, type WhyHireMeItem } from "@/content/why-hire-me";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

const hireMeIcons: Record<string, ReactNode> = {
  "result-driven": <Target aria-hidden="true" className="size-5" />,
  "end-to-end-expertise": <ArrowLeftRight aria-hidden="true" className="size-5" />,
  "clean-scalable-code": <Code aria-hidden="true" className="size-5" />,
  "on-time-delivery": <Clock aria-hidden="true" className="size-5" />,
  "clear-communication": <MessageCircle aria-hidden="true" className="size-5" />,
  "always-learning": <GraduationCap aria-hidden="true" className="size-5" />,
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

export function WhyHireMe() {
  return (
    <Section aria-labelledby="why-hire-me-heading" id="why-hire-me" spacing="spacious">
      <Container size="content">
        <MotionBlock>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {whyHireMeContent.eyebrow}
          </p>
          <h2
            className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            id="why-hire-me-heading"
          >
            {whyHireMeContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {whyHireMeContent.description}
          </p>
        </MotionBlock>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {whyHireMeContent.items.map((item: WhyHireMeItem, index: number) => (
            <MotionBlock
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] dark:shadow-none dark:hover:border-primary/20 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:p-8"
              delay={0.08 + index * 0.06}
              key={item.id}
            >
              <div className="relative">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary">
                  {hireMeIcons[item.id]}
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-[-0.03em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
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