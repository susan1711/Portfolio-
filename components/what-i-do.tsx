"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, ShoppingBag, Zap, GitBranch, TrendingUp, Box } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { servicesContent, type Service } from "@/content/services";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

const serviceIcons: Record<string, ReactNode> = {
  "digital-implementation": <Code2 aria-hidden="true" className="size-5" />,
  "shopify-development": <ShoppingBag aria-hidden="true" className="size-5" />,
  "performance-optimization": <Zap aria-hidden="true" className="size-5" />,
  "integrations-apis": <GitBranch aria-hidden="true" className="size-5" />,
  "growth-marketing": <TrendingUp aria-hidden="true" className="size-5" />,
  "modern-workflow": <Box aria-hidden="true" className="size-5" />,
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

export function WhatIDo() {
  return (
    <Section aria-labelledby="what-i-do-heading" id="what-i-do" spacing="spacious">
      <Container size="content">
        <MotionBlock>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {servicesContent.eyebrow}
          </p>
          <h2
            className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            id="what-i-do-heading"
          >
            {servicesContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {servicesContent.description}
          </p>
        </MotionBlock>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {servicesContent.services.map((service: Service, index: number) => (
            <MotionBlock
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] dark:shadow-none dark:hover:border-primary/20 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:p-8"
              delay={0.08 + index * 0.06}
              key={service.id}
            >
              <div className="relative">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary">
                  {serviceIcons[service.id]}
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-[-0.03em] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.description}
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